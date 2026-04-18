import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CartSummary from '@/components/cart/CartSummary.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartSummary', () => {
  let store
  let wrapper
  let cartTotal

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: () => ({
            cartItems: [],
          }),
          getters: {
            cartTotal: () => 100,
          },
          mutations: {
            CLEAR_CART: () => {},
          },
        },
      },
    })

    jest.spyOn(store, 'commit')
    wrapper = shallowMount(CartSummary, {
      store,
      localVue,
    })

    cartTotal = wrapper.find('.cart-summary__value')
  })

  // ------------- DOM Rendering ------------
  it('renders the actual cart total from the getter', () => {
    expect(cartTotal.text()).toBe('$100.00')
  })

  // ----------- Cart Empty State -----------
  it('cartIsEmpty is true when cartItems is empty', () => {
    store.state.cart.cartItems = []
    expect(wrapper.vm.cartIsEmpty).toBe(true)
  })

  it('cartIsEmpty is false when cartItems has items', () => {
    store.state.cart.cartItems = [{ id: 1 }]
    expect(wrapper.vm.cartIsEmpty).toBe(false)
  })

  // -------------- Mutations ---------------
  it('commits CLEAR_CART when clearCart is called', () => {
    wrapper.vm.clearCart()
    expect(store.commit).toHaveBeenCalledWith('cart/CLEAR_CART')
  })
})
