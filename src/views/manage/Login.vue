<template>
  <main class="login">
    <a-form
      class="login-form shadow"
      layout="vertical"
      :model="formRecord"
      @submit="handleSumbit"
    >
      <a-form-item v-bind="validateInfos.username">
        <a-input v-model:value="formRecord.username" placeholder="Username">
          <template #prefix>
            <UserOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password">
        <a-input
          v-model:value="formRecord.password"
          type="password"
          placeholder="Password"
        >
          <template #prefix>
            <LockOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block html-type="submit" :disabled="disabled">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </main>
</template>

<script>
import { computed, reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import axios from "@u/http.js";
import { useErrorNotice, useSuccessNotice } from "@u/notice";
import { useRoutePathToPage } from "@u/router";
import { useLocalStorage } from "@u/local-storage";
import { useForm } from "@ant-design-vue/use";
export default {
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const formRecord = reactive({
      username: "",
      password: ""
    });
    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名"
        }
      ],
      password: [
        {
          required: true,
          min: 4,
          message: "请输入密码"
        }
      ]
    });
    const { validateInfos } = useForm(formRecord, rules);
    const disabled = computed(() => {
      const status = [
        validateInfos.username.validateStatus,
        validateInfos.password.validateStatus
      ].every(status => status === "success");
      return !status;
    });
    const [token] = useLocalStorage("token");
    const toArticle = useRoutePathToPage("/manage/articles/1");
    const handleSumbit = async () => {
      try {
        const res = await axios.post("/user/login", formRecord);
        token.value = res.data.token;
        useSuccessNotice({
          message: "登录成功",
          duration: 0.5
        });
        setTimeout(toArticle, 1000);
      } catch (e) {
        useErrorNotice({
          message: "登录失败",
          description: e.reason || "未知错误",
          duration: 2
        });
      }
    };
    return {
      formRecord,
      disabled,
      handleSumbit,
      validateInfos
    };
  }
};
</script>

<style>
.login {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
}
</style>
