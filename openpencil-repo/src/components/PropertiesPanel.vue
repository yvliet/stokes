<script setup lang="ts">
import DesignPanel from './DesignPanel.vue'
import ZoomDropdown from './editor/ZoomDropdown.vue'
</script>

<template>
  <aside
    data-test-id="properties-panel"
    class="flex min-w-0 flex-1 flex-col overflow-hidden border-l border-border bg-panel"
    style="contain: paint layout style"
  >
    <div class="flex h-10 shrink-0 items-center justify-between border-b border-border px-3">
      <span class="text-[11px] font-semibold text-surface">Properties</span>
      <ZoomDropdown />
    </div>

    <div class="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <DesignPanel />
    </div>
  </aside>
</template>
