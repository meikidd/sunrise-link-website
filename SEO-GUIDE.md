# SEO 优化指南

本指南介绍了为 Sunrise Link 网站实施的 SEO 优化措施，以及如何在 Vercel 上获得最佳 SEO 效果。

## 📋 已实施的 SEO 优化

### 1. Meta 标签优化 (`index.html`)

#### 基础 Meta 标签
- ✅ Title: 包含关键词的描述性标题
- ✅ Description: 详细的页面描述（155-160字符）
- ✅ Keywords: 相关关键词列表
- ✅ Author, Language, Robots 标签

#### Open Graph (社交媒体分享)
- ✅ OG tags for Facebook/LinkedIn
- ✅ Twitter Card tags
- ✅ 社交媒体预览图片设置

#### 技术 SEO
- ✅ Canonical URL（规范化链接）
- ✅ 地理位置标签（新加坡）
- ✅ Theme color（品牌颜色）
- ✅ Preconnect 优化性能

### 2. 结构化数据 (JSON-LD)

添加了三种类型的结构化数据：

#### LocalBusiness Schema
```json
{
  "@type": "LocalBusiness",
  "name": "Sunrise Link Pte Ltd",
  "telephone": "+6582935678",
  "email": "info@sunriselink.sg",
  // ... 完整业务信息
}
```

**好处**：
- 在 Google 搜索中显示业务信息
- 出现在 Google Maps
- 显示营业时间、评分等

#### Organization Schema
```json
{
  "@type": "Organization",
  "name": "Sunrise Link Pte Ltd",
  "contactPoint": { ... }
}
```

**好处**：
- 建立品牌实体
- 知识图谱展示

#### WebSite Schema
```json
{
  "@type": "WebSite",
  "potentialAction": { "@type": "SearchAction" }
}
```

**好处**：
- 搜索框展示
- 改善站内搜索

### 3. 语义化 HTML 标签

将所有 `<div>` 替换为语义化标签：

- `<header>` - 页头
- `<footer>` - 页脚
- `<section>` - 内容区块
- `<article>` - 独立内容单元
- `<nav>` - 导航区域
- `<h1>`, `<h2>`, `<h3>` - 标题层级
- `<p>` - 段落
- `<address>` - 联系信息

**好处**：
- 帮助搜索引擎理解页面结构
- 提升可访问性（Accessibility）
- 符合 Web 标准

### 4. 辅助功能优化 (ARIA)

- `aria-label` - 为区块添加标签
- `aria-labelledby` - 关联标题和内容
- `aria-hidden="true"` - 隐藏装饰性图标

**好处**：
- 提升可访问性
- 改善 SEO 评分（Google 考虑可访问性）

### 5. 图片优化

优化了所有图片的 `alt` 属性：
```tsx
// 之前
<img src={HeroImage} alt="Sunrise Link hero image" />

// 优化后
<img src={HeroImage} alt="Professional domestic helper providing care services in Singapore" />
```

**好处**：
- 图片搜索优化
- 可访问性提升
- 当图片加载失败时提供上下文

### 6. robots.txt

```txt
User-agent: *
Allow: /
Sitemap: https://sunriselink.sg/sitemap.xml
Crawl-delay: 1
```

**位置**: `public/robots.txt`

**好处**：
- 引导搜索引擎爬虫
- 指向 sitemap
- 控制爬取频率

### 7. sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url>
    <loc>https://sunriselink.sg/</loc>
    <lastmod>2025-12-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... 其他页面 -->
</urlset>
```

**位置**: `public/sitemap.xml`

**好处**：
- 帮助搜索引擎发现所有页面
- 提高索引速度
- 明确页面优先级

**维护提示**：
- 每次更新内容时，更新 `<lastmod>` 日期
- 添加新页面时，添加新的 `<url>` 条目

### 8. Vercel 配置 (`vercel.json`)

```json
{
  "headers": [
    // 安全头部
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        // ... 更多安全头部
      ]
    },
    // 静态资源缓存
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    // SPA 路由支持
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**好处**：
- 提升安全性（SEO 排名因素）
- 优化缓存性能
- 支持 SPA 路由
- 提升 Core Web Vitals 分数

## 🚀 部署到 Vercel

### 方法 1: Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 构建项目
npm run build

# 4. 部署
vercel --prod
```

### 方法 2: GitHub 集成

1. 将代码推送到 GitHub
2. 在 Vercel Dashboard 中导入项目
3. 配置构建设置：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. 点击 Deploy

### 环境变量（如需要）

在 Vercel Dashboard 中设置：
- `NODE_VERSION`: `18.x` 或更高

## ✅ SEO 检查清单

部署后，使用以下工具验证 SEO：

### Google 工具
- [ ] [Google Search Console](https://search.google.com/search-console)
  - 提交 sitemap: `https://sunriselink.sg/sitemap.xml`
  - 验证 robots.txt
  - 检查索引状态

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - 检查 Core Web Vitals
  - 移动端性能
  - SEO 分数

- [ ] [Rich Results Test](https://search.google.com/test/rich-results)
  - 验证结构化数据
  - 检查 JSON-LD 格式

### 其他工具
- [ ] [Lighthouse](https://developers.google.com/web/tools/lighthouse)（Chrome DevTools）
  - SEO 分数
  - 性能分数
  - 可访问性分数
  - 最佳实践分数

- [ ] [Schema Markup Validator](https://validator.schema.org/)
  - 验证 JSON-LD 格式

- [ ] 社交媒体预览测试
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📊 持续优化建议

### 1. 内容优化
- 定期更新内容（保持 `sitemap.xml` 同步）
- 添加博客文章（建立专业性和权威性）
- 使用相关关键词，但避免关键词堆砌

### 2. 性能优化
```bash
# 优化图片
- 使用 WebP 格式
- 压缩图片
- 使用 CDN
```

### 3. 链接建设
- 获取高质量反向链接
- 在本地商业目录注册
- 创建 Google My Business 页面

### 4. 技术 SEO
- 定期检查 404 错误
- 确保 HTTPS（Vercel 自动提供）
- 监控网站速度

### 5. 本地 SEO（新加坡市场）
- 在 Google My Business 注册
- 在新加坡本地目录注册
- 收集客户评论
- 使用本地关键词

### 6. 监控和分析

安装 Google Analytics:

```html
<!-- 在 index.html 的 <head> 中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 期望结果

实施这些优化后，你可以期待：

1. **搜索引擎可见性提升**
   - 出现在 Google 搜索结果
   - Rich snippets（丰富摘要）展示
   - 业务信息卡片显示

2. **用户体验改善**
   - 更快的加载速度
   - 更好的可访问性
   - 移动端优化

3. **社交媒体分享**
   - 美观的分享预览
   - 正确的图片和描述

4. **SEO 分数**
   - Lighthouse SEO: 90+ 分
   - Google PageSpeed: 85+ 分
   - 符合 Core Web Vitals

## 📞 后续支持

如需进一步优化：
- 定期更新 sitemap.xml
- 监控 Google Search Console
- 根据分析数据调整策略
- 保持内容更新

---

**注意**: SEO 是一个持续的过程，通常需要 3-6 个月才能看到显著效果。保持耐心，持续优化！

