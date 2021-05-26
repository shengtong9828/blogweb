<template>
  <b-card-list :cardRecords="cardRecords" @handler="handler"></b-card-list>
  <c-pagination :total="total" :defaultPageSize="limit" />
</template>

<script>
import BCardList from "@b/card-list.vue";
import CPagination from "@c/pagination.vue";
import { bookViewConfig } from "@vp/show/book.js";
import http from "@u/http.js";
import { watchEffect } from "@vue/runtime-core";
import { useErrorNotice } from "@u/notice";
import { useLinkedRouteParam } from "@u/route";
import { useRoutePathToPage } from "@u/router";

export default {
  components: {
    BCardList,
    CPagination
  },
  setup() {
    const { cardRecords, limit, total } = bookViewConfig;
    const pageNum = useLinkedRouteParam("pageNum");

    watchEffect(
      async () => {
        if (pageNum.value) {
          try {
            const res = await http.get(
              `/article?type=book&limit=${limit.value}&page=${pageNum.value}`
            );
            cardRecords.value = res.data.rows;
            total.value = res.data.count;
          } catch (e) {
            useErrorNotice({
              message: "获取日志失败",
              description: e.reason || "未知错误"
            });
          }
        }
      },
      {
        flush: "post"
      }
    );

    const handler = id => {
      const toPage = useRoutePathToPage(`/details/${id}`);
      return toPage();
    };
    return {
      cardRecords,
      total,
      limit,
      handler
    };
  }
};
</script>

<style>
.card-list {
  padding-bottom: 10px !important;
}
</style>
