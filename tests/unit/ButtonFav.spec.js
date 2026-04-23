// What's tested:
// - renders the fav button

import { shallowMount } from '@vue/test-utils'
import ButtonFav from '@/components/shared/ButtonFav.vue'

describe('ButtonFav', () => {
  // ------------- DOM Rendering ------------
  it('renders the fav button', () => {
    const wrapper = shallowMount(ButtonFav)
    expect(wrapper.find('.fav-btn').exists()).toBe(true)
  })
})
