<template>
    <div>
        <input type="text" v-model="inputTodo" v-on:keypress.enter="addTodo">
        <button v-on:click="addTodo">
            저장
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputTodo:''
        }
    },
    methods:{
        changeTodo(text){
            console.log(text)
        },
        addTodo(){
            this.$store.commit('addTodo', this.inputTodo);
            this.inputTodo = "";
        }
    }
}
</script>

<style>

</style>