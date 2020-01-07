import Vue from 'vue'
import Vuex from 'vuex'

//声明插件使用
Vue.use(Vuex)

//初始化状态值
const state = {
    count:0
}

//包含n个可以直接更新状态的函数对象
//在mutations中不可以有逻辑或者异步代码
const mutations = {
    INCREMENT (state){
       state.count++
    },

    DECREMENT (state){
        state.count--
     },
}

//包含n个可以间接更新状态的函数对象
//在actions中可以有逻辑或者异步代码
const actions = {
    //传来的规定的context属性  属性值有commit state
    //actions中会触发commit调用
    increment (context){
        context.commit('INCREMENT')
    },
    //形参解构赋值 {commit,state} = context
    decrement ({commit}){
       commit('DECREMENT')
    },

    incrementIfodd ({commit,state}){
        if (state.count%2 === 1) {
            commit('INCREMENT')
        }
    },

    incrementAsync ({commit}){
      setTimeout(()=>{
        commit('INCREMENT')
      },1000)
    }
}

//包含n个基于state数据的计算属性的方法对象
const getters = {
   evenOrodd (state){
      return state.count%2 === 1 ? '奇数':'偶数'
   }
}



export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})