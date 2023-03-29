# Golang 流程控制

---

- `if[ else if | else ]`条件语句

```go
// 写一个if语句
condition := true
if condition {
    // 条件为真执行
} else {
    // 条件为假执行
}
```

- `for`循环语句

```go
// for
for i := 0; i < 10; i++ {
    // 循环语句
}

// while
condition := true
for condition {
    // 循环语句
}

// do while
for {
    // 循环语句
    if condition {
        break
    }
}

// 标签label
condition := true
lab1:
for {
    if condition {
        break lab1
    }
}
```

- `switch case`语句

```go
switch branch {
    case branch_1:
        // 分支语句
        // 默认每个分支break，与js等语言不同，默认是fallthrough
    case branch_2:
        // 分支语句
        fallthrough
    case branch_3:
        // 分支语句，由于上一个分支末尾使用`fallthrough`，因此上
        // 一个分支执行完会继续执行此分支代码
    case branch_4:
        // 分支语句，上上分支执行完会进入上分支，因上分支与此分支
        // 之间没有`fallthrough`，则默认为break，因此不会进入此分支
        // 上分支执行完
    default:
        // 默认分支，即上述所有分支均未匹配时执行
}
```

- `goto`语句
  > 与 label 标签一起使用
