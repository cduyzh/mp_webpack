// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: false,
        node: true,
        es6: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // 客户端允许在条件中写require，webpack支持这种语法。并且按需加载时必须这样写
        'global-require': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'import/extensions': ['off', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // 4格缩进
        'indent': [2, 4, { SwitchCase: 1 }],
        // 允许数组最后一个元素末尾加逗号
        'comma-dangle': 0,
        // 允许function后不加空格
        'space-before-function-paren': 0,
        // 允许行尾加分号
        'semi': 0,
        // 注释后面要加空格，块级注释前后必须都加空格
        'spaced-comment': [2, 'always', { block: { balanced: true } }],
        // 最多连续空两行，文件结尾最多连续空1行
        'no-multiple-empty-lines': [2, { max: 2, maxBOF: 1 }],
        // 允许一个var定义多个变量
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        // 允许换行符不用CRLF
        'linebreak-style': 0,
        // 不允许使用with
        'no-restricted-syntax': [2, 'WithStatement'],
        // 允许调用Object.prototype上的方法，如hasOwnProperty。禁止是因为它可以被重载
        'no-prototype-builtins': 0,
        // 允许修改形参的值
        'no-param-reassign': 0,
        // 允许先声明再引用，反正大家都懂声明提前原理
        'no-use-before-define': 0,
        // 允许++
        'no-plusplus': 0,
        // 允许位运算
        'no-bitwise': 0,
        // 一行最大长度
        'max-len': [2, 200, 4, { ignoreStrings: true, ignoreTemplateLiterals: true }],
        // 允许console.log
        'no-console': 0,
        // 花括号前后不加空格
        'object-curly-spacing': [0, 'never'],
        // 对象可以和花括号写在同一行
        'object-curly-newline': 0,
        // 不对属性名称上的引号做限制
        'quote-props': 0,
        // 允许javascript:形式的url
        'no-script-url': 0,
        // 不强制箭头函数加大括号
        'arrow-body-style': 0,
        // 尽量驼峰命名
        'camelcase': 1,
        // 允许在一个表达式中连用逻辑运算符不加括号
        'no-mixed-operators': 0,
        // 允许在使用new构造一个实例后不赋值
        'no-new': 0,
        // 允许使用continue
        'no-continue': 0,
        // 允许if中return后，剩下的代码用else包裹
        'no-else-return': 0,
        // 未使用的变量
        'no-unused-vars': 1,
        // 允许在原生对象上加接口
        'no-extend-native': 0,
        // if和花括号必须写在同一行，并且要把内容写在新行里
        'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
        // 允许在变量前后加下划线
        'no-underscore-dangle': 0,
        // 允许在class中写不使用this的方法，不强制改为静态方法
        'class-methods-use-this': 0,
        // 强制使用箭头函数
        'prefer-arrow-callback': 1,
        // 不强制文末加空行
        'eol-last': 0,
        // 通过命名导出和默认导出同一个数据时(如export const data1 = 1; export default {data1})，可以import默认导出项，再从属性上去取到该数据
        'import/no-named-as-default-member': 0,
        // 允许注释双斜线左边有多个空格
        'no-multi-spaces': 0,
        // 不强制对对象做解构赋值
        'prefer-destructuring': 0,
        // 函数调用时参数过多导致换行，不强制每个参数都占一行
        'function-paren-newline': 0,
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        getApp: true,
        getPage: true,
        requirePlugin: true
    }
}