<template>
<div></div>
  
</template>

<script>

import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
  
  },
  data(){
    return{
      age:30,
      data:''
    }
  },
  mounted(){
    let url="https://www.imooc.com/activity/servicetime";
    jsonp(url,(eer,res)=>{
      let result=res;
      this.data=result;
    })
  }
}
</script>

<style>

</style>
