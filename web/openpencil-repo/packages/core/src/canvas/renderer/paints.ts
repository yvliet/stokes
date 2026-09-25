import type { SkiaRenderer } from '#core/canvas/renderer'
import {
  COMPONENT_LABEL_FONT_SIZE,
  DEFAULT_FONT_SIZE,
  LABEL_FONT_SIZE,
  PARENT_OUTLINE_ALPHA,
  PARENT_OUTLINE_DASH,
  PEN_PATH_STROKE_WIDTH,
  SECTION_TITLE_FONT_SIZE,
  SIZE_FONT_SIZE,
  SNAP_COLOR
} from '#core/constants'

export function initializeRendererPaints(r: SkiaRenderer): void {
  const ck = r.ck

  r.fillPaint = new ck.Paint()
  r.fillPaint.setStyle(ck.PaintStyle.Fill)
  r.fillPaint.setAntiAlias(true)

  r.strokePaint = new ck.Paint()
  r.strokePaint.setStyle(ck.PaintStyle.Stroke)
  r.strokePaint.setAntiAlias(true)

  r.selectionPaint = new ck.Paint()
  r.selectionPaint.setStyle(ck.PaintStyle.Stroke)
  r.selectionPaint.setStrokeWidth(1)
  r.selectionPaint.setColor(r.selColor())
  r.selectionPaint.setAntiAlias(true)

  r.parentOutlinePaint = new ck.Paint()
  r.parentOutlinePaint.setStyle(ck.PaintStyle.Stroke)
  r.parentOutlinePaint.setStrokeWidth(1)
  r.parentOutlinePaint.setColor(r.selColor(PARENT_OUTLINE_ALPHA))
  r.parentOutlinePaint.setAntiAlias(true)
  r.parentOutlinePaint.setPathEffect(
    ck.PathEffect.MakeDash([PARENT_OUTLINE_DASH, PARENT_OUTLINE_DASH], 0)
  )

  r.snapPaint = new ck.Paint()
  r.snapPaint.setStyle(ck.PaintStyle.Stroke)
  r.snapPaint.setStrokeWidth(1)
  r.snapPaint.setColor(ck.Color4f(SNAP_COLOR.r, SNAP_COLOR.g, SNAP_COLOR.b, 1))
  r.snapPaint.setAntiAlias(true)

  r.auxFill = new ck.Paint()
  r.auxFill.setStyle(ck.PaintStyle.Fill)
  r.auxFill.setAntiAlias(true)

  r.auxStroke = new ck.Paint()
  r.auxStroke.setStyle(ck.PaintStyle.Stroke)
  r.auxStroke.setAntiAlias(true)

  r.opacityPaint = new ck.Paint()
  r.effectLayerPaint = new ck.Paint()
  r.textFont = new ck.Font(null, DEFAULT_FONT_SIZE)
  r.labelFont = new ck.Font(null, LABEL_FONT_SIZE)
  r.sizeFont = new ck.Font(null, SIZE_FONT_SIZE)
  r.sectionTitleFont = new ck.Font(null, SECTION_TITLE_FONT_SIZE)
  r.componentLabelFont = new ck.Font(null, COMPONENT_LABEL_FONT_SIZE)

  r.penPathPaint = new ck.Paint()
  r.penPathPaint.setStyle(ck.PaintStyle.Stroke)
  r.penPathPaint.setStrokeWidth(1)
  r.penPathPaint.setColor(ck.Color4f(0.698, 0.698, 0.698, 1))
  r.penPathPaint.setAntiAlias(true)

  r.penLiveStrokePaint = new ck.Paint()
  r.penLiveStrokePaint.setStyle(ck.PaintStyle.Stroke)
  r.penLiveStrokePaint.setStrokeWidth(PEN_PATH_STROKE_WIDTH)
  r.penLiveStrokePaint.setColor(ck.Color4f(0, 0, 0, 1))
  r.penLiveStrokePaint.setAntiAlias(true)

  r.penHandlePaint = new ck.Paint()
  r.penHandlePaint.setStyle(ck.PaintStyle.Stroke)
  r.penHandlePaint.setStrokeWidth(1)
  r.penHandlePaint.setColor(r.selColor(PARENT_OUTLINE_ALPHA))
  r.penHandlePaint.setAntiAlias(true)

  r.penVertexFill = new ck.Paint()
  r.penVertexFill.setStyle(ck.PaintStyle.Fill)
  r.penVertexFill.setColor(ck.WHITE)
  r.penVertexFill.setAntiAlias(true)

  r.penVertexStroke = new ck.Paint()
  r.penVertexStroke.setStyle(ck.PaintStyle.Stroke)
  r.penVertexStroke.setStrokeWidth(1)
  r.penVertexStroke.setColor(r.selColor())
  r.penVertexStroke.setAntiAlias(true)

  r.gridPaint = new ck.Paint()
  r.gridPaint.setStyle(ck.PaintStyle.Stroke)
  r.gridPaint.setStrokeCap(ck.StrokeCap.Round)
  r.gridPaint.setAntiAlias(true)
}
