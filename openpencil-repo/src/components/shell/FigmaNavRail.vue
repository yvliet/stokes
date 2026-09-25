<script setup lang="ts">
import { openSettingsDialog } from '@/app/settings/dialog'
import { useFigmaRail } from '@/app/shell/figma-rail'
import BrandMark from '@/components/brand/BrandMark.vue'

const { isLeftSidebarCollapsed, toggleSidebar } = useFigmaRail()
</script>

<template>
  <nav
    class="flex w-12 shrink-0 flex-col items-center justify-between border-r border-border bg-[#242424] py-2 select-none z-20 box-border"
    aria-label="Navigation Rail"
  >
    <!-- Top Brand Logo & Navigation Items -->
    <div class="flex w-full flex-col items-center gap-1.5">
      <!-- Top Brand Logo -->
      <button
        type="button"
        class="flex size-7 items-center justify-center rounded-md p-0 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
        title="Stokes Studio"
      >
        <BrandMark variant="micro" class="size-4" />
      </button>

      <div class="my-0.5 h-px w-5 bg-white/10" />

      <!-- File / Layers button (Exact Figma layout) -->
      <button
        type="button"
        class="group flex w-full flex-col items-center justify-center gap-1 p-0 py-0.5 transition-colors cursor-pointer"
        :title="isLeftSidebarCollapsed ? 'Open File Panel' : 'Close File Panel'"
        @click="toggleSidebar"
      >
        <!-- Icon selection box: only the icon receives active/hover background with identical dimensions -->
        <div
          class="flex size-7 items-center justify-center rounded-md transition-colors"
          :class="[
            !isLeftSidebarCollapsed
              ? 'bg-[#26354a] text-[#4ea1f3]'
              : 'text-neutral-400 group-hover:bg-white/5 group-hover:text-neutral-200'
          ]"
        >
          <icon-lucide-file-text class="size-4" />
        </div>
        <span
          class="w-full text-center text-[10px] font-medium leading-none tracking-tight transition-colors"
          :class="[!isLeftSidebarCollapsed ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200']"
        >
          File
        </span>
      </button>
    </div>

    <!-- Bottom Settings Trigger -->
    <div class="flex w-full flex-col items-center pt-2">
      <button
        type="button"
        class="flex size-7 items-center justify-center rounded-md p-0 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
        title="Settings"
        @click="openSettingsDialog()"
      >
        <icon-lucide-settings class="size-4" />
      </button>
    </div>
  </nav>
</template>
