import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.css'

Vue.config.productionTip = false
Vue.config.errorHandler = function (err, _, info) {
  console.error(`[Vue Error] ${info}:`, err)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
