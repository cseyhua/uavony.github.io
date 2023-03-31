# 内容协商
---

> 服务器通过这个 URL 来选择它指向的资源的某一可用的变体——每一个变体称为
一种表示形式——然后将这个选定的表示形式返回给客户端。整个资源，以及它的各种表示形式，共享一个特定的 URL


## 内容协商的基本原则

最佳表示形式的选取可以通过两种机制实现:
- 客户端设置特定的 HTTP 标头（又称为服务端驱动型内容协商或者主动内容协商），这是进行内容协商的标准方式。
- 服务器返回 300（Multiple Choices）或者 406（Not Acceptable）、415（Unsupported Media Type）HTTP 响应状态码
（又称为代理驱动型协商或者响应式协商），这种方式一般用作备选方案。


## 服务端驱动型内容协商机制/主动内容协商

> 服务器则以此为线索，通过内部算法来选择最佳方案提供给客户端。如果它不能提供一个合适的资源，
它可能使用 406（Not Acceptable）、415（Unsupported Media Type）
进行响应并为其支持的媒体类型设置标头（例如，分别对 POST 和 PATCH 请求使用 Accept-Post (en-US) 或 Accept-Patch 标头）

启动内容协商的标头
- `Accept`: 用户代理希望接收的媒体资源的MIME类型，其中不同的 MIME 类型之间用逗号分隔，
同时每一种 MIME 类型会配有一个品质因数（quality factor），该参数明确了不同 MIME 类型之间的相对优先级。
- `Accept-Charset`: 
- `Accept-Encoding`
- `Accept-Language`
- `Vary`: 那些标头被用于内容协商


## 代理驱动型内容协商机制/响应式协商
