module.exports = {
    // Парсер по умолчанию для .js/.jsx файлов
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest', // Современный стандарт ECMAScript
        sourceType: 'module'
    },

    env: {
        node: true,
        browser: true
        // 'vue/setup-compiler-macros': true // УБРАНО отсюда
    },

    // Плагины и расширения
    plugins: ['vue'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],

    // Правила для конкретных расширений файлов
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
                'vue/setup-compiler-macros': true // ОСТАЕТСЯ здесь - только для .vue файлов
            }
        }
    ],

    rules: {
        // Ваши пользовательские правила
    }
};