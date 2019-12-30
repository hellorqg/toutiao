<template>
  <!-- dialog组件 -->

  <div class="cover_big">
    <div class="small_cover" v-for="(item,index) in list" :key="index" @click="opendialog(index)">
      <img :src="item? item: defultImg" alt />
    </div>
    <el-dialog @close="closeDialog" :visible="visibleDialog">
      <selectImg @selectImgs="chuandi"></selectImg>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],

  data () {
    return {
      defultImg: require('../../assets/img/pic_bg.png'), // 默认图片
      visibleDialog: false,
      clickIndex: -1 // 当前点击的 需要上传图片的盒子 的下标
    }
  },
  methods: {
    chuandi (url) {
      // alert('接收到' + url)
      // 通过再一次子传父把url给createArticle修改list的数据
      this.$emit('selectTwo', url, this.clickIndex)
      this.closeDialog()
    },
    opendialog (index) {
      // alert(index)
      this.visibleDialog = true // 点击打开对话框
      this.clickIndex = index
    },
    closeDialog () {
      this.visibleDialog = false
    }
  }
}
</script>

<style lang='less' scoped>
.cover_big {
  margin-left: 50px;
  display: flex;
  .small_cover {
    padding: 1px;
    width: 300px;
    height: 280px;
    margin-right: 5px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
