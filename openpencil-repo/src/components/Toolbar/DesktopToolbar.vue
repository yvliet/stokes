<script setup lang="ts">
import { ToolbarRoot } from 'reka-ui'

import type { EditorToolDef } from '@open-pencil/core/editor'
import { toolbarToolTestId } from '@open-pencil/vue'
import type { Tool } from '@open-pencil/vue'

import ToolButton from '@/components/Toolbar/ToolButton.vue'
import type { ToolbarUI, ToolIconMap, ToolLabels } from '@/components/Toolbar/types'
import Tip from '@/components/ui/overlay/Tip.vue'

const { activeTool, toolIcons, ui } =
  defineProps<{
    tools: EditorToolDef[]
    activeTool: Tool
    flyoutSelections: ReadonlyMap<Tool, Tool>
    toolIcons: ToolIconMap
    toolLabels: ToolLabels
    toolShortcuts: Record<Tool, string>
    ui?: ToolbarUI
  }>()

const emit = defineEmits<{
  setTool: [tool: Tool]
}>()

const pipelineTools: { key: Tool; label: string; shortcut: string }[] = [
  { key: 'SELECT', label: 'Select', shortcut: 'V' },
  { key: 'RECTANGLE', label: 'Rectangle', shortcut: 'R' },
  { key: 'LINE', label: 'Line', shortcut: 'L' },
  { key: 'TEXT', label: 'Text', shortcut: 'T' },
  { key: 'HAND', label: 'Hand', shortcut: 'H' }
]
</script>

<template>
  <div class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center">
    <ToolbarRoot
      data-test-id="toolbar"
      class="flex items-center gap-1 rounded-xl border border-border/80 bg-panel px-1.5 py-1 shadow-[0_8px_30px_rgb(0_0_0/0.4)] backdrop-blur-md"
    >
      <Tip
        v-for="item in pipelineTools"
        :key="item.key"
        :label="`${item.label} (${item.shortcut})`"
      >
        <ToolButton
          :data-test-id="toolbarToolTestId(item.key)"
          :icon="toolIcons[item.key]"
          :label="item.label"
          :active="activeTool === item.key"
          :ui="ui"
          @click="emit('setTool', item.key)"
        />
      </Tip>
    </ToolbarRoot>
  </div>
</template>
