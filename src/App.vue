<template>
  <div id="app">
    <div>
      <todo-header></todo-header>
      <todo-input></todo-input>
      <todo-list></todo-list>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';


export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    TodoInput
  }
}
</script>

<style>
#app {
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>
