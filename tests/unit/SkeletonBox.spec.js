import { shallowMount } from '@vue/test-utils'
import SkeletonBox from '@/components/shared/SkeletonBox.vue'

describe('SkeletonBox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(SkeletonBox, {
      propsData: {
        height: '200px',
      },
    })
  })

  // ------------- DOM Rendering ------------
  it('renders the skeleton block element', () => {
    expect(wrapper.find('.skeleton-block').exists()).toBe(true)
  })

  // --------------- Props ------------------
  it('applies the correct height from props', () => {
    expect(wrapper.element.style.height).toBe('200px')
  })

  it('has default width of 100%', () => {
    expect(wrapper.element.style.width).toBe('100%')
  })

  it('applies the correct width when passed', async () => {
    await wrapper.setProps({
      width: '50px',
    })
    expect(wrapper.element.style.width).toBe('50px')
  })
})
