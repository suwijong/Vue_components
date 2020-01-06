<template>
  <div>
     <ul>
         <li v-for="msg in messages" :key="msg.id">
             <!-- 一般拼接字符串 -->
             <!-- <router-link  :to = "'/home/message/detail/'+msg.id" >{{msg.title}}</router-link> -->
             <!-- <router-link  :to = "'/home/message/detail/'+msg.id+'?'+'title='+msg.title" >{{msg.title}}</router-link> -->
              <!-- 模板字符串 -->
             <!-- <router-link :to="`/home/message/detail/${m.id}?title=${m.title}`">{{m.title}}</router-link> -->
             <!-- 命名路由写的 -->
             <router-link  :to = "{name:'detail', params: {mid: msg.id}, query: {title: msg.title}}" >{{msg.title}}</router-link>
              <button @click = "pushShow(msg)">push查看</button>
              <button @click = 'replaceShow(msg)'>replace查看</button>
         </li>
         <button @click = '$router.back()'>回退</button>
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
      },

      methods: {
        pushShow (message){
          //编程是路由导航
          this.$router.push(`/home/message/detail/${message.id}?title=${message.title}`)
        },

          replaceShow (message){
          //编程是路由导航
          this.$router.replace(`/home/message/detail/${message.id}?title=${message.title}`)
        },
      },
  }
</script>

<style scoped>

 
</style>
