<template>
  <el-container>
    <!-- 左侧 -->
    <el-aside  style="height:100vh;background-color:#353b4e;width:231px;">
      <layouAside></layouAside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <el-header>
        <layouHeader></layouHeader>
      </el-header>
      <el-main>
        <!-- 二级路由容器 -->
         <!-- 待填充内容 -->
         <el-card>
           <breadcrumb slot="header"></breadcrumb>
         </el-card>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 全局注册过后就不需要再引入了
// import layouHeader from '../conponents/home/layou-header'
// import layouAside from '../conponents/home/layou-aside'
// @ is an alias to /src

export default {
  // components: {
  //   'layouAside': layouAside,
  //   'layouHeader': layouHeader
  // }
}
</script>
