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
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
}
