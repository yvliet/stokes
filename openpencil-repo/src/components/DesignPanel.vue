<script setup lang="ts">
import { computed, ref } from 'vue'

import { useI18n, useSelectionState } from '@open-pencil/vue'

import { nodeIcon } from '@/app/editor/icons'
import FillSection from './properties/FillSection.vue'
import PositionSection from './properties/PositionSection.vue'
import TypographySection from './properties/TypographySection.vue'
import VariablesSection from './properties/VariablesSection.vue'
import VariablesDialog from './variables/VariablesDialog.vue'
import Tip from '@/components/ui/overlay/Tip.vue'
import PanelHeader from '@/components/ui/panel/PanelHeader.vue'

const variablesOpen = ref(false)
const { selectedNode: node, selectedCount: multiCount } = useSelectionState()
const selectedIcon = computed(() => (node.value ? nodeIcon(node.value) : undefined))
const { panels } = useI18n()
</script>

<template>
  <!-- Multi-select summary -->
  <div
    v-if="multiCount > 1"
    data-test-id="design-panel-multi"
    class="scrollbar-thin flex-1 overflow-x-hidden overflow-y-auto pb-4"
  >
    <PanelHeader>
      <template #icon>
        <icon-lucide-layers-3 class="size-3.5" aria-hidden="true" />
      </template>
      <span role="heading" aria-level="2">
        {{ panels.layersCount({ count: String(multiCount) }) }}
      </span>
    </PanelHeader>
    <PositionSection />
    <FillSection />
  </div>

  <!-- Single node selected (e.g. rectangle, line, text) -->
  <div
    v-else-if="node"
    data-test-id="design-panel-single"
    class="scrollbar-thin flex-1 overflow-x-hidden overflow-y-auto pb-4"
  >
    <PanelHeader>
      <template #icon>
        <Tip :label="node.type">
          <span role="img" :aria-label="node.type" class="contents">
            <component :is="selectedIcon" class="size-3.5" />
          </span>
        </Tip>
      </template>
      <span role="heading" aria-level="2">{{ node.name }}</span>
    </PanelHeader>

    <PositionSection />
    <FillSection />
    <TypographySection v-if="node.type === 'TEXT'" />
  </div>

  <!-- Empty state: canvas properties -->
  <div
    v-else
    data-test-id="design-panel-empty"
    class="scrollbar-thin flex-1 overflow-x-hidden overflow-y-auto pb-4"
  >
    <VariablesSection @open-dialog="variablesOpen = true" />
  </div>

  <VariablesDialog v-model:open="variablesOpen" />
</template>
