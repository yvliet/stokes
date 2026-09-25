export type FramePresetCategoryId =
  | 'phone'
  | 'tablet'
  | 'desktop'
  | 'presentation'
  | 'watch'
  | 'paper'
  | 'social-media'
  | 'figma-community'
  | 'archive'

export type FramePresetCategoryLabelKey =
  | 'framePresetCategoryPhone'
  | 'framePresetCategoryTablet'
  | 'framePresetCategoryDesktop'
  | 'framePresetCategoryPresentation'
  | 'framePresetCategoryWatch'
  | 'framePresetCategoryPaper'
  | 'framePresetCategorySocialMedia'
  | 'framePresetCategoryFigmaCommunity'
  | 'framePresetCategoryArchive'

export interface FramePreset {
  id: string
  name: string
  width: number
  height: number
}

export interface FramePresetCategory {
  id: FramePresetCategoryId
  labelKey: FramePresetCategoryLabelKey
  presets: readonly FramePreset[]
}

export const FRAME_PRESET_CATEGORIES: readonly FramePresetCategory[] = [
  {
    id: 'desktop',
    labelKey: 'framePresetCategoryDesktop',
    presets: [
      { id: 'edge-tier', name: 'Edge Proxy Tier (L7)', width: 440, height: 260 },
      { id: 'analytics-cluster', name: 'ClickHouse Analytical Cluster (200 Signals)', width: 720, height: 380 },
      { id: 'kafka-bus', name: 'Kafka Ingestion Stream Bus', width: 500, height: 220 },
      { id: 'dual-zone-guard', name: 'Dual-Zone Memory Guard Region', width: 560, height: 280 },
      { id: 'python-etl-stage', name: 'Python ETL Batch Worker Stage', width: 480, height: 240 }
    ]
  }
]

export const FRAME_PRESETS = FRAME_PRESET_CATEGORIES.flatMap((category) => category.presets)

function uniquePresetCategoriesBySize(
  categories: readonly FramePresetCategory[]
): readonly FramePresetCategory[] {
  const seenSizes = new Set<string>()
  return categories
    .map((category) => ({
      ...category,
      presets: category.presets.filter((preset) => {
        const size = `${preset.width}x${preset.height}`
        if (seenSizes.has(size)) return false
        seenSizes.add(size)
        return true
      })
    }))
    .filter((category) => category.presets.length > 0)
}

export const FRAME_RESIZE_PRESET_CATEGORIES = uniquePresetCategoriesBySize(FRAME_PRESET_CATEGORIES)
export const FRAME_RESIZE_PRESETS = FRAME_RESIZE_PRESET_CATEGORIES.flatMap(
  (category) => category.presets
)

function findPreset(
  presets: readonly FramePreset[],
  width: number,
  height: number,
  preferredName?: string
): FramePreset | undefined {
  const matches = presets.filter((preset) => preset.width === width && preset.height === height)
  return matches.find((preset) => preset.name === preferredName) ?? matches[0]
}

export function findFrameResizePreset(
  width: number,
  height: number,
  preferredName?: string
): FramePreset | undefined {
  return findPreset(FRAME_RESIZE_PRESETS, width, height, preferredName)
}
