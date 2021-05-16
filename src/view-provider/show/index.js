import {
  BookOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SisternodeOutlined,
  LikeOutlined
} from "@ant-design/icons-vue";

export const showIndexViewConfig = {
  avatar: {
    src: require("@a/img/avatar.png"),
    size: "large",
    shape: "square"
  },
  title: "qing淺",
  subTitle: "凡是过去，皆为序章",
  buttonGroup: [
    {
      text: "日志",
      icon: <BookOutlined />
    },
    {
      text: "读书",
      icon: <ReadOutlined />
    },
    {
      text: "项目",
      icon: <ScheduleOutlined />
    },
    {
      text: "归档",
      icon: <SisternodeOutlined />
    },
    {
      text: "赞助列表",
      icon: <LikeOutlined />
    }
  ]
};
