<template>
  <main class="about">
    <a-card hoverable>
      <template #cover>
        <a-image alt="example" :src="cover" />
      </template>
      <template class="ant-card-actions" #actions>
        <section v-for="action in actions" :key="action.text">
          {{ action.text }}
        </section>
      </template>
      <a-card-meta :title="title" :description="description"></a-card-meta>
    </a-card>
  </main>
</template>

<script>
import { Image } from "ant-design-vue";
import { aboutViewConfig } from "@vp/show/about.js";
export default {
  components: {
    AImage: Image
  },
  setup() {
    const { cover, title, description, actions = [] } = aboutViewConfig;
    return {
      cover,
      title,
      description,
      actions
    };
  }
};
</script>

<style scoped>
.about {
  padding: 10px 50px;
  text-align: center;
}
</style>
