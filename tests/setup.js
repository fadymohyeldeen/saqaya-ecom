import { createPinia, setActivePinia } from 'pinia'
import { config, RouterLinkStub } from '@vue/test-utils'

config.global.stubs = { RouterLink: RouterLinkStub }

beforeEach(() => {
  setActivePinia(createPinia())
})
