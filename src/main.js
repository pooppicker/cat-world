import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/reset.scss";
import "./assets/scss/colorAndSize.scss";
import "./assets/scss/efficientSetting.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
