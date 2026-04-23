// What's tested:
// - renders the trash button
// - emits click when button is clicked
// - has disabled attribute when disabled prop is true

import { shallowMount } from '@vue/test-utils'
import ButtonTrash from '@/components/cart/ButtonTrash.vue'

describe('ButtonTrash', () => {
  let wrapper
  let button

  beforeEach(() => {
    wrapper = shallowMount(ButtonTrash)
    button = wrapper.find('.btn-trash')
  })

  // ------------- DOM Rendering ------------
  it('renders the trash button', () => {
    expect(button.exists()).toBe(true)
  })

  // --------------- Events -----------------
  it('emits click when button is clicked', async () => {
    await button.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

  // --------------- Disabled ---------------
  it('has disabled attribute when disabled prop is true', async () => {
    await wrapper.setProps({ disabled: true })
    expect(button.attributes().disabled).toBeDefined()
  })
})
