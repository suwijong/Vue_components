
import Vue from 'vue'
import App from './App.vue'

import router from './router'





Vue.config.productionTip = false //取消浏览器控制台的vue提示


new Vue({
  el: '#root',
  render: h => h(App),
  //注册路由
  router//注册路由后每个组件都会有一个$route(路由)和$router(路由器),在组件中使用就不用引入了,直接用它就好了

})
