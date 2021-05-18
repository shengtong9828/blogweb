/**
 * 路由表
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@v/common/NotFound.vue")
  },
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
        redirect: "/show/blogs/1"
      },
      {
        path: "blogs/:pageNum",
        name: "ShowBlog",
        component: () => import("@v/show/Blog.vue")
      },
      {
        path: "books/:pageNum",
        name: "ShowBook",
        component: () => import("@v/show/Book.vue")
      },
      {
        path: "projects",
        name: "ShowProject",
        component: () => import("@v/show/Project.vue")
      },
      {
        path: "files",
        name: "ShowFile",
        component: () => import("@v/show/File.vue")
      },
      {
        path: "lists",
        name: "ShowList",
        component: () => import("@v/show/List.vue")
      },
      {
        path: "about",
        name: "ShowAbout",
        component: () => import("@v/show/About.vue")
      }
    ]
  }
];
