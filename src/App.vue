<template>
  <div id="app">
    <h2>pagination-vue-simple</h2> 一个原创分页组件，用于vue项目 <br><br><br>
    <pagination-vue-simple :total="90" @current-change-page="getPage" :is-show-total-page="true" :theme-color="'green'"></pagination-vue-simple>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      page: 1
    }
  },
  methods:{
    getPage(page){
      this.page = page
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
