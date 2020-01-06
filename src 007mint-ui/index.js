
import Vue from 'vue'
import App from './App.vue'
import { Button} from 'mint-ui'



//注册全局组件 name是底层规定好的 mt-button 
Vue.component(Button.name, Button)




Vue.config.productionTip = false //取消浏览器控制台的vue提示


new Vue({
  el: '#root',
  render: h => h(App),
  
 

})
