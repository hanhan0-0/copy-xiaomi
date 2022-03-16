<template>
  <div >
    
  </div>
</template>

<script>
import jsonp from "jsonp"

export default {
  name: 'App',
  data(){
    return{
      age:30,
      data:''
    }
  },
  components: {
    
  },
  mounted(){
    let url="/api/activity/servicetime";
    jsonp(url,(err,res)=>{
      
      let result=res;
      this.data=result;
    })
  }
}
</script>

<style>

</style>
