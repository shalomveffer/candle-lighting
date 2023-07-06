const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV==="production"?"/candle-lighting/":"/",
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  }
})
