<template>
  <b-card-list :cardRecords="cardRecords"></b-card-list>
</template>

<script>
import BCardList from "@b/card-list.vue";
import { blogViewConfig } from "@vp/show/blog.js";
export default {
  components: {
    BCardList
  },
  setup() {
    const { cardRecords } = blogViewConfig;
    return {
      cardRecords
    };
  }
};
</script>

<style></style>
