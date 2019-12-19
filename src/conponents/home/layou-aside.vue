<template>
<div class="alides">
     <div class='titles'>
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
  <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">

    <el-menu-item index="one">首页</el-menu-item>
    <!-- 下拉 -->
    <el-submenu>
      <span slot="title" idnex="one">内容管理</span>
      <el-menu-item>发布文章</el-menu-item>
      <el-menu-item>文章列表</el-menu-item>
      <el-menu-item>评论管理</el-menu-item>
      <el-menu-item>素材管理</el-menu-item>
    </el-submenu>
    <!-- 下拉2 -->
    <el-submenu index="two">
      <span slot="title" index="two">粉丝管理</span>
      <el-menu-item>图文数据</el-menu-item>
      <el-menu-item>粉丝概况</el-menu-item>
      <el-menu-item>粉丝画像</el-menu-item>
      <el-menu-item>粉丝列表</el-menu-item>
    </el-submenu>

    <el-menu-item>账户信息</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.alides{
    height: 100vh;
    background-color: #353b4e;
    width: 251px;
}
.titles{
    background-color: #2e2f32;
    text-align: center;
    padding: 10px 0;
    img{
        height: 40px;

    }
}
</style>
