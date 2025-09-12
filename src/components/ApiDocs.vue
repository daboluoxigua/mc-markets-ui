<template>
  <section class="api-docs-section">
    <h2>{{ title || 'API 文档' }}</h2>
    <div class="api-docs">
      <!-- 属性表格 -->
      <div v-if="props.props.length > 0">
        <h3>{{ propsTitle || '组件属性' }}</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>默认值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in props.props" :key="prop.name">
                <td><code>{{ prop.name }}</code></td>
                <td><code>{{ prop.type }}</code></td>
                <td><code>{{ prop.default || '-' }}</code></td>
                <td>{{ prop.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 事件表格 -->
      <div v-if="props.events.length > 0">
        <h3>{{ eventsTitle || '事件' }}</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>参数</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in props.events" :key="event.name">
                <td><code>{{ event.name }}</code></td>
                <td><code>{{ event.params }}</code></td>
                <td>{{ event.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 插槽表格 -->
      <div v-if="props.slots.length > 0">
        <h3>{{ slotsTitle || '插槽' }}</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>插槽名</th>
                <th>说明</th>
                <th v-if="hasSubTags">子标签</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slot in props.slots" :key="slot.name">
                <td><code>{{ slot.name }}</code></td>
                <td>{{ slot.description }}</td>
                <td v-if="hasSubTags"><code>{{ slot.subTags || '-' }}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 暴露的方法和属性表格 -->
      <div v-if="props.exposes.length > 0">
        <h3>{{ exposesTitle || '暴露的方法和属性' }}</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expose in props.exposes" :key="expose.name">
                <td><code>{{ expose.name }}</code></td>
                <td><code>{{ expose.type }}</code></td>
                <td>{{ expose.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CSS 类名说明 -->
      <div v-if="props.cssClasses.length > 0">
        <h3>{{ cssTitle || 'CSS 类名' }}</h3>
        <div class="css-info">
          <ul>
            <li v-for="cssClass in props.cssClasses" :key="cssClass.name">
              <code>{{ cssClass.name }}</code> - {{ cssClass.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'API 文档'
  },
  props: {
    type: Array,
    default: () => []
  },
  propsTitle: {
    type: String,
    default: '组件属性'
  },
  events: {
    type: Array,
    default: () => []
  },
  eventsTitle: {
    type: String,
    default: '事件'
  },
  slots: {
    type: Array,
    default: () => []
  },
  slotsTitle: {
    type: String,
    default: '插槽'
  },
  exposes: {
    type: Array,
    default: () => []
  },
  exposesTitle: {
    type: String,
    default: '暴露的方法和属性'
  },
  cssClasses: {
    type: Array,
    default: () => []
  },
  cssTitle: {
    type: String,
    default: 'CSS 类名'
  }
})

// 计算属性：是否有子标签列
const hasSubTags = computed(() => {
  return props.slots.some(slot => slot.subTags)
})

</script>

<style scoped lang="scss">
.api-docs-section {
  margin-top: 40px;
}

.api-docs-section h2 {
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
  font-size: 24px;
  border-left: 4px solid var(--el-color-primary);
  padding-left: 15px;
}

.api-docs {
  background: var(--el-bg-color-page);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid var(--el-border-color-lighter);
}

.api-docs h3 {
  color: var(--el-text-color-primary);
  margin: 20px 0 15px 0;
  font-size: 18px;
  border-left: 4px solid var(--el-color-primary);
  padding-left: 10px;
}

.api-docs h3:first-child {
  margin-top: 0;
}

.api-table {
  margin-bottom: 20px;
  overflow-x: auto;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--el-bg-color);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.api-table th {
  background: var(--el-fill-color-light);
  color: var(--el-text-color-primary);
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  border-bottom: 2px solid var(--el-border-color);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.api-table td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  font-size: 13px;
  vertical-align: top;
  color: var(--el-text-color-primary);
}

.api-table tr:hover {
  background: var(--el-bg-color-page);
}

.api-table code {
  background: var(--el-fill-color);
  color: var(--el-text-color-regular);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 12px;
  border: 1px solid var(--el-border-color-lighter);
}

.css-info {
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 6px;
  padding: 15px;
}

.css-info ul {
  margin: 0;
  padding-left: 20px;
}

.css-info li {
  margin-bottom: 5px;
  color: var(--el-text-color-primary);
  font-size: 13px;
}

.css-info li code {
  background: var(--el-fill-color);
  color: var(--el-text-color-regular);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 12px;
  border: 1px solid var(--el-border-color-lighter);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .api-docs {
    padding: 15px;
  }

  .api-table th,
  .api-table td {
    padding: 8px 10px;
    font-size: 12px;
  }
}
</style>
