module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native-a11y/all',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    createClass: 'createReactClass',
    pragma: 'React',
    react: {
      version: 'detect',
    },
    flowVersion: '0.53',
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': ['error'],
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react-native/no-inline-styles': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['off'],
        '@typescript-eslint/no-unsafe-call': ['off'],
        '@typescript-eslint/no-unsafe-return': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-misused-promises': ['off'],
        '@typescript-eslint/no-unsafe-argument': ['off'],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'react-native-a11y/has-valid-accessibility-ignores-invert-colors': [
          'off',
        ],
        'react-native-a11y/has-valid-accessibility-state': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'require-await': ['off'],
        '@typescript-eslint/require-await': ['off'],
      },
    },
  ],
};
