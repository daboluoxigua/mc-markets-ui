#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 开始构建 @mc-markets/ui...\n');

try {
  // 1. 清理 dist 目录
  console.log('📁 清理构建目录...');
  const distPath = join(rootDir, 'dist');
  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true, force: true });
  }
  console.log('✅ 构建目录清理完成\n');

  // 2. 构建库文件
  console.log('🔨 构建库文件...');
  execSync('vite build --mode lib', { 
    cwd: rootDir, 
    stdio: 'inherit' 
  });
  console.log('✅ 库文件构建完成\n');

  // 3. 复制样式文件
  console.log('🎨 处理样式文件...');
  // 样式文件已经在 files 字段中指定，无需额外复制
  console.log('✅ 样式文件处理完成\n');

  console.log('🎉 构建完成！');
  console.log('📦 构建产物：');
  console.log('  - dist/index.mjs (ES Module)');
  console.log('  - dist/index.cjs (CommonJS)');
  console.log('  - dist/index.d.ts (TypeScript 声明文件)');
  console.log('  - dist/style.css (样式文件)');

} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
