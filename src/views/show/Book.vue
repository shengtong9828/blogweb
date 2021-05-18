<template>
  <b-card-list :cardRecords="cardRecords"></b-card-list>
  <c-pagination :total="500" />
</template>

<script>
import BCardList from "@b/card-list.vue";
import CPagination from "@c/pagination.vue";
import { bookViewConfig } from "@vp/show/book.js";
export default {
  components: {
    BCardList,
    CPagination
  },
  setup() {
    const { cardRecords } = bookViewConfig;

    return {
      cardRecords
    };
  }
};
</script>

<style>
.card-list {
  padding-bottom: 10px !important;
}
</style>
