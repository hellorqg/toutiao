<template>
<el-menu>
    <el-menu-item index="one">首页</el-menu-item>
    <!-- 下拉 -->
    <el-submenu>
        <span slot='title' idnex="one">内容管理</span>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>文章列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
    </el-submenu>
    <!-- 下拉2 -->
      <el-submenu index="two">
        <span slot='title' index="two">粉丝管理</span>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
    </el-submenu>

    <el-menu-item>账户信息</el-menu-item>
</el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>
