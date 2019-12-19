<template>
  <div class="login">
    <el-card class="loginCard">
        <div class="login_d">
            <img src="../assets/img/logo_index.png" alt="">
        </div>
        <el-form>
            <el-form-item>
                <el-input placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input style="width:70%;" placeholder="请输入验证码"></el-input>
                <el-button plain class="anniu">验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang = 'less' scoped>
.login {
  background-image: url("../assets/img/hy.jpg");
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
