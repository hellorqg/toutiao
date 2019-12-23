<template>
  <el-card v-loading='loading'>
    <breadcrumb slot="header">
      <template slot="title">素材管理</template>
    </breadcrumb>
    <el-row type="flex" justify="end">
      <!-- 上传图片 -->
      <el-upload action="" :http-request="upImg" :show-file-list='false' >
        <el-button type="primary" size="small">上传图片</el-button>
      </el-upload>
    </el-row>
    <!-- tab栏切换 -->
    <el-tabs v-model="activeName" @tab-click='getCollet'>
      <!-- 全部图片 -->
      <el-tab-pane label="全部" name="all">
        <div class="allImg">
          <el-card v-for="item in imgs" :key="item.id" class="listImg">
            <img :src="item.url" alt style="height:100%" />
            <el-row class="icon" type="flex" justify="space-around"  align='middle'>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>

      <!-- 收藏图片 -->
      <el-tab-pane label="收藏" name="collect">
         <div class="allImg">
          <el-card v-for="item in imgs" :key="item.id" class="listImg">
            <img :src="item.url" alt style="height:100%" />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 默认选中的tab栏
      imgs: [], // 用户图片的列表
      collect: true, // 用户图片是否收藏 布尔值
      loading: false // 图片上传时加载
    }
  },
  methods: {
    // 上传图片
    upImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('image', params.file)
      this.$axios({
        method: 'post',
        url: '/user/images',
        data
      }).then(res => {
        this.loading = false
        this.getandShow()
      })
      // debugger
    },

    // 获取收藏图片
    getCollet () {
      // alert(this.activeName === 'collect')
      this.getandShow()
    },

    // 获取用户图片
    getandShow () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect' }
      }).then(res => {
        // console.log(res.data.results)
        this.imgs = res.data.results
      })
    }
  },
  created () {
    this.getandShow()
  }
}
</script>

<style lang='less' scoped>
.allImg {
  display: flex;
  flex-wrap: wrap;

  .listImg {
    height: 200px;
    width: 200px;
    margin: 20px 50px;
    position: relative;
    img {
      // height: 100%;
      width: 100%;
    }
    .icon {
      position: absolute;
      width: 100%;
      height: 30px;
      left: 0;
      bottom: 0;
      font-size: 23px;
      background-color: #f4f5f6;
    }
  }
}
</style>
