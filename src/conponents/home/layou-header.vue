<template>
  <!-- 第一行 -->
  <el-row type="flex" class="header" align="middle">
    <!-- 列-左 -->
    <el-col class="leftHeader" type="flex">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 列-右 -->
    <el-col>
      <el-row class="rightHeader" type="flex" justify="end" align="middle">
        <img src="../../assets/img/htl.jpg" alt />
        <el-dropdown>
          <span>
            鸩是臭弟弟
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  // background-color: #ccc;
  .leftHeader {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    i {
      margin-right: 5px;
    }
    span {
      color: rgb(149, 158, 158);
    }
  }
  .rightHeader {
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
</style>
