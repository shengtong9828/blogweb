/**
 * 路由表
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes = [
  {
    path: "/",
    redirect: "/show"
  },
  {
    path: "/show",
    name: "Show",
    component: () => import("@v/show/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@v/show/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@v/show/About.vue")
      }
    ]
  }
];
