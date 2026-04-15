import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart,
  },
})

/*
Component dispatches action
  → Action does async work (API call)
    → Action commits a mutation
      → Mutation updates state
        → Component re-renders
*/
