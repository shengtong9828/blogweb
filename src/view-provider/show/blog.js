import { ref } from "@vue/reactivity";

export const blogViewConfig = {
  cardRecords: ref([]),
  limit: ref(5),
  total: ref(0)
};
