import { useLocalStorage, usePreferredDark } from '@vueuse/core'
import { computed, watch } from 'vue'

import { IS_BROWSER } from '@open-pencil/core/constants'

export type AppTheme = 'dark' | 'light' | 'auto'

const THEME_STORAGE_KEY = 'open-pencil:theme'
const DEFAULT_THEME: AppTheme = 'dark'

const theme = useLocalStorage<AppTheme>(THEME_STORAGE_KEY, DEFAULT_THEME)
const prefersDark = usePreferredDark()
export const resolvedAppTheme = computed<'dark' | 'light'>(() => {
  if (theme.value === 'auto') return prefersDark.value ? 'dark' : 'light'
  return theme.value
})

function applyTheme(value: 'dark' | 'light', setting: AppTheme): void {
  if (!IS_BROWSER || !('document' in globalThis)) return
  document.documentElement.dataset.theme = value
  document.documentElement.dataset.themeSetting = setting
  document.documentElement.style.colorScheme = value
}

export function useAppTheme() {
  watch([resolvedAppTheme, theme], ([value, setting]) => applyTheme(value, setting), {
    immediate: true
  })

  const isLight = computed(() => resolvedAppTheme.value === 'light')

  function setTheme(value: AppTheme): void {
    theme.value = value
  }

  function toggleTheme(): void {
    theme.value = isLight.value ? 'dark' : 'light'
  }

  return { theme, resolvedTheme: resolvedAppTheme, isLight, setTheme, toggleTheme }
}

applyTheme(resolvedAppTheme.value, theme.value)
