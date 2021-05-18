<template>
  <a-pagination
    class="pagination"
    simple
    hideOnSinglePage
    :total="total"
    :defaultPageSize="defaultPageSize"
    v-model:current="current"
    @change="onPageNumChange"
  />
</template>

<script>
import { watchEffect } from "vue";
import { useWindowScrollTo } from "@u/scroll";
import { useRouteParamChange } from "@u/router";
import { useLinkedRouteParam } from "@u/route";
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    defaultPageSize: {
      type: Number,
      default: 20
    },
    hasScroll: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const current = useLinkedRouteParam("pageNum");
    watchEffect(() => {
      if (props.hasScroll) {
        useWindowScrollTo({ top: 0 });
      }
      emit("change", current.value);
    });
    const pageNumParamChange = useRouteParamChange("pageNum");
    const onPageNumChange = pageNum => {
      pageNumParamChange(pageNum);
    };
    return {
      current,
      onPageNumChange
    };
  }
};
</script>

<style scoped>
.pagination {
  text-align: center;
}
</style>
