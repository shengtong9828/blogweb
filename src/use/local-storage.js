import { ref, watchEffect } from "@vue/runtime-core";

export const useLocalStorage = key => {
  const storage = ref(localStorage.getItem(key));
  const stop = watchEffect(() => {
    localStorage.setItem(key, storage.value);
  });
  return [storage, stop];
};
