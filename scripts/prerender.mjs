import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 需要预渲染的路由
const routes = ['/', '/zh'];

async function prerender() {
  try {
    console.log('🚀 开始预渲染多语言页面...');

    // 创建 Vite 服务器用于 SSR
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      logLevel: 'error'
    });

    // 使用 Vite 加载 SSR 入口模块
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    // 读取构建后的 index.html 模板
    const templatePath = path.join(__dirname, '../dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    // 为每个路由生成 HTML
    for (const route of routes) {
      console.log(`  ⚙️  正在渲染: ${route}`);

      // 渲染该路由的 HTML
      const appHtml = render(route);

      // 创建该路由的 HTML
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // 根据路由更新 meta 标签
      if (route === '/zh') {
        // 更新中文版本的 meta 标签
        html = html.replace(
          /<html lang="en">/,
          '<html lang="zh-Hans">'
        );
        html = html.replace(
          /<title>.*?<\/title>/,
          '<title>日升女佣 - 新加坡值得信赖的女佣中介 | 女佣、老人护理、儿童看护</title>'
        );
        html = html.replace(
          /<meta name="title" content="[^"]*" \/>/,
          '<meta name="title" content="日升女佣 - 新加坡值得信赖的女佣中介 | 女佣、老人护理、儿童看护" />'
        );
        html = html.replace(
          /<meta name="description" content="[^"]*" \/>/,
          '<meta name="description" content="日升女佣是新加坡值得信赖的女佣中介，提供经验证的家庭女佣、老人护理专家和儿童看护服务。24/7全天候支持，轻松无忧的聘请流程。联系电话：+65 82935678" />'
        );
        html = html.replace(
          /<meta name="keywords" content="[^"]*" \/>/,
          '<meta name="keywords" content="新加坡女佣中介, 女佣介绍所, 外籍女佣, 菲律宾女佣, 印尼女佣, 老人护理, 儿童看护, 家政服务, 帮佣中介" />'
        );
        html = html.replace(
          /<meta property="og:title" content="[^"]*" \/>/,
          '<meta property="og:title" content="日升女佣 - 新加坡值得信赖的女佣中介" />'
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*" \/>/,
          '<meta property="og:description" content="关怀如晨曦，信任织纽带。在新加坡寻找经验证的女佣、老人护理专家和儿童看护。24/7支持，轻松聘请流程。" />'
        );
        html = html.replace(
          /<meta property="og:locale" content="[^"]*" \/>/,
          '<meta property="og:locale" content="zh_CN" />'
        );
        html = html.replace(
          /<link rel="canonical" href="https:\/\/sunriselink\.sg\/" \/>/,
          '<link rel="canonical" href="https://sunriselink.sg/zh" />'
        );
      }

      // 确定输出路径
      let outputPath;
      if (route === '/') {
        outputPath = path.join(__dirname, '../dist/index.html');
      } else {
        // 为其他路由创建目录和 index.html
        const routeDir = path.join(__dirname, '../dist', route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        outputPath = path.join(routeDir, 'index.html');
      }

      // 写入文件
      fs.writeFileSync(outputPath, html);
      console.log(`  ✅ ${route} -> ${path.relative(path.join(__dirname, '..'), outputPath)}`);
    }

    await vite.close();

    console.log('\n✨ 多语言预渲染完成！');
    console.log('📄 生成的文件：');
    console.log('   - dist/index.html (英文版)');
    console.log('   - dist/zh/index.html (中文版)');
  } catch (error) {
    console.error('❌ 预渲染失败:', error);
    process.exit(1);
  }
}

prerender();
