import { shallowMount } from '@vue/test-utils'
import HeroBanner from '@/components/home/HeroBanner.vue'

describe('HeroBanner Logic', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HeroBanner, { stubs: ['router-link'] })
  })

  // ------------- Initial State -------------
  it('HeroBanner starts at slide 0', () => {
    expect(wrapper.vm.currentSlide).toBe(0) // vm = Vue model/instance. (the component instance)
  })

  // --------- changeCurrentSlide() ----------
  it('changeCurrentSlide() slides to the clicked slide', () => {
    const num = Math.floor(Math.random() * wrapper.vm.slides.length)
    wrapper.vm.changeCurrentSlide(num)
    expect(wrapper.vm.currentSlide).toBe(num)
  })

  // -------------- nextSlide() --------------
  it('nextSlide() slides to next slide', () => {
    wrapper.vm.nextSlide()
    expect(wrapper.vm.currentSlide).toBe(1)
  })

  it('nextSlide() wraps back to 0 when it reaches the end', () => {
    wrapper.vm.currentSlide = wrapper.vm.slides.length - 1
    wrapper.vm.nextSlide()
    expect(wrapper.vm.currentSlide).toBe(0)
  })

  // ----------- autoPlaySlider() ------------
  it('autoPlaySlider() changes slider every 2 secs with setInterval', () => {
    jest.useFakeTimers()
    const wrapper = shallowMount(HeroBanner, { stubs: ['router-link'] })
    // didn't call autoPlaySlider() because it's already called in mounted() inside the component.
    expect(wrapper.vm.currentSlide).toBe(0)
    jest.advanceTimersByTime(2000)
    expect(wrapper.vm.currentSlide).toBe(1)
    jest.advanceTimersByTime(2000)
    expect(wrapper.vm.currentSlide).toBe(2)
    jest.useRealTimers()
    wrapper.destroy()
  })

  it('autoPlaySlider() clears interval on unmount', () => {
    const spy = jest.spyOn(global, 'clearInterval')
    wrapper.destroy()
    expect(spy).toHaveBeenCalled()
  })
})

describe('HeroBanner DOM Rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HeroBanner, { stubs: ['router-link'] })
  })

  // ----------------- Dots ------------------
  it('renders the correct number of dots', () => {
    const dots = wrapper.findAll('.hero__dot')
    expect(dots.length).toBe(wrapper.vm.slides.length)
  })

  it('active dot is the same as current slide', () => {
    const activeDot = wrapper.findAll('.hero__dot').at(wrapper.vm.currentSlide)
    expect(activeDot.classes()).toContain('hero__dot--active')
  })

  it('active dot updates when slide changes and previous dot becomes inactive', async () => {
    wrapper.vm.changeCurrentSlide(1)
    await wrapper.vm.$nextTick() // wait for the changeCurrentSlide() to update DOM.
    const dots = wrapper.findAll('.hero__dot')
    expect(dots.at(1).classes()).toContain('hero__dot--active')
    expect(dots.at(0).classes()).not.toContain('hero__dot--active')
  })

  // ------------- Slide Content -------------
  it('brand name is the same as current slide', () => {
    const brandName = wrapper.find('.hero__brand-name')
    const currentSlide = wrapper.vm.slides[wrapper.vm.currentSlide]
    expect(brandName.text()).toBe(currentSlide.brandName)
  })

  it('title is the same as current slide', () => {
    const title = wrapper.find('.hero__title')
    const currentSlide = wrapper.vm.slides[wrapper.vm.currentSlide]
    expect(title.text()).toBe(currentSlide.title)
  })
})
