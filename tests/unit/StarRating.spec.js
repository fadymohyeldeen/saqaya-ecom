import { shallowMount } from '@vue/test-utils'
import StarRating from '@/components/shared/StarRating.vue'

describe('StarRating', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 4,
        reviews: 7,
      },
    })
  })

  // -------------- DOM Rendering ------------
  it('always renders 5 stars', () => {
    const star = wrapper.findAll('.star-rating__star')
    expect(star.length).toBe(5)
  })

  // -------------- Star Fill ---------------
  it('stars <= rating are filled orange #FFAD33', () => {
    const star = wrapper.findAll('.star-rating__star')
    for (let i = 0; i < wrapper.props('rating'); i++) {
      expect(star.at(i).find('path').attributes('fill')).toBe('#FFAD33')
    }
  })

  it('stars > rating are filled black #000000', () => {
    const star = wrapper.findAll('.star-rating__star')
    for (let i = wrapper.props('rating'); i < 5; i++) {
      expect(star.at(i).find('path').attributes('fill')).toBe('#000000')
    }
  })

  // ----------- Reviews Display ------------
  it('shows reviews count when reviews prop is passed', () => {
    const review = wrapper.find('.star-rating__reviews')
    expect(review.exists()).toBe(true)
    expect(review.text()).toBe(`(${wrapper.props('reviews')})`)
  })

  it('shows "No Reviews" when reviews prop is 0', async () => {
    await wrapper.setProps({
      reviews: 0,
    })
    const review = wrapper.find('.star-rating__reviews')
    expect(review.exists()).toBe(true)
    expect(review.text()).toBe(`No reviews`)
  })

  it('shows "No Reviews" when reviews prop is null', async () => {
    await wrapper.setProps({
      reviews: null,
    })
    const review = wrapper.find('.star-rating__reviews')
    expect(review.exists()).toBe(true)
    expect(review.text()).toBe(`No reviews`)
  })
})
