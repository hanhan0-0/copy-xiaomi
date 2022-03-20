<template>
  <div >
    <router-view> </router-view>
  </div>
</template>

<script>
// import jsonp from "jsonp"
// import storage from './storage'
export default {
  name: 'App',
  data(){
    return{
      res:{}
    }
  },
  components: {
    
  },
  mounted(){
    this.axios.get('/mock/user/login.json').then((res)=>{
        this.res=res;

    });

      
  }
}
</script>

<style>

</style>
