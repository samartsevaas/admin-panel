const isProd = process.env.NODE_ENV === "development";
const path = require("path");

module.exports = {
  lintOnSave: true,
  publicPath: isProd ? "/" : "/admin-panel/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/adstracts/index.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@elements": path.resolve(__dirname, "src/components/elements"),
        "@views": path.resolve(__dirname, "src/views"),
        "@services": path.resolve(__dirname, "src/services"),
        "@modules": path.resolve(__dirname, "src/store/modules"),
      },
    },
  },
};
