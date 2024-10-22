import unjs from 'eslint-config-unjs';

export default unjs({
  ignores: ['**/.output', '**/.nitro', '**/.netlify', '**/.nuxt', '**/*.gen.*'],
  rules: {
    'unicorn/no-null': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unicorn/filename-case': 0,
    'unicorn/consistent-function-scoping': 0,
  },
});
