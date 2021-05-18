import { useRouteNameToPage } from "@u/router";

export const projectViewConfig = {
  cardRecords: [
    {
      id: 0,
      content: "读书内容",
      handle: useRouteNameToPage("About")
    },
    {
      id: 1,
      content: "读书内容1"
    },
    {
      id: 2,
      content: "读书内容2"
    },
    {
      id: 3,
      content: "读书内容3"
    }
  ]
};
