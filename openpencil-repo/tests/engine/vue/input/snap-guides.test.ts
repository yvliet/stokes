import { describe, expect, test } from 'bun:test'

import { createEditor } from '@open-pencil/core/editor'
import { computeSnap } from '@open-pencil/scene-graph'

import { computeGridSnap, computePixelGridSnap, resolveObjectPixelSnap } from '#vue/shared/input/snap'

describe('move snap guide presentation', () => {
  test('pixel rounding adjusts a lone frame without drawing self-alignment guides', () => {
    const pixel = computePixelGridSnap({ x: 10.25, y: 20.4, width: 100, height: 80 }, 5)
    expect(pixel.delta).toEqual({ x: -0.25, y: -0.3999999999999986 })
    expect(pixel.guides).toEqual([])
    const editor = createEditor()
    editor.state.snappingPreferences = { geometry: false, objects: true, grid: false, pixelGrid: true }
    const result = resolveObjectPixelSnap(
      new Set(['frame']),
      { x: 10.25, y: 20.4, width: 100, height: 80 },
      [],
      editor
    )
    expect(result.correction).toEqual(pixel.delta)
    expect(result.guides).toEqual([])
  })

  test('grid snapping aligns to closest 20px grid point', () => {
    const grid = computeGridSnap({ x: 19, y: 42, width: 100, height: 80 }, 20)
    // 19 is closest to 20 (+1), 42 is closest to 40 (-2)
    expect(grid.delta.x).toBe(1)
    expect(grid.delta.y).toBe(-2)
    expect(grid.guides).toEqual([])
  })

  test('grid snapping respects threshold constraint', () => {
    // When left (6px from 0), right (6px from 20), and center (10px from 0/20) all exceed threshold 5, no snap
    const grid = computeGridSnap({ x: 6, y: 6, width: 8, height: 8 }, 20, 5)
    expect(grid.delta.x).toBe(0)
    expect(grid.delta.y).toBe(0)
  })

  test('resolveObjectPixelSnap applies grid snapping when grid preference is enabled', () => {
    const editor = createEditor()
    editor.state.snappingPreferences = { geometry: false, objects: false, grid: true, pixelGrid: false }
    const result = resolveObjectPixelSnap(
      new Set(['frame']),
      { x: 21, y: 39, width: 100, height: 80 },
      [],
      editor
    )
    expect(result.correction.x).toBe(-1) // snaps from 21 to 20
    expect(result.correction.y).toBe(1)  // snaps from 39 to 40
  })

  test('object alignment still emits a real guide', () => {
    const editor = createEditor()
    editor.state.snappingPreferences = { geometry: false, objects: true, grid: false, pixelGrid: true }
    const target = editor.graph.createNode('FRAME', editor.state.currentPageId, {
      x: 200,
      y: 20,
      width: 100,
      height: 80
    })
    const result = resolveObjectPixelSnap(
      new Set(['moving']),
      { x: 99, y: 20, width: 100, height: 80 },
      [target],
      editor
    )
    expect(result.correction.x).toBe(1)
    expect(result.guides.some((guide) => guide.axis === 'x' && guide.position === 200)).toBe(true)
  })

  test('multiple moving nodes are excluded from object targets', () => {
    const nodes = [
      { id: 'first', x: 0, y: 0, width: 50, height: 50, rotation: 0 },
      { id: 'second', x: 50, y: 0, width: 50, height: 50, rotation: 0 }
    ]
    expect(
      computeSnap(
        new Set(['first', 'second']),
        { x: 0.2, y: 0.2, width: 100, height: 50 },
        nodes,
        5
      ).guides
    ).toEqual([])
  })
})
