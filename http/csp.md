# CSP/内容安全策略

---

- what is the CSP?

- 制定策略

  - 添加 HTTP 标头
    `Content-Security-Policy: policy`
  - `head meta`

- 编写策略

  - `default-src`: 其他资源类型没有符合自己策略时应用
  - 包含`default-src`或`script-src`指令来防止内联脚本攻击，并杜绝`eval`的使用
  - 包含`default-src`或`style-src`限制一个来自`style`元素或属性的内联样式

- 实例

  - 一个网站管理者想要所有内容均来自站点的同一个源（不包括其子域名）

  ```
  Content-Security-Policy: default-src 'self'
  ```

  - 一个网站管理者允许内容来自信任的域名及其子域名（域名不必须与 CSP 设置所在的域名相同）

  ```
  Content-Security-Policy: default-src 'self' *.trusted.com
  ```

  - 一个网站管理者允许网页应用的用户在他们自己的内容中包含来自任何源的图片，但是限制音频或视频需从信任的资源提供者，所有脚本必须从特定主机服务器获取可信的代码。

  ```
  Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
  ```

  - 一个线上银行网站的管理者想要确保网站的所有内容都要通过 SSL 方式获取，以避免攻击者窃听用户发出的请求。

  ```
  Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
  ```

  - 一个在线邮箱的管理者想要允许在邮件里包含 HTML，同样图片允许从任何地方加载，但不允许 JavaScript 或者其他潜在的危险内容

  ```
  Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
  ```

- 测试策略

  - `Content-Security-Policy-Report-Only: policy`，部署为仅报告模式
  - 在策略里面至少指定一个`report-uri`
