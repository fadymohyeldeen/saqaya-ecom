import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductCard from '@/components/shared/ProductCard.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductCard Loading State', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ProductCard, {
      propsData: {
        product: {
          id: 1,
          title: 'Product 1',
          price: 10,
          discountPercentage: 10,
          rating: 4.5,
          reviews: [],
          thumbnail: 'https://example.com/product1.jpg',
        },
        isLoading: false,
      },
      stubs: ['router-link'],
    })
  })

  it('skeleton renders when isLoading: true', async () => {
    await wrapper.setProps({ isLoading: true })
    expect(wrapper.find('.product-card__skeleton').exists()).toBe(true)
  })

  it('product card renders when isLoading: false', async () => {
    await wrapper.setProps({ isLoading: false })
    expect(wrapper.find('.product-card').exists()).toBe(true)
  })
})

describe('ProductCard DOM Rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ProductCard, {
      propsData: {
        product: {
          id: 1,
          title: 'Product 1',
          price: 10,
          discountPercentage: 10,
          rating: 4.5,
          reviews: [{ rating: 5 }, { rating: 4 }, { rating: 3 }, { rating: 2 }, { rating: 1 }],
          thumbnail: 'https://example.com/product1.jpg',
        },
        isLoading: false,
      },
      stubs: ['router-link'],
    })
  })

  // ------------- Product Info -------------
  it('product name matches prop', () => {
    const productName = wrapper.find('.product-card__name')
    expect(productName.text()).toBe(wrapper.vm.product.title)
  })

  it('product thumbnail matches prop', () => {
    const productThumbnail = wrapper.find('.product-card__image').attributes('src')
    expect(productThumbnail).toBe(wrapper.vm.product.thumbnail)
  })

  it('reviews count matches product.reviews.length', () => {
    const reviewCount = wrapper.find('.product-card__reviews')
    expect(reviewCount.text()).toBe(`(${wrapper.vm.product.reviews.length})`)
  })

  // ------------ Discount Badge ------------
  it('discount badge visible when discountPercentage > 0', () => {
    const discountBadge = wrapper.find('.product-card__discount')
    expect(discountBadge.exists()).toBe(true)
  })

  it('discount badge hidden when discountPercentage is 0', async () => {
    await wrapper.setProps({ product: { ...wrapper.vm.product, discountPercentage: 0 } })
    const discountBadge = wrapper.find('.product-card__discount')
    expect(discountBadge.exists()).toBe(false)
  })

  // ------------ Original Price ------------
  it('original price hidden when no discount', async () => {
    await wrapper.setProps({ product: { ...wrapper.vm.product, discountPercentage: 0 } })
    const originalPrice = wrapper.find('.product-card__original-price')
    expect(originalPrice.exists()).toBe(false)
  })

  it('original price visible when discountPercentage > 0', () => {
    const originalPrice = wrapper.find('.product-card__original-price')
    expect(originalPrice.exists()).toBe(true)
  })
})

describe('ProductCard Logic', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ProductCard, {
      propsData: {
        product: {
          id: 1,
          title: 'Product 1',
          price: 10,
          discountPercentage: 10,
          rating: 4.5,
          reviews: [{ rating: 5 }, { rating: 4 }, { rating: 3 }, { rating: 2 }, { rating: 1 }],
          thumbnail: 'https://example.com/product1.jpg',
        },
        isLoading: false,
      },
      stubs: ['router-link'],
    })
  })

  // ---------- priceAfterDiscount ----------
  it('priceAfterDiscount computed calculates correctly', () => {
    expect(wrapper.vm.priceAfterDiscount).toBe('9.00')
  })

  it('priceAfterDiscount returns null when product is null', async () => {
    await wrapper.setProps({ product: null })
    expect(wrapper.vm.priceAfterDiscount).toBeNull()
  })

  // -------------- addToCart ---------------
  it('addToCart commits to Vuex with correct payload', () => {
    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: () => ({ cart: [] }),
          mutations: {
            ADD_TO_CART: (state, product) => {
              state.cart.push(product)
            },
          },
        },
      },
    })
    const commitSpy = jest.spyOn(store, 'commit')
    const wrapper = shallowMount(ProductCard, {
      store,
      localVue, // an isolated copy of Vue to avoid affecting other tests
      propsData: {
        product: {
          id: 1,
          title: 'Product 1',
          price: 10,
          discountPercentage: 10,
          rating: 4.5,
          reviews: [{ rating: 1 }],
          thumbnail: 'https://example.com/product1.jpg',
        },
        isLoading: false,
      },
      stubs: ['router-link'],
    })
    wrapper.vm.addToCart()
    expect(commitSpy).toHaveBeenCalledWith('cart/ADD_TO_CART', {
      newItem: wrapper.vm.product,
      quantity: 1,
    })
  })
})
