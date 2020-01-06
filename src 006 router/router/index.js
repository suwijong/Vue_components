// 定义路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetil from '../pages/MessageDetail.vue'

//声明插件使用
Vue.use(VueRouter)

//暴露路由器对象
export default new VueRouter({

    // mode:'hash',//默认模式 带#号的
    mode:'history', //不带# 的模式
    //所有用到的路由
    routes:[
        {
            path:'/about',
            component:About
        },

        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
        
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/detail/:mid',
                            component:MessageDetil,
                            name:'detail',
                            props:true,//props布尔值是将parmas参数映射成props
                            // props:(route)=>({mid:route.params.mid,title:route.query.title})
                        }
                    ]
                },
                {
                    path:'/home',
                    redirect:'/home/news'
                },
            ]
        },

        {
            path:'/',
            redirect:'/about'//打开时默认在about页面(重定向)
        },
        
    
    ]
})