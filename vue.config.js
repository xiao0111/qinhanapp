const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? './' : "/",
    chainWebpack:config=>{
      config.plugin("html").tap(args=>{
        args[0].minify=false;
        return args;
      });
      config.resolve.alias.set("@", resolve('src'));
    },
    filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    configureWebpack: {
        //调试JS
      //   devtool: "hidden-source-map",
        devtool: "cheap-module-eval-source-map",
        amd: {
          toUrlUndefined: true
        }
    },
    css: {
      extract: false, // 是否使用css分离插件 ExtractTextPlugin
      sourceMap: true // 开启 CSS source maps?
    },
  }