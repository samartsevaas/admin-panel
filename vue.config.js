const isProd = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: true,
  publicPath: isProd ? "/admin-panel/" : "/",
};
