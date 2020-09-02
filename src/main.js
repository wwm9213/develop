import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css';
import './assets/css/style.css';

import ElementUI from 'element-ui';
import { message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$msg = message;
Vue.use(ElementUI)

import { get, post } from './http';

Vue.prototype.$get = get;
Vue.prototype.$post = post;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
