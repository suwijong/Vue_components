<template>
  <ul>
    <!-- <li>ID:{{$route.params.mid}}</li> -->
    <li>ID:{{mid}}</li>
    <!-- <li>Title:{{detail.title}}</li> -->
    <li>Title:{{$route.query.title}}</li>
    <!-- <li>Title:{{title}}</li> -->
    <li>Content:{{detail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
const allDetails = [
  { id: 1, title: "message001", content: "这是内容0001" },
  { id: 2, title: "message002", content: "这是内容0002" },
  { id: 3, title: "message003", content: "这是内容0003" },
  { id: 4, title: "message004", content: "这是内容0004" }
];
export default {
  props:['mid','title'],
  data() {
    return {
      detail: {}
    };
  },

  mounted() {
    //模拟获取数据
    const mid = this.$route.params.mid * 1; //因为拿到的是一个字符串所以乘以1 变为数字
    setTimeout(() => {
      const detail = allDetails.find(detail => mid === detail.id);

      //更新数据
      this.detail = detail;
    }, 500);
  },
  //监视路由的变化
  watch: {
    $route(to, from) {
      const mid = to.params.mid * 1;
      setTimeout(() => {
        const detail = allDetails.find(detail => mid === detail.id);

        //更新数据
        this.detail = detail;
      }, 500);
    }
  }
};
</script>

<style scoped>
</style>
