# 函数
---
## 函数声明
- function(可提升)
- 函数表达式

## 函数递归调用
- 函数名
- 函数表达式变量名
- arguments.callee()函数

## 嵌套函数与闭包
> 可以在一个函数里面嵌套另一个函数，嵌套函数对容器函数是私有的，嵌套函数自身形成一个闭包，闭包可以拥有独立的环境与变量

- 作用域链
> 闭包，即嵌套函数会继承包含它的函数作用域，多层嵌套式递归的包含了所有包含他们的函数作用域，称之为作用域链

## 函数参数`arguments`类数组对象

## 默认参数与剩余参数
- 默认参数在es5及之前是在函数体内部检查是否传参，未传则变量为`undefined`，之后可以在参数列表中为参数指定默认参数
- 剩余参数：是可以将未知参数数量的后面的参数放到一个数组中，
```
function name(arg1, ...args)
```

## `=>`函数
> 以词法的方式绑定 this，https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

在箭头函数出现前，每一个新函数都重新定义了`this`，在构造函数中是一个新的对象；在严格模式下是未定义的；在作为“对象方法”调用的函数中指向这个对象，普通函数指向全局对象，等等。

箭头函数捕获闭包上下文的`this`值

## 预定义函数
- eval
- uneval
- isFinite
- isNaN
- parseFloat
- parseInt
- decodeURI
- decodeURIComponent
- encodeURI
- encodeURIComponent

## 参考
---
- `this`
	并不会指向正在运行的函数本身，而是指向调用该函数的对象


