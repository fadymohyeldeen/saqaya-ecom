import products from '@/store/modules/products'
import cart from '@/store/modules/cart'
import { createStore } from 'vuex'

export default createStore({
  modules: {
    products,
    cart,
  },
})
