# Rollup.js模块捆绑器  
> 将多个javascript文件捆绑（打包）在一个文件

## 快速使用
- 在浏览器使用`rollup enter-file.js --file output-file.js --format iife`
- 在node.js中使用`rollup enter-file.js --file output-file.js --format cjs`
- 通用`rollup enter-file.js --file output-file.js --format umd --name bundle-name`

## 配置文件: `rollup.config.[mjs|cjs|js]`
> 使用`js`后缀时需要告诉rollup使用的是es模块语法，可以通过设置package.json文件的type属性或者使用CLI参数

- [ ] 下一步看高级功能
