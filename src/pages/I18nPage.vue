<template>
  <div class="i18n-page">
    <h2>国际化</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>语言切换</span>
            </div>
          </template>
          <div class="language-config">
            <el-select
              v-model="selectedLocale"
              @change="handleLocaleChange"
              placeholder="选择语言"
            >
              <el-option
                v-for="locale in supportedLocales"
                :key="locale"
                :label="getLocaleLabel(locale)"
                :value="locale"
              />
            </el-select>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>日期时间</span>
            </div>
          </template>
          <div class="datetime-demo">
            <el-date-picker
              v-model="dateValue"
              type="datetime"
              placeholder="选择日期时间"
              style="width: 100%"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  supportedLocales,
  getLocale,
  getLocaleLabel,
} from '@/utils/theme'

const selectedLocale = ref("zh-cn")
const dateValue = ref(new Date())

const handleLocaleChange = (locale) => {
  const localeConfig = getLocale(locale)
  ElMessage.success(`已切换到${getLocaleLabel(locale)}`)
}
</script>

<style scoped>
.i18n-page {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language-config,
.datetime-demo {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
