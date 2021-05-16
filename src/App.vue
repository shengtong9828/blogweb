<template>
  <b-header :config="appViewConfig"></b-header>
  <router-view />
</template>
<script>
import BHeader from "@b/header.vue";
import { appViewConfig } from "@vp/app.js";

export default {
  components: {
    BHeader
  },
  setup() {
    return {
      appViewConfig
    };
  }
};
</script>
<style>
@import url("./style.css");
</style>
