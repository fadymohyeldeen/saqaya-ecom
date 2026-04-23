// What's tested:
// - renders a <router-link> when `to` prop is passed
// - renders a <button> when no `to` prop is passed
// - renders the correct label text
// - emits click event when button is clicked
// - button has disabled attribute when disabled prop is true

import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ButtonApp from '@/components/shared/ButtonApp.vue'

describe('ButtonApp', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ButtonApp, {
      propsData: {
        label: 'Click me',
      },
    })
  })

  // ------------ Render Mode ---------------
  it('renders a <router-link> when `to` prop is passed', async () => {
    await wrapper.setProps({ to: '/test' })
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true)
  })

  it('renders a <button> when no `to` prop is passed', async () => {
    await wrapper.setProps({ to: null })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  // -------------- Label -------------------
  it('renders the correct label text', () => {
    expect(wrapper.text()).toBe(wrapper.props('label'))
  })

  // -------------- Button ------------------
  it('emits click event when button is clicked', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  // -------------- Disabled ----------------
  it('button has disabled attribute when disabled prop is true', async () => {
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})
