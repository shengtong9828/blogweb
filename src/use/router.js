import router from "@r/index.js";

export const useRouteNameToPage = routeName =>
  router.push.bind(router, { name: routeName });

export const useRoutePathToPage = routePath =>
  router.push.bind(router, { path: routePath });
