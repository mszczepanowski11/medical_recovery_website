const path = require('path');

module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "next/core-web-vitals",
    "plugin:styled-components-a11y/recommended",
    'plugin:prettier/recommended',
  ],
  plugins: ["styled-components-a11y", "prettier"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: path.join(__dirname, '/tsconfig.json')
  },
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true
      }
    ],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-props-spreading': 'off',
    'no-unused-vars': 'warn',
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*"
        ],
        "peerDependencies": true
      }
    ]
  },
}

