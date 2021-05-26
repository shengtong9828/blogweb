const hardPlugin = require("hard-source-webpack-plugin");
const { resolve } = require("path");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new hardPlugin({
        cacheDirectory: resolve(__dirname, "cache")
      }),
      new BundleAnalyzerPlugin()
    ],
    resolve: {
      alias: {
        "@c": resolve(__dirname, "src/components"),
        "@a": resolve(__dirname, "src/assets"),
        "@u": resolve(__dirname, "src/use"),
        "@r": resolve(__dirname, "src/router"),
        "@v": resolve(__dirname, "src/views"),
        "@p": resolve(__dirname, "src/plugins"),
        "@b": resolve(__dirname, "src/blocks"),
        "@vp": resolve(__dirname, "src/view-provider")
      }
    },
    externals: {
      moment: "moment"
    }
  }
};
