<template>
  <a-page-header :title="title" :sub-title="subTitle" :avatar="avatar">
    <template #extra>
      <a-button type="primary">
        <LeftSquareOutlined />
        返回首页
      </a-button>
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { LeftSquareOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    APageHeader: PageHeader,
    LeftSquareOutlined
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { avatar = {}, title, subTitle } = props.config || {};
    return {
      avatar,
      title,
      subTitle
    };
  }
};
</script>

<style></style>
