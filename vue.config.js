const isProd = process.env.NODE_ENV === "development";

module.exports = {
  lintOnSave: true,
  publicPath: isProd ? "/admin-panel/" : "/",
};
