import { shallowMount } from '@vue/test-utils'
import CartSummary from '@/components/cart/CartSummary.vue'
import { useCartStore } from '@/stores/cart'

describe('CartSummary', () => {
  let store
  let wrapper
  let cartTotal

  beforeEach(() => {
    store = useCartStore()

    jest.spyOn(store, 'clearCart')
    wrapper = shallowMount(CartSummary)

    cartTotal = wrapper.find('.cart-summary__value')
  })

  // ------------- DOM Rendering ------------
  it('renders the actual cart total', async () => {
    store.cartItems = [{ id: 1, price: 100, quantity: 1 }]
    await wrapper.vm.$nextTick()
    expect(cartTotal.text()).toBe('$100.00')
  })

  // ----------- Cart Empty State -----------
  it('cartIsEmpty is true when cartItems is empty', () => {
    store.cartItems = []
    expect(wrapper.vm.cartIsEmpty).toBe(true)
  })

  it('cartIsEmpty is false when cartItems has items', () => {
    store.cartItems = [{ id: 1 }]
    expect(wrapper.vm.cartIsEmpty).toBe(false)
  })

  // -------------- Mutations ---------------
  it('commits CLEAR_CART when clearCart is called', () => {
    wrapper.vm.clearCart()
    expect(store.clearCart).toHaveBeenCalled()
  })
})
