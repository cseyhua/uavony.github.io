# 属性的可枚举性与所有权
---
## 可枚举性
- `Object.defineProperty`定义的默认为`false`，其他默认为`true`
- 可枚举性与操作
	- `in`
	- `for ... in`
	- `obj.hasOwnProperty`
	- ...
	- 见[可枚举性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#%E7%BB%9F%E8%AE%A1%E8%A1%A8)

## 所有权
> 不是通过原型链继承