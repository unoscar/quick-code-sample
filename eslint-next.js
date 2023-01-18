module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    `next`,
    `airbnb`,
    `airbnb-typescript`,
    `plugin:import/errors`,
    `plugin:import/recommended`,
    `plugin:import/typescript`,
    `plugin:react/jsx-runtime`,
    `plugin:@typescript-eslint/recommended`,
  ],
  ignorePatterns: [
    `**/*.js`,
    `**/*.json`,
    `node_modules`,
    `public`,
    `styles`,
    `.next`,
    `coverage`,
    `dist`,
    `.turbo`,
  ],
  overrides: [],
  plugins: [
    `@typescript-eslint`,
    `import`,
    `typescript-sort-keys`,
    `sort-keys-fix`,
  ],
  rules: {

    // next
    '@next/next/no-html-link-for-pages': `off`,

    "@typescript-eslint/quotes": [1, `backtick`],

    "import/no-extraneous-dependencies": [1, { devDependencies: true }],
    "react/function-component-definition": [1, {
      namedComponents: `arrow-function`,
      unnamedComponents: `arrow-function`,
    }],
    "react/jsx-curly-brace-presence": [1, { children: `always`, props: `always` }],
    "react/jsx-first-prop-new-line": [1, `always`],
    "react/jsx-max-props-per-line": [1, { maximum: 1, when: `always` }],
    "react/jsx-one-expression-per-line": [1, { allow: `none` }],
    "react/jsx-props-no-spreading": [1, {
      custom: `ignore`,
    }],
    "react/jsx-sort-props": [1],
    "react/jsx-uses-react": `off`,
    "react/react-in-jsx-scope": `off`,
    "sort-keys-fix/sort-keys-fix": [1],
    "typescript-sort-keys/interface": [1],
    "typescript-sort-keys/string-enum": [1],
    "@typescript-eslint/ban-ts-comment": "off"
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [`.ts`, `.tsx`],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [`apps/*/tsconfig.json`],
      }
    },
    next: {
      rootDir: [`apps/*/`, `packages/*/`],
    },
  },
};
