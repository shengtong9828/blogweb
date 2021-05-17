import { useRoute } from "vue-router";
import { computed } from "vue";

export const useNotOnRoutewhitelistStatus = (whiteList = []) => {
  const route = useRoute();
  const status = computed(() => !whiteList.includes(route.name));
  return status;
};
