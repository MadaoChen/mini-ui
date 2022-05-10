module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/explicit-module-boundary-types": 0, // ts函数参数不允许使用any类型
    "@typescript-eslint/no-explicit-any": 0, // 允许使用any类型
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'quotes': [1, 'single'],
    'semi': [1, 'never'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 800
      }
    ]
  }
};