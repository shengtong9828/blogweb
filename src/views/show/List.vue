<template>
  <main>
    <a-card title="赞助列表" class="card">
      <a-timeline mode="alternate">
        <a-timeline-item
          v-for="record in cardRecords"
          :key="record.id"
          :color="useRandomColor()"
          @click="record.handle"
        >
          {{ record.content }} - {{ record.time }}
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script>
import { listViewConfig } from "@vp/show/list.js";
import { useRandomColor } from "@u/color.js";
export default {
  setup() {
    const { cardRecords } = listViewConfig;
    return {
      cardRecords,
      useRandomColor
    };
  }
};
</script>
<style scoped>
.card-list {
  padding-bottom: 10px !important;
}
</style>
