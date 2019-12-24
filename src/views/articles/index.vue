<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">文章列表</template>
    </breadcrumb>
    <!-- 表单 -->
    <el-form>
      <el-form-item label="文章状态:">
        <!-- 单选组 -->
        <el-radio-group v-model="searchFrom.status">
          <el-radio label="all">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select placeholder="请选择" v-model="searchFrom.channel_id">
            <el-option  v-for="item in channelList" :key="item.id" :label='item.name' :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker  v-model="searchFrom.dateValue" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchFrom: {
        status: 'all',
        channel_id: null,
        dateValue: []
      },
      channelList: [] // 接受频道数据
    }
  },
  methods: {
    //   获取文章频道
    getChannel () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        // console.log(res.data)
        this.channelList = res.data.channels
      })
    },

    //   获取文章
    getandShow () {
      this.$axios({
        url: '/articles'

      }).then(res => {
        // console.log(res.data)
      })
    }
  },
  created () {
    this.getandShow() // 获取文章
    this.getChannel() // 获取文章频道
  }
}
</script>

<style>
</style>
