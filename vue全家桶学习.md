### vue全家桶学习

#### 1-4章

- app.vue

  app.vue可以当做是网站首页，是一个vue项目的主组件，页面入口文件 ，所有页面都是在App.vue下进行切换的。是整个项目的关键，app.vue负责构建定义及页面组件归集。

  App.vue本质上也是一个js文件，相当于一个模板文件（描述一个组件）。主要包括三个部分：模板（结构）、脚本文件、样式

  1. 模板（结构）

     `<template></template>`内容相当于MVVM中的V--视图层。

     MVVM 

     mvvm：数据层，视图层，vm层

     vm是数据层和视图层的桥梁，数据与视图分离

     MVVM 模式便是使用的是[数据绑定](https://baike.baidu.com/item/数据绑定)基础架构，View绑定到ViewModel，然后执行一些命令在向它请求一个动作。而反过来，ViewModel跟Model通讯，告诉它更新来响应UI。这样便使得为应用构建UI非常的容易。往一个应用程序上贴一个界面越容易，外观设计师就越容易使用Blend来创建一个漂亮的界面。同时，当UI和功能越来越松耦合的时候，功能的可测试性就越来越强。

     - MVVM模式和MVC模式一样，主要目的是分离[视图](https://baike.baidu.com/item/视图)（View）和模型（Model），有几大优点

       **1. 低耦合**。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

       **2. 可重用性**。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

       **3. 独立开发**。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xaml代码。

       **4. 可测试**。界面素来是比较难于测试的，测试可以针对ViewModel来写。

     - 只能有一个入口即最外层只能有一个div8

     - 引入组件三部曲：
       1. 引入组件 import
       
       2. 注册组件 在components中注册组件
       
       3. 组件举例：export中name是对外声明组件名称 style中scoped是控制样式只在该组件中起作用
       
          export default:export命令对外接口是有名称的且 import 命令从模块导入的变量名与被导入模块对外接口的名称相同，而export default命令对外输出的变量名可以是任意的，这时 import 命令后面，不使用大括号

  2. 脚本文件

     - script标签内容相当于MVVM中的VM--数据绑定交互

     - export default是ES6的语法，意思是将这个东西导出，你要import 引入东西，导出了才能引用

     - 可以写很多东西，包括变量和方法，对象等，只要是想作为开放的接口都可以写。

     - data中返回的值相当于MVVM中的M——存储传递数据

     - 数据绑定的实现
       在`<template></template>`标签中，使用双大括号{{}}来获取数据，并实现自动化处理。

       ![img](https://img-blog.csdnimg.cn/20201121100923759.png#pic_center)

       

       数据双向绑定——使用v-model
       进行双向绑定后，在input标签内输入内容，会自动更改msg内容，同时上面标签内容也会自动更改

       ![img](https://img-blog.csdnimg.cn/20201121101138731.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0thaVNhckg=,size_16,color_FFFFFF,t_70#pic_center)

       切记：双向绑定仅仅是一种高级语法糖，数据流传递还是单向的

  3. 样式文件 ： `<style></style>`

  4. mounted:钩子函数

  5. methods:

  6. ```
     new Vue({
         router,
         render: h => h(App),
     }).$mount('#app')
     ```

     $mount(’#app’) ：手动挂载到id为app的dom中的意思

     render: h => h(App) 是下面内容的缩写：

     ```js
     render: function (createElement) {
         return createElement(App);
     }
     ```

  render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h 官方文档中是这样的，createElement 是 Vue.js 里面的 函数， 这个函数的作用就是生成一个 VNode节点， render 函数得到这个 VNode 节点之后， 返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。

- cors跨域

  前端只需要调用，后端做一些修改，说明：后台允许前端某个站点进行访问。

- jsonp跨域

  利用的是script标签中src属性不受跨域限制

  缺点是只能用get请求

  jsonp请求不是一个真正的请求在XHR（xhr，全称为[XMLHttpRequest](https://so.csdn.net/so/search?q=XMLHttpRequest&spm=1001.2101.3001.7020)，用于与服务器交互数据，是ajax功能实现所依赖的对象，jquery中的ajax就是对 xhr的封装）里没有，是一个Js 脚本。第一个是url第二个是option一些参数，第三个是回调函数，参数信息和返回结果

- 接口代理

  想访问-a接口但是它代理到-b接口所以实际上访问的是-b接口。前端修改后端不动。

  通过修改nginx服务器来实现。

  新建一个vue.config.js文件：实现接口代理

  ```js
  module.exports = {
      devServer: {
          host: 'localhost',
          port: 8080,
          proxy: {
              '/api': {
                  target: 'https://www.imooc.com',
                  changeOrigin: true,
                  pathRewrite: {
                      '/api': ''
                  }
              }
          }
      }
  }
  ```

- 目录结构设置

  assets通常放静态的图片 ，大图片放public里小图片放assets里 ，webpack会抽取图片资源，大的图片当作一个请求去加载，小的图片会打包成base64

  components：放各种组件

  api:接口文件夹，承载项目的api请求

  util：公共机制

  storage:数据存储的工具箱

  store:

  router.js：路由文件

- 标签router-view

  可以加载所有的子页面，所有的子页面都要经过它，来去嵌套其他的子页面。

  router-view是用来渲染通过路由映射过来的组件，当router-link中的路径发生改变，其对应的渲染的router-view中的内容也会发生改变,从而实现无刷新的路由跳转

- 插件介绍

  element-ui：按序加载

   sass：预编译器 node-sass sass-loader

  vue-cookie:识别前端用户 前后端交互

  vue-lazyload 懒加载

   swiper：轮播

  vue-axios：方便把axios挂载在vue实例上 this.axios.get

- Vue.use() 注册插件

- main.js

  - 是初始化vue实例并使用需要的插件

  - 并且将你的内容渲染到主页面上

  - **是你的项目的入口文件**

  - 它执行的时候都是从你的 main.js 从上到下的执行的

- cookie session storage

  ![image-20220320213041809](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220320213041809.png)

  ![image-20220320213029721](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220320213029721.png)

  cookie:

  - 当用户第一次浏览某个使用Cookie的网站时,该用户生成一个唯一的识别码（Cookie id），创建一个Cookie对象,web服务器通过在http响应消息头增加Set-Cookie响应头字段将Cookie信息发送给浏览器，浏览器收到该响应报文之后，根据报文头里的Set-Cookied特殊的指示，生成相应的Cookie，保存在客户端;当用户再次访问该网站时，浏览器首先检查所有存储的Cookies，如果某个存在该网站的Cookie（即该Cookie所声明的作用范围大于等于将要请求的资源），则把该cookie附在请求资源的HTTP请求头上发送给服务器。服务器接收到用户的HTTP请求报文之后，从报文头获取到该用户的Cookie，从里面找到所需要的东西。

  session:

  - 当用户访问到一个服务器，如果服务器启用Session，服务器就要为该用户创建一个SESSION，在创建这个SESSION的时候，服务器首先检查这个用户发来的请求里是否包含了一个SESSION ID，如果包含了一个SESSION ID则说明之前该用户已经登陆过并为此用户创建过SESSION，那服务器就按照这个SESSION ID把这个SESSION在服务器的内存中查找出来（如果查找不到，就有可能为他新创建一个），如果客户端请求里不包含有SESSION ID，则为该客户端创建一个SESSION并生成一个与此SESSION相关的SESSION ID。这个SESSION ID是唯一的、不重复的、不容易找到规律的字符串，这个SESSION ID将被在本次响应中返回到客户端保存，而保存这个SESSION ID的正是COOKIE，这样在交互过程中浏览器可以自动的按照规则把这个标识发送给服务器。 
  - session不基于cookie的方法
    1. 一种技术叫做URL重写，就是把Session id直接附加在URL路径的后面一种是作为URL路径的附加信息
    2. 作为查询字符串附加在URL后面
    3. 还有一种就是表单隐藏字段。就是服务器会自动修改表单，添加一个隐藏字段，以便在表单提交时能够把Session id传递回服务器。

  #####    cookie与session的区别

  - Cookie数据存放在客户端，Session数据放在服务器端
  - Cookie的安全性一般，他人可通过分析存放在本地的Cookie并进行Cookie欺骗。在安全性第一的前提下，选择Session更优。重要交互信息比如权限等就要放在Session中，一般的信息记录放Cookie中
  - 单个Cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个Cookie，而Session原则上没有限制
  - Session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用Cookie。
  - Session 的运行依赖Session ID，而 Session ID 是存在 Cookie 中的，也就是说，如果浏览器禁用了 Cookie，Session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 Session ID，也就是地址重写）

  localstorage:

  - localStorage 是 HTML5 提供的一个 API，他本质上是一个hash（哈希表），是一个存在于浏览器上的 hash（哈希表）。

  - localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。

  - localStorage 是一个保存于客户端的哈希表，可以用来保存本地的一些数据。并且**不会因为刷新而释放**，所以，**可以使用 localStorage 来实现变量的持久化存储**

    localStorage的特点

    - localStorage 与 HTTP 没有任何关系，所以在HTTP请求时不会带上 localStorage 的值
    - 只有相同域名的页面才能互相读取 localStorage，同源策略与 cookie 一致
    - 不同的浏览器，对每个域名 localStorage 的最大存储量的规定不一样，超出存储量会被拒绝。最大存5M 超过5M的数据就会丢失。而 Chrome 10MB 左右
    - 常用来记录一些不敏感的信息
    - localStorage 理论上永久有效，除非用户清理缓存

  sessionstorage:

  - sessionStorage 的所有性质基本上与 localStorage 一致，唯一的不同区别在于：

  - sessionStorage 的有效期是页面会话持续，如果页面会话（session）结束（关闭窗口或标签页），sessionStorage 就会消失。而 localStorage 则会一直存在。

  ##### localStorage与sessionStorage的区别

  - localStorage生命周期是永久的，除非被清除，否则永久保存，而sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除

- 接口错误拦截

  axios.interceptors.request.use()//interceptors拦截器，接口错误拦截

- 接口环境设置

  在不用接口代理方式时的方案：

  process.env.NODE_ENV:

  - 在node中，有全局变量process表示的是当前的node进程。
    process.env包含着关于系统环境的信息

  - NODE_ENV是一个用户自定义的变量，在webpack中它的用途是**判断生产环境或开发环境**。

  如果要新建一个开发环境如 “te_st": ''+++++serve  --mode=te_st" 需要新建一个.env.te_st 里面写NODE_ENV='te_st'

- mock设置

  ![image-20220320225254577](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220320225254577.png)

  三种方法：

  ![image-20220320225323837](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220320225323837.png)

  

  ​    //通过easymock平台实现数据mock,只用修改main.js里的baseurl

  ​    //  this.axios.get('/user/login').then((res)=>{

  ​    //        this.res=res;

  ​    //  });

  第三种，在代码层面就给拦截到了没有发送真正的请求

  ```
  require 和 Import的区别，前者是在代码从上往下执行的时候才会被加载，import是预编译加载。
  ```

#### 5章

浏览器做网页开发的时候必须要有安全距离，防止把页面挤到变形，多余的话会居中显示，留白

- scss

  Sass是成熟、稳定、强大的CSS预处理器，而SCSS是Sass3版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能。

  **scss和sass的区别**

  简单来说，scss和sass的区别，就在于 文件扩展名不同：“.sass”和“.scss”

  1. sass是以严格缩进式语法规则来书写的，不带大括号{}和分号;
  2. 而SCSS的语法和`CSS书写语法类似

- @import

  @import 规则允许您将样式表导入另一张样式表中。

  @import 规则必须位于文档顶部（但是在任何 @charset 声明之后）。

  @import 规则还支持媒体查询，因此可以允许依赖媒体的导入。

- mixin 让代码变得更简洁

  创建mixin.scss文件

  ```scss
  //flex布局复用
  @mixin flex($hov:space-between, $col:center) {
      display: flex;
      justify-content: $hov;
      align-items: $col;
  }
  
  @mixin bgImg($w:0, $h:0, $img:'', $size:contain) {
      display: inline-block;
      width: $w;
      height: $h;
      background: url($img) no-repeat center;
      background-size: $size;
  }
  ```

  形参要加$，调用的时候先

   @import './../assets/scss/mixin.scss';

  再@include flex();

- 

  router.params路由取参数

  this.$router.push()跳转路由

- vue指令

  - v-bind

    ```html
    <div id="app">
        <p v-bind:title="title">html属性不能使用双大括号形式绑定，只能使用v-bind指令</p>
    </div>
    ```

    ```js
    var vm = new Vue({
        el: '#app',
        data: {
            title: 'title content'
        }
    });
    ```

    这里html最后会被渲染成

    ```html
    <div id="app">
        <p title="title content">html属性不能使用双大括号形式绑定，只能使用v-bind指令</p>
    </div>
    ```

- swiper组件属性

  options：选项

  ```html
  <swiper v-bind:options="swiperOption">
    <swiper-slide v-for="(item,index) in slideList" :key="index">
      <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img" alt=""></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  ```

  

  ```json
  swiperOption:{
      auotplay:true,//自动播放
      loop:true,//循环，最后一张可以往后倒第一张
      effect:’cube‘,//指定动画
      cubeEffect:{
                      slideShadows:true,
                      shadow:true,
                      shadowOffset:80,
                      shadowScale:0.6
                  },
                  pagination:{//分页器
                      el:'.swiper-pagination',
                      clickable:true,//点击可到目标图片
                  },
                  navigation:{//导航，按左右时可转换
                      nextEl:'.swiper-button-next',
                      prevEl:'.swiper-button-prev'
                  }
  }
  ```

  

  ```
  <div class="swiper-pagination" slot="pagination"></div>//分页器
  <div class="swiper-button-prev" slot="button-prev"></div>//上一页
  <div class="swiper-button-next" slot="button-next"></div>//下一页
  ```


- slice splice

  slice():该方法不会改变原数组，而是返回一个子数组，如果想删除数组中的一段元素，应该使用Array.splice()方法。

  splice()：该方法向或者从数组中添加或者删除项目，返回被删除的项目。

- modal

- props

   **props 是将数据从父组件传递到子组件的方式**

- template

- transition transform

- 图片懒加载

   性能优化  ，提高首屏的加载速度，提升用户体验，减少带宽，只会加载目前看到的图片

   svg-矢量图

   凡是指令里面都是变量

- vuex

   帮助前端做组件传输和数据共享，把数据保存在vuex里在各个组件共用 





