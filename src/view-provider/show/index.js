import {
  BookOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SisternodeOutlined,
  LikeOutlined
} from "@ant-design/icons-vue";
import { useRouteNameToPage, useRoutePathToPage } from "@u/router";

export const showIndexViewConfig = {
  avatar: {
    src: require("@a/img/avatar.png"),
    size: "large",
    shape: "square"
  },
  title: "qing淺",
  subTitle: "凡是过去，皆为序章",
  unwantedBackwhiteList: ["ShowBlog"],
  buttonGroup: [
    {
      text: "日志",
      icon: <BookOutlined />,
      handle: useRoutePathToPage("/show/blogs/1")
    },
    {
      text: "读书",
      icon: <ReadOutlined />,
      handle: useRoutePathToPage("/show/books/1")
    },
    {
      text: "项目",
      icon: <ScheduleOutlined />,
      handle: useRouteNameToPage("ShowProject")
    },
    {
      text: "归档",
      icon: <SisternodeOutlined />,
      handle: useRouteNameToPage("ShowFile")
    },
    {
      text: "赞助列表",
      icon: <LikeOutlined />,
      handle: useRouteNameToPage("ShowList")
    }
  ]
};
