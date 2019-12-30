<template>
  <div class="cover_big">
    <div class="small_cover" v-for="item in list" :key="item" @click="dialog">
      <img :src="item? item: defultImg" alt />
    </div>
    <el-dialog @close='closeDialog' :visible="visibleDialog">11</el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],

  data () {
    return {
      defultImg: require('../../assets/img/pic_bg.png'), // 默认图片
      visibleDialog: false

    }
  },
  methods: {
    dialog () {
      this.visibleDialog = true // 点击打开对话框
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
