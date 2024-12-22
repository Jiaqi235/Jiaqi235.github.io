import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router, // Register the router instance here
  render: (h) => h(App),
});
