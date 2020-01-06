<template>
  <div>
     <mt-button type="primary" size = "large" @click = "hint">mint-ui测试</mt-button>

  </div>
</template>

<script type="text/ecmascript-6">
import { MessageBox,Toast } from 'mint-ui';
  export default {
    methods: {
      hint (){
        MessageBox.alert('点击了button').then(action => {
          Toast({
            message: '提示',
            position: 'bottom',
            duration: 5000
          });
     
        })
      }
    },
  }
</script>

<style scoped>

 
</style>
