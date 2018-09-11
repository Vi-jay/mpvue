import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from './router'
import 'minireset.css'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  store,
  router,
  ...App
})
app.$mount()
