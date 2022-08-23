import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./language";
import { store } from './store/index';

const app = createApp(App)
app.config.globalProperties.$i18n = i18n
app.use(store).use(i18n).mount('#app')
