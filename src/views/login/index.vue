<template>
  <!--  -->
  <div class="login-wrap">
    <div class="login-box">
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-position="right"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" :clearable="false"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="userNum">
          <el-input v-model="ruleForm.userNum" :clearable="false"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" :clearable="false"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import md5 from "js-md5";
export default {
  data() {
    return {
      ruleForm: {
        userName: "离心力",
        userNum: "17603489036",
        password: "1103285071."
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        userNum: [
          { required: true, message: "请输入账号", trigger: "change" },
          {
            min: 8,
            max: 12,
            message: "长度在 8 到 12 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 8,
            max: 12,
            message: "长度在 8 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          window.localStorage.setItem("userInfo", this.ruleForm.userName);
          this.$router.push("/index");
          this.$message({
            message: `欢迎回来,${this.ruleForm.userName}`,
            type: "success"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/bg.jpg") no-repeat;
  background-size: cover;
  .login-box {
    width: 600px;
    border: 1px solid #ccc;
    background: linear-gradient(to bottom right, #8fcfd1, #d3dbff, #1dd3bd);
    border-radius: 10px;
    padding: 25px 25px 0 25px;
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -300px;
  }
}
</style>