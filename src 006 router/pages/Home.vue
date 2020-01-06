<template>
  <div>
     <h3>Home</h3>
     <ul  class="nav nav-tabs">
      <li>
        <router-link to="/home/news">News</router-link>
      </li> 
      <li>
        <router-link to="/home/message">Message</router-link>
      </li> 
    </ul>
    <!-- 显示路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    //组件起名  有唯一的标识
    name:'home'
  }
</script>

<style scoped>

 
</style>
