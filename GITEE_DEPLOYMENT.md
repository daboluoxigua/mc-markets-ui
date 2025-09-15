# Gitee Pages 部署指南

## 概述

本指南专门介绍如何将演示部署到Gitee Pages，实现静态访问。

## 快速部署

### 一键部署（推荐）

```bash
# 构建并部署到Gitee Pages
npm run deploy:gitee:build
```

### 分步部署

```bash
# 1. 构建演示
npm run build:demo

# 2. 部署到Gitee Pages
npm run deploy:gitee
```

## 部署前准备

### 1. 确保Git仓库配置正确

```bash
# 检查远程仓库
git remote -v

# 如果未配置，添加Gitee远程仓库
git remote add origin https://gitee.com/您的用户名/仓库名.git
```

### 2. 确保有推送权限

- 确保您有仓库的推送权限
- 如果使用HTTPS，确保已配置用户名和密码
- 如果使用SSH，确保已配置SSH密钥

## 部署过程说明

### 自动部署脚本功能

`npm run deploy:gitee:build` 命令会执行以下步骤：

1. **构建演示文件**
   - 运行 `npm run build:demo`
   - 生成 `dist-demo/` 目录

2. **检查Git仓库**
   - 验证当前目录是Git仓库
   - 检查远程仓库配置

3. **切换到master分支**
   - 切换到 `master` 分支
   - 如果不存在则创建

4. **复制构建文件**
   - 将 `dist-demo/` 内容复制到根目录
   - 保持文件结构完整

5. **提交并推送**
   - 添加所有文件到Git
   - 提交到 `master` 分支
   - 推送到Gitee远程仓库

## 启用Gitee Pages

### 方法一：自动启用（推荐）

部署脚本会自动处理，无需手动操作。

### 方法二：手动启用

1. 登录Gitee，进入您的仓库
2. 点击 `服务` → `Gitee Pages`
3. 选择 `master` 分支
4. 点击 `启动` 按钮

## 访问演示

部署成功后，您的演示将在以下地址访问：

```
https://您的用户名.gitee.io/仓库名
```

例如：`https://chenyu.gitee.io/npm-mc-markets-ui`

## 自动部署（Gitee Actions）

### 配置自动部署

1. 在仓库中启用Gitee Actions
2. 推送代码到主分支
3. 系统会自动构建并部署

### 工作流文件

项目已包含 `.gitee/workflows/gitee-pages.yml` 文件，支持自动部署。

## 自定义配置

### 修改部署分支

如果您想使用其他分支名（如 `gh-pages`），可以修改脚本：

```javascript
// 在 scripts/deploy-gitee.js 中修改
execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
```

**注意**: 当前配置使用 `master` 分支直接部署，这是最简化的部署方式。

### 自定义域名

1. 在Gitee Pages设置中配置自定义域名
2. 创建 `CNAME` 文件：
   ```bash
   echo "your-domain.com" > CNAME
   ```

## 故障排除

### 常见问题

**Q: 部署失败，提示权限错误**
A: 检查Git配置和仓库权限

**Q: 页面显示404**
A: 确保已启用Gitee Pages服务

**Q: 资源加载失败**
A: 检查文件路径，确保使用相对路径

**Q: SPA路由不工作**
A: 确保服务器配置了404回退

### 调试步骤

1. 检查构建输出：
   ```bash
   npm run build:demo
   ls -la dist-demo/
   ```

2. 验证Git配置：
   ```bash
   git remote -v
   git status
   ```

3. 检查Gitee Pages状态：
   - 登录Gitee查看Pages服务状态
   - 检查部署日志

## 性能优化

### Gitee Pages特性

- **CDN加速**: 自动使用CDN加速
- **HTTPS支持**: 自动启用HTTPS
- **缓存优化**: 支持浏览器缓存

### 优化建议

1. 启用Gzip压缩
2. 优化图片资源
3. 使用相对路径
4. 启用浏览器缓存

## 更新演示

### 重新部署

```bash
# 修改代码后重新部署
npm run deploy:gitee:build
```

### 增量更新

如果只是更新内容，可以：

```bash
# 只部署（不重新构建）
npm run deploy:gitee
```

## 安全注意事项

- 不要在演示中包含敏感信息
- 定期更新依赖包
- 使用HTTPS访问
- 配置适当的安全头

## 技术支持

如果遇到问题，可以：

1. 查看Gitee Pages官方文档
2. 检查项目README文件
3. 提交Issue到项目仓库
