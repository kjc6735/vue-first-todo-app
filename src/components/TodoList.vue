<template>
  <div>
    <ul>
        <li
            
            v-for="(todo,index) in this.$store.state.todos"
            v-bind:key="index"
            v-bind:class="{done:todo.done}"
        > <input type = "checkbox" v-on:click="doneToggle(index)" v-model="todo.done"/>
            {{ todo.todo }}
            <button v-on:click="removeTodo(index)">
                삭제
            </button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods:{
        doneToggle(index){
            this.$store.commit('doneToggle', index);
        },
        removeTodo(index){
            this.$store.commit('removeTodo',index);
        }
    }
}
</script>

<style>
    .done{
        text-decoration: line-through;
    }
</style>