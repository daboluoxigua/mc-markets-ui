# 演示部署指南

## 概述

本指南将帮助您将演示部署到各种静态托管平台，包括GitHub Pages、Netlify、Vercel等。

## 快速开始

### 1. 构建演示

```bash
# 构建演示文件
npm run build:demo
```

构建完成后，所有文件将输出到 `dist-demo/` 目录。

### 2. 本地预览

```bash
# 使用内置服务器预览
npm run serve:local

# 或使用Vite预览
npm run preview:demo
```

## 部署到Gitee Pages

### 方法一：使用部署脚本（推荐）

```bash
# 一键部署到Gitee Pages
npm run deploy:gitee:build
```

这个命令会：
1. 自动构建演示文件
2. 切换到 `master` 分支
3. 将构建文件推送到Gitee
4. 自动启用Gitee Pages

### 方法二：使用Gitee Actions（自动部署）

1. 推送代码到主分支
2. Gitee Actions会自动构建并部署
3. 在仓库的 `服务 > Gitee Pages` 中查看部署状态

### 方法三：手动部署

```bash
# 1. 构建演示
npm run build:demo

# 2. 切换到master分支
git checkout master

# 3. 复制构建文件
cp -r dist-demo/* .

# 4. 提交并推送
git add .
git commit -m "Deploy demo to Gitee Pages"
git push origin master
```

## 部署到其他平台

### Netlify

1. 连接您的Gitee仓库到Netlify
2. 设置构建命令：`npm run build:demo`
3. 设置发布目录：`dist-demo`
4. 部署！

### Vercel

1. 安装Vercel CLI：`npm i -g vercel`
2. 运行：`vercel --prod`
3. 选择 `dist-demo` 作为发布目录

### 阿里云OSS / 腾讯云COS

1. 构建演示：`npm run build:demo`
2. 将 `dist-demo` 目录上传到对象存储
3. 开启静态网站托管
4. 配置默认首页为 `index.html`

## 静态访问特性

### ✅ 支持的功能

- **SPA路由**: 所有路由都会正确回退到 `index.html`
- **相对路径**: 资源使用相对路径，支持任意子目录部署
- **404处理**: 自动处理不存在的页面，回退到SPA路由
- **缓存优化**: 文件名包含hash，支持长期缓存
- **移动端优化**: 响应式设计，支持各种设备

### 📁 文件结构

```
dist-demo/
├── index.html          # 主页面
├── 404.html           # 404回退页面
└── assets/
    ├── css/           # 样式文件
    ├── js/            # JavaScript文件
    ├── fonts/         # 字体文件
    └── images/        # 图片文件
```

## 自定义配置

### 修改基础路径

如果需要部署到子目录，可以修改 `vite.config.demo.js`：

```javascript
export default defineConfig({
  build: {
    base: '/your-subdirectory/', // 修改为您的子目录路径
    // ... 其他配置
  }
});
```

### 添加自定义域名

1. 在托管平台配置自定义域名
2. 创建 `CNAME` 文件（如果需要）
3. 更新DNS记录

## 故障排除

### 常见问题

**Q: 页面显示空白**
A: 检查浏览器控制台错误，通常是路径问题

**Q: 路由不工作**
A: 确保服务器配置了SPA回退，所有路由都返回 `index.html`

**Q: 资源加载失败**
A: 检查资源路径是否正确，确保使用相对路径

**Q: Gitee Pages部署失败**
A: 检查仓库权限和Gitee Actions状态

### 调试技巧

1. 使用 `npm run serve:local` 本地测试
2. 检查浏览器开发者工具的网络面板
3. 查看构建日志中的警告信息
4. 验证所有资源文件是否正确生成

## 性能优化

- 启用Gzip压缩
- 使用CDN加速
- 优化图片资源
- 启用浏览器缓存

## 安全注意事项

- 不要在演示中包含敏感信息
- 定期更新依赖包
- 使用HTTPS访问
- 配置适当的安全头
