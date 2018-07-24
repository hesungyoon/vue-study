<template>
  <div id="app">
    <form action="#" class="new-task" @submit.prevent="saveTask">
      <input type="text" class="new-task-input" v-model="taskBody"/>
      <button type="submit" class="new-task-button">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      task: 'getTask'
    }),
    taskBody: {
      get () {
        return this.task.body
      },
      set (value) {
        console.log(value);
        this.setTaskBody(value);
      }
    }
  },
  methods: {
    ...mapMutations({
      setTaskBody: 'setTaskBody'
    }),
    ...mapActions({
      saveTask: 'saveTask'
    }),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
