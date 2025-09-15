#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

console.log('🚀 开始部署演示到Gitee Pages...\n');

try {
  // 1. 检查dist-demo目录是否存在
  const distDemoPath = resolve(__dirname, '../dist-demo');
  if (!existsSync(distDemoPath)) {
    console.log('📦 构建演示文件...');
    execSync('npm run build:demo', { stdio: 'inherit' });
  }

  // 2. 检查是否在git仓库中
  try {
    execSync('git status', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ 当前目录不是Git仓库！');
    console.log('💡 请先初始化Git仓库: git init');
    process.exit(1);
  }

  // 3. 获取远程仓库信息
  let remoteUrl = '';
  try {
    remoteUrl = execSync('git remote get-url origin', { encoding: 'utf-8' }).trim();
    console.log(`📡 远程仓库: ${remoteUrl}`);
  } catch (error) {
    console.error('❌ 无法获取远程仓库信息！');
    console.log('💡 请确保已添加远程仓库: git remote add origin <your-gitee-repo-url>');
    process.exit(1);
  }

  // 4. 检查是否是Gitee仓库
  if (!remoteUrl.includes('gitee.com')) {
    console.warn('⚠️  警告: 检测到这不是Gitee仓库');
    console.log('💡 Gitee仓库URL应该类似: https://gitee.com/username/repository.git');
  }

  // 5. 切换到master分支
  try {
    execSync('git checkout master', { stdio: 'inherit' });
    console.log('✅ 切换到master分支');
  } catch (error) {
    console.log('📝 创建master分支...');
    execSync('git checkout --orphan master', { stdio: 'inherit' });
    execSync('git rm -rf .', { stdio: 'inherit' });
  }

  // 6. 复制文件到master分支
  console.log('📋 复制演示文件...');
  
  // 复制所有文件
  function copyDir(src, dest) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    
    const items = readdirSync(src);
    for (const item of items) {
      const srcPath = join(src, item);
      const destPath = join(dest, item);
      const stat = statSync(srcPath);
      
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir(distDemoPath, '.');

  // 7. 创建Gitee Pages配置文件
  console.log('📄 创建Gitee Pages配置...');
  const giteePagesConfig = {
    "name": "@mc-markets/ui Demo",
    "description": "Vue 3 组件库演示",
    "version": "1.0.0",
    "author": "chenyu",
    "repository": {
      "type": "git",
      "url": remoteUrl
    }
  };
  
  writeFileSync('package.json', JSON.stringify(giteePagesConfig, null, 2));

  // 8. 添加并提交文件
  console.log('💾 提交文件到master分支...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy demo to Gitee Pages"', { stdio: 'inherit' });

  // 9. 推送到远程仓库
  console.log('🌐 推送到Gitee...');
  execSync('git push origin master', { stdio: 'inherit' });

  console.log('\n✅ 部署完成！');
  console.log('🌐 您的演示将在以下地址访问:');
  
  // 从仓库URL提取用户名和仓库名
  const urlMatch = remoteUrl.match(/gitee\.com\/([^\/]+)\/([^\/]+)\.git$/);
  if (urlMatch) {
    const [, username, repoName] = urlMatch;
    const giteePagesUrl = `https://${username}.gitee.io/${repoName}`;
    console.log(`   ${giteePagesUrl}`);
  } else {
    console.log(`   https://<您的用户名>.gitee.io/<仓库名>`);
  }
  
  console.log('\n💡 提示:');
  console.log('   - 首次部署可能需要几分钟才能生效');
  console.log('   - 可以在仓库的"服务" > "Gitee Pages"中查看部署状态');
  console.log('   - 支持自定义域名，在Pages设置中配置');
  console.log('   - 演示文件已直接部署到master分支');
  console.log('   - 如果页面显示异常，请检查控制台错误信息');

} catch (error) {
  console.error('\n❌ 部署失败:', error.message);
  console.log('\n💡 可能的解决方案:');
  console.log('   1. 确保已安装Git并配置了Gitee认证');
  console.log('   2. 确保有推送权限');
  console.log('   3. 检查网络连接');
  console.log('   4. 确认Gitee仓库地址正确');
  process.exit(1);
}
