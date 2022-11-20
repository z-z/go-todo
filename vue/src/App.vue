<template>
  <div id="app">
    <form v-for="task, i in tasks" :key="`task-${task.id}`" @submit.prevent="save(task)" :ref="`task-${task.id}`">
      <input type="text" v-model="task.text">
      <a @click.prevent="del(task.id, i)">удалить</a>
    </form>
    <br><br><br>
    <form @submit.prevent="add($event)">
      Новая задача: <input type="text" v-model="newTask">
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      newTask: ''
    };
  },
  methods: {
    async load() {
      this.tasks = await this.$get('/');
    },
    async save(task) {
      this.$refs[`task-${task.id}`][0].classList.add('loading')
      await this.$post('/update', {id: task.id, text: task.text});
      this.$refs[`task-${task.id}`][0].classList.remove('loading')
    },
    async add(e) {
      e.target.classList.add('loading');
      let res = await this.$post('/create', {text: this.newTask});
      e.target.classList.remove('loading');
      this.tasks.push(res.task);
      this.newTask = '';
    },
    async del(id, row) {
      await this.$post('/delete', {id: id});
      this.tasks.splice(row, 1);
    }
  },
  async mounted() {
    await this.load();
  }
}
</script>

<style>
.loading {
  pointer-events: none;
  opacity: .3;
}
</style>
