import { createPinia, setActivePinia } from 'pinia'
import { config, RouterLinkStub } from '@vue/test-utils'

config.global.stubs = { RouterLink: RouterLinkStub }
// replaces RouterLink with a stub to prevent errors

beforeEach(() => {
  // Create a fresh pinia instance for each test
  setActivePinia(createPinia())
})
