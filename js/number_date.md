# 数字与日期
---
## 数字
-  符号值
	- `+[-]Infinity`
	- `NaN`非数字
- `BigInt`不能直接与`Number`运算，也不可以使用`Math`对象操作
- 可使用的进制: 10/2/8/16
	- Decimal numbers
		- `0`开头，如果下一个接小于8开头的会被作为8进制处理（非严格模式下）
	- Binary numbers
		- `0[b|B]`开头，如果后面接的不是`0|1`则报错
	- Octal numbers
		- `0`开头，如果后接数不在`0-7`范围内则表示10进制
		- es5严格模式下禁止使用8进制，es6使用前缀`0o`
	- Hexadecimal numbers
		- `0[x|X]`开头，后接超出范围报错
- 指数形式
	- 1[E|e]1: 1x 10^1
- 数字对象`Number`
	> 包含一些有关数字的常量属性  

	- `MAX_VALUE`
	- `MIN_VALUE`
	- `POSITIVE_INFINITY`
	- `NEGATIVE_INFINITY`
	- `NaN`
	- `EPSILON`:大于1且与1最接近的数之间的差别
	- `MIN_SAFE_INTEGER`
	- `MAX_SAFE_INTEGER`

	- `parseFloat`
	- `parseInt`
	- `isFinite`
	- `isInteger`
	- `isNaN`
	- `isSafeInteger`

	数字类型原型上的方法
	- `toExponential`:返回指数形式的字符串
	- `toFixed`:返回指定小数位数的表示形式
	- `toPrecision`:返回一个指定精度的数字

- 数学对象`Math`
	- `PI`

	方法
	- `abs`:强制转换为数字，不能转换的转换为`NaN`，并返回绝对值
	- `sin\cos\tan`:参数为弧度
	- `asin\acos\atan\atan2(y,x)`:反正余弦\\原点到(x,y)的线段与x轴正向之间的平面角度（弧度）
	- `sinh\cosh\tanh`:双曲
	- `asinh\acosh\atanh`:反双曲
	- `pow\exp\expm1\log10\log1p\log2`: pow(base,exp)\ e^x \ e^x -1 \ 10为低  \ log(x+1) \ 2为低
	- `floor\ceil`: 返回小于等于给定数字的最大整数\ 四舍五入并返回大于等于给定数字的最小整数
	- `min\max`
	- `random`
	- `round\fround\trunc`:返回四舍五人后最接近的整数\ 可以将任意的数字转换为离它最近的单精度浮点数 \  会将数字的小数部分去掉，只保留整数部分
	- `sqrt\cbrt\hypot`
	- `sign`
	- `clz32\imul`

## 日期对象
> 不含有任何属性，但有大量方法。以 1970 年 1 月 1 日 00:00:00 以来的毫秒数来储存数据类型的。

- `set`设置日期与时间
- `get`获取日期与时间
	- getYear|getFullYear
	- getDay返回星期
	- getSeconds
	- getMonth
	- getHours
	- getMimute
- `to`返回字符串格式的值
- `parse(str)`:解析回毫秒数
- 秒分: 0-59
- 时:0-23
- 日:1-31
- 月:0-11
- 星期:0-6
- 年
- `getTime|setTime`:1970-1-1-0-0-0来的毫秒数


