import pagination from './pagination-vue'

const comment = {
  install: function(Vue){
    Vue.component(pagination.name, pagination)
  }
}

//global情况下， 自动安装
if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

export default comment
