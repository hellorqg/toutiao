<template>
  <div class="loginBg">
    <el-card class="logincarD">
      <!-- logo -->
      <div class="logodiv">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 引入表单 -->
      <el-form :model="forms" :rules="rulesForm" ref="myforms">
        <el-form-item prop="mobiles">
          <el-input v-model="forms.mobiles" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="codes">
          <el-input v-model="forms.codes"  placeholder="请输入验证码" style="width:70%"></el-input>
          <el-button plain class="anniu" style="float:right">验证码</el-button>
        </el-form-item>
        <el-form-item prop="checks">
          <el-checkbox v-model="forms.checks" >我同意条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="yanzhen" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forms: {
        mobiles: '',
        codes: '',
        checks: false
      },
      rulesForm: {
        mobiles: [
          { required: true, message: '请输入你的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法手机号' }],

        codes: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数' }],

        checks: [{ validator (rule, value, callback) {
          // 判断规则是否正确
          if (value) {
            callback()
          } else {
            callback(new Error('请同意条款'))
          }
        } }]
      }
    }
  },
  methods: {
    yanzhen () {
      this.$refs.myforms.validate(function (isOK) {
        if (isOK) {
          console.log('成功')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginBg {
  background-image: url("../../assets/img/bgimg.jpg");
  height: 100vh;
  /* background-size: cover */
  display: flex;
  justify-content: center;
  align-items: center;
  .logodiv {
    text-align: center;
    img {
      width: 50%;
    }
  }
  .logincarD {
    width: 500px;
    height: 400px;
  }
}
</style>
