
import Vue from 'vue'
import App from './App.vue'

//引入store
import store from './store'







Vue.config.productionTip = false //取消浏览器控制台的vue提示


new Vue({
  el: '#root',
  render: h => h(App),
  
  store,//配置vuex的核心对象store
        //所有组件都可以通过$store来访问store对象
 

})
