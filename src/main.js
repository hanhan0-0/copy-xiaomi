import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
//根据前端的跨域方式做调整,接口代理情况
// axios.defaults.baseURL = '/api';
// axios.defaults.timeout = 8000; //超时8秒
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//interceptors拦截器，接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data; //获取接口返回的值
    if (res.status == 0) { //0是成功
        return res.data;
    } else if (res.status == 10) { //10是未登录
        window.location.href = '/#/login' //路由是挂在在vue实例上的，在每个页面才能用
    } else {
        alert(res.msg);
    }

});

//注册插件
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')