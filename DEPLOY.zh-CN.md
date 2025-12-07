# 🚀 部署指南（中文）

## 快速部署到 Vercel

### 方法 1: 使用 Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI（只需要执行一次）
npm install -g vercel

# 2. 登录到 Vercel
vercel login

# 3. 检查 SEO 文件
npm run seo:check

# 4. 构建项目
npm run build

# 5. 部署到生产环境
vercel --prod
```

### 方法 2: 通过 GitHub 自动部署

1. **推送代码到 GitHub**
```bash
git add .
git commit -m "Add SEO optimizations"
git push origin main
```

2. **在 Vercel 中导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库
   - 配置如下：
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - 点击 "Deploy"

3. **自动部署**
   - 以后每次 push 到 main 分支都会自动部署
   - Pull Request 会创建预览部署

## 📋 已实施的 SEO 优化

✅ **完整的 Meta 标签**
- Title, Description, Keywords
- Open Graph (社交媒体分享)
- Twitter Card
- Canonical URL

✅ **结构化数据 (JSON-LD)**
- LocalBusiness（本地商业）
- Organization（组织）
- WebSite（网站）

✅ **SEO 文件**
- `public/robots.txt` - 引导搜索引擎爬虫
- `public/sitemap.xml` - 站点地图
- `vercel.json` - Vercel 配置（缓存、安全头部）

✅ **语义化 HTML**
- 使用 `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`
- 正确的标题层级 `<h1>`, `<h2>`, `<h3>`
- ARIA 标签提升可访问性

✅ **图片优化**
- 所有图片都有描述性的 alt 文本
- 有助于图片搜索和可访问性

## 🔍 部署后的 SEO 验证

### 1. 提交到 Google Search Console

```
1. 访问: https://search.google.com/search-console
2. 添加你的网站
3. 验证所有权（Vercel 可以自动验证）
4. 提交 Sitemap: https://sunriselink.sg/sitemap.xml
```

### 2. 测试结构化数据

访问 [Rich Results Test](https://search.google.com/test/rich-results)
- 输入你的网址
- 检查是否正确识别了 LocalBusiness 数据

### 3. 性能测试

访问 [PageSpeed Insights](https://pagespeed.web.dev/)
- 输入你的网址
- 目标分数：
  - 性能 (Performance): 90+
  - SEO: 95+
  - 可访问性 (Accessibility): 90+
  - 最佳实践 (Best Practices): 90+

### 4. 社交媒体预览测试

**Facebook**:
- 访问: https://developers.facebook.com/tools/debug/
- 测试你的网址

**Twitter**:
- 访问: https://cards-dev.twitter.com/validator
- 测试你的网址

## 📊 监控和维护

### 安装 Google Analytics（可选）

1. 创建 Google Analytics 账户
2. 获取测量 ID（格式：G-XXXXXXXXXX）
3. 在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 定期维护

**每周**:
- 检查 Google Search Console 是否有错误
- 查看网站流量和排名变化

**每月**:
- 更新 `sitemap.xml` 的 `<lastmod>` 日期
- 运行性能测试
- 检查是否有 404 错误

**每季度**:
- 更新网站内容
- 检查关键词排名
- 分析竞争对手

## 🎯 预期效果

实施这些优化后，预期在 **2-4 周**内：

✅ Google 开始索引你的网站
✅ 在搜索结果中出现
✅ 社交媒体分享有正确的预览

预期在 **2-3 个月**内：

✅ 关键词排名开始提升
✅ 自然流量增加
✅ 出现在本地搜索结果

## ⚡ 性能优化提示

### 1. 图片优化（推荐）

将图片转换为 WebP 格式以提升性能：

```bash
# 安装 sharp-cli
npm install -g sharp-cli

# 转换图片
sharp -i public/banner-bg.jpg -o public/banner-bg.webp
sharp -i public/banner-hero.png -o public/banner-hero.webp
sharp -i public/logo_en_zh.png -o public/logo_en_zh.webp
```

### 2. 启用 Vercel Analytics

在 Vercel Dashboard 中启用 Analytics：
- 进入项目设置
- 点击 "Analytics"
- 启用 Web Analytics
- 查看实时性能数据

### 3. 检查构建输出

```bash
npm run build
```

检查 `dist` 文件夹：
- JS bundle 应该 < 200KB（gzipped）
- CSS 应该 < 50KB（gzipped）
- 确保所有 SEO 文件都被复制到 dist

## 🆘 常见问题

### Q: robots.txt 和 sitemap.xml 是否被正确部署？

A: 访问这些 URL 检查：
- https://sunriselink.sg/robots.txt
- https://sunriselink.sg/sitemap.xml

### Q: 为什么 Google 还没有索引我的网站？

A: 
1. 确保在 Google Search Console 中提交了 sitemap
2. 新网站通常需要 1-2 周才会被索引
3. 可以使用 "Request Indexing" 功能加速

### Q: 如何更新 sitemap.xml？

A: 每次更新内容后：
1. 打开 `public/sitemap.xml`
2. 更新 `<lastmod>` 日期为当前日期
3. 如果有新页面，添加新的 `<url>` 条目
4. 重新部署

### Q: 结构化数据中的评分可以修改吗？

A: 可以！在 `index.html` 中找到这部分：
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "150"
}
```
根据实际情况修改数值。

## 📞 获取帮助

- 详细的 SEO 指南：查看 `SEO-GUIDE.md`
- Vercel 文档：https://vercel.com/docs
- Google Search Console 帮助：https://support.google.com/webmasters

---

祝你的网站 SEO 成功！🎉

