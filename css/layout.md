# CSS布局流
---
### 正常布局流: display
	- block
	- inline
	- inline-block

### 弹性盒子: flex
>只在一个维度上进行布局很有用，即行或列方向，一维布局方法，
>flex沿着两个轴进行布局，main与cross
- flex布局父元素具有的属性
	- flex-direction: row | column  | row-reverse | column-reverse
		定义主轴的方向
	- flex-wrap: wrap
		是否进行换行
	- flex-flow: flex-direction flex-wrap
		缩写
	- align-items: 控制flex项在交叉轴上的对齐
		- stretch: 拉长flex项到最大长度
		- center: 保持原有高度，并垂直居中
		- flex-start
		- flex-end
	- justify-content: 控制flex项在主轴上的位置
		- flex-start
		- flex-end
		- center
		- space-around: 在元素两端留有等量的空间
		- space-between: 与space-around类似，但不会在两端留有空间
- flex项具有的属性
	- flex: flex-grow|flex-shrink flex-basis 
		是一个缩写
		- flex-grow
			- 1: 无单位，表示占可用空间的比例
			- 1 200px: 先分配200px空间，剩余空间按给定比例分配
		- flex-shrink
		- flex-basis
	- align-self: 对容器的align-items进行覆盖
	- order: flex项出现的顺序，但不会改变DOM树顺序，越大越靠后，相反则是默认顺序，可以是负值

### 网格布局: grid
> 可以同时在两个维度上进行布局
- gird布局父元素具有的属性
	- grid-template-columns
	- grid-template-rows
		- 单位可以是px、%、等等
		- fr单位表示将可用空间分成份
		- repeat(count, width): 重复构建
	- grid-[column|row]-gap: 定义间隙大小或沟槽大小
	- grid-auto-column|row: 显式网格与隐式网格，这是隐式网格因为没有指定grid-template-column|row，行与列数量根据放入的内容确定
		- minmax函数设置最小值与最大值，即取值范围内自动调整
	- grid-template-areas: 命名区域放置元素
- gird布局子元素具有的属性
	- grid-column
	- grid-row
	- grid-column|row-start|end
	- grid-area: 填写父元素的grid-template-area的区域值

### 浮动布局: float
>会将元素从正常布局流中移除，其他元素在周围环绕
- float属性4个可能的值
	- left
	- right
	- none
	- inherit
- 由于float元素脱离正常文档流，因此不能对其后元素设置margin将其推开，只能自己设置margin将其他元素推开
- 要清除浮动元素的影响，我们使用
	- clear属性
		- left
		- right
		- both
	- 添加元素并设置clear
		- div
		- ::after
	- overflow: -visible
	- display:flow-root

### 定位元素: position
> 将元素从正常布局流中的位置移动到另一个位置
- 五种position类型
	- static(静态): 每个元素的默认属性，表示将元素放在正常布局流中
	- relative(相对): 对元素自己相对与自身在正常文档流中的位置进行调整
	- absolute(绝对): 绝对于html标签或最近被定位的父元素，会将元素从正常布局流中移除
	- fixed(固定): 与绝对类似，但是相对于浏览器视口定位，将元素从正常布局流中移除
	- sticky(粘性): 默认情况下与静态一致，但当元素相对视口位置达到预设置值时，其行为与固定相同

### 表格布局

### 多列布局
- column-count
- colume-width
- colume-gap
- colume-rule: 设置与border属性一样
- break-inside

### responsive web design(RWD)
