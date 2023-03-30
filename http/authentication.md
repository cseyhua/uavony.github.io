# HTTP Authentication

---

> HTTP 提供一个用于权限控制和认证的通用框架，本页介绍了通用的 HTTP 认证框架，并且展示了如何通过 HTTP “Basic”模式限制对你服务器的访问

## 通用 HTTP 认证框架

> 状态码:401
> 质询与响应的工作流程如下:

- 服务器端向客户端返回 401（Unauthorized，未被授权的）响应状态码，并在 WWW-Authenticate 响应标头提供如何进行验证的信息，其中至少包含有一种质询方式。
- 之后，想要使用服务器对自己身份进行验证的客户端，可以通过包含凭据的 Authorization 请求标头进行验证。
- 通常，客户端会向用户显示密码提示，然后发送包含正确的 Authorization 标头的请求。

## 代理认证

> 状态码:407
> 与通用 HTTP 认证框架原理相同:

- 将响应标头的`WWW-Authenticate`变为`Proxy-Authenticate`
- 将请求标头的`Authorization`变成`Proxy-Authorization`

## 禁止访问

- 收到无效的凭证，则响应 401/407
- 收到有效凭证，不足以访问给定的资源，服务器响应 403 Forbidden，与 401/407 不同，该用户无法进行身份验证并且浏览器不会提出新的尝试
- 在所有情况下，服务器更可能返回 404 Not Found 状态码，以向没有足够权限或未正确验证的用户隐藏页面的存在

## 响应标头 WWW-Authenticate & Proxy-Authenticate

> 明确要进行验证的方案

语法:

```
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

- `<type>`:Basic
- `realm`:用来描述进行保护的区域，或者指代保护的范围

## 验证请求标头`Authorization` & `Proxy-Authorization`

> 包含向服务器或代理服务器提供的用户身份验证凭证

```
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## 常见的验证框架

- `Basic`: base64 编码凭证

使用用户 ID、密码作为凭证信息，由于采用 base64 编码，即以明文进行传输，所以基本验证方案并不安全，可以搭配 HTTPS/TLS 一起使用

- `Bearer`: OAuth 2.0 保护资源

- `Digest`: 支持 SHA-256 算法，以前版本支持 MD5 散列

- `HOBA`: 阶段三，HTTP Origin-Bound 认证，基于数字签名

## 使用 Apache 限制访问和 basic 身份验证

> 要对 Apache 服务器上的目录进行密码保护，你需要一个`.htaccess`和`.htpasswd`文件

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

## Nginx 访问限制和 baisc 认证

> 在 nginx 中，你需要指定一个要保护的 location 并且 auth_baisc 指令提供密码保护区域的名称
> ，auth_basic_user_file 指令指定包含加密的用户凭证.htpasswd 文件，
