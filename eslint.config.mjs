import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
    extends: [
        'eslint:recommended',
      'js/recommended',
    ],
    languageOptions: { globals: {...globals.browser, ...globals.node }},
	},
	{
		ignores: ['node_modules/', 'build/', 'coverage/', 'public/'],
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-empty': 'warn',
			'no-extra-semi': 'warn',
			'no-irregular-whitespace': 'warn',
			'no-unreachable': 'warn',
			'no-unused-expressions': 'warn',
			'indent': [
				'error',
				'tab'
			],
			'linebreak-style': [
				'error',
				'unix'
			],
			'quotes': [
				'error',
				'single'
			],
			'semi': [
				'error',
				'always'
			]
		}
	}
]);
