<template>
  <el-container>
    <!-- 左侧 -->
    <el-aside>
      <layouAside></layouAside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <el-header>
        <layouHeader></layouHeader>
      </el-header>
      <el-main>主体</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layouHeader from '../conponents/home/layou-header'
import layouAside from '../conponents/home/layou-aside'
// @ is an alias to /src

export default {
  components: {
    'layouAside': layouAside,
    'layouHeader': layouHeader
  }
}
</script>
