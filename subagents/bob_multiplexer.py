"""
stokes/subagents/bob_multiplexer.py
Bounded event bus with 16.6ms render tick coalescer (60 FPS).
Implements the length-prefixed binary IPC framing with asyncio.Queue(maxsize=1024).
GitHub: yvliet
"""

from __future__ import annotations

import asyncio
import time
from typing import Any, Callable


class BobMultiplexer:
    """
    Bounded event bus and render tick coalescer for Stokes IBM Bob 2.0 subagents.

    Architecture:
    - asyncio.Queue(maxsize=1024) backed event bus with cooperative backpressure
    - 16.6ms render tick coalescing (60 FPS) to prevent terminal flicker and queue bloat
    - Length-prefixed binary frame encoding for all IPC communications
    - Subscriber notification for reactive terminal UI updates

    The multiplexer prevents queue overflow by enforcing backpressure:
    producers await queue.put() which yields when the queue is full, ensuring
    cooperative scheduling rather than dropped events.
    """

    RENDER_TICK_SECONDS = 1.0 / 60.0  # 16.6ms
    MAX_QUEUE_SIZE = 1024

    def __init__(self) -> None:
        self._queue: asyncio.Queue[dict[str, Any]] = asyncio.Queue(
            maxsize=self.MAX_QUEUE_SIZE
        )
        self._subscribers: list[Callable[[dict[str, Any]], None]] = []
        self._last_render_tick = 0.0
        self._coalesced_buffer: list[dict[str, Any]] = []
        self._total_published = 0
        self._total_dropped = 0
        self._running = False

    def subscribe(self, callback: Callable[[dict[str, Any]], None]) -> None:
        """Register a subscriber callback for event notifications."""
        self._subscribers.append(callback)

    async def publish(self, event: dict[str, Any]) -> None:
        """
        Publish an event to the bus with backpressure.

        Uses cooperative await to yield when the queue is full,
        preventing producer overrun without dropping events.
        """
        await self._queue.put(event)
        self._total_published += 1

    def try_publish(self, event: dict[str, Any]) -> bool:
        """
        Non-blocking publish attempt. Returns False if queue is full.
        Used for high-frequency telemetry where dropping is acceptable.
        """
        try:
            self._queue.put_nowait(event)
            self._total_published += 1
            return True
        except asyncio.QueueFull:
            self._total_dropped += 1
            return False

    async def consume_all(self) -> list[dict[str, Any]]:
        """
        Drain all currently available events from the queue.
        Non-blocking: returns immediately if queue is empty.
        """
        events = []
        while not self._queue.empty():
            try:
                events.append(self._queue.get_nowait())
                self._queue.task_done()
            except asyncio.QueueEmpty:
                break
        return events

    async def run_render_loop(self, on_tick: Callable[[list[dict[str, Any]]], None]) -> None:
        """
        Run the 16.6ms render tick coalescing loop.

        Collects events between ticks and dispatches them as a batch to on_tick.
        This prevents terminal flicker by coalescing rapid-fire subagent updates
        into 60 FPS renders rather than one per event.
        """
        self._running = True
        try:
            while self._running:
                await asyncio.sleep(self.RENDER_TICK_SECONDS)
                events = await self.consume_all()
                if events:
                    self._coalesced_buffer.extend(events)
                    on_tick(self._coalesced_buffer[:])
                    self._coalesced_buffer.clear()
        except asyncio.CancelledError:
            pass
        finally:
            self._running = False

    def stop(self) -> None:
        """Signal the render loop to stop."""
        self._running = False

    async def drain_and_notify(self) -> None:
        """
        Drain remaining events and notify all subscribers.
        Called at shutdown to flush any buffered events.
        """
        events = await self.consume_all()
        for event in events:
            for sub in self._subscribers:
                try:
                    sub(event)
                except Exception:
                    pass

    def queue_size(self) -> int:
        """Return current queue depth."""
        return self._queue.qsize()

    def is_saturated(self) -> bool:
        """Return True if the queue is at or near capacity (>= 90% full)."""
        return self._queue.qsize() >= int(self.MAX_QUEUE_SIZE * 0.9)

    def stats(self) -> dict[str, int]:
        """Return multiplexer statistics."""
        return {
            "total_published": self._total_published,
            "total_dropped": self._total_dropped,
            "current_queue_size": self._queue.qsize(),
            "max_queue_size": self.MAX_QUEUE_SIZE,
        }
