# X-Content-Type-Options HTTP

---

- 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 Content-Type 首部中对 MIME 类型 的设定，而不能对其进行修改

```
X-Content-Type-Options: nosniff
```

- 指令
  - nosniff
    - 请求类型是"style" 但是 MIME 类型不是 "text/css"，
    - 请求类型是"script" 但是 MIME 类型不是 JavaScript MIME 类型

# X-Frame-Options

---

- 响应头是用来给浏览器指示允许一个页面可否在 `<frame>、<iframe>、<embed>` 或者 `<object>` 中展现的标记
- 站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持 (en-US)攻击

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

- 如果设置为 DENY，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。- SAMEORIGIN，表示该页面可以在相同域名页面的 frame 中展示

- Apache

```
Header always set X-Frame-Options "SAMEORIGIN"
Header set X-Frame-Options "DENY"
```

- Nginx

```
add_header X-Frame-Options SAMEORIGIN always;
```

- Express

```
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
```

# X-XSS-Protection

- 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 (XSS (en-US)) 时，浏览器将停止加载页面

```
X-XSS-Protection: 0 // 禁止XSS过滤
X-XSS-Protection: 1 // 启用XSS过滤 若检测到则清除页面
X-XSS-Protection: 1; mode=block // 启用，如检测到不会清除页面，而是阻止页面加载
X-XSS-Protection: 1; report=<reporting-uri> // 启用，若检测到，清除页面，并使用CSP指令的功能发送违规报告
```
