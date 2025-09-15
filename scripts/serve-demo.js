#!/usr/bin/env node

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// MIME类型映射
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

// 获取MIME类型
function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

// 创建HTTP服务器
function createStaticServer(port = 3000, rootPath = resolve(__dirname, '../dist-demo')) {
  const server = createServer((req, res) => {
    let filePath = req.url;
    
    // 处理SPA路由 - 所有路由都返回index.html
    if (!filePath.includes('.') && filePath !== '/') {
      filePath = '/index.html';
    }
    
    // 默认首页
    if (filePath === '/') {
      filePath = '/index.html';
    }
    
    // 移除查询参数
    filePath = filePath.split('?')[0];
    
    // 构建完整文件路径
    const fullPath = join(rootPath, filePath);
    
    // 检查文件是否存在
    if (!existsSync(fullPath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('文件未找到: ' + filePath);
      return;
    }
    
    try {
      // 读取文件
      const fileContent = readFileSync(fullPath);
      const mimeType = getMimeType(fullPath);
      
      // 设置响应头
      res.writeHead(200, {
        'Content-Type': mimeType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      
      res.end(fileContent);
    } catch (error) {
      console.error('读取文件错误:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('服务器内部错误');
    }
  });
  
  server.listen(port, () => {
    console.log(`\n🚀 演示服务器已启动！`);
    console.log(`📁 服务目录: ${rootPath}`);
    console.log(`🌐 访问地址: http://localhost:${port}`);
    console.log(`\n💡 提示:`);
    console.log(`   - 按 Ctrl+C 停止服务器`);
    console.log(`   - 支持SPA路由，所有路径都会回退到index.html`);
    console.log(`   - 如果页面显示异常，请检查控制台错误信息\n`);
  });
  
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`❌ 端口 ${port} 已被占用，请尝试其他端口`);
      console.log(`💡 您可以指定其他端口: node scripts/serve-demo.js 8080`);
    } else {
      console.error('❌ 服务器启动失败:', error.message);
    }
    process.exit(1);
  });
  
  // 优雅关闭
  process.on('SIGINT', () => {
    console.log('\n👋 正在关闭服务器...');
    server.close(() => {
      console.log('✅ 服务器已关闭');
      process.exit(0);
    });
  });
}

// 获取命令行参数
const args = process.argv.slice(2);
const port = args[0] ? parseInt(args[0]) : 3000;

// 检查dist-demo目录是否存在
const distDemoPath = resolve(__dirname, '../dist-demo');
if (!existsSync(distDemoPath)) {
  console.error('❌ dist-demo 目录不存在！');
  console.log('💡 请先运行: npm run build:demo');
  process.exit(1);
}

// 启动服务器
createStaticServer(port, distDemoPath);
