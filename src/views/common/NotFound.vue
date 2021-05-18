<template>
  <main class="not-found">
    <a-empty description="404 Not Found" />
  </main>
</template>

<script>
import { Empty } from "ant-design-vue";
export default {
  components: {
    AEmpty: Empty
  }
};
</script>

<style scoped>
.not-found {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
