import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//声明插件使用
Vue.use(VueResource)


Vue.config.productionTip = false //取消浏览器控制台的vue提示
//给vue的原型对象添加一个全局事件总线  的对象属性

new Vue({
  el: '#root',
  render: h => h(App)
})
