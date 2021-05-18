<template>
  <b-card-list :cardRecords="cardRecords"></b-card-list>
  <c-pagination :total="500" />
</template>

<script>
import BCardList from "@b/card-list.vue";
import CPagination from "@c/pagination.vue";
import { blogViewConfig } from "@vp/show/blog.js";
export default {
  components: {
    BCardList,
    CPagination
  },
  setup() {
    const { cardRecords } = blogViewConfig;

    return {
      cardRecords
    };
  }
};
</script>
