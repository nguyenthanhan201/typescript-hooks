// https://dev.to/timwjames/the-best-eslint-rules-for-react-projects-30i8
module.exports = {
  ignorePatterns: ['node_modules/', 'build/', 'dist/', 'tailwind.config.js', 'postcss.config.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'simple-import-sort',
    'jsx-a11y',
    'react-hooks',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'error',
    'react/button-has-type': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-script-url': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/jsx-fragments': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-max-depth': ['error', { max: 10 }],
    'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-typos': 'warn',
    'react/display-name': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        // Specify PascalCase for React components
        format: ['PascalCase', 'camelCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
    ],
    // "filename-rules/match": [2, { ".ts": "camelcase", ".tsx": "pascalcase" }]
    // "import/no-default-export": "error"
  },
};
