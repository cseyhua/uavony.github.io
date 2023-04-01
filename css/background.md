# Background

- background-color:设置背景颜色，不可用于简写

以下

属性:

- `background-clip`

  - `border-box`
  - `padding-box`
  - `content-box`
  - `text`: 背景被裁剪成文字的前景色

- `background-attachment`

  - `fixed`: 相对视口固定
  - `scroll`: 相对元素本身固定，不随内容滚动
  - `local`: 相对元素内容固定

- `background-image`

  - `none`
  - `<iamge>`

- `background-origin`: `background-image`原点位置的相对区域

  - `border-box`
  - `padding-box`
  - `content-box`

- `background-position`: 相对与上一个属性定义的位置图层

  - `top`
  - `right`
  - `bottom`
  - `left`
  - `center`
  - `<percentage>`
  - `<length>`
  - `edge offset value: bottom 10px`

- `background-repeat`: 重复方式

  - `repeat`
  - `repeat-x`
  - `repeat-y`
  - `no-reapt`
  - `round`
  - `space`

- `background-size`:

  - `cover`
  - `contain`
  - `auto`
  - `<length>`
  - `<precentage>`

> 上面`cover`，`contain`，`auto`都保持比例缩放，`cover`会将整个盒子填满，`contain`则不会填满整个盒子
