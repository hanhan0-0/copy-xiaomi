import Mock from 'mockjs'
//第一个参数是请求地址，第二个是返回值,当拦截到匹配 url 的 Ajax 请求时根据数据模板生成模拟数据
let userinfo;
// var productNum = 0;
const userList = {
        "data": [{
                "id|1-3": 0,
                "username": "jack",
                "password": "123456",
                "email": "admin@51purse.com",
                "phone": null,
                "role": 0,
                "createTime": 1479048325000,
                "updateTime": 1479048325000
            },
            {
                "id|1-3": 0,
                "username": "xiaoming",
                "password": "$180518",
                "email": "admin@51purse.com",
                "phone": null,
                "role": 0,
                "createTime": 1479048325000,
                "updateTime": 1479048325000
            },
            {
                "id|1-3": 0,
                "username": "aimi",
                "password": "yhlanyu02100810",
                "email": "admin@51purse.com",
                "phone": null,
                "role": 0,
                "createTime": 1479048325000,
                "updateTime": 1479048325000
            },
        ]
    }
    //注册
Mock.mock('/api/user/register', 'post', (req) => {
    const { password, username, email } = JSON.parse(req.body);
    var arr = {
        "id|1-3": 0,
        "username": username,
        "password": password,
        "email": email,
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    };
    userList.data.push(arr);
    return {
        status: 200,
        msg: "注册成功"
    }
});
//登录
Mock.mock('/api/user/login', 'post', (req) => {
    const { password, username } = JSON.parse(req.body)
    for (let i = 0; i < userList.data.length; i++) {
        //判断userList中是否存在该用户并且用户密码是否正确
        if (username === userList.data[i].username && password === userList.data[i].password) {
            userinfo = userList.data[i];
            console.log(userinfo);
            return {
                status: 0,
                data: userList.data[i]
            }
        }
    }
    return {
        status: 200,
        msg: "账号或密码错误"
    }
});
//拉取登录用户信息
Mock.mock('/api/user', 'get', () => {
    console.log(userinfo);
    if (userinfo) {
        return {
            status: 0,
            data: userinfo
        }
    } else {
        return {
            status: 10
        }
    }
});
// //拉去产品数量
// Mock.mock('/api/carts/products/sum', 'get', () => {

//     return {
//         status: 0,
//         data: productNum
//     }

// });
Mock.mock('/api/products', {
    "status": 0,
    "data": {
        list: [{
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-1.png",
                "name": "小米CC9",
                "subtitle": "高像素",
                "price|2000-4000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-2.png",
                "name": "小米12pro",
                "subtitle": "高像素",
                "price|2000-4000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-3.png",
                "name": "小米12x",
                "subtitle": "高像素",
                "price|2000-4000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-4.png",
                "name": "小米12",
                "subtitle": "高像素",
                "price|1000-2000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-5.png",
                "name": "小米mix4",
                "subtitle": "高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/nav-img/nav-6.png",
                "name": "小米civi",
                "subtitle": "高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id|31-36": 0,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            }
        ],
    }

});
Mock.mock('/api/carts', { status: 10 });