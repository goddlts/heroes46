<template>
  <div>
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入header组件
import AppHeader from './components/AppHeader.vue';
// 导入sidebar
import AppSidebar from './components/AppSidebar.vue';

// ES6导出模块的语法
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    AppHeader,
    AppSidebar
  }
};

// webpack 支持各种模块化的语法 CommonJS  AMD  ES6
// module.exports = {
// };
</script>

<style>

</style>
