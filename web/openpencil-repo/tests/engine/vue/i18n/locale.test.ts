import { describe, expect, test } from 'bun:test'

import { resolveBrowserLocale } from '#vue/i18n/locale'

describe('browser locale matching', () => {
  test('always resolves to English when only English is supported', () => {
    expect(resolveBrowserLocale(['en-US', 'it-IT', 'it', 'es-ES', 'es', 'en'])).toBe('en')
    expect(resolveBrowserLocale(['it-IT', 'en-US'])).toBe('en')
    expect(resolveBrowserLocale(['zh-CN', 'en-US'])).toBe('en')
    expect(resolveBrowserLocale(['ko-KR'])).toBe('en')
  })
})
