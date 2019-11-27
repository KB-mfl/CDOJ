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
    "no-unused-expressions": "off",
    "no-param-reassign": "warn",
    "no-unused-vars": "warn",
    "max-len": "warn",
    "no-return-assign": "warn",
    "class-methods-use-this": "off",
    "prefer-destructuring": "warn",
    "no-empty": "warn",
    "no-plusplus": "off",
    "import/order": "off",
    "arrow-parens": ["error", "as-needed"],
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-console": "off",
    "react/jsx-one-expression-per-line": [0, { allow: "literal" }],
    "react/no-access-state-in-setstate": "off",
    "no-shadow": "off",
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": "off",
    "react/jsx-tag-spacing": "off",
    "react/destructuring-assignment": "off",
    "react/prefer-stateless-function": "off",
    "react/no-unused-state": "warn",
    "react/prop-types": "off",
    "react/no-array-index-key": "warn",
    "react/sort-comp": "off",
    "react/jsx-closing-tag-location": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-use-before-define": "off"
  }
};
