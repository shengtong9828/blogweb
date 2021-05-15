import router from "@/router"
import store from "@/store"
import { Button } from "ant-design-vue"

/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router, store, Button]

/**
 * 批量注册函数
 * @param {import("vue").App} app 
 */
export const userPlugins = app => plugins.forEach(app.use, app)
