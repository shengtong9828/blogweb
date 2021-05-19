<template>
  <main class="editor shadow">
    <div id="editor"></div>
    <section class="actions">
      <a-button type="danger">清空</a-button>
      <a-button type="primary" @click="showModal">发布</a-button>
    </section>
    <b-modal ref="modal" />
  </main>
</template>

<script>
import { useEditor } from "@u/editor.js";
import BModal from "@b/modal.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    BModal
  },
  setup() {
    useEditor("editor");

    const modal = ref(null);
    const showModal = () => modal.value.setVisible(true);
    return {
      modal,
      showModal
    };
  }
};
</script>

<style scoped>
.editor {
  margin: 30x 10px;
  background-color: #eceff1;
  padding: 10px;
  border-radius: 30px;
}

.actions {
  padding: 8px;
  text-align: center;
}

.actions > * {
  margin: 10px;
}
</style>
