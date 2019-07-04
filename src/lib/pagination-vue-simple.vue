<template>
  <div :class="['text-left', {'text-right': pPosition === 'right', 'text-center': pPosition === 'center'}]">
    <div class="inline-block">
      <ul v-if="total > limit" :class="['pagination', {'pagination-sm': type === 'sm', 'pagination-lg': type === 'lg'}]">
        <li :class="{'hide': page === 1}"><a href="javascript:;" @click="goToPage(1)">首页</a></li>
        <li :class="{'disabled': page === 1}"><a href="javascript:;" @click="goToPage(page - 1)">上一页</a></li>
        <li v-for="(item, index) in pageArr" :key="index" :class="{'active': page === item}">
          <a href="javascript:;" @click="goToPage(item)">{{item}}</a>
        </li>
        <li :class="{'disabled': page === pageCount}"><a href="javascript:;" @click="goToPage(parseInt(page) + 1)">下一页</a></li>
        <li :class="{'hide': page === pageCount}"><a href="javascript:;" @click="goToPage(pageCount)">尾页</a></li>
      </ul>
      <span :class="['page_total', {'hide': !isShowTotalPage, 'page_total_lg': type === 'lg', 'page_total_sm': type === 'sm'}]">共{{pageCount}}页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination-vue-simple',
  props: {
    // 当前页码
    // page: {
    //   type: Number,
    //   default: 1
    // },
    // 数据总条数
    total: {
      type: Number,
      default: 1
    },
    // 每页数据条数
    limit: {
      type: Number,
      default: 10
    },
    // 最多显示页码数
    maxShow: {
      type: Number,
      default: 5
    },
    // 页码样式大小类型
    type: {
      type: String,
      default: 'normal'
    },
    // 是否显示总页码
    isShowTotalPage: {
      type: Boolean,
      default: false
    },
    // 页面放置位置
    pPosition: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      page: 1,
      // 页码总数,计算
      pageCount: 1,
      // 中间页码参数，计算
      divide: 3,
      // 当前页码数
      pageArr: []
    }
  },
  mounted () {
    this.pageCount = Math.ceil(this.total / this.limit) || 1
    this.divide = Math.floor(this.maxShow / 2)
    // console.log(this.pageCount)

    this.init()
  },
  methods: {
    // 页码切换
    goToPage (num) {
      if (num < 1) num = 1
      if (num > this.pageCount) num = this.pageCount
      this.page = num
      this.$emit('currentChangePage', this.page)
      this.init()
    },
    // 数据
    init () {
      this.pageArr = []
      var i = 1

      // 只有一页，不显示
      if (this.pageCount === 1) return

      // 总页码数小于等于最大显示页码数
      if (this.pageCount <= this.maxShow) {
        for (i = 1; i <= this.pageCount; i++) {
          // this.pageArr[ i - 1] = i   // 这样写不严格，eslint语法检测会报错
          this.pageArr.push(i)
        }
        return
      }

      // 总页码数大于最大显示页码数
      var p = this.page - this.divide
      var m = this.page + this.divide

      if (this.page === 1 || p <= 1) {
        p = 1
        for (i = 1; i <= this.maxShow; i++) {
          // this.pageArr[i - 1] = i
          this.pageArr.push(i)
        }

        // console.log(this.pageArr)
        return
      }

      if (m >= this.pageCount) m = this.pageCount

      var n
      for (i = 1; i <= this.maxShow; i++) {
        n = this.maxShow - i
        // this.pageArr[i - 1] = m - n
        this.pageArr.push(m - n)
      }

      // console.log(this.pageArr)
    }
  }
}
</script>

<style lang="css" scoped>
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .inline-block {
    display: inline-block;
  }
  .hide {
    display: none !important;
  }

  .pagination {
    display: inline-block;
    font-size: 14px;
    padding-left: 0;
    margin: 0;
    border-radius: 4px;
    float: left;
  }
  .pagination > li {
    display: inline;
  }
  .pagination > li > a {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #333333;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .pagination > li:first-child > a {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .pagination > li:last-child > a {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .pagination > li > a:hover,
  .pagination > li > a:focus {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
  .pagination > .active > a,
  .pagination > .active > a:hover,
  .pagination > .active > a:focus {
    z-index: 3;
    color: #36af6c;
    cursor: default;
    background-color: transparent;
    border-color: #dddddd;
  }
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .pagination-lg > li > a {
    padding: 10px 16px;
    font-size: 16px;
    line-height: 1.3333333;
  }
  .pagination-lg > li:first-child > a {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .pagination-lg > li:last-child > a {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .pagination-sm > li > a {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  }
  .pagination-sm > li:first-child > a {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .pagination-sm > li:last-child > a {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .page_total {
    font-size: 14px;
    padding: 7px 12px;
    float: left;
  }
  .page_total.page_total_lg {
    font-size: 16px;
    padding: 11px 12px;
  }
  .page_total.page_total_sm {
    font-size: 12px;
  }
</style>
