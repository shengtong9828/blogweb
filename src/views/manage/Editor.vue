<template>
  <main class="editor shadow">
    <div id="editor"></div>
    <section class="actions">
      <a-button type="danger">清空</a-button>
      <a-button type="primary" @click="showModal">{{
        sumbitButtonText
      }}</a-button>
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
import { useRouteQuery } from "@u/route";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    BModal
  },
  setup() {
    const editor = useEditor();

    const modal = ref(null);
    const showModal = () => modal.value.setVisible(true);

    let submit = async val => {
      try {
        modal.value.okButtonProps.loading = true;
        const request = http.post("/article", {
          ...val,
          content: editor.txt.html()
        });
        await lazyRequest(request);
        useSuccessNotice({ message: "发布成功" });
      } catch (e) {
        useErrorNotice({
          message: "发布失败",
          description: e.reason || "未知错误"
        });
      } finally {
        modal.value.setVisible(false);
        modal.value.okButtonProps.loading = false;
      }
    };

    const id = useRouteQuery("id");
    const updateFlag = Boolean(id);
    if (updateFlag) {
      onMounted(async () => {
        try {
          const { data } = await http.get(`/article/${id}`);
          editor.txt.html(data.content);
          modal.value.formRecord.title = data.title;
          modal.value.formRecord.synopsis = data.synopsis;
          modal.value.formRecord.type = data.type;
        } catch (e) {
          useErrorNotice({
            message: "文章获取失败",
            description: e.data || e.reason || "未知错误"
          });
        }
      });

      submit = async record => {
        try {
          modal.value.okButtonProps.loading = true;
          const request = await http.put(`/article/${id}`, {
            ...record,
            content: editor.txt.html()
          });
          await lazyRequest(request, 500);
          useSuccessNotice({
            message: "更新文章成功"
          });
        } catch (e) {
          useErrorNotice({
            message: "更新文章失败",
            description: e.reason || "未知错误"
          });
        } finally {
          modal.value.setVisible(false);
          modal.value.okButtonProps.loading = false;
        }
      };
    }

    const sumbitButtonText = updateFlag ? "更新" : "发布";
    return {
      modal,
      showModal,
      submit,
      sumbitButtonText
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
