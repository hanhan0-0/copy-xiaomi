import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Order from './pages/order'
import Cart from './pages/cart'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Login from './pages/login'


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/login',
            children: [{
                    path: 'index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: '/pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: '/list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: '/confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                }
            ]
        }

    ],


});