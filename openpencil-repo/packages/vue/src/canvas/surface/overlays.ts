import type { SkiaRenderer } from '@open-pencil/core/canvas'
import type { Editor } from '@open-pencil/core/editor'

export type RulerVisibilityOptions = {
  showRulers?: boolean
}

export function createRulerVisibility(_options?: unknown) {
  return function shouldShowRulers() {
    return false
  }
}

export function createCanvasHitTests(editor: Editor, getRenderer: () => SkiaRenderer | null) {
  function hitTestSectionTitle(canvasX: number, canvasY: number) {
    return (
      getRenderer()?.hitTestSectionTitle(
        editor.graph,
        canvasX,
        canvasY,
        editor.state.rotationPreview
      ) ?? null
    )
  }

  function hitTestComponentLabel(canvasX: number, canvasY: number) {
    return (
      getRenderer()?.hitTestComponentLabel(
        editor.graph,
        canvasX,
        canvasY,
        editor.state.rotationPreview
      ) ?? null
    )
  }

  function hitTestFrameTitle(canvasX: number, canvasY: number) {
    return (
      getRenderer()?.hitTestFrameTitle(
        editor.graph,
        canvasX,
        canvasY,
        editor.state.selectedIds,
        editor.state.rotationPreview
      ) ?? null
    )
  }

  return { hitTestSectionTitle, hitTestComponentLabel, hitTestFrameTitle }
}
