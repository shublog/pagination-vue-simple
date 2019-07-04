import Vue from 'vue'
import App from './App.vue'

import paginationVueSimple from './lib/index.js'
Vue.use(paginationVueSimple)

new Vue({
  el: '#app',
  render: h => h(App)
})
