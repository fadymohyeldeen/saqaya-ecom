import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CartItem from '@/components/cart/CartItem.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartItem', () => {
  let store
  let wrapper
  let cartItem
  let itemImage
  let itemPrice
  let itemQuantity
  let removeButton

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
            REMOVE_FROM_CART: () => {},
            UPDATE_CART_ITEM_QUANTITY: () => {},
          },
        },
      },
    })
    jest.spyOn(store, 'commit')

    wrapper = shallowMount(CartItem, {
      store,
      localVue,
      propsData: {
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

  it('renders the product image', () => {
    expect(itemImage.exists()).toBe(true)
    expect(itemImage.attributes('src')).toBe('https://example.com/product1.jpg')
  })

  it('renders the correct product price', () => {
    expect(itemPrice.exists()).toBe(true)
    expect(itemPrice.text()).toBe('$10')
  })

  it('renders the correct product quantity', () => {
    expect(itemQuantity.exists()).toBe(true)
    expect(itemQuantity.text()).toBe('1')
  })

  // -------------- Mutations ---------------
  it('commits REMOVE_FROM_CART when remove button is clicked', async () => {
    await removeButton.trigger('click')
    expect(store.commit).toHaveBeenCalledWith('cart/REMOVE_FROM_CART', wrapper.vm.item.id)
  })

  it('commits UPDATE_CART_ITEM_QUANTITY with quantity + 1 when increase is clicked', async () => {
    await wrapper.find('[aria-label="Increase quantity"]').trigger('click')
    expect(store.commit).toHaveBeenCalledWith('cart/UPDATE_CART_ITEM_QUANTITY', {
      itemId: wrapper.vm.item.id,
      quantity: wrapper.vm.item.quantity + 1,
    })
  })

  it('commits UPDATE_CART_ITEM_QUANTITY with quantity - 1 when decrease is clicked', async () => {
    await wrapper.find('[aria-label="Decrease quantity"]').trigger('click')
    expect(store.commit).toHaveBeenCalledWith('cart/UPDATE_CART_ITEM_QUANTITY', {
      itemId: wrapper.vm.item.id,
      quantity: wrapper.vm.item.quantity - 1,
    })
  })
})
