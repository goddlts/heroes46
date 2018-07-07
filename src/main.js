// const Vue = require('vue');
// ES6的导入模块
import Vue from 'vue';
import App from './App.vue';
// 导入路由对象
import router from './routes/router';

// 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入axios
import axios from 'axios';
// 设置baseURL
axios.defaults.baseURL = 'http://localhost:3000/';
// 配置所有Vue的实例都具有$http这个成员
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
});
