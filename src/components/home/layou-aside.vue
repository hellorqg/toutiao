<template>
<div class="alides">
     <div class='titles'>
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
  <el-menu router background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">

    <el-menu-item index="/home">首页</el-menu-item>
    <!-- 下拉 -->
    <el-submenu  index='one'>
      <span slot="title" >内容管理</span>
      <el-menu-item  index="/home/publish">发布文章</el-menu-item>
      <el-menu-item  index="/home/articles">文章列表</el-menu-item>
      <el-menu-item  index="/home/comment">评论管理</el-menu-item>
      <el-menu-item  index="/home/material">素材管理</el-menu-item>
    </el-submenu>
    <!-- 下拉2 -->
    <el-submenu index="two" >
      <span slot="title" >粉丝管理</span>
      <el-menu-item  index="/home/photoArticle">图文数据</el-menu-item>
      <el-menu-item  index="/hoome.fansProfile">粉丝概况</el-menu-item>
      <el-menu-item  idnex='/home/fansPhoto'>粉丝画像</el-menu-item>
      <el-menu-item  index='/home/fansList'>粉丝列表</el-menu-item>
    </el-submenu>

    <el-menu-item index="/home/userInfo">账户信息</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  // .alides{
  //     // height: 100vh;
  //     // background-color: #353b4e;
  //     // width: 251px;
  // }
.titles{
    background-color: #2e2f32;
    text-align: center;
    padding: 10px 0;
    img{
        height: 35px;

    }
}
</style>
