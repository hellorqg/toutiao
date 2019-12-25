<template>
  <div>
    <el-card>
      <breadcrumb slot="header">
        <template slot="title">文章列表</template>
      </breadcrumb>
      <!-- 表单 -->
      <el-form>
        <el-form-item label="文章状态:">
          <!-- 单选组 -->
          <!-- <el-radio-group v-model="searchFrom.status" @change="changeSearch"> -->
            <!-- 两种写法 -->
          <el-radio-group v-model="searchFrom.status">
            <el-radio label="all">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表:">
          <!-- <el-select placeholder="请选择" v-model="searchFrom.channel_id" @change="changeSearch"> -->
          <el-select placeholder="请选择" v-model="searchFrom.channel_id">
            <el-option
              v-for="item in channelList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择:">
          <el-date-picker

            v-model="searchFrom.dateValue"
             value-format="yyyy-MM-dd"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          > </el-date-picker>
          {{searchFrom.dateValue}}
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 下半部分 -->
    <el-card class="cardBig">
      <div slot="header" class="cardHeader">共找到10000条信息</div>
      <div class="boxs" v-for="item in list" :key="item.id.toString()">
        <!-- 左侧 -->
        <div class="left">
          <img :src="item.cover.images.length? item.cover.images[0]: defaultImg" alt />
          <div class="box_l_l">
            <span>{{item.title}}</span>
            <el-tag class="tag" :type="item.status | typeFilter">{{item.status | statusFilter}}</el-tag>
            <span class="date">{{item.pubdate}}</span>
          </div>
        </div>

        <!-- 右侧 -->
        <div class="right">
          <span>
            <i class="el-icon-edit"></i>修改
          </span>
          <span>
            <i class="el-icon-delete"></i>删除
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchFrom: {
        status: 'all',
        channel_id: null,
        dateValue: [] // 时间对象
      },
      channelList: [], // 接受频道数据
      list: [], // 接收所有的文章数据
      defaultImg: require('../../assets/img/lf.jpg')
    }
  },
  watch: {
    searchFrom: {
      deep: true,
      handler () {
        this.getandShow()
      }
    }
  },
  filters: {
    // value 是前面表达式的计算结果
    statusFilter (value) {
      switch (value) {
        case 0:
          return '草稿'

        case 1:
          return '待审核'

        case 2:
          return '已发表'

        case 3:
          return '审核失败'
      }
    },
    // 给标签加颜色
    typeFilter (value) {
      switch (value) {
        case 0:
          return 'warning'

        case 1:
          return 'info'

        case 2:
          return ''

        case 3:
          return 'danger'

        default:
          break
      }
    }
  },
  methods: {
    // 筛选
    changeSearch () {
      // alert(this.searchFrom.status)
      let params = {
        status: this.searchFrom.status === 'all' ? null : this.searchFrom.status, // 判断是否为全部的all 如果是则传null
        channel_id: this.searchFrom.channel_id, // 频道id
        begin_pubdate: this.searchFrom.dateValue.length ? this.searchFrom.dateValue[0] : null,
        end_pubdate: this.searchFrom.dateValue.length > 1 ? this.searchFrom.dateValue.length[1] : null // 判断时间对象是否存在
      }

      this.getandShow(params)
    },
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
    getandShow (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(res => {
        console.log(res.data.results)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getandShow() // 获取文章
    this.getChannel() // 获取文章频道
  }
}
</script>

<style  lang='less' scoped>
.cardBig {
  margin-top: 10px;
  .boxs {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      font-size: 18px;
      img {
        width: 180px;
        height: 100px;
        border-radius: 5px;
      }
      .box_l_l {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .tag {
          width: 80px;
          margin: 15px 0;
          display: flex;
          justify-content: center;
        }
      }
      .date {
        color: #999;
      }
    }
    .right {
      span {
        cursor: pointer;
        margin-right: 5px;
      }
    }
  }
}
</style>
