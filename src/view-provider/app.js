import { useRouteNameToPage, useRoutePathToPage } from "@u/router";

export const appViewConfig = {
  avatar: {
    src: require("@a/img/avatar.png"),
    size: "large",
    shape: "square"
  },
  tags: [
    {
      tagName: "vuejs",
      color: "success"
    },
    {
      tagName: "typescript",
      color: "blue"
    },
    {
      tagName: "koajs",
      color: "cyan"
    }
  ],
  menu: [
    {
      text: "首页",
      handle: useRoutePathToPage("/show/blogs/1")
    },
    {
      text: "归档",
      handle: useRouteNameToPage("ShowFile")
    },
    {
      text: "赞助列表",
      handle: useRouteNameToPage("ShowList")
    },
    {
      text: "关于我",
      type: "primary",
      handle: useRouteNameToPage("ShowAbout")
    }
  ]
};
