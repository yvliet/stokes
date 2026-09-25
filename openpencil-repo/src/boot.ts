import { createHead } from '@unhead/vue/client'
import { createApp, nextTick } from 'vue'

import { createRetainedScopePlugin } from '@open-pencil/vue'

import './app.css'
import { preloadFonts } from '@/app/editor/fonts'
import { observeBootErrors } from '@/app/shell/support/boot'
import { reportBootFailure } from '@/app/shell/support/gate'

import App from './App.vue'
import router from './router'

/**
 * Application entry, loaded by `main.ts` only after the support gate passes.
 * Keeping it behind a dynamic import means an unsupported engine never
 * evaluates the app bundle and can still show the gate's guidance.
 */
export async function boot(): Promise<void> {
  preloadFonts()
  const head = createHead()
  const app = createApp(App)
  const bootErrors = observeBootErrors(app)
  app.use(router).use(head).use(createRetainedScopePlugin()).mount('#app')

  await router.isReady()
  await nextTick()
  const failure = bootErrors.stop()
  if (failure) {
    await reportBootFailure(failure.error)
    return
  }

  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    void navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        void registration.unregister()
      }
    })
    if ('caches' in window) {
      void caches.keys().then((keys) => {
        for (const key of keys) {
          void caches.delete(key)
        }
      })
    }
  }
}
