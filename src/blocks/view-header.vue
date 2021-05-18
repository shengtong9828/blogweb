<template>
  <a-page-header :title="title" :sub-title="subTitle" :avatar="avatar">
    <template #extra>
      <transition name="fade" mode="out-in">
        <a-button type="primary" v-if="backShowStatus" @click="backHomePage">
          <LeftSquareOutlined />
          返回首页
        </a-button>
      </transition>
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { LeftSquareOutlined } from "@ant-design/icons-vue";
import { useRoutePathToPage } from "@u/router";
import { useNotOnRoutewhitelistStatus } from "@u/route.js";
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
    const {
      avatar = {},
      title,
      subTitle,
      unwantedBackwhiteList = [],
      homePath
    } = props.config || {};
    const backHomePage = useRoutePathToPage(homePath);
    const backShowStatus = useNotOnRoutewhitelistStatus(unwantedBackwhiteList);
    return {
      avatar,
      title,
      subTitle,
      backHomePage,
      backShowStatus
    };
  }
};
</script>

<style></style>
