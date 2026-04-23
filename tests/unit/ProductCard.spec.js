// What's tested:
// - skeleton renders when isLoading: true
// - product card renders when isLoading: false
// - product name matches prop
// - product thumbnail matches prop
// - discount badge visible when discountPercentage > 0
// - discount badge hidden when discountPercentage is 0
// - original price hidden when no discount
// - original price visible when discountPercentage > 0
// - priceAfterDiscount computed calculates correctly
// - priceAfterDiscount returns null when product is null
// - addToCart commits to Vuex with correct payload

import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/shared/ProductCard.vue'
import { useCartStore } from '@/stores/cart'

describe('ProductCard Loading State', () => {
  let store
  let wrapper
  beforeEach(() => {
    store = useCartStore()
    wrapper = shallowMount(ProductCard, {
      props: {
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
      props: {
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
  let store
  let wrapper
  beforeEach(() => {
    store = useCartStore()
    wrapper = shallowMount(ProductCard, {
      props: {
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
    jest.spyOn(store, 'addToCart')
    wrapper.vm.addToCart()
    expect(store.addToCart).toHaveBeenCalledWith({
      newItem: wrapper.vm.product,
      quantity: 1,
    })
  })
})
