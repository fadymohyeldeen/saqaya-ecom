import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import CartItem from '@/components/cart/CartItem.vue'
import { useCartStore } from '@/stores/cart'

describe('CartItem', () => {
  let store
  let wrapper
  let cartItem
  let itemImage
  let itemPrice
  let itemQuantity
  let removeButton

  beforeEach(() => {
    store = useCartStore()

    jest.spyOn(store, 'removeFromCart')
    jest.spyOn(store, 'updateCartItemQuantity')

    wrapper = shallowMount(CartItem, {
      props: {
        item: {
          id: 1,
          price: 10,
          thumbnail: 'https://example.com/product1.jpg',
          quantity: 1,
        },
      },
    })

    cartItem = wrapper.find('.cart-item')
    itemImage = wrapper.find('.cart-item__image')
    itemPrice = wrapper.find('.cart-item__price')
    itemQuantity = wrapper.find('.cart-item__qty-value')
    removeButton = cartItem.find('.cart-item__remove')
  })

  // ------------- DOM Rendering ------------
  it('renders the cardItem', () => {
    expect(cartItem.exists()).toBe(true)
  })

  it('links to the correct product page', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props('to')).toBe(`/products/${wrapper.vm.item.id}`)
  })

  it('renders the correct product price', () => {
    expect(itemPrice.exists()).toBe(true)
    expect(itemPrice.text()).toBe('$10')
  })

  it('renders the correct product quantity', () => {
    expect(itemQuantity.exists()).toBe(true)
    expect(itemQuantity.text()).toBe('1')
  })

  // -------------- Actions -----------------
  it('commits REMOVE_FROM_CART when remove button is clicked', async () => {
    await removeButton.trigger('click')
    expect(store.removeFromCart).toHaveBeenCalledWith(wrapper.vm.item.id)
  })

  it('commits UPDATE_CART_ITEM_QUANTITY with quantity + 1 when increase is clicked', async () => {
    await wrapper.find('[aria-label="Increase quantity"]').trigger('click')
    expect(store.updateCartItemQuantity).toHaveBeenCalledWith({
      itemId: wrapper.vm.item.id,
      quantity: wrapper.vm.item.quantity + 1,
    })
  })

  it('commits UPDATE_CART_ITEM_QUANTITY with quantity - 1 when decrease is clicked', async () => {
    await wrapper.find('[aria-label="Decrease quantity"]').trigger('click')
    expect(store.updateCartItemQuantity).toHaveBeenCalledWith({
      itemId: wrapper.vm.item.id,
      quantity: wrapper.vm.item.quantity - 1,
    })
  })
})
