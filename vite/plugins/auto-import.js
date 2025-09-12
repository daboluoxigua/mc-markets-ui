import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    resolvers: [ElementPlusResolver()],
    dirs: [
      './src/utils/composables/**',
    ],
    // 禁用 TypeScript 声明文件生成
    dts: false,
    // 开发环境优化
    ...(process.env.NODE_ENV === 'development' && {
      // 减少文件监听
      cache: true,
      // 禁用不必要的功能
      vueTemplate: false,
    }),
  })
}
