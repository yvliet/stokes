<script setup lang="ts">
import { computed } from 'vue'

import { brandMark } from '@/theme/brand'

import type { BrandMarkProps } from './types'

const {
  variant = 'micro',
  appearance = 'light',
  decorative = false,
  class: className
} = defineProps<BrandMarkProps>()

const sources = {
  mark: 'mark',
  micro: 'mark-micro',
  mono: 'mark-mono',
  'app-icon': 'app-icon'
} as const
const source = computed(() => {
  const suffix = variant !== 'app-icon' && appearance === 'dark' ? '-dark' : ''
  const base = import.meta.env.BASE_URL || '/'
  return `${base}brand/${sources[variant]}${suffix}.svg`
})
</script>

<template>
  <svg
    v-if="variant === 'micro' || variant === 'mono' || variant === 'mark'"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    :class="brandMark({ class: className })"
    :aria-hidden="decorative"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : 'Stokes'"
  >
    <path d="M92 108H307V216H200V806H307V914H92V108ZM930 108H715V216H822V806H715V914H930V108Z" />
  </svg>
  <img
    v-else
    :src="source"
    :class="brandMark({ class: className })"
    :alt="decorative ? '' : 'Stokes'"
    width="16"
    height="16"
  />
</template>
