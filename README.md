# pagination-vue-simple

> 一个简单的原生自定义vue分页插件。
<img src="./src/assets/logo.png" alt="效果图展示">
## 安装

`npm install pagination-vue-simple --save`

## 初始化  在main.js中全局引入

```javascript
import Vue from 'vue'
import PaginationVueSimple from 'pagination-vue-simple'

Vue.use(PaginationVueSimple)
```

## 最简示例
```vue
<template>
  <div id="app">
    <pagination-vue-simple 
        :total="80" 
        @current-change-page="getPage">
    </pagination-vue-simple>
  </div>
</template>
```
```javascrpt
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
```

## 完整示例
```vue
<template>
  <div id="app">
    <pagination-vue-simple 
        :type="'sm'" 
        :total="80" 
        :limit="10" 
        :max-show="5" 
        :is-show-total-page="false" 
        :p-position="'left'"
        @current-change-page="getPage">
    </pagination-vue-simple>
  </div>
</template>
```
```javascrpt
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
```

## 属性
| 参数           | 说明                               | 类型      | 可选值                    | 默认值                    |
| ------------ | -------------------------------- | ------- | ---------------------- | ---------------------- |
| total        | 数据总条数                            | Number  |                        |                        |
| limit        | 每页数据条数                            | Number  |                        | 10                     |
| maxShow      | 最多显示页码数                                | Number  |                        | 5                      |
| type         | 页码样式大小类型                            | String  |  normal/sm/lg          | normal                 |
| isShowTotalPage| 是否显示总页码                               | Boolean | true/false             | false                  |
| pPosition    | 页面放置位置                               | String  | left/center/right      | left                   |

## 事件

| 事件名称           | 说明                | 回调参数            |
| -------------- | ----------------- | --------------- |
| current-change-page | currentChangePage改变时会触发 | 当前页 page |
