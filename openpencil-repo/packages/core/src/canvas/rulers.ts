import type { Canvas } from 'canvaskit-wasm'
import type { SceneGraph } from '@open-pencil/scene-graph'
import type { SkiaRenderer } from './renderer'

export function drawRulers(
  _r: SkiaRenderer,
  _canvas: Canvas,
  _graph: SceneGraph,
  _selectedIds: Set<string>,
  _guides?: unknown
): void {}

export function drawRulerBadge(): void {}

export function rulerStep(_r?: unknown): number {
  return 100
}

export function rulerLabel(_value?: unknown): string {
  return ''
}
