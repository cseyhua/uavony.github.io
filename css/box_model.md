# Box Model

每个盒子模型由四个部分组成，其效用由他们各自的边界组成

- 内容边界
- 内边距边界
- 边框边界
- 外边距边界

## 内容区域

由内容宽度与内容高度确定，如果指定`box-sizing: content-box`则可以通过下列属性设置

- `width`,`min-width`,`max-width`
- `height`,`min-height`,`max-height`

## 内边距区域

填充元素中内容与边框的距离，由 padding-box 的宽度与高度确定，可以通过下列属性设置

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`
- `padding`: `padding-top padding-right padding-bottom padding-left`

## 边框区域

扩展自内边距区域，容纳边框的区域，由 border-box 宽度与高度设置

- 边框粗细由`border-width`或`border`设置
- 边框区域大小如果设置`box-sizing: border-box`，则可以通过下列属性设置
  - `width`,`min-width`,`max-width`
  - `height`,`min-height`,`max-height`

## 外边距区域

由外边距边界限制，用空白区域扩展边框区域，以分明相邻元素。尺寸由 margin-box 宽度与高度确定，由以下属性指定

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`
- `margin`

::: tip
最后，请注意，除可替换元素外，对于行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（每一行文字的高度）则由 line-height 属性决定，即使边框和内边距仍会显示在内容周围。
:::

## 外边距重叠

条件:

- 同层相邻元素
- 没有内容将父元素与后代元素分开
  如果没有边框 border，内边距 padding，行内内容，也没有创建块级格式上下文或清除浮动来分开一个块级元素的上边界 margin-top 与其内一个或多个后代块级元素的上边界 margin-top；或没有边框，内边距，行内内容，高度 height，最小高度 min-height 或 最大高度 max-height 来分开一个块级元素的下边界 margin-bottom 与其内的一个或多个后代后代块元素的下边界 margin-bottom，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。
- 空的块元素

一些需要注意的地方

- 上述情况的组合会产生更复杂的外边距折叠。
- 即使某一外边距为 0，这些规则仍然适用。因此就算父元素的外边距是 0，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。
- 如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和，；也就是说如果有 -13px 8px 100px 叠在一起，边界范围的技术就是 100px -13px 的 87px。
- 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。
