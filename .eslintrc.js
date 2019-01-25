// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'semi':[0],
        "no-const-assign": 2,
        "no-unreachable": 2,
        "indent":0,
        "quotes": [0],
        "eol-last": 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-tabs": 'off',
        "prefer-promise-reject-errors": 0
    }
}
  