# HTTP 重定向

---

可用于:

- 站点维护或停机期间的临时重定向
- 永久重定向将在更改站点的 URL 后，保留现有的链接/书签、上传文件时表示进度的页面等。

## 原理

> 由服务器向请求发送特殊的重定向响应而触发，包含以 3 开头的状态码，以及 Location 标头

- 永久重定向
  - 301 Moved Permanently，GET 方法不会发生变更。其他方法有可能会变更为 GET 方法。
  - 308 Permanent Redirect， 方法和消息主体都不发生变化。
- 临时重定向
  - 302 Found，GET 方法不会发生变更。其他方法有可能会变更为 GET 方法
  - 303 See Other，GET 方法不会发生变更，其他方法会变更为 GET 方法（消息主体丢失）
  - 307 Temporary Redirect，方法和消息主体都不发生变化。
- 特殊重定向
  - 304 Not Modified，会使页面跳转到本地的缓存副本中
  - 300 Multipart Choise

## 重定向的其他方式

- `meta`
- `DOM`

### meta

将`http-equiv`属性设置为`refresh`，`content`为`number, uri`

### DOM

设置`window.location=uri`

> 上述三种重定向机制优先级依次递减

## 重定向死锁

- 如果服务器检测不到，就会返回 500 Internal Server Error
