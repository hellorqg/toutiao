<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">评论管理</template>
    </breadcrumb>
    <!-- 表格 -->
    <el-table :data="list">
        <!-- 给表头加label属性 -->
         <el-table-column prop='title' label="标题" width='800'></el-table-column>
         <el-table-column prop='comment_status' label="评论状态"></el-table-column>
         <el-table-column prop='total_comment_count' label="总评论数"></el-table-column>
         <el-table-column prop='fans_comment_count' label="粉丝评论数"></el-table-column>
         <el-table-column label="操作"></el-table-column>
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

  created () {
    this.$axios({
      url: '/articles',
      params: { response_type: 'comment' }
    }).then(res => {
    //   console.log(res.data)
      this.list = res.data.results
    })
  }
}
</script>

<style>
</style>
