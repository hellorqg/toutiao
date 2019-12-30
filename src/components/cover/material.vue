<template>
  <el-tabs v-loading='loading'>
    <el-tab-pane label="素材库" class="tabs">
      <el-card v-for="item in listImg" :key="item.id" class="material">
        <!-- 点击图片 传递一个URL给父组件 -->
        <img @click="clickImg(item.url)" :src="item.url" alt />
      </el-card>
    </el-tab-pane>
     <!-- 点击上传 -->
    <el-tab-pane  @click="uploadImg" label="上传" class="upload">
      <i class="el-icon-plus"></i>
    </el-tab-pane>
    <!-- 分页 -->
    <el-row type="flex" justify="center" style="height:80px" align="middle">
      <el-pagination
        @current-change="pageChange"
        background
        layout="prev, pager, next"
        :total="page.total"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
      ></el-pagination>
    </el-row>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      listImg: [], // 图片列表
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 8
      }
    }
  },
  methods: {
    // 点击图片传URL的事件
    clickImg (url) {
      // alert(url)
      this.$emit('selectImgs', url)
    },
    // 分页切换事件
    pageChange (newpage) {
      this.page.currentPage = newpage
      this.getMaterial()
    },
    // 上传图片
    uploadImg () {
      let data = new FormData()
      data.append('image')
    },
    // 获取图片
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: false,
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        console.log(res.data)
        this.listImg = res.data.results
        this.page.total = res.data.total_count // 总页数
        // this.page.currentPage = res.data.page
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped >
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .material {
    width: 200px;
    height: 180px;
    margin: 20px 0;
    img {
      width: 100%;
    }
  }
}
.upload {
  display: flex;
  justify-content: center;
  .el-icon-plus {
    width: 300px;
    height: 300px;
    font-size: 200px;
    border: 1px dashed #ccc;
    text-align: center;
    line-height: 300px;
  }
}
</style>
