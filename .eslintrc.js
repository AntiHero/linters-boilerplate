module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	rules: {},
};
