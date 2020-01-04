<template>
    <div>
       {{msg}} 
       <Test/>
       <Test/>
       <Test/>

       <Test02/>
       <Test02/>
       <Test02/>
    </div>
</template>

<script>
//引入
import Test  from './components/Test.vue'
import Test02 from './components/Test02'
export default {
    name:'App',
    data(){
        return {
            msg:'这是我的第一个vue 组件component'
        }
    },
    components:{//局部注册组件
        Test,
        Test02
    }
}
</script>

<style>
    div{
        font-size: 30px;
        font-family: '仿宋';
        color: orange;
    }
</style>