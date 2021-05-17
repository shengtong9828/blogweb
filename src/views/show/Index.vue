<template>
  <main class="show">
    <b-view-header :config="showIndexViewConfig">
      <template #footer>
        <u-button-group />
      </template>
    </b-view-header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import BViewHeader from "@b/view-header.vue";
import { showIndexViewConfig } from "@vp/show/index.js";
import { useButtonGroup } from "@u/button-group.jsx";
export default {
  components: {
    BViewHeader,
    UButtonGroup: useButtonGroup(showIndexViewConfig.buttonGroup)
  },
  setup() {
    return {
      showIndexViewConfig
    };
  }
};
</script>

<style>
.show {
  width: 50vw;
  margin: 50px auto;
}
</style>
