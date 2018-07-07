# heros46

## vue-cli

- 安装

```bash
npm i vue-cli -g
```

- 创建项目

```bash
vue init webpack-simple <项目名称>
```

## 项目中的文件

src  -- 源码
.babelrc   --babel的配置文件，babel是一个工具，es6->es5
.editorconfig   --编辑器的配置
.gitignore   --git的忽略文件
webpack.config.js   --webpack的配置文件

----------
src中的内容
assets   --放静态资源(图片，样式)
App.vue  --根组件
main.js  --入口文件


## 自己创建文件夹

src/components   -- 放通用的组件（跟路由无关）
src/views        -- 视图(页面)，跟路由相关的组件
src/routes       -- 路由对象

## 首页

1. 把index.html复制到App.vue, 必须有且只有一个根节点
2. 安装bootstrap@3.3.7
3. 引入css，main.js中导入bootstrap.css 导入index.css
4. webpack的配置文件中，没有配置字体，配置webpack.config.js

```js
{
  test: /\.(ttf|woff2|woff|eot)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]?[hash]'
  }
}
```

## 提取公共的组件(AppHeader  AppSidebar)

1. App.vue中把header对应的html剪切
2. 在components中创建AppHeader.vue
3. 书写组件的结构template  script  style
```js
// script中的代码，导出组件
export default {
  data() {
    return {
    };
  }
};
```
4. 剪切板中的代码粘贴到template的位置
5. App.vue中导入AppHeader.vue
```js
import AppHeader from './components/AppHeader.vue';

// 组件的选项中配置
components: {
  AppHeader
}
```
6. 在App.vue的template中 使用组件 <app-header></app-header>



## 配置路由对象

- 安装 vue-router
- 在routers创建router.js
- router.js 
```js
// 1. 导入vue-router
import VueRouter from 'vue-router';
// 2. 创建路由对象，配置路由规则
const router = new VueRouter({
  routes: [
    // 路由规则
    {  }
  ]
});
// 3 导出模块
export default router;
```

- 在main.js中配置路由对象
```js
// 1 导入路由对象
import router from './routes/router';
// 2  在vue的实例中配置
// 配置路由对象
router
``` 


## 配置路由规则


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
