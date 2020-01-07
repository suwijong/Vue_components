<template>
  <div>
      <h4>counts: {{$store.state.count}} times,count is {{$store.getters.evenOrodd}}</h4>
      <button @click = 'increment'> + </button>
      <button @click = 'decrement'> - </button>
      <button @click = 'incrementIfodd'> jisu jia  </button>
      <button @click = 'incrementAsync'> yanshijia  </button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    mounted (){
      console.log(this.$store);
    },

   methods: {
      increment (){
        this.$store.commit('INCREMENT')
      },

      decrement (){
        this.$store.commit('DECREMENT')
      },

      incrementIfodd (){
         this.$store.dispatch('incrementIfodd')
      },
      
      incrementAsync (){
        this.$store.dispatch('incrementAsync')
      }
    
    },
  }
</script>

<style scoped>

 
</style>
