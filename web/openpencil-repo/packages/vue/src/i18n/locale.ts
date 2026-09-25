import { localeFrom } from '@nanostores/i18n'
import { atom } from 'nanostores'

export const AVAILABLE_LOCALES = ['en'] as const
export type Locale = (typeof AVAILABLE_LOCALES)[number]
export type TranslatedLocale = string

export const TRANSLATED_LOCALES = [] as const satisfies ReadonlyArray<TranslatedLocale>

export const LOCALE_DIR_NAMES = {} as const satisfies Record<string, string>

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English'
}

const LOCALE_STORAGE_KEY = 'open-pencil-locale'

export const localeSetting = atom<Locale | undefined>('en')

export function resolveBrowserLocale(_languages: readonly string[]): Locale {
  return 'en'
}

const browserLocale = atom<Locale>('en')

export const locale = localeFrom(localeSetting, browserLocale)

function getLocalStorage(): Storage | null {
  if (typeof localStorage === 'undefined') return null
  if (typeof localStorage.getItem !== 'function') return null
  if (typeof localStorage.setItem !== 'function') return null
  return localStorage
}

export function setLocale(code: Locale) {
  localeSetting.set(code)
  getLocalStorage()?.setItem(LOCALE_STORAGE_KEY, code)
}
