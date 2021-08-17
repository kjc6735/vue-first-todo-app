import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        message:'test',
        todos:[
            { id:1, todo:"내가 할 게 뭐지?", done:true},
            { id:2, todo:"내가 할 게 뭐지?", done:false},
            { id:3, todo:"내가 할 게 뭐지?", done:false},
            { id:4, todo:"내가 할 게 뭐지?", done:false},
            { id:5, todo:"내가 할 게 뭐지?", done:false},
            { id:6, todo:"내가 할 게 뭐지?", done:false},
            { id:7, todo:"내가 할 게 뭐지?", done:false},
            { id:8, todo:"내가 할 게 뭐지?", done:true},
        ]
        ,
        id:9
    },

    mutations:{
        addTodo(state, newTodo){
            state.todos.push({
                id:state.id,
                todo:newTodo,
                done:false
            })
            state.id++;
        },
        removeTodo(state, index){
            state.todos.splice(index,1);
        },
        doneToggle(state, index){
            state.todos[index].done = !state.todos[index].done
        },
    },
    actions:{},
    getters:{
        getTodo(state){
            return state.todos;
        }
    }
})