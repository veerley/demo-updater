module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      outputDir: "build",
      builderOptions: {
        publish: ["github"],
      },
    },
  },
};
