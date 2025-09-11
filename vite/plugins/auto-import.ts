import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [
      './src/utils/composables/**',
    ],
    // 开发环境优化
    ...(process.env.NODE_ENV === 'development' && {
      // 减少文件监听
      cache: true,
      // 禁用不必要的功能
      vueTemplate: false,
    }),
  })
}
