# 迭代器与生成器
---
## 迭代器
- 实现`next`接口，返回两个属性的对象`{value, done}`

## 生成器
- `function*`声明，与关键字`yield`
- [可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1)

## 内置可迭代对象
- `String`
- `Array`
- `TypedArray`
- `Map`
- `Set`

## 用于可迭代对象的语法
- `for ... of`
- 展开语法
- `yield`
- 解构赋值