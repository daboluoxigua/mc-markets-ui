import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 修复HTML文件路径脚本
 * 修复构建后的资源路径
 */
function moveHtmlFile() {
  const demoDistPath = path.join(__dirname, '../demo-dist');
  const indexPath = path.join(demoDistPath, 'index.html');
  
  // 检查demo-dist目录是否存在
  if (!fs.existsSync(demoDistPath)) {
    console.error('❌ demo-dist 目录不存在，请先运行构建命令');
    process.exit(1);
  }
  
  // 检查index.html是否存在
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html 文件不存在');
    process.exit(1);
  }
  
  try {
    // 读取index.html内容
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    
    // 修复资源路径，确保相对路径正确
    htmlContent = htmlContent.replace(/src="\/assets\//g, 'src="./assets/');
    htmlContent = htmlContent.replace(/href="\/assets\//g, 'href="./assets/');
    
    // 写入修复后的内容
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log('✅ HTML文件路径修复完成');
    console.log(`📁 演示文件位置: ${demoDistPath}`);
    
  } catch (error) {
    console.error('❌ 移动HTML文件时出错:', error.message);
    process.exit(1);
  }
}

// 执行移动操作
moveHtmlFile();
