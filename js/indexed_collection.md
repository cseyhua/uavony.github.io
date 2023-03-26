# 索引集合类
> 数组(Array)与类数组(TypedArray)
---
## 数组Array
> 在实施层面，JavaScript 实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。
- 创建
	- `[new ]Array(ele1,ele2,...)`
	- `[new ]Array(lengthAraay)`
	- `[ele1, ele2, ...]`,`arr=[],arr.length=arraylength`
	- `Array.of(only one ele)`
- 方法
	- `concat`连接两个或多个数组，返回一个新的数组
	- `json`将数组中的所有元素连接成一个字符串
	- `push`在数组末尾添加一个或多个元素，并返回新的length
	- `pop`从数组移出最后一个元素，并返回该元素
	- `shift`从数组移出第一个元素，并返回该元素
	- `unshift`数组头添加一个或多个元素，并返回新length
	- `slice`从数组提取一个片段，并作为新数组返回
	- `at`返回指定索引处的元素，可用负下标
	- `splice`从数组移出一些元素，并替换它们（可选），返回删除的元素
	- `reverse`数组元素反序
	- `flat`返回新数组，所有自数组元素递归地连接到其中，直到指定的深度，会移出空项
	- `sort`对数组的元素进行适当的排序
	- `indexOf`返回检索元素的索引，第一个匹配
	- `lastIndexOf`返回最后一个匹配的索引
	- `forEach`对每个元素执行callback（空元素除外），并返回undefined
	- `map`
	- `flatMap`:先执行map再执行flat
	- `filter`
	- `find`返回callback返回true的第一个元素
	- `findLast`
	- `findIndex`
	- `findLastIndex`
	- `every`检查数组每个元素是否满足条件
	- `some`检查数组只需至少一个符合条件
	- `reduce`
	- `reduceRight`

## 类数组对象
> 可以使用Array原型上的方法通过call