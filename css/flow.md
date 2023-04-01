# 流布局:常规流布局

## 那些操作会是元素脱离常归流

- `float`
- `position: absolute|fixed`
- `root html`

::: tip
脱离正常文档流的元素会创建一个块级格式上下文
:::

下列是会产生块级格式化上下文
使用 float 使其浮动的元素  
绝对定位的元素 (包含 position: fixed 或 position: sticky  
使用以下属性的元素 display: inline-block  
表格单元格或使用 display: table-cell, 包括使用 display: table-\* 属性的所有表格单元格  
表格标题或使用 display: table-caption 的元素  
块级元素的 overflow 属性不为 visible  
元素属性为 display: flow-root 或 display: flow-root list-item  
元素属性为 contain: layout, content, 或 strict  
flex items  
网格布局元素  
multicol containers  
元素属性 column-span 设置为 all
