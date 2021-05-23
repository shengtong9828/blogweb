import { useWarningNotice } from "@u/notice.js";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(to => {
  const token = localStorage.getItem("token");

  const isInMangeRouteGroup = /^Manage(?!(Login))/.test(to.name);

  const isToLogin = !token && isInMangeRouteGroup;

  if (isToLogin) {
    useWarningNotice({ message: "无此权限，请先登录" });
    return { name: "ManageLogin" };
  }
  return true;
});

export default router;
