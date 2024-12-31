import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus' //导入所有模块和功能
import 'element-plus/dist/index.css' // 导入样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标

const app =createApp(App)
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(router).mount('#app')
