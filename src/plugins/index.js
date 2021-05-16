import router from "@/router"
import store from "@/store"
import { componentsPlugin } from "./components.js"

/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router, store, componentsPlugin]

/**
 * 批量注册函数
 * @param {import("vue").App} app 
 */
export const userPlugins = app => plugins.forEach(app.use, app)
