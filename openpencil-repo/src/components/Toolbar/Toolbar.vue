<script setup lang="ts">
import { computed } from 'vue'

import {
  ToolbarRoot,
  useI18n
} from '@open-pencil/vue'
import type { Tool } from '@open-pencil/vue'

import { toolIcons } from '@/app/editor/icons'
import DesktopToolbar from '@/components/Toolbar/DesktopToolbar.vue'
import { useMenuUI } from '@/components/ui/menu/menu'

const { tools: toolTexts } = useI18n()

const toolLabels = computed<Record<Tool, string>>(() => ({
  SELECT: toolTexts.value.move,
  FRAME: toolTexts.value.frame,
  SECTION: toolTexts.value.section,
  RECTANGLE: toolTexts.value.rectangle,
  ELLIPSE: toolTexts.value.ellipse,
  LINE: toolTexts.value.line,
  POLYGON: toolTexts.value.polygon,
  STAR: toolTexts.value.star,
  PEN: toolTexts.value.pen,
  TEXT: toolTexts.value.text,
  HAND: toolTexts.value.hand
}))

const toolShortcuts: Record<Tool, string> = {
  SELECT: 'V',
  FRAME: 'F',
  SECTION: 'S',
  RECTANGLE: 'R',
  ELLIPSE: 'O',
  LINE: 'L',
  POLYGON: '',
  STAR: '',
  PEN: 'P',
  TEXT: 'T',
  HAND: 'H'
}

const flyoutMenuCls = useMenuUI({ content: 'min-w-32' })
const toolbarUI = { flyoutContent: flyoutMenuCls.content }
</script>

<template>
  <ToolbarRoot v-slot="{ tools, activeTool, flyoutSelections, actions }">
    <DesktopToolbar
      :tools="tools"
      :active-tool="activeTool"
      :flyout-selections="flyoutSelections"
      :tool-icons="toolIcons"
      :tool-labels="toolLabels"
      :tool-shortcuts="toolShortcuts"
      :ui="toolbarUI"
      @set-tool="actions.setTool"
    />
  </ToolbarRoot>
</template>
