"""
stokes/harness/chaos_engine.py
Shard failure, BGP flap, & burst simulator.
Simulates distributed system failure scenarios for Stokes verification.
GitHub: yvliet
"""

from __future__ import annotations

import random
import time
from dataclasses import dataclass, field
from typing import Any


@dataclass
class ShardFailureEvent:
    """Represents a simulated shard database failure."""
    shard_id: str
    failure_type: str   # "offline" | "partial" | "split_brain"
    affected_columns: int
    duration_ms: float
    timestamp_ns: int = field(default_factory=time.monotonic_ns)


@dataclass
class BGPFlapEvent:
    """Represents a simulated BGP route flap event."""
    prefix: str
    as_path: list[str]
    penalty_points: int         # RFC 2439 route dampening penalty
    suppressed: bool            # True if prefix would be suppressed by carrier
    flap_count: int
    timestamp_ns: int = field(default_factory=time.monotonic_ns)


@dataclass
class BurstEvent:
    """Represents a simulated feature cardinality burst."""
    initial_cardinality: int
    burst_cardinality: int
    shadow_fraction: float      # Fraction of burst that is shadow columns
    eviction_flood: bool        # Risk > 2x capacity AND shadow >= 60%
    timestamp_ns: int = field(default_factory=time.monotonic_ns)


class ChaosEngine:
    """
    Distributed system chaos simulator.

    Simulates:
    1. Shard database failure scenarios (shard_r0, shard_r1 offline/partial)
    2. BGP route flap dampening (RFC 2439 penalty accumulation)
    3. Feature cardinality burst injection (shadow column flood attacks)

    Used by stokes-verify to test system resilience and validate the
    three-tier traffic steering architecture.
    """

    # BGP Route Flap Dampening parameters (RFC 2439)
    BGP_WITHDRAW_PENALTY = 1000      # Penalty added per prefix withdrawal
    BGP_SUPPRESS_THRESHOLD = 2000   # Suppress prefix when penalty >= this
    BGP_REUSE_THRESHOLD = 750       # Un-suppress when penalty falls below this
    BGP_HALFLIFE_SECONDS = 900      # 15-minute exponential decay half-life

    # Dual-Zone capacity constants
    MAX_ACTIVE_FEATURES = 200
    EVICTION_FLOOD_MULTIPLIER = 2   # Flood threshold: > 2x capacity
    EVICTION_FLOOD_SHADOW_PCT = 60  # Shadow fraction threshold for SEC_ATTACK

    def __init__(self, seed: int = 42) -> None:
        self.rng = random.Random(seed)
        self._shard_events: list[ShardFailureEvent] = []
        self._bgp_events: list[BGPFlapEvent] = []
        self._burst_events: list[BurstEvent] = []
        self._bgp_penalty: float = 0.0

    def simulate_shard_failure(
        self,
        shard_id: str = "events_r0",
        failure_type: str = "offline",
    ) -> ShardFailureEvent:
        """
        Simulate a shard database going offline or partially unavailable.

        In the Dirichlet model, when shard_r0 or shard_r1 goes offline,
        the unscoped system.columns query silently drops its 40 columns,
        potentially causing inconsistent cardinality between edge nodes.
        """
        affected = self.rng.randint(20, 40)
        duration = self.rng.uniform(50, 5000)

        event = ShardFailureEvent(
            shard_id=shard_id,
            failure_type=failure_type,
            affected_columns=affected,
            duration_ms=duration,
        )
        self._shard_events.append(event)
        return event

    def simulate_bgp_flap(
        self,
        prefix: str = "203.0.113.0/24",
        flap_count: int = 1,
    ) -> BGPFlapEvent:
        """
        Simulate BGP prefix withdrawal and re-announcement.

        Tracks cumulative penalty to detect when upstream carrier suppression
        would be triggered (Tier-1 RFD suppression at penalty >= 2,000 points).

        RFC 2439 penalty model:
          - Each withdrawal adds BGP_WITHDRAW_PENALTY (1,000 points)
          - Penalty decays exponentially with t_half = 15 minutes
        """
        # Apply current penalty decay
        elapsed = time.monotonic()
        decay = 0.5 ** (elapsed / self.BGP_HALFLIFE_SECONDS)
        self._bgp_penalty *= decay

        # Add withdrawal penalty
        self._bgp_penalty += self.BGP_WITHDRAW_PENALTY * flap_count

        suppressed = self._bgp_penalty >= self.BGP_SUPPRESS_THRESHOLD
        prepends = self.rng.randint(1, 4)
        as_path = [f"AS{self.rng.randint(1000, 9999)}" for _ in range(prepends)]

        event = BGPFlapEvent(
            prefix=prefix,
            as_path=as_path,
            penalty_points=int(self._bgp_penalty),
            suppressed=suppressed,
            flap_count=flap_count,
        )
        self._bgp_events.append(event)
        return event

    def simulate_cardinality_burst(
        self,
        base_cardinality: int = 200,
        burst_cardinality: int = 280,
    ) -> BurstEvent:
        """
        Simulate a cardinality burst where shadow columns flood the buffer.

        Detects eviction flood condition:
          burst > 2 * MAX_ACTIVE_FEATURES AND shadow_fraction >= 60%
        """
        shadow_count = burst_cardinality - base_cardinality
        shadow_fraction = shadow_count / burst_cardinality if burst_cardinality > 0 else 0.0

        eviction_flood = (
            burst_cardinality > self.MAX_ACTIVE_FEATURES * self.EVICTION_FLOOD_MULTIPLIER
            and shadow_fraction >= (self.EVICTION_FLOOD_SHADOW_PCT / 100.0)
        )

        event = BurstEvent(
            initial_cardinality=base_cardinality,
            burst_cardinality=burst_cardinality,
            shadow_fraction=shadow_fraction,
            eviction_flood=eviction_flood,
        )
        self._burst_events.append(event)
        return event

    def run_dirichlet_scenario(self) -> dict[str, Any]:
        """
        Run the full Dirichlet incident scenario simulation.

        Models the Cloudflare November 18, 2025 outage cascade:
        1. Schema migration grants shard table access
        2. Unscoped system.columns reflects 280 features
        3. Python ETL exports 280-item payload
        4. Rust proxy attempts .try_into().unwrap() → TryFromSliceError
        5. Worker threads crash, epoll collapses
        """
        results = {}

        # Step 1: Shard permission grant (simulated by un-scoped query returning 280)
        burst = self.simulate_cardinality_burst(200, 280)
        results["burst"] = {
            "initial": burst.initial_cardinality,
            "burst": burst.burst_cardinality,
            "shadow_fraction": burst.shadow_fraction,
            "eviction_flood": burst.eviction_flood,
        }

        # Step 2: Risk ratio computation
        risk = burst.burst_cardinality / self.MAX_ACTIVE_FEATURES
        results["risk_ratio"] = risk
        results["fatal_drift"] = risk > 1.0

        # Step 3: BGP flap cascade (triggered by proxy panic restart loop)
        bgp = self.simulate_bgp_flap(flap_count=3)
        results["bgp"] = {
            "penalty": bgp.penalty_points,
            "suppressed": bgp.suppressed,
            "flap_count": bgp.flap_count,
        }

        # Step 4: Shard r0 failure
        shard = self.simulate_shard_failure("events_r0")
        results["shard_failure"] = {
            "shard_id": shard.shard_id,
            "failure_type": shard.failure_type,
            "affected_columns": shard.affected_columns,
        }

        return results

    def bgp_penalty_budget_safe(self, proposed_flaps: int = 1) -> bool:
        """
        Check if a proposed number of BGP route changes stays within
        the Tier-1 RFD carrier penalty budget (< 1,500 points).

        Returns True if the change is safe (won't trigger carrier suppression).
        """
        projected = self._bgp_penalty + (self.BGP_WITHDRAW_PENALTY * proposed_flaps)
        return projected < 1500  # Conservative safety margin below 2,000 threshold

    def reset(self) -> None:
        """Reset all simulation state."""
        self._shard_events.clear()
        self._bgp_events.clear()
        self._burst_events.clear()
        self._bgp_penalty = 0.0
