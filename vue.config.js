const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const cssRule = config.module.rule("css");
    cssRule.uses.clear();
    cssRule.use("sass-loader").loader("sass-loader");
  }
});
