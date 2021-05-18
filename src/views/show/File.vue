<template>
  <main>
    <a-card title="2020-05" class="card">
      <a-timeline>
        <a-timeline-item
          v-for="record in cardRecords"
          :key="record.id"
          :color="useRandomColor()"
        >
          {{ record.time }}
          <a-button @click="record.handle">
            {{ record.content }}
          </a-button>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script>
import { fileViewConfig } from "@vp/show/file.js";
import { useRandomColor } from "@u/color.js";
export default {
  setup() {
    const { cardRecords } = fileViewConfig;
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
