<template>
  <div>
      <h5>clicked {{count}} times, count is {{eventOrodd}}</h5>
      <button @click = "increment"> + </button>
      <button @click = "decrement"> - </button>
      <button @click = "incrementIfodd"> 奇数增加 </button>
      <button @click = "incrementAsync"> 延时增加 </button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        count:0
      }
    },

    computed: {
      eventOrodd (){
        return this.count%2 === 1? '奇数' : '偶数'
      }
    },

    methods: {
      increment (){
        this.count++
      },

      decrement (){
        this.count--
      },

      incrementIfodd (){
        if (this.count%2 === 1) {
          this.count++
        }
      },
      incrementAsync (){
        setTimeout(()=>{
          this.count++
        },1000)
      }

    },
  }
</script>

<style scoped>

 
</style>
