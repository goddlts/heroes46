import axios from 'axios';
const MyAxios = {};
// 插件必须具有一个公开的install方法
// Vue.use(MyAxios); 在use的内部会调用install
MyAxios.install = function (Vue) {
  axios.defaults.baseURL = 'http://localhost:3000/';
  Vue.prototype.$http = axios;
};

export default MyAxios;
