<template>
  <main>
    <a-card title="开源项目" class="card">
      <a-timeline>
        <a-timeline-item
          v-for="record in cardRecords"
          :key="record.id"
          :color="useRandomColor()"
        >
          <a-button @click="record.handle">
            {{ record.content }}
          </a-button>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script>
import { projectViewConfig } from "@vp/show/project.js";
import { useRandomColor } from "@u/color.js";
export default {
  setup() {
    const { cardRecords } = projectViewConfig;
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
