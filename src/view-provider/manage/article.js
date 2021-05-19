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
  ],
  data: [
    {
      key: "1",
      title: "John Brown",
      createTime: "2021-05-19",
      updateTime: "2021-05-20",
      type: "blog"
    },
    {
      key: "2",
      title: "Jim Green",
      createTime: "2021-05-20",
      updateTime: "2021-05-21",
      type: "blog"
    },
    {
      key: "3",
      title: "Joe Black",
      createTime: "2021-05-21",
      updateTime: "2021-05-22",
      type: "book"
    },
    {
      key: "4",
      title: "Jim Green",
      createTime: "2021-05-20",
      updateTime: "2021-05-21",
      type: "blog"
    },
    {
      key: "5",
      title: "Joe Black",
      createTime: "2021-05-21",
      updateTime: "2021-05-22",
      type: "book"
    },
    {
      key: "6",
      title: "Jim Green",
      createTime: "2021-05-20",
      updateTime: "2021-05-21",
      type: "blog"
    },
    {
      key: "7",
      title: "Joe Black",
      createTime: "2021-05-21",
      updateTime: "2021-05-22",
      type: "book"
    },
    {
      key: "8",
      title: "Jim Green",
      createTime: "2021-05-20",
      updateTime: "2021-05-21",
      type: "blog"
    }
  ]
};
