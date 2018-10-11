<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">集品购商户端管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-button type="primary" @click="submitForm('ruleForm')" :loading="GET_LOADING">登录</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="default">注册</el-button>
            </el-col>
          </el-row>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: function () {
    return {
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_LOADING", "SET_TOKEN"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.TOGGLE_LOADING(true);
          this.$POST("/tenant_login", {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(res => {
            this.TOGGLE_LOADING(false);
            this.SET_TOKEN(res.data.token);
            this.$router.push("/");
            this.$message.success("登录成功！");
          }).catch(err => {
            this.$message.error("当前网络异常！");
            this.TOGGLE_LOADING(false);
          })
        } else {
          return false;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["GET_LOADING"])
  }
};
</script>
<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/imgs/login-bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>