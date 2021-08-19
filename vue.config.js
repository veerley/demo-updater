module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      outputDir: "build",
      builderOptions: {
        publish: ["github"],
        mac: {
          target: "dmg",
          asar: true,
        },
        win: {
          target: "portable",
          asar: true,
        },
      },
    },
  },
};
