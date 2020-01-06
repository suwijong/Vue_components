<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo ="addTodo" />
      <List :todos = "todos"  :deleteTodo = "deleteTodo"/>
      <Footer :todos = "todos" 
      :checkAllTodos = "checkAllTodos" 
      :clearCompleteTodos = "clearCompleteTodos"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
  export default {
      data() {
          return {
              todos:[
                  {id:1,title:'haha',complete:false},
                  {id:2,title:'tom',complete:false},
                  {id:3,title:'jack',complete:true},
                  {id:4,title:'hanfei',complete:false},
              ]
          }
      },

      methods:{
          addTodo (todo){
            this.todos.unshift(todo)
          },

          deleteTodo (index){
            this.todos.splice(index,1)
          },

           //进行全选/ 全不选
        checkAllTodos (isCheck){
          this.todos.forEach(todo => todo.complete = isCheck);
        },

        clearCompleteTodos(){
         this.todos = this.todos.filter(todo => !todo.complete)
        }
      },
     

      components:{
          Header,
          List,
          Footer
      }
  }
</script>

<style scoped>
    /*app*/
    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
 
</style>
