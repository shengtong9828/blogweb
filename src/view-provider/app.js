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
      handle: () => console.log("首页")
    },
    {
      text: "归档",
      handle: () => console.log("归档")
    },
    {
      text: "赞助列表",
      handle: () => console.log("赞助列表")
    },
    {
      text: "关于我",
      type: "primary",
      handle: () => console.log("关于我")
    }
  ]
};
