<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <!-- <Header :addTodo = 'addTodo'/> -->
     <!-- <Header @addTodo = 'addTodo'/> -->
     <Header ref="header"/>
     <List :todos = 'todos' />
     <Footer>
         <input type="checkbox"  v-model="isCheckAll"/>
      <span slot="middle">
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
      </span>
      <template slot="right">
         <button class="btn btn-danger" v-show="completeSize > 0"
           @click="clearCompleteTodos">清除已完成任务</button>
      </template>
      
     </Footer>
      

     
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
          {id:1,title:'抽烟',complete:false},
          {id:2,title:'喝酒',complete:true},
          {id:3,title:'烫头',complete:false},
        ]
      }
    },

    computed: {
      completeSize() {
        return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
      },

      isCheckAll :{
        get (){
           this.todos.length === this.completeSize && this.completeSize > 0
        },

        set (value){
          this.checkAllTodo(value)
        }
      }
    },

    mounted (){
      //绑定事件监听
      this.$refs.header.$on('addTodo',this.addTodo)

      //全局事件总线  绑定删除事件
      this.$eventBus.$on('deleteTodo',this.deleteTodo)
    },

    beforeDestroy(){
     //事件解绑
      this.$refs.header.$off('addTodo')
      //全局事件总线 事件解绑
      this.$eventBus.$off('deleteTodo')
    },


    methods:{
      addTodo (todo){
        this.todos.unshift(todo)
      },

      deleteTodo (index){
        this.todos.splice(index,1)
      },

      checkAllTodo (isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)
      },

        clearCompleteTodos () {
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
