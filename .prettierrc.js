const prettierConfig = {
  plugins: ["./node_modules/prettier-plugin-multiline-arrays"],
  singleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 100,
  multilineArraysWrapThreshold: 2,
};

module.exports = prettierConfig;
