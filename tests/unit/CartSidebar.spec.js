import { shallowMount, createLocalVue } from '@vue/test-utils'
import CartSidebar from '@/components/cart/CartSidebar.vue'
import Vuex from 'vuex'
import CartItem from '@/components/cart/CartItem.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartSidebar', () => {
  let store
  let wrapper
  let closeSidebarButton

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: () => ({
            cartItems: [],
            isCartOpen: false,
          }),
          mutations: {
            TOGGLE_CART: state => {
              state.isCartOpen = !state.isCartOpen
            },
          },
        },
      },
    })
    wrapper = shallowMount(CartSidebar, {
      store,
      localVue,
    })
    closeSidebarButton = wrapper.find('.cart-sidebar__close')
  })

  // -------------- Empty State --------------
  it('shows "Cart is empty.." when cartItems is []', () => {
    expect(wrapper.text()).toContain('Cart is empty..')
  })

  // --------------- Cart Items --------------
  it('renders a CartItem for each item in the store', async () => {
    const cartItems = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        quantity: 2,
      },
    ]
    store.state.cart.cartItems = cartItems
    await wrapper.vm.$nextTick()
    expect(wrapper.findAllComponents(CartItem).length).toBe(2)
  })

  // -------------- Close Button -------------
  it('commits cart/TOGGLE_CART when close button is clicked', async () => {
    store.state.cart.isCartOpen = true
    await wrapper.vm.$nextTick()
    await closeSidebarButton.trigger('click')
    expect(store.state.cart.isCartOpen).toBe(false)
  })
})
