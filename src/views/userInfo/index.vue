<template>
  <el-card class="card">
    <breadcrumb slot="header">
      <template slot="title">用户信息</template>
    </breadcrumb>
    <!-- 表单 -->
    <el-form label-width="100px" class="myform">
      <el-form-item label="用户名:">
        <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="简介:">
        <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="手机号:">
        <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存信息</el-button>
      </el-form-item>
    </el-form>
    <!-- 上传 -->
    <el-upload class="upload" action="">
      <img src="../../assets/img/lf.jpg" alt />
    </el-upload>
  </el-card>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'

      }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
.myform {
  margin-left: 100px;
  .input {
    width: 400px;
  }
}
.card {
    position: relative;
  .upload {
    display: flex;
    img {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      right: 350px;
      top: 75px;
    }
  }
}
</style>
