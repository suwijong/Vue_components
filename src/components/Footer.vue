<template>
 <div class="todo-footer">
        <label>
          <input type="checkbox"  v-model="isCheckAll">
        </label>
        <span>
          <span>{{completeSize}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completeSize > 0" @click="clearCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      todos:Array,
      checkAllTodo:Function,
      clearCompleteTodos:Function
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
  }
</script>

<style scoped>
  /*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

 
</style>
