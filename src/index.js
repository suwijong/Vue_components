
import Vue from 'vue'
import App from './App.vue'

import router from './router'





Vue.config.productionTip = false //取消浏览器控制台的vue提示


new Vue({
  el: '#root',
  render: h => h(App),
  //注册路由
  router

})
