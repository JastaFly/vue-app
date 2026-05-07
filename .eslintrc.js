module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module'
    },

    env: {
        node: true,
        browser: true
    },

    plugins: ['vue'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@babel/eslint-parser',
                sourceType: 'module',
                ecmaVersion: 'latest'
            },
            env: {
                'vue/setup-compiler-macros': true
            }
        }
    ],
}