<template>
  <a-modal
    v-model:visible="visible"
    title="文章发布设置"
    @ok="sumbit(formRecord)"
  >
    <a-form layout="vertical" :model="formRecord">
      <a-form-item>
        <a-input v-model:value="formRecord.title" placeholder="标题">
          <template #prefix>
            <EditOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="formRecord.synopsis" placeholder="简介">
          <template #prefix>
            <ContainerOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        类型：
        <a-radio-group v-model:value="formRecord.type">
          <a-radio value="blog">日志</a-radio>
          <a-radio value="book">读书</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Modal } from "ant-design-vue";
import { useState } from "@u/hooks";
import { reactive, toRaw } from "@vue/reactivity";
import { EditOutlined, ContainerOutlined } from "@ant-design/icons-vue";
import { useSuccessNotice } from "@u/notice";
export default {
  components: {
    AModal: Modal,
    EditOutlined,
    ContainerOutlined
  },
  setup() {
    const formRecord = reactive({
      title: "",
      synopsis: "",
      type: "blog"
    });
    const [visible, setVisible] = useState(false);

    const sumbit = val => {
      console.log(toRaw(val));
      useSuccessNotice({ message: "发布成功" });
      setVisible(false);
    };
    return {
      visible,
      setVisible,
      formRecord,
      sumbit
    };
  }
};
</script>

<style></style>
