import Vue from 'vue'
import App from './App.vue'
import  './base.css'

Vue.config.productionTip = false //取消浏览器控制台的vue提示

new Vue({
  el: '#root',
  render: h => h(App)
})
