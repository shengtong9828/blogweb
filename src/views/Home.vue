<template>
  <div class="home">
    首页
    <test/>
    <a-button>按钮</a-button>
  </div>
</template>

<script>
import test from "@c/test.vue"
import { foo } from "@u/foo.js";
export default {
  name: 'Home',
  components: {
    test
  },
  setup() {
      console.log(foo);
    return {
    }
  }
}
</script>
