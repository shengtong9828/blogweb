<template>
  <a-config-provider :locale="locale">
    <b-header :config="appViewConfig"></b-header>
    <router-view />
    <a-back-top />
  </a-config-provider>
</template>
<script>
import BHeader from "@b/header.vue";
import { appViewConfig } from "@vp/app.js";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider, BackTop } from "ant-design-vue";
export default {
  components: {
    BHeader,
    AConfigProvider: ConfigProvider,
    ABackTop: BackTop
  },
  setup() {
    return {
      appViewConfig,
      locale: zhCN
    };
  }
};
</script>
<style>
@import url("./style.css");
</style>
