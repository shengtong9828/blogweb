import { ref } from "@vue/reactivity";

export const useState = val => {
  const state = ref(val);
  const setState = newVal => (state.value = newVal);
  return [state, setState];
};
