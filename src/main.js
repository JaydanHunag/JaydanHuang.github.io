import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// Import component
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";
import router from "./router";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import * as AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import { currency, date } from "./methods/filters";

import httpMessageState from "./methods/pushMessageState";

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: false, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");
app.provide("httpMessageState", httpMessageState);
app.use(VueAxios, axios);
app.use(router);
app.component("Loading", Loading); //使用全域註冊，因為全部的元件都會使用到這個功能
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
