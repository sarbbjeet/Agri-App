module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "nativewind/babel",
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
    ],
  };
};
