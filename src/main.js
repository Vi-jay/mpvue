import Vue from 'vue'
import App from '@/App'
import store from '@/store'
// import router from './router'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
// App.store = store
App.mpType = 'app'

const app = new Vue({
  el: '#app',
  store,
  // router,
  ...App
})
app.$mount()
