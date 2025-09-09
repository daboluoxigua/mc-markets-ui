#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 开始发布 mc-pro-ui 组件库...');

// 检查是否在项目根目录
if (!fs.existsSync('package.json')) {
  console.error('❌ 请在项目根目录下运行此脚本');
  process.exit(1);
}

// 读取 package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const currentVersion = packageJson.version;

console.log(`📦 当前版本: ${currentVersion}`);

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 版本号处理函数
async function handleVersionUpdate() {
  return new Promise((resolve) => {
    console.log('');
    console.log('🔄 版本号更新选项:');
    console.log('1. 自动递增最后一位 (推荐)');
    console.log('2. 手动输入版本号');
    console.log('3. 保持当前版本号');
    
    rl.question('请选择 (1/2/3): ', async (choice) => {
      let newVersion = currentVersion;
      
      switch (choice.trim()) {
        case '1':
          // 自动递增版本号最后一位
          const versionParts1 = currentVersion.split('.');
          const lastPart1 = parseInt(versionParts1[2]) + 1;
          newVersion = `${versionParts1[0]}.${versionParts1[1]}.${lastPart1}`;
          console.log(`🔄 自动递增版本号: ${currentVersion} → ${newVersion}`);
          break;
          
        case '2':
          // 手动输入版本号
          const manualVersion = await new Promise((resolveInput) => {
            rl.question('请输入新版本号 (格式: x.y.z): ', (input) => {
              resolveInput(input.trim());
            });
          });
          
          if (manualVersion && /^\d+\.\d+\.\d+$/.test(manualVersion)) {
            newVersion = manualVersion;
            console.log(`✏️  手动设置版本号: ${currentVersion} → ${newVersion}`);
          } else {
            console.log('⚠️  版本号格式无效，使用自动递增');
            const versionParts2 = currentVersion.split('.');
            const lastPart2 = parseInt(versionParts2[2]) + 1;
            newVersion = `${versionParts2[0]}.${versionParts2[1]}.${lastPart2}`;
            console.log(`🔄 自动递增版本号: ${currentVersion} → ${newVersion}`);
          }
          break;
          
        case '3':
          // 保持当前版本号
          console.log(`📌 保持当前版本号: ${currentVersion}`);
          break;
          
        default:
          console.log('⚠️  无效选择，使用自动递增');
          const versionParts3 = currentVersion.split('.');
          const lastPart3 = parseInt(versionParts3[2]) + 1;
          newVersion = `${versionParts3[0]}.${versionParts3[1]}.${lastPart3}`;
          console.log(`🔄 自动递增版本号: ${currentVersion} → ${newVersion}`);
          break;
      }
      
      resolve(newVersion);
    });
  });
}

// 更新所有文件中的版本号
function updateVersionInFiles(newVersion) {
  // 更新 package.json 中的版本号
  packageJson.version = newVersion;
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // 更新 packages/index.ts 中的版本号
  const indexTsPath = path.join(__dirname, 'packages', 'index.ts');
  if (fs.existsSync(indexTsPath)) {
    let indexContent = fs.readFileSync(indexTsPath, 'utf8');
    indexContent = indexContent.replace(
      /const version = ['"`][^'"`]+['"`]/g,
      `const version = '${newVersion}'`
    );
    indexContent = indexContent.replace(
      /@version [^\\n]+/g,
      `@version ${newVersion}`
    );
    fs.writeFileSync(indexTsPath, indexContent);
  }

  // 更新 packages/types/index.d.ts 中的版本号
  const typesPath = path.join(__dirname, 'packages', 'types', 'index.d.ts');
  if (fs.existsSync(typesPath)) {
    let typesContent = fs.readFileSync(typesPath, 'utf8');
    typesContent = typesContent.replace(
      /export const version = ['"`][^'"`]+['"`];/g,
      `export const version = '${newVersion}';`
    );
    fs.writeFileSync(typesPath, typesContent);
  }

  console.log('✅ 版本号更新完成');
}

// 主函数
async function main() {
  try {
    // 处理版本号更新
    const newVersion = await handleVersionUpdate();
    
    // 如果版本号有变化，更新文件
    if (newVersion !== currentVersion) {
      updateVersionInFiles(newVersion);
    }

    // 检查 npm 登录状态
    try {
      console.log('🔐 检查 npm 登录状态...');
      execSync('npm whoami', { stdio: 'pipe' });
    } catch (error) {
      console.log('🔐 请先登录 npm: npm login');
      rl.close();
      process.exit(1);
    }

    // 检查包名是否可用
    try {
      console.log('🔍 检查包名可用性...');
      execSync(`npm view ${packageJson.name}`, { stdio: 'pipe' });
      console.log(`⚠️  包 ${packageJson.name} 已存在，将更新版本`);
    } catch (error) {
      console.log(`✅ 包名 ${packageJson.name} 可用`);
    }

    // 显示发布信息
    console.log('');
    console.log('📋 发布信息:');
    console.log(`   包名: ${packageJson.name}`);
    console.log(`   版本: ${newVersion}`);
    console.log(`   描述: ${packageJson.description}`);
    console.log(`   入口: ${packageJson.main}`);
    console.log(`   类型: ${packageJson.types}`);
    console.log('');
    console.log('💡 注意: 发布时会自动执行构建 (prepublishOnly 钩子)');
    console.log('');

    // 直接开始发布，跳过确认步骤
    console.log('🚀 开始发布...');
    console.log('🔨 自动构建中... (prepublishOnly 钩子)');
    execSync('npm publish', { stdio: 'inherit' });
    console.log('✅ 发布成功！');
    console.log('');
    console.log('🔗 包地址:');
    console.log(`   https://www.npmjs.com/package/${packageJson.name}`);
    console.log('');
    console.log('📖 使用方式:');
    console.log(`   npm install ${packageJson.name}`);
    console.log(`   yarn add ${packageJson.name}`);
    console.log(`   pnpm add ${packageJson.name}`);
    console.log('');
    console.log(`🎉 新版本 ${newVersion} 已成功发布到 npm！`);

  } catch (error) {
    console.error('❌ 发布失败:', error.message);
  } finally {
    rl.close();
  }
}

// 运行主函数
main(); 