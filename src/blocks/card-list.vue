<template>
  <section class="card-list">
    <a-card
      :title="record.title"
      :extra="record.createdAt"
      v-for="record in cardRecords"
      :key="record.id"
      hoverable
      @click="handler(record.id)"
      class="card"
      >{{ record.synopsis }}</a-card
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
  },
  setup(props, { emit }) {
    const handler = id => emit("handler", id);
    return {
      handler
    };
  }
};
</script>

<style scoped>
.card-list {
  padding-bottom: 10px;
}
</style>
