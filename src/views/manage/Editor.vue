<template>
  <main class="editor shadow">
    <div id="editor"></div>
    <section class="actions">
      <a-button type="danger">清空</a-button>
      <a-button type="primary" @click="showModal">发布</a-button>
    </section>
    <b-modal ref="modal" @submit="submit" />
  </main>
</template>

<script>
import { useEditor } from "@u/editor.js";
import BModal from "@b/modal.vue";
import { ref } from "@vue/reactivity";
import http, { lazyRequest } from "@u/http.js";
import { useErrorNotice, useSuccessNotice } from "@u/notice";
export default {
  components: {
    BModal,
  },
  setup() {
    const editor = useEditor();

    const modal = ref(null);
    const showModal = () => modal.value.setVisible(true);

    const submit = async (val) => {
      try {
        modal.value.okButtonProps.loading = true;
        const request = http.post("/article", {
          ...val,
          content: editor.txt.html(),
        });
        await lazyRequest(request);
        useSuccessNotice({ message: "发布成功" });
      } catch (e) {
        useErrorNotice({
          message: "发布失败",
          description: e.reason || "未知错误",
        });
      } finally {
        modal.value.setVisible(false);
        modal.value.okButtonProps.loading = false;
      }
    };
    return {
      modal,
      showModal,
      submit,
    };
  },
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
