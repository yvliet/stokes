import { describe, expect, test } from 'bun:test'

import { ref } from 'vue'

import { createEditor } from '@open-pencil/core/editor'

import { createGuideInput, selectedTopLevelGuideFrameId } from '#vue/canvas/guides/input'
import type { DragState } from '#vue/shared/input/types'

function setup() {
  const editor = createEditor()
  let drag: DragState | null = null
  const input = createGuideInput({
    canvasRef: ref({ clientWidth: 500, clientHeight: 500 } as HTMLCanvasElement),
    editor,
    canvasToLocal: (cx, cy, scopeId) => {
      const owner = editor.graph.getNode(scopeId)
      return { lx: cx - (owner?.x ?? 0), ly: cy - (owner?.y ?? 0) }
    },
    setDrag: (next) => {
      drag = next
    },
    setCursor: () => undefined
  })
  return { editor, input, getDrag: () => drag }
}

describe('guide canvas input', () => {
  test('Option-drag duplicates an existing guide and preserves the source', () => {
    const { editor, input, getDrag } = setup()
    const pageId = editor.state.currentPageId
    const sourceId = editor.addGuide(pageId, 'x', 40)
    editor.undo.clear()

    expect(input.tryStartExisting(40, 100, true)).toBe(true)
    const drag = getDrag()
    if (drag?.type !== 'guide') throw new Error('Expected guide drag')
    input.handleMove(drag, 80, 100, 80, 100)
    expect(editor.state.guides.preview?.source).toBeUndefined()
    input.finish(drag)

    const guides = editor.graph.getNode(pageId)?.guides ?? []
    expect(guides).toHaveLength(2)
    expect(guides).toContainEqual({ id: sourceId, axis: 'x', position: 40 })
    expect(guides.some((guide) => guide.id !== sourceId && guide.position === 80)).toBe(true)
  })
})
