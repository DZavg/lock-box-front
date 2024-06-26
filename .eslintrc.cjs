/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	plugins: ['sonarjs'],
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
		'plugin:storybook/recommended',
		'plugin:sonarjs/recommended',
		'plugin:vue/vue3-recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	overrides: [
		{
			files: ['*.stories.{ts,tsx}'],
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	],
}
