// const Vue = require('vue');
// ES6的导入模块
import Vue from 'vue';
import App from './App.vue';

// 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
