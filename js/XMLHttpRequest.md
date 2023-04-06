# XMLHttpRequest

XMLHttpRequest（XHR）对象用于与服务器交互  

## 构造函数`XMLHttpRequest`


## 属性

- `XMLHttpRequest.onreadystatechange`  
只要 readyState 属性发生变化，就会调用相应的处理函数 (en-US)。这个回调函数会被用户线程所调用。XMLHttpRequest.onreadystatechange 会在 XMLHttpRequest 的readyState 属性发生改变时触发 readystatechange 事件的时候被调用。

- `XMLHttpRequest.readyState`  
XMLHttpRequest.readyState 属性返回一个 XMLHttpRequest 代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个：

|值|状态|描述|
|:-:|:-:|:-:|
|0	|UNSENT|	代理被创建，但尚未调用 open() 方法。|
1|	OPENED|	open() 方法已经被调用。|
2|	HEADERS_RECEIVED|	send() 方法已经被调用，并且头部和状态已经可获得。|
3|	LOADING|	下载中；responseText 属性已经包含部分数据。|
4|	DONE|	下载操作已完成。|

- `XMLHttpRequest.response`  
XMLHttpRequest 的 response 属性返回响应的正文。返回的类型为 ArrayBuffer、Blob、Document、JavaScript Object 或字符串中的一个。这取决于请求的 responseType 属性。  

responseType 要在调用 open() 初始化请求之后以及在调用 send() 发送请求到服务器之前设置。

- `XMLHttpRequest.responseText`

- `XMLHttpRequest.responseType`  
XMLHttpRequest 属性 responseType 是一个枚举字符串值，用于指定响应中包含的数据类型。

- `XMLHttpRequest.responseURL`  
只读属性 XMLHttpRequest.responseURL 返回响应的序列化 URL，如果 URL 为空则返回空字符串。如果 URL 有锚点，则位于 URL # 后面的内容会被删除。如果 URL 有重定向，responseURL 的值会是经过多次重定向后的最终 URL。

- `XMLHttpRequest.responseXML`  
XMLHttpRequest.responseXML 属性是一个只读值，它返回一个包含请求检索的 HTML 或 XML 的Document，如果请求未成功，尚未发送，或者检索的数据无法正确解析为 XML 或 HTML，则为 null。默认是当作“text / xml”来解析。当 responseType 设置为“document”并且请求已异步执行时，响应将被当作“text / html”来解析。responseXML 对于任何其他类型的数据以及 data: URLs 为 null。

- `XMLHttpRequest.status`  
只读属性 XMLHttpRequest.status 返回了 XMLHttpRequest 响应中的数字状态码。status 的值是一个无符号短整型。在请求完成前，status 的值为 0。值得注意的是，如果 XMLHttpRequest 出错，浏览器返回的 status 也为 0。status 码是标准的 HTTP status codes。举个例子，status 200 代表一个成功的请求。如果服务器响应中没有明确指定 status 码，XMLHttpRequest.status 将会默认为 200。

- `XMLHttpRequest.statusText`

- `XMLHttpRequest.timeout`

- `XMLHttpRequest.withCredentials`

## 方法

- `abort`

- `getAllResponseHeaders`

- `getResponseHeader`

- `open`

- `overrideMimeType`

- `send`

- `setRequestHeader`


## 事件

- `abort`/onabort
- `error`/onerror
- `load`/onload
- `loadend`/onloadend
- `loadstart`/onloadstart
- `progress`/onprogress
- `timeout`/ontimeout