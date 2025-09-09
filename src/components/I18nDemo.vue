<template>
  <div class="i18n-demo">
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>国际化演示</span>
          <el-tag type="info">{{ currentLocaleLabel }}</el-tag>
        </div>
      </template>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <h4>语言切换</h4>
          <el-select 
            v-model="selectedLocale" 
            @change="handleLocaleChange" 
            placeholder="选择语言"
            style="width: 100%;"
          >
            <el-option
              v-for="locale in supportedLocales"
              :key="locale"
              :label="getLocaleLabel(locale)"
              :value="locale"
            />
          </el-select>
          
          <div class="locale-info">
            <p><strong>当前语言:</strong> {{ currentLocaleLabel }}</p>
            <p><strong>语言代码:</strong> {{ selectedLocale }}</p>
          </div>
        </el-col>
        
        <el-col :span="12">
          <h4>日期时间格式</h4>
          <el-date-picker
            v-model="dateValue"
            type="datetime"
            placeholder="选择日期时间"
            style="width: 100%;"
          />
          
          <div class="datetime-info">
            <p><strong>当前时间:</strong> {{ formattedDate }}</p>
            <p><strong>时间戳:</strong> {{ dateValue?.getTime() }}</p>
          </div>
        </el-col>
      </el-row>
      
      <el-divider />
      
      <h4>组件国际化演示</h4>
      <el-row :gutter="20">
        <el-col :span="8">
          <h5>表单组件</h5>
          <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        
        <el-col :span="8">
          <h5>表格组件</h5>
          <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="name" label="姓名" width="80" />
            <el-table-column prop="age" label="年龄" width="60" />
            <el-table-column prop="status" label="状态" width="80">
              <template #default="scope">
                <el-tag :type="scope.row.status === 'active' ? 'success' : 'danger'">
                  {{ scope.row.status === 'active' ? '活跃' : '禁用' }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        
        <el-col :span="8">
          <h5>消息提示</h5>
          <div class="message-demo">
            <el-button @click="showMessage('success')">成功消息</el-button>
            <el-button @click="showMessage('warning')">警告消息</el-button>
            <el-button @click="showMessage('error')">错误消息</el-button>
            <el-button @click="showMessage('info')">信息消息</el-button>
          </div>
        </el-col>
      </el-row>
      
      <el-divider />
      
      <h4>数字和货币格式</h4>
      <el-row :gutter="20">
        <el-col :span="6">
          <h5>数字格式</h5>
          <p>整数: {{ formatNumber(1234567) }}</p>
          <p>小数: {{ formatNumber(1234.567) }}</p>
          <p>百分比: {{ formatPercent(0.1234) }}</p>
        </el-col>
        
        <el-col :span="6">
          <h5>货币格式</h5>
          <p>人民币: {{ formatCurrency(1234.56, 'CNY') }}</p>
          <p>美元: {{ formatCurrency(1234.56, 'USD') }}</p>
          <p>欧元: {{ formatCurrency(1234.56, 'EUR') }}</p>
        </el-col>
        
        <el-col :span="6">
          <h5>日期格式</h5>
          <p>短日期: {{ formatDate(dateValue, 'short') }}</p>
          <p>长日期: {{ formatDate(dateValue, 'long') }}</p>
          <p>时间: {{ formatDate(dateValue, 'time') }}</p>
        </el-col>
        
        <el-col :span="6">
          <h5>相对时间</h5>
          <p>现在: {{ formatRelativeTime(new Date()) }}</p>
          <p>1小时前: {{ formatRelativeTime(new Date(Date.now() - 3600000)) }}</p>
          <p>1天前: {{ formatRelativeTime(new Date(Date.now() - 86400000)) }}</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from '@mc-markets/ui'
import { 
  supportedLocales, 
  getLocale 
} from '@mc-markets/ui'

const selectedLocale = ref('zh-cn')
const dateValue = ref(new Date())

// 表单数据
const form = reactive({
  username: '',
  password: ''
})

// 表格数据
const tableData = ref([
  { name: '张三', age: 25, status: 'active' },
  { name: '李四', age: 30, status: 'inactive' },
  { name: '王五', age: 28, status: 'active' }
])

// 语言标签映射
const localeLabels = {
  'zh-cn': '简体中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'pt': 'Português',
  'ru': 'Русский',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',
  'th': 'ไทย',
  'id': 'Bahasa Indonesia',
  'ms': 'Bahasa Melayu',
  'nl': 'Nederlands',
  'sv': 'Svenska',
  'no': 'Norsk',
  'da': 'Dansk',
  'fi': 'Suomi',
  'pl': 'Polski',
  'cs': 'Čeština',
  'hu': 'Magyar',
  'ro': 'Română',
  'sk': 'Slovenčina',
  'sl': 'Slovenščina',
  'hr': 'Hrvatski',
  'bg': 'Български',
  'et': 'Eesti',
  'lv': 'Latviešu',
  'lt': 'Lietuvių',
  'el': 'Ελληνικά',
  'he': 'עברית',
  'ar': 'العربية',
  'fa': 'فارسی',
  'hi': 'हिन्दी',
  'bn': 'বাংলা',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'mr': 'मराठी',
  'gu': 'ગુજરાતી',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'ne': 'नेपाली',
  'pa': 'ਪੰਜਾਬੀ',
  'km': 'ខ្មែរ',
  'lo': 'ລາວ',
  'my': 'မြန်မာ',
  'ka': 'ქართული',
  'hy': 'Հայերեն',
  'az': 'Azərbaycan',
  'kk': 'Қазақ',
  'ky': 'Кыргыз',
  'uz': 'Oʻzbek',
  'tk': 'Türkmen',
  'mn': 'Монгол'
}

// 计算属性
const currentLocaleLabel = computed(() => {
  return localeLabels[selectedLocale.value] || selectedLocale.value
})

const formattedDate = computed(() => {
  if (!dateValue.value) return ''
  return dateValue.value.toLocaleString(selectedLocale.value)
})

// 方法
const getLocaleLabel = (locale) => {
  return localeLabels[locale] || locale
}

const handleLocaleChange = (locale) => {
  const localeConfig = getLocale(locale)
  ElMessage.success(`已切换到${getLocaleLabel(locale)}`)
}

const submitForm = () => {
  ElMessage.success('表单提交成功！')
}

const resetForm = () => {
  form.username = ''
  form.password = ''
  ElMessage.info('表单已重置')
}

const showMessage = (type) => {
  const messages = {
    success: '操作成功！',
    warning: '请注意！',
    error: '操作失败！',
    info: '提示信息！'
  }
  ElMessage[type](messages[type])
}

// 格式化函数
const formatNumber = (num) => {
  return new Intl.NumberFormat(selectedLocale.value).format(num)
}

const formatPercent = (num) => {
  return new Intl.NumberFormat(selectedLocale.value, {
    style: 'percent',
    minimumFractionDigits: 2
  }).format(num)
}

const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat(selectedLocale.value, {
    style: 'currency',
    currency: currency
  }).format(amount)
}

const formatDate = (date, type) => {
  if (!date) return ''
  
  const options = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    time: { hour: '2-digit', minute: '2-digit', second: '2-digit' }
  }
  
  return new Intl.DateTimeFormat(selectedLocale.value, options[type]).format(date)
}

const formatRelativeTime = (date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  const rtf = new Intl.RelativeTimeFormat(selectedLocale.value, { numeric: 'auto' })
  
  if (days > 0) return rtf.format(-days, 'day')
  if (hours > 0) return rtf.format(-hours, 'hour')
  if (minutes > 0) return rtf.format(-minutes, 'minute')
  return rtf.format(-seconds, 'second')
}

// 生命周期
onMounted(() => {
  ElMessage.info('国际化演示已加载')
})
</script>

<style scoped>
.i18n-demo {
  margin: 20px 0;
}

.demo-card {
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-light);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.locale-info,
.datetime-info {
  margin-top: 15px;
  padding: 10px;
  background: var(--el-fill-color-lighter);
  border-radius: var(--el-border-radius-base);
}

.locale-info p,
.datetime-info p {
  margin: 5px 0;
  font-size: 14px;
}

.message-demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message-demo .el-button {
  width: 100%;
}

h4, h5 {
  color: var(--el-text-color-primary);
  margin-bottom: 15px;
}

h4 {
  font-size: 16px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding-bottom: 10px;
}

h5 {
  font-size: 14px;
  margin-top: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .locale-info,
  .datetime-info {
    margin-top: 10px;
    padding: 8px;
  }
  
  .locale-info p,
  .datetime-info p {
    font-size: 12px;
  }
  
  .message-demo {
    gap: 8px;
  }
}
</style>
