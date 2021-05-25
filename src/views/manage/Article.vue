<template>
  <main class="article shadow">
    <section class="action">
      <a-button type="primary" @click="toEditorPage">新建</a-button>
    </section>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      @change="handleChange"
      row-key="id"
      :loading="loading"
    >
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span> Name </span>
      </template>
      <template #type="{ text }">
        <a-tag :color="useColor(text)">
          {{ text.toUpperCase() }}
        </a-tag>
      </template>
      <template #edit="{ text: { id } }">
        <a-button class="mx-1" type="primary" @click="update(id)"
          >编辑</a-button
        >
        <a-button class="mx-1" type="danger" @click="destroy(id)"
          >删除</a-button
        >
        <a-button class="mx-1" @click="search(id)">查看</a-button>
      </template>
    </a-table>
  </main>
</template>
<script>
import { articleViewConfig } from "@vp/manage/article.js";
import { useColorMap } from "@u/color.js";
import {
  useRouteNameToPage,
  useRouteNameWithQueryToPage,
  useRouteParamChange,
  useRoutePathToPage
} from "@u/router.js";
import { useLinkedRouteParam } from "@u/route";
import { ref, watchEffect } from "vue";
import http, { lazyRequest } from "@u/http.js";
import { useErrorNotice, useSuccessNotice } from "@u/notice";
import { useState } from "@u/hooks";
export default {
  components: {},
  setup() {
    const { columns, pagination } = articleViewConfig;

    const colorMap = new Map([
      ["blog", "#009688"],
      ["book", "#2196F3"]
    ]);
    const useColor = useColorMap(colorMap);
    pagination.current = useLinkedRouteParam("pageNum");
    const pageNumChange = useRouteParamChange("pageNum");
    const handleChange = ({ current }) => pageNumChange(current);
    const toEditorPage = useRouteNameToPage("ManageEditor");

    const data = ref([]);

    const [loading, setLoading] = useState(false);
    watchEffect(
      async () => {
        try {
          setLoading(true);
          const request = await http.get(
            `/article?limit=${pagination.pageSize}&page=${pagination.current}`
          );

          const [res] = await lazyRequest(request, 500);
          data.value = res.data.rows;
          pagination.total = res.data.count;
        } catch (e) {
          useErrorNotice({
            message: "文章列表获取失败",
            description: e.reason || "未知错误"
          });
        } finally {
          setLoading(false);
        }
      },
      {
        flush: "post"
      }
    );

    const destroy = async id => {
      try {
        setLoading(true);
        await http.delete(`/article/${id}`);
        useSuccessNotice({ message: "文章删除成功" });

        const request = await http.get(
          `/article?limit=${pagination.pageSize}&page=${pagination.current}`
        );

        const [res] = await lazyRequest(request, 500);
        data.value = res.data.rows;
        pagination.total = res.data.count;
      } catch (e) {
        useErrorNotice({
          message: "文章删除失败",
          description: e.reason || "未知错误"
        });
      } finally {
        setLoading(false);
      }
    };

    const search = id => {
      const toPage = useRoutePathToPage(`/details/${id}`);
      toPage();
    };

    const update = useRouteNameWithQueryToPage("ManageEditor", "id");
    return {
      data,
      columns,
      pagination,
      useColor,
      handleChange,
      toEditorPage,
      loading,
      destroy,
      search,
      update
    };
  }
};
</script>

<style scoped>
.article {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #cfd8dc;
}
.action {
  text-align: right;
  margin-bottom: 10px;
}
</style>
