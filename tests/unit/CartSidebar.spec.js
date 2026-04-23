// What's tested:
// - shows "Cart is empty.." when cartItems is []
// - renders a CartItem for each item in the store
// - calls toggleCart when close button is clicked

import { shallowMount } from '@vue/test-utils'
import CartSidebar from '@/components/cart/CartSidebar.vue'
import CartItem from '@/components/cart/CartItem.vue'
import { useCartStore } from '@/stores/cart'

describe('CartSidebar', () => {
  let store
  let wrapper
  let closeSidebarButton

  beforeEach(() => {
    store = useCartStore()
    wrapper = shallowMount(CartSidebar)
    closeSidebarButton = wrapper.find('.cart-sidebar__close')
    jest.spyOn(store, 'toggleCart')
  })

  // -------------- Empty State -------------
  it('shows "Cart is empty.." when cartItems is []', () => {
    expect(wrapper.text()).toContain('Cart is empty..')
  })

  // -------------- Cart Items --------------
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
    store.cartItems = cartItems
    await wrapper.vm.$nextTick()
    expect(wrapper.findAllComponents(CartItem).length).toBe(cartItems.length)
  })

  // ------------- Close Button -------------
  it('calls toggleCart when close button is clicked', async () => {
    await closeSidebarButton.trigger('click')
    expect(store.toggleCart).toHaveBeenCalled()
  })
})
