// const Vue = require('vue');
// ES6的导入模块
import Vue from 'vue';
import App from './App.vue';
// 导入路由对象
import router from './routes/router';

// 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
});
