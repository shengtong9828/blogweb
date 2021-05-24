<template>
  <a-modal
    v-model:visible="visible"
    title="文章发布设置"
    @ok="sumbit(formRecord)"
    :okButtonProps="okButtonProps"
  >
    <a-form layout="vertical" :model="formRecord">
      <a-form-item v-bind="validateInfos.title">
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
import { reactive } from "@vue/reactivity";
import { EditOutlined, ContainerOutlined } from "@ant-design/icons-vue";
import { useForm } from "@ant-design-vue/use";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    AModal: Modal,
    EditOutlined,
    ContainerOutlined
  },
  setup(props, { emit }) {
    const formRecord = reactive({
      title: "",
      synopsis: "",
      type: "blog"
    });
    const rules = reactive({
      title: [
        {
          required: true,
          message: "请输入标题"
        }
      ]
    });
    const { validateInfos } = useForm(formRecord, rules);
    const okButtonProps = reactive({
      disabled: true,
      loading: false
    });
    okButtonProps.disabled = computed(() => {
      const { validateStatus } = validateInfos.title;
      const status = validateStatus === "success";
      return !status;
    });
    const [visible, setVisible] = useState(false);

    const sumbit = val => {
      emit("submit", val);
    };
    return {
      visible,
      setVisible,
      formRecord,
      sumbit,
      validateInfos,
      okButtonProps
    };
  }
};
</script>

<style></style>
