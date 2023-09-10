import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import FormMaking from "../lib/form-making/FormMaking.umd";
// import FormMaking from "form-making";
import "element-ui/lib/theme-chalk/index.css";
import "../lib/form-making/FormMaking.css";
// import "form-making/dist/FormMaking.css";
import CustomWidthHeight from "./components/CustomWidthHeight.vue";

Vue.use(Element);
Vue.use(FormMaking, {
  components: [
    {
      name: "custom-table",
      component: CustomWidthHeight, // 自定义组件
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
