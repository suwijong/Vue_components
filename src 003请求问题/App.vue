<template>
  <div>
      <div v-if="!repoName">Loading.....</div>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a> </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
    data() {
      return {
         repoName:'',
         repoUrl:''
      }
    },
     mounted () {
       //使用vue-resource 发送请求
      // this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars')
      // .then(response =>{
      //   //获取名字和仓库地址
      //   const result = response.data
      //   const {name,html_url} = result.items[0]
      //   //更新数据
      //   this.repoName = name
      //   this.repoUrl = html_url
      // })
      // .catch(error =>{
      //   alert('请求出错')
      // })
      //使用axios 发送请求
        axios.get('https://api.github.com/search/repositories',{
         params:{
            q:'j',
            sort:'stars'
          }
         }).then(response =>{
        //获取名字和仓库地址
        const result = response.data
        const {name,html_url} = result.items[0]
        //更新数据
        this.repoName = name
        this.repoUrl = html_url
      })
      .catch(error =>{
        alert('请求出错')
      })
     },
  }
</script>

<style scoped>

 
</style>
