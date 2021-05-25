import { useRoute } from "vue-router";
import { ref, computed, watchEffect } from "vue";

export const useNotOnRoutewhitelistStatus = (whiteList = []) => {
  const route = useRoute();
  const status = computed(() => !whiteList.includes(route.name));
  return status;
};

export const useLinkedRouteParam = (type, isNum = true) => {
  const route = useRoute();
  const currentParam = ref("");
  watchEffect(() => {
    const param = route.params[type];
    currentParam.value = isNum ? Number(param) : param;
  });
  return currentParam;
};

export const useRouteQuery = type => {
  const route = useRoute();
  return route.query[type];
};
