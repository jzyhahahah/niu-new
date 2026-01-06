# Cloudflare Pages 自动部署配置指南

## 1. 在 Cloudflare 控制台配置 Git 集成

### 步骤：
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** → **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权 Cloudflare 访问你的 GitHub 仓库
6. 选择你的仓库 `niu-new`
7. 配置构建设置：
   - **Framework preset**: None (或 Static HTML)
   - **Build command**: `npx wrangler deploy`（使用 wrangler 部署）
   - **Build output directory**: `/` (根目录)
   - **Root directory**: `/` (根目录)
   
   ✅ **使用 wrangler 部署**：项目已配置 `wrangler.jsonc`，会自动使用 wrangler 部署静态文件
8. 点击 **Save and Deploy**

### 自动部署
配置完成后，每次推送到 `main` 或 `master` 分支时，Cloudflare 会自动：
- 检测代码变更
- 自动构建（如果需要）
- 自动部署到 Cloudflare Pages

## 2. 解决中国大陆访问问题

### 方案 A：配置 Cloudflare 设置（推荐）

1. **在 Cloudflare Dashboard 中**：
   - 进入你的域名设置（如果使用自定义域名）
   - 或进入 Pages 项目设置

2. **优化设置**：
   - **Speed** → **Auto Minify**: 启用 HTML、CSS、JS 压缩
   - **Caching** → **Caching Level**: Standard
   - **Network** → **HTTP/2**: 启用
   - **Network** → **HTTP/3 (with QUIC)**: 启用（可能改善连接）

3. **使用 Cloudflare 的 CDN**：
   - Cloudflare Pages 默认使用全球 CDN
   - 确保你的 Pages 项目已启用

### 方案 B：使用 Cloudflare Workers（高级）

如果需要更好的中国大陆访问体验，可以考虑：
- 使用 Cloudflare Workers 作为代理
- 配置自定义域名并使用 Cloudflare 的加速服务

### 方案 C：检查 DNS 设置

如果使用自定义域名：
- 确保 DNS 记录正确指向 Cloudflare
- 使用 Cloudflare 的 DNS 服务器

## 3. 验证部署

部署完成后，你会获得一个类似这样的 URL：
```
https://niu-new.pages.dev
```

或者如果你配置了自定义域名：
```
https://yourdomain.com
```

## 4. 注意事项

- ✅ 使用 wrangler 部署静态文件
- ✅ `wrangler.jsonc` 已配置，指向当前目录作为资源目录
- ✅ `.wranglerignore` 已配置，排除 `.git`、文档文件等不需要的文件
- ✅ `_redirects` 文件已创建，用于处理路由重定向
- ✅ `.gitignore` 文件已创建，排除不需要的文件

## 5. 如果已经配置了项目

如果项目已经存在：

1. 进入 Cloudflare Pages 项目设置
2. 进入 **Builds & deployments** → **Build configuration**
3. 确保 **Build command** 设置为：`npx wrangler deploy`
4. 保存设置
5. 触发一次新的部署（可以推送一个小的更改到 GitHub）

## 6. 关于 .wranglerignore

`.wranglerignore` 文件确保以下文件不会被上传：
- `.git/` 目录及其所有内容
- 文档文件（`.md`）
- 临时文件（`.txt`, `.log`）

这样可以减少部署时间，只上传必要的静态文件。
