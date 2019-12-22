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
          <el-button size="small" type="text"> {{obj.row.comment_status?  '关闭评论' : '打开评论'}}</el-button>
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
    }

    // emitsatus () {
    //   this.$axios({
    //     url: '/comments/status',

    //   })
    // }

  },

  created () {
    this.getAndShow()
  }
}
</script>

<style>
</style>
