import { shallowMount } from '@vue/test-utils'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'

describe('DropdownMenu Toggle Behavior', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(DropdownMenu, {
      propsData: {
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ],
      },
    })
  })

  // ----------- Toggle Behavior ------------
  it('Opens dropdown when trigger is clicked', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('if open and trigger is clicked again dropdown closes', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('closes dropdown when an option is clicked', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    await wrapper.find('.dropdown-menu__option').trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('closes dropdown when clicked outside', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isOpen).toBe(false)
  })

  // --------------- Events -----------------
  it('emits selected option value when clicked', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    await wrapper.find('.dropdown-menu__option').trigger('click')
    expect(wrapper.emitted('select')[0][0]).toEqual({ label: 'Option 1', value: 'option1' })
  })

  // ------------ DOM Rendering -------------
  it('renders the correct number of options', async () => {
    await wrapper.find('.dropdown-menu__trigger').trigger('click')
    expect(wrapper.findAll('.dropdown-menu__option').length).toBe(wrapper.vm.options.length)
  })

  it('renders icon trigger when icon prop is passed', async () => {
    await wrapper.setProps({ icon: 'icon.svg' })
    expect(wrapper.find('.dropdown-menu__icon').exists()).toBe(true)
    expect(wrapper.find('.dropdown-menu__trigger').exists()).toBe(false)
  })
})
