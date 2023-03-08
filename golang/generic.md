# Golang的泛型编程
---
怎么定义泛型函数
```go
func funName[T genericType](arg1, arg2 T) Tzz {
	fun struct
}
```

怎么定义泛型匹配多个类型
```
type customGenericType interface {
	int64 | int32
	int64
}
// 在接口里面同行使用|求并集，多行求交集，结果作为约束
```

怎么定义衍生类型
```
type 衍生变量名 原始类型
// 例如 type MyInt int64
```

怎么定义类型别名
```
type 类型别名 = 原始类型
// 例如 type MyInt = int64
```

Golang的一些内建类型
- `comparable`: `==`与`!=`可比较类型
- `any`类型:`type any interface{}`

实践: 集合转列表
```go
func mapToList[K comparable, T any](mp map[K]T) []T {
	list := make([]T, len(mp))
	var i int
	for _,data := range mp {
		list[i] = data
		i++
	}
	return list
}
```


关于`chan`与`go`的使用
```go
// chan 消息消费 go 开启携程
// 通过 ch <- T 向通道添加数据，进行数据消费
// 使用make创建通道
```

泛型切片的定义
```go
type List[T any] []T
```

泛型集合的定义
```go
type MapT[K comparable, V any] map[K]V
```

泛型通道的定义
```go
type Chan[T] chan T
```

map类型变量创建
```go
make(map[K]V, size)
```

泛型接口
```go
type GetKey[T comparable] interface {
	any
	Get() T
}
```

列表转集合
```go
func listToMap[K comparable, T GetKey[K]](list []T) map[K]T {
	mp := make(map[K]T, len(list))
	for _,data := range list {
		mp[data.Get()] = data
	}
	return mp
}
```

泛型结构体
```go
type MyStruct[T interface{*int | *string*}] struct {
	Name string
	Data T
}

func (myStruct MyStruct[T]) GetData() T {}

```

- 不支持断言
- 不支持泛型方法