module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'plugins': [
		'@stylistic/js'
	],
	'extends': 'eslint:recommended',
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		"no-unused-vars": "off",
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
		'@stylistic/js/indent': [
			'off',
			2
		],
		'@stylistic/js/linebreak-style': [
			'off',
			'unix'
		],
		'@stylistic/js/quotes': [
			'off',
			'single'
		],
		'@stylistic/js/semi': [
			'error',
			'always'
		],
		'no-console': 0
	}
};
