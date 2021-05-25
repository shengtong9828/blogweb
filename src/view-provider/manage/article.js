import { reactive } from "@vue/reactivity";

export const articleViewConfig = {
  pagination: reactive({ pageSize: 5 }),
  columns: [
    {
      title: "标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime"
    },
    {
      title: "修改时间",
      dataIndex: "updateTime",
      key: "updateTime"
    },
    {
      title: "类型",
      key: "type",
      dataIndex: "type",
      slots: { customRender: "type" }
    },
    {
      title: "编辑",
      key: "edit",
      slots: { customRender: "edit" }
    }
  ]
};
