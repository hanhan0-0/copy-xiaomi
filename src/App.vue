<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
//  import jsonp from "jsonp"
// import storage from './storage'
export default {
  name: 'App',
  data(){
    return{
      res:{},
      username:''
    }
  },
  components: {
    
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    // storage.setItem("productnum", 0);
  },
  methods:{
    
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //todo，保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
} 
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
