import { ref } from "@vue/reactivity";

export const bookViewConfig = {
  cardRecords: ref([]),
  limit: ref(5),
  total: ref(0)
};
