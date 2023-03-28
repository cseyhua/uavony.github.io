# 元编程
---
## 代理Proxy
> 在 ECMAScript 6 中引入的 [`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 对象可以拦截某些操作并实现自定义行为。

- `new Proxy(obj, handler)`
- `handler={get:(targetObject, propertyName)}`
- [句柄与陷阱](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Meta_programming#%E5%8F%A5%E6%9F%84%E5%92%8C%E9%99%B7%E9%98%B1)

## 代理销毁
- 使用`Proxy.revocable()`创建可销毁的`Proxy`并使用`revoke`销毁


## 反射Reflect
- `has`
- `apply`
- 可以拦截操作