import type { Canvas } from 'canvaskit-wasm'

import type { SkiaRenderer } from './renderer'

export const DEFAULT_GRID_SIZE = 20

/**
 * Renders an infinite dot grid in world space behind all scene nodes.
 *
 * Automatically adapts dot spacing via level-of-detail (LOD) subsampling
 * when zoomed out, and calculates contrast-appropriate dot colors based on
 * the canvas background page color.
 */
export function drawDotGrid(
  r: SkiaRenderer,
  canvas: Canvas,
  gridSize: number = DEFAULT_GRID_SIZE
): void {
  if (r.showGrid === false) return

  const vp = r.worldViewport
  const zoom = Math.max(r.zoom, 1e-4)

  // Level-of-detail stepping: maintain a minimum pixel distance on screen
  let step = 1
  while (gridSize * step * zoom < 14) {
    step *= 2
  }
  const effectiveSpacing = gridSize * step

  const startX = Math.floor(vp.x / effectiveSpacing) * effectiveSpacing
  const endX = Math.ceil((vp.x + vp.w) / effectiveSpacing) * effectiveSpacing
  const startY = Math.floor(vp.y / effectiveSpacing) * effectiveSpacing
  const endY = Math.ceil((vp.y + vp.h) / effectiveSpacing) * effectiveSpacing

  const countX = Math.max(0, Math.floor((endX - startX) / effectiveSpacing) + 1)
  const countY = Math.max(0, Math.floor((endY - startY) / effectiveSpacing) + 1)
  const totalDots = countX * countY

  if (totalDots <= 0 || totalDots > 60_000) return

  // Adaptive dot contrast based on page background luminance
  const lum = 0.299 * r.pageColor.r + 0.587 * r.pageColor.g + 0.114 * r.pageColor.b
  const isDark = lum < 0.5

  if (isDark) {
    r.gridPaint.setColor(r.ck.Color4f(1, 1, 1, 0.18))
  } else {
    r.gridPaint.setColor(r.ck.Color4f(0, 0, 0, 0.14))
  }

  // Consistent screen-space dot diameter
  const dotWidth = Math.max(0.75, 1.3 / zoom)
  r.gridPaint.setStrokeWidth(dotWidth)

  const points = new Float32Array(totalDots * 2)
  let idx = 0
  for (let y = startY; y <= endY; y += effectiveSpacing) {
    for (let x = startX; x <= endX; x += effectiveSpacing) {
      points[idx++] = x
      points[idx++] = y
    }
  }

  canvas.drawPoints(r.ck.PointMode.Points, points, r.gridPaint)
}
