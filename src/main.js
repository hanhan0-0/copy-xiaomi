import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import storage from './storage'
// import env from './env'
// 根据前端的跨域方式做调整,接口代理情况
const mock = true;
if (mock) {
    require('../public/mock/api');
}
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; //超时8秒
//根据环境变量获取不同的请求地址,接口代理以外的方法
// axios.defaults.baseURL = env.baseURL;
//interceptors拦截器，接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data; //获取接口返回的值
    let path = location.hash;
    if (res.status == 0) { //0是成功
        return res.data;
    } else if (res.status == 10) { //10是未登录
        if (path != '#/index')
            window.location.href = '/#/login'; //路由是挂在在vue实例上的，在每个页面才能用
        return Promise.reject(res);
    } else {
        Message.error(res.msg);
        return Promise.reject(); //抛出异常报错
    }

});

//注册插件
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie);

Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')