# 部署说明

## SPA 路由 404 问题解决方案

本项目是一个Vue 3单页应用(SPA)，使用Vue Router的HTML5 History模式。当部署到GitHub Pages等静态托管服务时，直接访问路由页面或刷新页面会出现404错误。

### 解决方案

我们采用了以下方案来解决这个问题：

1. **404.html回退机制**: 
   - 在`public/404.html`中创建了一个重定向脚本
   - 当访问不存在的路由时，GitHub Pages会自动显示404.html
   - 404.html会将当前路径编码并重定向到首页

2. **首页路由恢复**:
   - 在`index.html`中添加了脚本来检测重定向参数
   - 自动恢复原始的路由路径

3. **路由器配置**:
   - 更新了`src/router/index.js`以支持基础路径配置
   - 使用`import.meta.env.BASE_URL`来处理不同环境的基础路径

4. **自动化部署**:
   - 创建了GitHub Actions工作流程(`.github/workflows/deploy.yml`)
   - 自动构建和部署到GitHub Pages

### 部署步骤

1. **本地构建测试**:
   ```bash
   npm run build:demo
   ```

2. **推送到GitHub**:
   ```bash
   git add .
   git commit -m "fix: 解决SPA路由刷新404问题"
   git push origin master
   ```

3. **GitHub Pages设置**:
   - 在GitHub仓库设置中启用GitHub Pages
   - 选择"GitHub Actions"作为源

### 工作原理

当用户直接访问 `https://your-username.github.io/mc-markets-ui/button` 时：

1. GitHub Pages找不到`/button`路径，返回`404.html`
2. `404.html`中的脚本将路径编码为：`https://your-username.github.io/mc-markets-ui/?/button`
3. 重定向到首页，首页的脚本检测到查询参数中的路径
4. 使用`history.replaceState`恢复原始路径
5. Vue Router正常处理路由

### 本地开发

本地开发时使用开发服务器，不会遇到这个问题：

```bash
npm run dev
```

### 注意事项

- 这个解决方案适用于GitHub Pages、Netlify等静态托管服务
- 如果使用自定义域名，需要在GitHub Actions中设置`cname`参数
- 首次加载可能会有轻微的重定向延迟，但用户体验影响很小

### 相关文件

- `public/404.html` - 404回退页面
- `index.html` - 包含路由恢复脚本的主页面
- `src/router/index.js` - 路由器配置
- `.github/workflows/deploy.yml` - 自动化部署配置
- `vite.config.demo.js` - 演示站点构建配置
