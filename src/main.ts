import './styles/global.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.errorHandler = function (err, _, info) {
  console.error(`[Vue Error] ${info}:`, err)
}

app.use(router)
app.use(createPinia())
app.mount('#app')
