<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">评论管理</template>
    </breadcrumb>
    <!-- 表格 -->
    <el-table :data="list" v-loading='loading'>
      <!-- 给表头加label属性 -->
      <el-table-column prop="title" label="标题" width="800"></el-table-column>
      <el-table-column :formatter="formatterBlean" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <!-- {{ obj.row }} -->
          <el-button size="small" type="text">修改</el-button>
          <el-button
            @click="emitsatus(obj.row)"
            size="small"
            type="text"
          >{{obj.row.comment_status? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 设置分页组件 -->
    <el-row type="flex" justify="center" style="height:80px" align="middle">
      <el-pagination
        background
        layout="prev, pager, next , jumper"
        :total="pages.total"
        :page-size="pages.pageSize"
        :current-page="pages.currentPage"
        @current-change="pageChange"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 获取的评论列表
      list: [],
      // 分页的配置信息
      pages: {
        total: 0, // 总页数
        currentPage: 1, // 当前页
        pageSize: 10 // 每页数量
      },
      // 控制加载
      loading: false
    }
  },
  methods: {
    pageChange (newPage) {
      // 拿到最新的页码 然后再获取数据
      this.pages.currentPage = newPage
      this.getAndShow()
    },

    // 调用接口 获取评论页数的数据
    getpages () {
      this.$axios({})
    },
    //   格式化数据函数
    formatterBlean (row, column, cellValue, index) {
      // row: 当前行数据  column：当前列信息  cellValue：当前单元格的值  index：下标
      //   console.log(row)
      //   debugger
      return cellValue ? '正常' : '关闭'
    },

    // 获取数据
    async getAndShow () {
      // 获取时打开加载
      this.loading = true
      let res = await this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.pages.currentPage, per_page: this.pages.pageSize }
      })
      // 获取完毕后关闭加载
      this.loading = false
      // debugger
      //   console.log(res.data)
      this.list = res.data.results
      this.pages.total = res.data.total_count // 文章总条数
      this.pages.currentPage = res.data.page // 当前页
    },

    // 修改评论状态
    async emitsatus (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      await this.$confirm(`此操作将${mess}评论 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      //   点击确定后进入
      // 调用接口 修改状态
      await this.$axios({
        url: '/comments/status',
        method: 'put',
        params: { article_id: row.id.toString() },
        //   是否允许评论 点击之后状态改变 原本false的话不允许 现在是true 允许
        data: { allow_comment: !row.comment_status }
      })
      // 修改评论过后再调用数据
      this.getAndShow()
    }
  },

  created () {
    this.getAndShow()
  }
}
</script>

<style>
</style>
