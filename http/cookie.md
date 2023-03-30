# Cookie

---

- Cookie 主要用于以下三个方面

  - 会话状态管理
  - 个性化设置
  - 浏览器行为跟踪

- 创建 Cookie

  - 服务器使用`Set-Cookie`响应头部向用户代理发送`Cookie`信息

  ```
  Set-Cookie: cookie-key: cookie-value
  Set-Cookie: cookie-key1: cookie-value1
  ```

- 定义 Cookie 的生命周期

  - 会话器 Cookie 会在当前会话结束之后删除
  - 持久性 Cookie,在过期时间`Expires`指定的日期或有效期`Max-Age`指定的一段时间后被删除

  ```
  Set-Cookie: key1=value1; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
  ```

  - 如果对用户身份进行验证，应该重新发放 Cookie，防止会话固定攻击

- 限制访问 Cookie
  - `Secure`
  - `HttpOnly`
  ```
  Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
  ```
- 定义 Cookie 发放的位置

  - Domain:默认为同一 host
  - Path: "/docs"
  - SameSite:Strict/Lax/None

- JS 访问 Cookie

  - `Document.cookie`

- 防止 Cookie 攻击
  - `HttpOnly`
  - `SameSite`
