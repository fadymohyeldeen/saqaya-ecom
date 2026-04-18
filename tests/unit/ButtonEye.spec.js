// wrapper.trigger — simulates a DOM event on an element
// wrapper.emitted — returns all events emitted by the component

import { shallowMount } from '@vue/test-utils'
import ButtonEye from '@/components/shared/ButtonEye.vue'

describe('ButtonEye', () => {

  // -------------- DOM Rendering ------------
  it('renders the eye button', () => {
    // expect .eye-btn to exist
  })

  // ---------------- Events -----------------
  it('emits click when button is clicked', () => {
    // trigger click on .eye-btn
    // expect click to have been emitted
  })
})
