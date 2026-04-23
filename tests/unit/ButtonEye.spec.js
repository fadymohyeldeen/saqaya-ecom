// What's tested:
// - renders the eye button

import { shallowMount } from '@vue/test-utils'
import ButtonEye from '@/components/shared/ButtonEye.vue'

describe('ButtonEye', () => {
  // ------------- DOM Rendering ------------
  it('renders the eye button', () => {
    const wrapper = shallowMount(ButtonEye)
    expect(wrapper.find('.eye-btn').exists()).toBe(true)
  })
})
