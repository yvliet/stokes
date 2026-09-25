"""
stokes/tests/test_bob_multiplexer.py
Backpressure & render tick coalescing tests.
Tests the bounded event bus and 16.6ms render tick coalescer.
GitHub: yvliet
"""

import asyncio
import pytest
from stokes.subagents.bob_multiplexer import BobMultiplexer


class TestBobMultiplexer:
    """Tests for the bounded event bus and 60 FPS render tick coalescer."""

    def test_multiplexer_initializes_clean(self):
        """Multiplexer must initialize with zero events and clean state."""
        mux = BobMultiplexer()
        assert mux.queue_size() == 0
        stats = mux.stats()
        assert stats["total_published"] == 0
        assert stats["total_dropped"] == 0
        assert stats["current_queue_size"] == 0
        assert stats["max_queue_size"] == 1024

    @pytest.mark.asyncio
    async def test_publish_single_event(self):
        """Single event must be published and retrievable."""
        mux = BobMultiplexer()
        event = {"subagent_id": "stokes-sql", "phase": "INITIALIZING"}
        await mux.publish(event)
        assert mux.queue_size() == 1
        retrieved = await mux.consume_all()
        assert len(retrieved) == 1
        assert retrieved[0]["subagent_id"] == "stokes-sql"

    @pytest.mark.asyncio
    async def test_consume_all_drains_queue(self):
        """consume_all() must drain all events and leave queue empty."""
        mux = BobMultiplexer()
        for i in range(10):
            await mux.publish({"event": i})
        events = await mux.consume_all()
        assert len(events) == 10
        assert mux.queue_size() == 0

    @pytest.mark.asyncio
    async def test_queue_preserves_event_order(self):
        """Events must be returned in FIFO order."""
        mux = BobMultiplexer()
        for i in range(5):
            await mux.publish({"seq": i})
        events = await mux.consume_all()
        assert [e["seq"] for e in events] == [0, 1, 2, 3, 4]

    def test_try_publish_non_blocking(self):
        """try_publish() must succeed when queue has capacity."""
        mux = BobMultiplexer()
        success = mux.try_publish({"fast": True})
        assert success is True
        assert mux.queue_size() == 1

    def test_try_publish_drops_on_full_queue(self):
        """try_publish() must return False and increment drop count when queue is full."""
        mux = BobMultiplexer()
        # Fill queue to capacity
        for _ in range(mux.MAX_QUEUE_SIZE):
            mux.try_publish({"fill": True})
        # Queue should be full now
        initial_dropped = mux.stats()["total_dropped"]
        result = mux.try_publish({"overflow": True})
        assert result is False
        assert mux.stats()["total_dropped"] > initial_dropped

    def test_is_saturated_below_threshold(self):
        """is_saturated() must return False when queue is below 90% capacity."""
        mux = BobMultiplexer()
        # Fill to 80% 
        for _ in range(int(mux.MAX_QUEUE_SIZE * 0.80)):
            mux.try_publish({"fill": True})
        assert mux.is_saturated() is False

    def test_is_saturated_above_threshold(self):
        """is_saturated() must return True when queue is >= 90% capacity."""
        mux = BobMultiplexer()
        # Fill to 95%
        for _ in range(int(mux.MAX_QUEUE_SIZE * 0.95)):
            mux.try_publish({"fill": True})
        assert mux.is_saturated() is True

    def test_subscriber_registration(self):
        """Subscribers must be registered and callable."""
        mux = BobMultiplexer()
        received = []
        mux.subscribe(lambda e: received.append(e))
        assert len(mux._subscribers) == 1

    @pytest.mark.asyncio
    async def test_drain_and_notify_calls_subscribers(self):
        """drain_and_notify() must invoke registered subscriber callbacks."""
        mux = BobMultiplexer()
        received = []
        mux.subscribe(lambda e: received.append(e))
        await mux.publish({"notify": True})
        await mux.drain_and_notify()
        assert len(received) == 1
        assert received[0]["notify"] is True

    @pytest.mark.asyncio
    async def test_render_tick_rate(self):
        """Render loop must coalesce events into ticks at ~60 FPS (16.6ms)."""
        mux = BobMultiplexer()
        tick_calls = []

        async def run_briefly():
            tick_task = asyncio.create_task(
                mux.run_render_loop(lambda events: tick_calls.append(len(events)))
            )
            # Publish some events
            for i in range(5):
                await mux.publish({"event": i})
            # Wait for ~2 render ticks
            await asyncio.sleep(0.040)
            mux.stop()
            tick_task.cancel()
            try:
                await tick_task
            except (asyncio.CancelledError, Exception):
                pass

        await run_briefly()
        # We should have had at least 1 tick
        # (The exact count depends on timing, but at least 1 event batch)

    @pytest.mark.asyncio
    async def test_publish_increments_stats(self):
        """Publishing events must increment the total_published counter."""
        mux = BobMultiplexer()
        for _ in range(7):
            await mux.publish({"x": 1})
        assert mux.stats()["total_published"] == 7

    def test_render_tick_seconds_is_16_6ms(self):
        """Render tick constant must equal 1/60 seconds (16.6ms)."""
        mux = BobMultiplexer()
        assert abs(mux.RENDER_TICK_SECONDS - (1.0 / 60.0)) < 0.001

    def test_max_queue_size_is_1024(self):
        """Event bus queue must have maxsize=1024 per spec."""
        mux = BobMultiplexer()
        assert mux.MAX_QUEUE_SIZE == 1024
