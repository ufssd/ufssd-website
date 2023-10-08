module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
