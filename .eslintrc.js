module.exports = {
	// extends: "eslint:recommended",
	parser: "babel-eslint",
	parserOptions: { sourceType: "module" },
	rules: {
		"brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": ["error", "self"],
		'no-irregular-whitespace': 'error',
		"func-call-spacing": ["error", "never"],
		"id-blacklist": ["warn", "data", "info", "params", "parameters"],
		"key-spacing": ["error"],
		"lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
		"max-depth": ["error", 4],
		"max-lines-per-function": ["error", 20],
		"max-params": ["error", 3],
		"no-const-assign": "error",
		"no-lonely-if": "error",
		"no-mixed-spaces-and-tabs": "error",
		"quotes": ["error", "single"],
		'use-isnan': 'error',
	}
}