# 影视爱好者网站 Demo

一个简单而美观的影视爱好者网站演示项目。

## 功能特性

- 🎬 精美的电影卡片展示
- 🔍 实时搜索功能
- 📱 响应式设计，支持移动端
- 🎨 现代化的UI设计
- ⭐ 电影评分和标签系统

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用 Cloudflare Workers 部署（已配置 `wrangler.jsonc`）

## 技术栈

- HTML5
- CSS3 (Grid布局、Flexbox、渐变效果)
- Vanilla JavaScript

## 项目结构

```
.
├── index.html      # 主页面文件（包含HTML、CSS和JavaScript）
├── wrangler.jsonc  # Cloudflare Workers 配置文件
└── README.md       # 项目说明文档
```

## 部署

### 本地预览
直接打开 `index.html` 文件即可在浏览器中查看。

### Cloudflare Workers 部署
```bash
npx wrangler pages deploy .
```

## 未来改进

- [ ] 添加电影详情页面
- [ ] 集成真实的电影API
- [ ] 添加收藏功能
- [ ] 添加评论系统
- [ ] 支持多语言

