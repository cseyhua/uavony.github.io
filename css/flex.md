# CSS Flexible Layout

CSS Flexible 是一个一维布局方案，因为同时只能在一行或一列对子元素进行排列布局。

- `flex-direction`

CSS Flexible Layout 由两个轴组成：主轴与交叉轴，通过`flex-direction`属性指定盒子的主轴，可取值

- `row`
- `column`
- `row-reverse`
- `column-reverse`

其中`row`、`row-reverse`沿内联方向延伸，`column`、`column-reverse`沿块方向延伸。

交叉轴与主轴垂直。flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。

- `flex-wrap`

默认情况下，当子元素总宽度超出 flex 主轴宽度时候会缩小子元素，我们可以使用`flex-wrap`属性设置进行换行。

- `nowrap`
- `wrap`

::: tip
上面介绍的两个属性可以使用`flex-flow`属性简写`flex-direction flex-wrap`
:::

## 直接子元素控制

为了更好的控制 flex 盒子的元素，我们可以给子元素设置以下属性

- `flex-grow`

如果设置属性值为正值，元素将被允许拉伸，指定的值是分配的可用空间的比例（值/(所有分配值的和)）

- `flex-shrink`

控制元素的收缩

- `flex-basis`

属性指定了该元素的空间大小，默认情况下为`auto`，浏览器检测元素是否具有确定宽度，如果没有指定则采用元素内容的大小。

::: tip
可以对以上三个属性使用`flex`属性进行简写`flex-wrap flex-shrink flex-basis`，可以按顺序或缺。`flex`属性有以下预设值

- `initial`: `0 1 auto`
- `auto`: `1 1 auto`
- `none`: `0 0 auto`
- `<positive-number>`
  :::

## 元素间的对齐与空间分配

- `align-items`

属性可以控制元素在交叉轴上的对齐方式，可能的值为`stretch`、`flex-start`、`flex-end`、`center`，其中`stretch`为默认值

- `justify-content`

属性可以控制元素在主轴方向上的对齐方式，可能的值为`space-around`、`space-between`、`center`、`flex-start`、`flex-end`、`stretch`

## Box Alignment

- `gap`

浏览器实现`flex`布局之前，只能通过`margin`实现元素之间的间隙距离

::: tip
这些布局方式与输入模式有关`writing-mode`属性可以设置 CSS Box 的书写模式。可能的属性值有

- `horizontal-tb`
- `vertical-lr`
- `vertical-rl`
- `sideways-rl`
- `sideways-lr`

:::

## display:contents

会将子元素直接应用自己所在布局

## Flexible Box 对齐

- `justify-content`

控制主轴（横轴）上所有 flex 项目的对齐。

- `align-items`

控制交叉轴（纵轴）上所有 flex 项目的对齐。

align-items: flex-start flex 项目的开始端的对齐
align-items: flex-end flex 项目的结束端对齐
align-items: center flex 项目居中对齐
align-items: stretch flex 项目撑满 flex 容器
align-items: baseline flex 项目的基线对齐

- `align-self`

控制交叉轴（纵轴）上的单个 flex 项目的对齐。

- `align-content`

控制“多条主轴”的 flex 项目在交叉轴的对齐。

到现在为止，我们已经对定义在 flex 容器里的 flex 项目或者单个 flex 项目进行对齐操作了。如果你有一个折行的多条 flex 项目的 flex 容器，然后你可能想使用 align-content 来控制每行之间空间的分配，在这种特定的场景叫做 packing flex lines。

align-content: flex-start
align-content: flex-end
align-content: center
align-content: space-between
align-content: space-around
align-content: stretch
align-content: space-evenly
