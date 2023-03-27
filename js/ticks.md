# Ticks
---
## typeof函数测试变量类型
- 除了null，所有类型都可用其进行测试，因为typeof null返回object
| type | typeof return | object wrapper |
|:-|:-|:-|
|`null`|`object`|`N/A`|
|`undefined`|`undefined`|`N/A`|
|`boolean`|`boolean`|`Boolean`|
|`number`|`number`|`Number`|
|`bigint`|`bigint`|`BigInt`|
|`string`|`string`|`String`|
|`symbol`|`symbol`|`Symbol`|

## 相等性
- `-0 === +0` true
- 唯一不等于自身的是`NaN`
- `BigInt`与`Number`不能互操作
- javascript提供三种值比较操作
	- `===`
		- 不执行类型转换
	- `==`
		- 执行类型转换
	- `Object.is`
		- 与`===`相同
		- 但对`NaN`,`-0`,`+0`进行特殊处理

## 对象Object
- 键只能是`String`或`Symbol`
- 有两种对象属性的类型：数据属性与访问器属性
	- `Object.defineProperty`
	- `Object.getOwnPropertyDescriptor`
	- 数据属性
		- `value`
		- `writable`
		- `enumerable`
		- `configurable`
	- 访问器属性
		- `get`
			- 在类中使用与`defineProperty`的不同，`get`将定义在原型上，而后者定义在实例上
		- `set`
		- `enumerable`
		- `configurable`