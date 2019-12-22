<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">评论管理</template>
    </breadcrumb>
    <!-- 表格 -->
    <el-table :data="list">
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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    //   格式化数据函数
    formatterBlean (row, column, cellValue, index) {
      // row: 当前行数据  column：当前列信息  cellValue：当前单元格的值  index：下标
    //   console.log(row)
      //   debugger
      return cellValue ? '正常' : '关闭'
    },

    getAndShow () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
      //   console.log(res.data)
        this.list = res.data.results
      })
    },

    emitsatus (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`此操作将${mess}评论 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //   点击确定后进入
        // 调用接口 修改状态
        this.$axios({
          url: '/comments/status',
          params: { article_id: row.id },
          //   是否允许评论 点击之后状态改变 原本false的话不允许 现在是true 允许
          data: { allow_comment: !row.comment_status }
        }).then(res => {
        // 修改评论过后再调用数据
          this.getAndShow()
        })
      })
    }

  },

  created () {
    this.getAndShow()
  }
}
</script>

<style>
</style>
