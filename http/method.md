# HTTP 请求方法

---

`DELETE`:

> 请求方法用于删除指定的资源

如果成功执行，可能返回的状态码

- 202 Accepted:表示请求的操作可能会成功执行，但是尚未开始执行
- 204 No Content:表示操作已执行，但是无进一步的相关信息
- 200 OK:表示操作已执行，并且响应中提供了相关状态的描述信息

`GET`

> 方法请求指定的资源。使用 GET 的请求应该只用于获取数据

`HEAD`

> 请求资源的头部信息，并且这些头部与 HTTP GET 方法请求时返回的一致。该请求方法的一个使用场景是在下载一个大文件前先获取其大小再决定是否要下载，以此可以节约带宽资源。

`OPTIONS`

> 用于获取目的资源所支持的通信选项。客户端可以对特定的 URL 使用 OPTIONS 方法，也可以对整站（通过将 URL 设置为“\*”）使用该方法。

`PATCH`

> 请求方法 PATCH 用于对资源进行部分修改

`POST`

> 发送数据给服务器

`PUT`

> 请求方法使用请求中的负载创建或者替换目标资源

`TRACE`

> 实现沿通向目标资源的路径的消息环回（loop-back）测试，提供了一种实用的 debug 机制。
