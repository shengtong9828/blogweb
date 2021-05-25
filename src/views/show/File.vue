<template>
  <main>
    <a-card
      v-for="cardRecord in cardRecords"
      :key="cardRecord.month"
      title="cardRecord.month"
      class="card"
    >
      <a-timeline>
        <a-timeline-item
          v-for="record in cardRecord.data"
          :key="record.id"
          :color="useRandomColor()"
        >
          <a-button @click="toDetailPage(record.id)">
            {{ record.createdAt }} - {{ record.title }}
          </a-button>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script>
import { useRandomColor } from "@u/color.js";
import http from "@u/http.js";
import { ref, watchEffect } from "@vue/runtime-core";
import { useErrorNotice } from "@u/notice";
import { useRoutePathToPage } from "@u/router";
export default {
  setup() {
    const cardRecords = ref([]);

    watchEffect(async () => {
      try {
        const res = await http.get("/article/all/archives");
        cardRecords.value = res.data;
      } catch (e) {
        useErrorNotice({
          message: "归档信息获取失败",
          description: e.reason || "未知错误"
        });
      }
    });

    const toDetailPage = id => {
      const toPage = useRoutePathToPage(`/details/${id}`);
      toPage();
    };
    return {
      cardRecords,
      useRandomColor,
      toDetailPage
    };
  }
};
</script>
<style scoped>
.card-list {
  padding-bottom: 10px !important;
}
</style>
