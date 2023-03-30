# CORS:跨域资源共享

---

- 跨源资源共享（CORS，或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。在预检中，浏览器发送的头中标示有 HTTP 方法和真实请求中会用到的头。

## 同源策略

- 同源策略是一个重要的安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

- 源的定义

  - 同源 URL
    - 协议
    - 端口
    - 主机/域名

- 源的继承

  - 在页面中通过 about:blank 或 javascript: URL 执行的脚本会继承打开该 URL 的文档的源，因为这些类型的 URL 没有包含源服务器的相关信息。

- 文件源
  - 现代浏览器通常将使用 file:/// 模式加载的文件的来源视为不透明的来源。这意味着，假如一个文件包括来自同一文件夹的其他文件，它们不会被认为来自同一来源，并可能引发 CORS 错误。

## 什么情况下需要 CORS

- XMLHttpRequest & Fetch API
- Web 字体
- WebGL 贴图
- 使用 drawImage，将图片或者视频绘制到 canvas
- 来自图像的 CSS 图形

## 场景

- 简单请求
  - 响应标头必须返回`Access-Control-Allow-Origin`
- 预检请求

  - 必须先使用 OPTIONS 方法发起一个预检请求到服务器，获知服务器是否允许该实际请求，避免跨域请求对服务器的用户数据产生未预期的影响
  - 实际的 POST 请求不会携带 Access-Control-Request-\* 标头，它们仅用于 OPTIONS 请求
  - OPTIONS 携带标头

  ```
  Access-Control-Request-Method: POST
  Access-Control-Request-Headers: X-PINGOTHER, Content-Type
  ```

  - 响应携带标头

  ```
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Methods: POST, GET, OPTIONS
  Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
  Access-Control-Max-Age: 86400
  ```

  - 预检请求与重定向

    - 有两种方式规避上述报错行为
      - 在服务端去掉对预检请求的重定向
      - 将实际请求变成一个简单请求
    - 上面两种方式难以做到，我们仍有其他办法

      - 发出一个简单请求（使用 Response.url 或 XMLHttpRequest.responseURL）以判断真正的预检请求会返回什么地址
      - 发出另一个请求（真正的请求），使用在上一步通过 Response.url 或 XMLHttpRequest.responseURL 获得的 URL。

    - 附带身份凭证的请求
      - `Access-Control-Allow-Credentials: true`

## HTTP 响应标头字段

- `Access-Control-Allow-Origin: origin | *`
- `Access-Control-Expose-Headers`
  - 在跨源访问时，XMLHttpRequest 对象的 getResponseHeader() 方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头
  - `Access-Control-Expose-Headers: <header-name>[, <header-name>]*`
- `Access-Control-Max-Age`
  - Access-Control-Max-Age 头指定了 preflight 请求的结果能够被缓存多久，请参考本文在前面提到的 preflight 例子。
- `Access-Control-Allow-Credentials`
  - 指定了当浏览器的 credentials 设置为 true 时是否允许浏览器读取 response 的内容。当用在对 preflight 预检测请求的响应中时，它指定了实际的请求是否可以使用 credentials。请注意：简单 GET 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页
- `Access-Control-Allow-Methods`
  - 指定了访问资源时允许使用的请求方法，用于预检请求的响应
- `Access-Control-Allow-Headers`
  - 用于预检请求的响应。其指明了实际请求中允许携带的标头字段。这个标头是服务器端对浏览器端 Access-Control-Request-Headers 标头的响应

## HTTP 请求标头字段

- `Origin`
  - 标头字段表明预检请求或实际跨源请求的源站
- `Access-Control-Request-Method`
  - 标头字段用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器
- `Access-Control-Allow-Header`
  - 标头字段用于预检请求。其作用是，将实际请求所携带的标头字段（通过 setRequestHeader() 等设置的）告诉服务器。这个浏览器端标头将由互补的服务器端标头 Access-Control-Allow-Headers 回答
