import { createI18n } from "vue-i18n";
import zh from './lang/zh';
import en from './lang/en';
import {store} from "../store/index";

// const store = useStore()

console.log()
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: store.state.locale || 'zh', // 初始化配置语言
  messages: {
    zh,
    en,
  },
});

export default i18n;