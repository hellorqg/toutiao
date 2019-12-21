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
        <img :src="userInfo.photo? userInfo.photo : defaultImg" alt />
        <el-dropdown @command="logOut">
          <span>
            <!-- 鸩是臭弟弟 -->
            {{userInfo.name}}
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
            <el-dropdown-item command='gitSrc'>git地址</el-dropdown-item>
            <el-dropdown-item command="logOuts">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/htl.jpg')
    }
  },
  methods: {
    // 退出方法
    logOut (command) {
      if (command === 'logOuts') {
        localStorage.removeItem('user-token')
        // 返回到登录页
        this.$router.push('/login')
      } else if (command === 'gitSrc') {
        window.location.href = 'https://github.com/hellorqg/toutiao'
      }
    }
  },

  created () {
    // let tokens = localStorage.getItem('user-token')
    // console.log(tokens)

    // 调用接口 获取数据
    this.$axios({
      url: '/user/profile'
      // headers: {
      //   Authorization: `Bearer ${tokens}`
      // }
    }).then(res => {
      // console.log(res.data)
      // 接口返回数据赋值给data中的变量
      this.userInfo = res.data
    })
  }
}
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
