<template>
  <main class="editor shadow">
    <div id="editor"></div>
    <section class="actions">
      <a-button type="danger">清空</a-button>
      <a-button type="primary">发布</a-button>
    </section>
  </main>
</template>

<script>
import { useEditor } from "@u/editor.js";
export default {
  setup() {
    useEditor("editor");
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
