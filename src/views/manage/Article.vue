<template>
  <main class="article shadow">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      @change="handleChange"
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
      <template #edit>
        <a-button class="mx-1" type="primary">编辑</a-button>
        <a-button class="mx-1" type="danger">删除</a-button>
        <a-button class="mx-1">查看</a-button>
      </template>
    </a-table>
  </main>
</template>
<script>
import { articleViewConfig } from "@vp/manage/article.js";
import { useColorMap } from "@u/color.js";
import { useRouteParamChange } from "@u/router.js";
import { useLinkedRouteParam } from "@u/route";
export default {
  components: {},
  setup() {
    const { data, columns, pagination } = articleViewConfig;

    const colorMap = new Map([
      ["blog", "#009688"],
      ["book", "#2196F3"]
    ]);
    const useColor = useColorMap(colorMap);
    pagination.current = useLinkedRouteParam("pageNum");
    const pageNumChange = useRouteParamChange("pageNum");
    const handleChange = ({ current }) => pageNumChange(current);
    return {
      data,
      columns,
      pagination,
      useColor,
      handleChange
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
</style>
