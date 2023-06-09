# Reconciliation 协调

## 两个假设

- 两个不同类型的元素会产生出不同的数
- 开发者可以使用 key 属性标识那些子元素在不同的渲染中可能是不变的

## Diff 算法

- 当跟元素类型不同时都会触发一个完整的重建流程
- 当对比元素类型相同时，react 会保留 DOM 节点，仅对于及更新有变化的属性
  - 处理完当前节点，react 继续递归处理子节点
- 对比同类型的组件元素，组件实例保持不变，仅对 props 进行更新
- 对子元素进行递归
  - 默认情况下，当递归 DOM 节点的子元素时，react 会同时遍历两个子元素的列表，当产生差异时，会生产一个 mutation，因此保持元素顺序很重要，由于遍历是有顺序的，因此当在列表前添加元素会重新创建每一个子元素，导致性能问题，即将元素添加到末尾，会带来更高的性能提升。
  - 为了解决这个问题 react 引入 key 属性，react 使用 key 来匹配旧树上的子元素以及新树上的子元素
  - 最后，你也可以使用元素在数组中的下标作为 key。这个策略在元素不进行重新排序时比较合适，如果有顺序修改，diff 就会变慢。？？？由于修改数组元素数据将导致相同 key 在两个树上内容不一致，react 需要需要对每个元素重新创建或修改
    - 当基于下标的组件进行重新排序时，组件 state 可能会遇到一些问题。由于组件实例是基于它们的 key 来决定是否更新以及复用，如果 key 是一个下标，那么修改顺序时会修改当前的 key，导致非受控组件的 state（比如输入框）可能相互篡改，会出现无法预期的变动。
