import 'core-js/stable'
import 'regenerator-runtime/runtime'

import 'Assets/css/v1.scss'
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
