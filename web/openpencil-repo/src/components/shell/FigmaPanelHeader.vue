<script setup lang="ts">
import { templateRef } from '@vueuse/core'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from 'reka-ui'
import { ref, watch } from 'vue'

import { useI18n } from '@open-pencil/vue'

import { useEditorStore } from '@/app/editor/active-store'
import { openSettingsDialog } from '@/app/settings/dialog'
import { useFigmaRail } from '@/app/shell/figma-rail'
import { useAppMenu } from '@/app/shell/menu/app-menu'
import { useDocumentNameRename } from '@/app/shell/menu/document-name'
import {
  hasMenuSubItems,
  isMenuCheckbox,
  isMenuSeparator,
  menuChecked,
  menuDisabled,
  menuLabel,
  menuShortcut,
  menuSubItems,
  runMenuAction,
  updateMenuChecked
} from '@/app/shell/menu/entry'
import AppShortcutText from '@/components/ui/menu/AppShortcutText.vue'
import { useMenuUI } from '@/components/ui/menu/menu'

const store = useEditorStore()
const { rename, editingName, startRename, commitRename } = useDocumentNameRename(store)
const nameInput = templateRef<HTMLInputElement>('nameInput')

watch(nameInput, (input) => {
  if (input) void rename.focusInput(input)
})

const { settings } = useI18n()
const { topMenus } = useAppMenu()
const { toggleSidebar } = useFigmaRail()

const isMenuOpen = ref(false)
const menuCls = useMenuUI()
const mainMenuCls = useMenuUI({ content: 'min-w-56 shadow-xl' })
const subMenuCls = useMenuUI({ content: 'min-w-48 shadow-xl' })
</script>

<template>
  <div class="shrink-0 border-b border-border bg-panel px-3 py-2 select-none">
    <!-- Top Row: Document Name Dropdown & Sidebar Toggle -->
    <div class="flex items-center justify-between gap-1.5">
      <!-- Inline Rename Input when active -->
      <div v-if="editingName" class="min-w-0 flex-1">
        <input
          ref="nameInput"
          data-test-id="app-document-name-input"
          class="w-full rounded border border-accent bg-input px-1.5 py-0.5 text-xs font-semibold text-surface outline-none"
          :value="store.state.documentName"
          @blur="commitRename($event)"
          @keydown="rename.onKeydown"
        />
      </div>

      <!-- Figma-Style Dropdown Menu Trigger -->
      <DropdownMenuRoot v-else v-model:open="isMenuOpen">
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            data-test-id="figma-document-menu-trigger"
            class="group flex min-w-0 max-w-[200px] items-center gap-1.5 rounded px-1.5 py-1 text-xs font-semibold text-surface transition-colors hover:bg-hover active:bg-hover/80"
            @dblclick.stop="startRename"
          >
            <span class="truncate">{{ store.state.documentName || 'Untitled' }}</span>
            <icon-lucide-chevron-down
              class="size-3 shrink-0 text-muted transition-transform group-hover:text-surface data-[state=open]:rotate-180"
              :data-state="isMenuOpen ? 'open' : 'closed'"
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent
            :side-offset="6"
            align="start"
            :class="mainMenuCls.content"
            class="z-50 rounded-lg border border-border bg-[#1e1e20] p-1 text-xs shadow-2xl backdrop-blur-md"
          >
            <!-- Top Menus mapped as Figma flyout submenus -->
            <template v-for="menu in topMenus" :key="menu.label">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  :class="menuCls.item"
                  class="flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                >
                  <span class="font-medium">{{ menu.label }}</span>
                  <icon-lucide-chevron-right class="size-3 text-muted group-hover:text-white" />
                </DropdownMenuSubTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuSubContent
                    :side-offset="4"
                    :class="subMenuCls.content"
                    class="z-50 rounded-lg border border-border bg-[#1e1e20] p-1 text-xs shadow-2xl backdrop-blur-md"
                  >
                    <template v-for="(item, i) in menu.items" :key="i">
                      <DropdownMenuSeparator
                        v-if="isMenuSeparator(item)"
                        :class="menuCls.separator"
                        class="my-1 h-px bg-border/60"
                      />
                      <DropdownMenuSub v-else-if="hasMenuSubItems(item)">
                        <DropdownMenuSubTrigger
                          :class="menuCls.item"
                          :disabled="menuDisabled(item)"
                          class="flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                        >
                          <span class="flex-1">{{ menuLabel(item) }}</span>
                          <icon-lucide-chevron-right class="size-3 text-muted" />
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent
                            :side-offset="4"
                            :class="subMenuCls.content"
                            class="z-50 rounded-lg border border-border bg-[#1e1e20] p-1 text-xs shadow-2xl"
                          >
                            <template v-for="(sub, j) in menuSubItems(item)" :key="j">
                              <DropdownMenuSeparator
                                v-if="isMenuSeparator(sub)"
                                :class="menuCls.separator"
                                class="my-1 h-px bg-border/60"
                              />
                              <DropdownMenuCheckboxItem
                                v-else-if="isMenuCheckbox(sub)"
                                :model-value="menuChecked(sub)"
                                :class="menuCls.item"
                                class="flex cursor-pointer items-center rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                                @update:model-value="updateMenuChecked(sub, $event as boolean)"
                              >
                                <span class="flex-1">{{ menuLabel(sub) }}</span>
                                <DropdownMenuItemIndicator class="text-surface">
                                  <icon-lucide-check class="size-3.5" />
                                </DropdownMenuItemIndicator>
                              </DropdownMenuCheckboxItem>
                              <DropdownMenuItem
                                v-else
                                :class="menuCls.item"
                                :disabled="menuDisabled(sub)"
                                class="flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                                @select="runMenuAction(sub)"
                              >
                                <span class="flex-1">{{ menuLabel(sub) }}</span>
                                <AppShortcutText v-if="menuShortcut(sub)">{{
                                  menuShortcut(sub)
                                }}</AppShortcutText>
                              </DropdownMenuItem>
                            </template>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuCheckboxItem
                        v-else-if="isMenuCheckbox(item)"
                        :model-value="menuChecked(item)"
                        :class="menuCls.item"
                        class="flex cursor-pointer items-center rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                        @update:model-value="updateMenuChecked(item, $event as boolean)"
                      >
                        <span class="flex-1">{{ menuLabel(item) }}</span>
                        <DropdownMenuItemIndicator class="text-surface">
                          <icon-lucide-check class="size-3.5" />
                        </DropdownMenuItemIndicator>
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuItem
                        v-else
                        :class="menuCls.item"
                        :disabled="menuDisabled(item)"
                        class="flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
                        @select="runMenuAction(item)"
                      >
                        <span class="flex-1">{{ menuLabel(item) }}</span>
                        <AppShortcutText v-if="menuShortcut(item)">{{
                          menuShortcut(item)
                        }}</AppShortcutText>
                      </DropdownMenuItem>
                    </template>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </template>

            <DropdownMenuSeparator class="my-1 h-px bg-border/60" />

            <!-- Stokes Pipeline Direct Actions -->
            <DropdownMenuItem
              class="flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs text-surface/90 hover:bg-[#0c8ce9] hover:text-white"
              @select="openSettingsDialog()"
            >
              <div class="flex items-center gap-2">
                <icon-lucide-settings class="size-3.5 text-muted" />
                <span>{{ settings.title }}</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenuRoot>

      <!-- Sidebar Toggle Icon Button (Figma style) -->
      <button
        type="button"
        title="Toggle left sidebar"
        class="flex size-7 items-center justify-center rounded text-muted transition-colors hover:bg-hover hover:text-surface"
        @click="toggleSidebar"
      >
        <icon-lucide-sidebar class="size-3.5" />
      </button>
    </div>
  </div>
</template>
