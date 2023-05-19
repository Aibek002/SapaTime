import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false


// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');