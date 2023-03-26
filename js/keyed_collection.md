# 带键的集合
---
> Map 和 Set 对象承载的数据元素可以按照插入时的顺序被迭代遍历
## 映射Map
- 创建`new Map()`
- 方法与属性
	- `set`
	- `size`
	- `get`
	- `has`
	- `delete`
	- `clear`
- 与Object的区别
	- Object被用于字符串类型映射到值，即key的类型为String
	- Map的key可以是任意类型
	- Map遍历遵循元素插入顺序
	- Object具有原型，可以通过`create`方法避免
- 如何选择
	- 键在运行时才知道，并且所有键类型相同，值类型相同，选择Map
	- 原始值作为键使用Map，因为Object将原始值转换为String作为键
	- 需要对个别元素进行操作选择Object

## WeakMap对象
> 对象的键必须是对象类型，并且键被弱保持，键是不可枚举的，不可预测。

## 集合Set
> 是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。
- 转换与数组
	- `Array.from(set)`
	- `[...set]`展开操作符
	- `new Set(array)`
- 与数组的对比
	- 优势
		- 数组判断元素是否存在的`indexOf`效率低
		- Set允许根据值删除元素，Array必须使用基于下标的`splice`方法
		- Array的`indexOf`无法找到NaN值
		- Set不包含重复值

## WeakSet对象
> 不重复，不可枚举
- 与Set的区别
	- 值必须是对象类型
	- 弱保持

## Map的键和Set的值的等值判断
- 使用与`===`相似的规则
- `-0`与`+0`相等
- `NaN`与自身相等