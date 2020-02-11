import Vue from "vue";
import VueResource from 'vue-resource'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-d34ff.firebaseio.com/data.json'; // use the $ sign ('$http') only when accessing it from inside your Vue instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
