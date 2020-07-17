import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MjUi from "../packages";
import MjDoc from "./components/private/Doc.vue";
import MjDemo from "./components/private/Demo.vue";
import MjApiTable from "./components/private/ApiTable.vue";

Vue.config.productionTip = false;

Vue.use(MjUi);

Vue.component("MjCode", MjDoc);
Vue.component("MjDemo", MjDemo);
Vue.component("MjApiTable", MjApiTable);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
