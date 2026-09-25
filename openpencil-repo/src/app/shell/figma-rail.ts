import { ref } from 'vue'

export type FigmaRailTab = 'file' | 'agents' | 'assets' | 'tools' | 'variables'

const activeRailTab = ref<FigmaRailTab>('file')
const isLeftSidebarCollapsed = ref(false)

export function useFigmaRail() {
  function selectTab(tab: FigmaRailTab) {
    if (activeRailTab.value === tab && !isLeftSidebarCollapsed.value) {
      // If clicking already open tab, keep it or allow toggle
      activeRailTab.value = tab
    } else {
      activeRailTab.value = tab
      isLeftSidebarCollapsed.value = false
    }
  }

  function toggleSidebar() {
    isLeftSidebarCollapsed.value = !isLeftSidebarCollapsed.value
  }

  function openSidebar() {
    isLeftSidebarCollapsed.value = false
  }

  return {
    activeRailTab,
    isLeftSidebarCollapsed,
    selectTab,
    toggleSidebar,
    openSidebar
  }
}
