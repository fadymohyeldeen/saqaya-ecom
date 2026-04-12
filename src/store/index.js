import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // splits store into smaller stores. (Pinia is modular by default, every store is a module and has its own file.)
    products,
  },
})

/*
Component dispatches action
  → Action does async work (API call)
    → Action commits a mutation
      → Mutation updates state
        → Component re-renders
*/
