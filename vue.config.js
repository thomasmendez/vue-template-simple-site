const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const deps = require("./package.json").dependencies;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080/",
  configureWebpack: (config) => {
    config.entry = path.join(__dirname, "src", "index.js");
  },

  chainWebpack: (config) => {
    /* module federation plugin import */
    config.optimization.delete("splitChunks");
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "vue",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/bootstrap",
          },
          shared: {
            ...deps,
            vue: {
              eager: true,
              singleton: true,
              requiredVersion: deps.vue,
              strictVersion: true,
            },
          },
        },
      ]);
  },
});
