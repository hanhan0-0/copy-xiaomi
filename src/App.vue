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
    //本地加载请求静态json文件的形式
    this.axios.get('/mock/user/login.json').then((res)=>{
        this.res=res;});
    //通过easymock平台实现数据mock,只用修改main.js里的baseurl
    //  this.axios.get('/user/login').then((res)=>{
    //        this.res=res;
    //  });
    //本地集成mock api
    //   this.axios.get('/user/login').then((res)=>{
    //        this.res=res;
    //  }); 
  }
}
</script>

<style>

</style>
