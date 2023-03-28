# Promise
---
> 一个对象，它代表了一个异步操作的最终完成或者失败

## 约定
- 在本轮事件循环运行完成前，回调函数不会被调用
- 即使异步操作已经完成（成功或失败），在这之后通过 [`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 添加的回调函数也会被调用
- 通过多次调用 [`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 可以添加多个回调函数，它们会按照插入顺序进行执行。
## 旧式异步API不能捕获错误
- 适用`Promise`进行封装

## 静态方法
- `resolve`
- `reject`
- `all`所有的`resolve`都被调用，或者某个`reject`，或者传入的不是`promise`
- `race`只要一个有结果就返回
> 在看这部分文档时又看到了`reduce`函数的使用，`react`的`useReduer`钩子还记得吗

## 传递给then的回调函数
- 被加到微任务队列中
- 像`setTimeout`被加到宏任务队列中
> 休息一下
```
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);
```

