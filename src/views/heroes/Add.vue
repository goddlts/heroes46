<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
// 1 绑定文本框
// 2 添加按钮注册事件
// 3 发送请求 -- 


export default {
  data() {
    return {
      // 绑定到表单元素
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  methods: {
    handleAdd() {
      this.$http
        .post('heroes', this.formData)
        .then((res) => {
          const { status, data } = res;
          if (status === 201) {
            // 判断添加是否成功
            // 添加成功，跳转到英雄列表
            this.$router.push({ name: 'heroes' });
          } else {
            alert('添加失败');
          }
        })
    }
  }
};
</script>

<style>

</style>
