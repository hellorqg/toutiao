<template>
  <div class="login">
    <el-card class="loginCard">
        <div class="login_d">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <el-form :model="loginForm" :rules="loginRules" ref="myForm">
            <el-form-item prop="mobile">
                <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item  prop="code">
                <el-input v-model="loginForm.code" style="width:70%;" placeholder="请输入验证码" ></el-input>
                <el-button plain class="anniu">验证码</el-button>
            </el-form-item>
            <el-form-item prop="check">
                <el-checkbox v-model="loginForm.check">我已阅读条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%" @click="loginSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },

      loginRules: {
        mobile: [
          { required: true, message: '请输入你的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法手机号' }],

        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数' }],

        check: [{ validator (rule, value, callback) {
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
    loginSubmit () {
      this.$refs.myForm.validate(isOk => {
        if (isOk) {
          // 校验通过 调用接口检查数据
          // console.log('通过')
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(res => {
            // console.log(res)
            window.localStorage.setItem('user-token', res
              .data.token)
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
</script>

<style lang = 'less' scoped>
.login {
  background-image: url("../../assets/img/hy.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-size: cover; */
    .loginCard{
        background-color: rgb(202, 193, 110);
        opacity: 0.9;
        width: 500px;
        height: 350px;

        .login_d{
        text-align: center;
        }
        img{
            width: 50%;
        }
        .anniu{
            float: right;
        }
    }
}
</style>
