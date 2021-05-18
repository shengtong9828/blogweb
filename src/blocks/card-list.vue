<template>
  <section class="card-list">
    <a-card
      :title="record.title"
      :extra="record.time"
      v-for="record in cardRecords"
      :key="record.id"
      hoverable
      class="card"
      >{{ record.content }}</a-card
    >
  </section>
</template>

<script>
export default {
  props: {
    cardRecords: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.card-list {
  padding-bottom: 10px;
}
</style>
