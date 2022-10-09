const path = require("path");

module.exports = {
  resolve: {
    extensions: ["js", "ts", "css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/components"),
      "@store": path.resolve(__dirname, "src/components"),
      "@service": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/components"),
      "@middleware": path.resolve(__dirname, "src/components"),
    },
  },
};
