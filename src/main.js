import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  // Attach the Vue instance to the window,
  // so it's available globally.
  created: function () {
    window.Vue = this;
  },
  router,
  render: h => h(App)
});