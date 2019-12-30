<template>
  <el-card class="card">
    <breadcrumb slot="header">
      <template slot="title">用户信息</template>
    </breadcrumb>
    <!-- 表单 -->
    <el-form ref="myforms" label-width="100px" class="myform" :model="formDate" :rules="rules">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="formDate.name" class="input"></el-input>
      </el-form-item>
      <el-form-item label="简介:">
        <el-input v-model="formDate.intro" class="input"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="formDate.email" class="input"></el-input>
      </el-form-item>
      <el-form-item label="手机号:">
        <el-input disabled v-model="formDate.mobile" class="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editInfo">保存信息</el-button>
      </el-form-item>
    </el-form>
    <!-- 上传 -->
    <el-upload class="upload" action>
      <img @click="editPhoto" :src="formDate.photo? formDate.photo: defaultImg" alt />
    </el-upload>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formDate: {
        name: '', // 用户名
        photo: '', // 用户头像
        email: '', // 用户邮箱
        mobile: '', // 手机号
        intro: '' // 用户简介
      },
      //   用户规则对象
      rules: {
        name: [
          { required: true, message: '用户名不能为空' },
          { min: 1, max: 10, message: '用户名在1-10个字符之间' }
        ],
        email: [
          { required: true, message: '邮箱不能为空' },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '请输入正确的邮箱格式'
          }
        ]
      },
      defaultImg: require('../../assets/img/lf.jpg')
    }
  },
  methods: {
    //   编辑用户头像
    editPhoto () {
      let data = new FormData()
      data.append('photo')
      this.$axios({
        url: '/user/photo',
        method: 'PATCH',
        data: this.data
      })
    },
    //   编辑用户信息
    editInfo () {
      // 校验用户信息
      this.$refs.myforms.validate().then(res => {
        // console.log(1)
        this.$axios({
          url: '/user/profile',
          method: 'PATCH',
          data: this.formDate
        }).then(res => {
        //   console.log(res)
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        })
      })
    },
    //   获取用户信息
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        // console.log(res)
        this.formDate = res.data
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
