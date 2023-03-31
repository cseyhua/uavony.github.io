# CSS Animation

> 使得可以将从一个 CSS 样式配置转换到另一个 CSS 样式配置，描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。

## 配置动画

> 由 animation 属性配置，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 @keyframes 规则实现

子属性:

- animation-delay
- animation-direction
  - normal
  - alternate
  - reverse
  - alternate-reverse
- animation-duration
- animation-iteration-count
  - number
  - infinite
- animation-name
- animation-play-state
  - running
  - paused
- animation-timing-function
  - ease
  - ease-in
  - ease-out
  - ease-in-out
  - linear
  - step-start
  - step-end
  - cubic-bezier
  - steps
  - frames
- animation-fill-mode
  - none
  - forwards
  - backwards
  - both

## 使用 keyframes 定义动画序列

- `0%/from`
- `100%/to`

## 动画事件 AnimationEvent

- `animationstart`
- `animationiteration`
- `animationend`
