<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" :to="{ name: 'heroadd' }">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item, index) in list">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <router-link :to="{ name: 'heroedit', params: { id: item.id } }">编辑</router-link>
              &nbsp;&nbsp;
              <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
              <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios模块
import axios from 'axios';

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    // 调用加载数据的方法
    this.loadData();
  },
  methods: {
    // 加载英雄列表
    loadData() {
      axios
        .get('http://localhost:3000/heroes')
        .then((res) => {
          // console.log(res);
          const { status, data } = res;
          if (status === 200) {
            this.list = data;
          }
        });
    },
    handleDelete(id) {
      // 删除提示
      if (!confirm('是否确认删除？')) {
        return;
      }
      axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // 删除成功，重新渲染列表
            this.loadData();
          } else {
            alert('删除失败');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>

