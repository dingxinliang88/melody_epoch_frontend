<script setup lang="ts">
import { ref } from "vue";
import {
  getCaptcha,
  accRegister,
  emailRegister,
} from "../../service/user/index";
import { useRouter } from "vue-router";
import { USER_ROLE_TYPE } from "../../model/enums/index";
import { EmailRegisterParams, AccRegisterParams } from "../../model/user/index";
import { success } from '../../utils/common';

const regType = ref("acc");
const emailPre = ref("");
const emailSuf = ref("@qq.com");

const accRegPrams = ref({
  type: USER_ROLE_TYPE.MEMBER,
} as AccRegisterParams);

const emailRegParams = ref({
  type: USER_ROLE_TYPE.MEMBER,
} as EmailRegisterParams);

const userRoles = [
  {
    value: USER_ROLE_TYPE.MEMBER,
    label: "乐队成员",
  },
  {
    value: USER_ROLE_TYPE.FAN,
    label: "乐迷",
  },
];

/**
 * 执行登录
 */
const register = async () => {
  const email = emailPre.value + emailSuf.value;

  if (regType.value === "acc") {
    const res = await accRegister(accRegPrams.value);
    if (res) {
      success("注册成功");
    }
  } else if (regType.value === "email") {
    const res = await emailRegister({
      ...emailRegParams.value,
      email,
    });
    if (res) {
      success("注册成功");
    }
  }
  router.push({
    path: "/login",
    replace: true,
  });
};
/**
 * 获取验证码
 */
const getCaptchaFromBackend = async () => {
  const email = emailPre.value + emailSuf.value;
  await getCaptcha(email);

  disabled.value = true;
  btnText.value = "请稍候...";
  setTimeout(() => {
    doLoop(60);
  }, 500);
};

const disabled = ref(false);
const btnText = ref("获取验证码");

/**
 * 缓冲验证码
 */
const doLoop = (seconds: number) => {
  seconds = seconds ? seconds : 60;
  btnText.value = seconds + "s后获取";
  let countdown = setInterval(() => {
    if (seconds > 0) {
      btnText.value = seconds + "s后获取";
      --seconds;
    } else {
      btnText.value = "获取验证码";
      disabled.value = false;
      clearInterval(countdown);
    }
  }, 1000);
};

const router = useRouter();

const doLogin = () => {
  router.push({
    path: "/login",
    replace: true,
  });
};
const url = "/src/assets/logo.png";
</script>

<template>
  <div class="custom-container">
    <el-form class="register-form" @keyup.enter.native="register">
      <el-image style="width: 100px; height: 100px" :src="url" />
      <h1>Melody-Epoch</h1>
      <el-tabs v-model="regType" type="card" class="demo-tabs" stretch>
        <el-tab-pane label="账号注册" name="acc">
          <el-form-item>
            <el-input prefix-icon="user" v-model="accRegPrams.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="lock" v-model="accRegPrams.password" placeholder="请输入密码" type="password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="lock" v-model="accRegPrams.checkedPassword" placeholder="请再次输入密码" type="password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <strong style="margin-right: 16px">选择角色</strong>
            <el-select v-model="accRegPrams.type" class="m-2" placeholder="Select">
              <el-option v-for="item in userRoles" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="邮箱注册" name="email">
          <el-form-item>
            <el-input prefix-icon="user" v-model="emailPre" placeholder="请输入邮箱">
              <template #append>
                <el-select v-model="emailSuf" style="width: 115px">
                  <el-option label="@163.com" value="@163.com" />
                  <el-option label="@qq.com" value="@qq.com" />
                  <el-option label="@gmail.com" value="@gmail.com" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="lock" v-model="emailRegParams.password" placeholder="请输入密码" type="password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="lock" v-model="emailRegParams.checkedPassword" placeholder="请再次输入密码" type="password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="emailRegParams.code" placeholder="请输入验证码" class="input-with-select">
              <template #append>
                <el-button @click="getCaptchaFromBackend" :disabled="disabled">{{ btnText }}</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <strong style="margin-right: 16px">选择角色</strong>
            <el-select v-model="emailRegParams.type" class="m-2" placeholder="Select">
              <el-option v-for="item in userRoles" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-tab-pane>

        <!-- <el-tab-pane label="敬请期待" name="code" disabled /> -->
        <el-form-item class="button-container">
          <el-button type="primary" @click="register" size="large" style="width: 400px">立即注册</el-button>
        </el-form-item>
        <el-button @click="doLogin" text bg type="success">已经有账号了？去登录</el-button>
      </el-tabs>
    </el-form>
  </div>
</template>

<style scoped>
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.demo-tabs {
  justify-content: center;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #0a2759;
  font-size: 32px;
  font-weight: 600;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
</style>

