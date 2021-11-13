const isDev = process.env.NODE_ENV == "development";

module.exports = {
  lintOnSave: true,
  publicPath: isDev ? "/" : "/admin-panel/",
};
