import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // the actual data like variables or objects.
  },
  getters: {
    // reads or returns computed values from state. (without changing it)
  },
  mutations: {
    // the only functions allowed to change the state. (must be sync to use dev tools)
  },
  actions: {
    // operations that eventually calls mutations. (can be async like api calls)
  },
  modules: {
    // can split store into smaller stores.
  },
});
