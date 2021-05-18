<template>
  <main class="login">
    <a-form
      class="login-form shadow"
      layout="vertical"
      :model="formRecord"
      @submit="handleSumbit"
    >
      <a-form-item>
        <a-input v-model:value="formRecord.user" placeholder="Username">
          <template #prefix>
            <UserOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
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
import { computed, reactive, toRaw } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const formRecord = reactive({
      user: "",
      password: ""
    });
    const disabled = computed(
      () => formRecord.user === "" || formRecord.password === ""
    );
    const handleSumbit = () => console.log(toRaw(formRecord));
    return {
      formRecord,
      disabled,
      handleSumbit
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
