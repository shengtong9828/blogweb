<template>
  <a-page-header class="b-header" :isScroll="isScroll">
    <template #title>
      <a-avatar
        :src="avatar.src"
        :size="avatar.size || 'large'"
        :shape="avatar.shape || 'square'"
      ></a-avatar>
    </template>
    <template #tags>
      <a-tag v-for="tag in tags" :color="tag.color" :key="tag.tagName">{{
        tag.tagName
      }}</a-tag>
    </template>
    <template #extra>
      <a-button
        v-for="btn in menu"
        :type="btn.type"
        @click="handle"
        :key="btn.text"
        >{{ btn.text }}</a-button
      >
    </template>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { useWindowScrollStatus } from "@u/scroll.js";
export default {
  components: {
    APageHeader: PageHeader
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { avatar = {}, tags = [], menu = [] } = props.config || {};

    const isScroll = useWindowScrollStatus();
    return {
      avatar,
      tags,
      menu,
      isScroll
    };
  }
};
</script>

<style scoped>
.b-header {
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}

.b-header:hover,
.b-header[isScroll="true"] {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}
</style>
