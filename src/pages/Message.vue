<template>
  <div>
     <ul>
         <li v-for="msg in messages" :key="msg.id">
             <!-- <router-link  :to = "'/home/message/detail/'+msg.id" >{{msg.title}}</router-link> -->
             <!-- <router-link  :to = "'/home/message/detail/'+msg.id+'?'+'title='+msg.title" >{{msg.title}}</router-link> -->
             <router-link  :to = "{name:'detail', params: {mid: msg.id}, query: {title: msg.title}}" >{{msg.title}}</router-link>
         </li>
     </ul>
     <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              messages:[]
          }
      },

      mounted (){
          //模拟获取message信息
        setTimeout(()=>{
         const messages=[
              {id:1,title:'message001'},
              {id:2,title:'message002'},
              {id:3,title:'message003'},
              {id:4,title:'message004'},
          ]

          //更新数据
          this.messages = messages
        },500)
      }
  }
</script>

<style scoped>

 
</style>
