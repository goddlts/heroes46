<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

// 1. 进入编辑页面，显示当前要编辑的英雄
// 1.1 获取url上的id，created()
// 1.2 发送请求获取数据
// 1.3 绑定文本框


// 2. 点击Submit按钮，实现更新功能

export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      // 获取url上的id，默认-1
      heroId: -1
    }
  },
  // 组件创建完毕
  created() {
    // 获取路由参数
    this.heroId = this.$route.params.id;
    // 调用 获取英雄对象的方法
    this.loadData();
  },
  methods: {
    // 根据id，获取英雄对象
    loadData() {
      axios
        .get(`http://localhost:3000/heroes/${this.heroId}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        });
    }
  }
};
</script>

<style>

</style>
