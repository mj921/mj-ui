import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MjUi from "../packages";
import MjDoc from "./components/private/Doc.vue";
import MjApiTable from "./components/private/ApiTable.vue";

Vue.config.productionTip = false;

Vue.use(MjUi);

Vue.component("MjCode", MjDoc);
Vue.component("MjApiTable", MjApiTable);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
