<template>
  <main class="details w-e-text shadow">
    <h1 class="title">{{ article.title }}</h1>
    <a-tag color="#42A5F5" class="type">{{ article.type }}</a-tag>
    <a-alert
      :message="article.synopsis"
      type="info"
      class="synopsis"
      show-in
      v-if="article.synopsis"
    >
      <template #icon><CommentOutlined /></template>
    </a-alert>
    <main v-html="article.content"></main>
  </main>
</template>

<script>
import { ref, watchEffect } from "vue";
import { Alert } from "ant-design-vue";
import { CommentOutlined } from "@ant-design/icons-vue";
import { useLinkedRouteParam } from "@u/route";
import http from "@u/http.js";
import { useErrorNotice } from "@u/notice";
export default {
  components: {
    CommentOutlined,
    AAlert: Alert
  },
  setup() {
    const id = useLinkedRouteParam("id");
    const article = ref({});

    watchEffect(async () => {
      try {
        const res = await http.get(`/article/${id.value}`);
        article.value = res.data;
      } catch (e) {
        useErrorNotice({
          message: "文章获取失败",
          description: e.data || e.reason || "未知错误"
        });
      }
    });
    return {
      article
    };
  }
};
</script>

<style scoped>
.details {
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 1.5px solid #b0bec5;
  border-radius: 4px;
  position: relative;
  min-height: 100vh;
}

.title {
  text-align: center;
}

.type {
  position: absolute;
  top: 10px;
  right: 10px;
}

.synopsis {
  margin-bottom: 20px;
}
</style>
