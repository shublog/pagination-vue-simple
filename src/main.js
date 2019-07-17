import Vue from 'vue'
import App from './App.vue'

import PaginationVueSimple from './lib/index'
 
Vue.use(PaginationVueSimple)
new Vue({
  el: '#app',
  render: h => h(App)
})
