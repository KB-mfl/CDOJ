module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-param-reassign": "warn",
    "no-unused-vars": "warn",
    "max-len": "warn",
    "no-return-assign": "warn",
    "no-empty": "warn",
    "no-console": "off",
    "no-shadow": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unused-state": "warn",
    "react/no-array-index-key": "warn"
  }
};
