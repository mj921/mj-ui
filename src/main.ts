import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MjUi from './components';
import MjCode from './components/private/Code.vue';

Vue.config.productionTip = false

Vue.use(MjUi);

Vue.component("MjCode", MjCode)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
