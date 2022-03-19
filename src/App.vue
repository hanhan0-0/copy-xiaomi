<template>
  <div >
    <router-view> </router-view>
  </div>
</template>

<script>
// import jsonp from "jsonp"
import storage from './storage'
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  components: {
    
  },
  mounted(){
      storage.setItem("user",{"userName":"jack","age":18,"sex":1});
      // storage.clear("a","user");
  }
}
</script>

<style>

</style>
