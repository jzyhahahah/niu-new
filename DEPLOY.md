# 部署说明

## 问题解决

如果遇到错误：`Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx"`

**原因**：直接部署了源代码而不是构建后的文件。

**解决方案**：必须先构建项目，然后部署 `dist` 目录。

## 部署步骤

### 1. 本地构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build
```

构建完成后，会在项目根目录生成 `dist` 文件夹。

### 2. 部署到 Cloudflare Pages

#### 使用 Wrangler CLI

```bash
npx wrangler pages deploy dist
```

#### 使用 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 部分
3. 点击 **Create a project**
4. 选择 **Upload assets**
5. 上传 `dist` 文件夹中的所有文件

#### 使用 Git 集成（推荐）

1. 在 Cloudflare Dashboard 中创建 Pages 项目
2. 连接你的 Git 仓库（GitHub/GitLab）
3. 配置构建设置：
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (项目根目录)

### 3. 验证部署

部署完成后，访问你的 Pages URL，应该能看到网站正常运行。

## 项目配置说明

项目已包含以下配置文件：

- `wrangler.jsonc` - Wrangler CLI 配置，指向 `dist` 目录
- `public/_redirects` - SPA 路由重定向规则（所有路由重定向到 index.html）
- `public/_headers` - HTTP 头配置，确保正确的 MIME 类型
- `.cloudflare/pages.json` - Cloudflare Pages 构建配置

## 常见问题

### Q: 为什么不能直接部署源代码？

A: 源代码中的 JSX 文件需要被编译成 JavaScript 才能被浏览器执行。Vite 在构建过程中会将所有 JSX 文件编译并打包成浏览器可执行的 JavaScript 文件。

### Q: 构建后的文件在哪里？

A: 构建后的文件在 `dist` 目录中。这个目录包含了所有编译后的 HTML、CSS 和 JavaScript 文件。

### Q: 如何本地预览构建后的版本？

A: 运行 `npm run preview` 可以在本地预览构建后的版本。

### Q: 路由不工作怎么办？

A: 确保 `public/_redirects` 文件已正确部署，它包含了 SPA 路由重定向规则。

## 其他平台部署

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

### GitHub Pages

1. 构建项目：`npm run build`
2. 将 `dist` 目录的内容推送到 `gh-pages` 分支
3. 在 GitHub 仓库设置中启用 Pages

