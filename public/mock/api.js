import Mock from 'mockjs'
//第一个参数是请求地址，第二个是返回值,当拦截到匹配 url 的 Ajax 请求时根据数据模板生成模拟数据
var productNum = 20;
var num;
const userList = {
    "data": [{
            "id|1-3": 0,
            "num": 0,
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
            "num": 1,
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
            "num": 2,
            "username": "张文涵",
            "password": "yhlanyu02100810",
            "email": "admin@51purse.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updateTime": 1479048325000
        },
    ]
}
const productList = {
        "data": [{
                "id": 31,
                "mainImage": "/imgs/nav-img/nav-1.png",
                "name": "小米CC9",
                "subtitle": "高像素",
                "price": 2000
            },
            {
                "id": 32,
                "mainImage": "/imgs/nav-img/nav-2.png",
                "name": "小米12pro",
                "subtitle": "高像素",
                "price": 2344
            },
            {
                "id": 33,
                "mainImage": "/imgs/nav-img/nav-3.png",
                "name": "小米12x",
                "subtitle": "高像素",
                "price": 2342
            },
            {
                "id": 34,
                "mainImage": "/imgs/nav-img/nav-4.png",
                "name": "小米12",
                "subtitle": "高像素",
                "price": 3455
            },
            {
                "id": 35,
                "mainImage": "/imgs/nav-img/nav-5.png",
                "name": "小米mix4",
                "subtitle": "高像素",
                "price": 4555
            },
            {
                "id": 36,
                "mainImage": "/imgs/nav-img/nav-6.png",
                "name": "小米civi",
                "subtitle": "高像素",
                "price": 2341
            },
            {
                "id": 37,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 1200
            },
            {
                "id": 38,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 2220
            },
            {
                "id": 39,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 999
            },
            {
                "id": 40,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 1999
            },
            {
                "id": 41,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 2344
            },
            {
                "id": 42,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 4433
            },
            {
                "id": 43,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 4450
            },
            {
                "id": 44,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price": 2340
            }
        ],


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
        status: 0,
        data: {
            "msg": "注册成功"
        }
    }
});
//登录
Mock.mock('/api/user/login', 'post', (req) => {
    const { password, username } = JSON.parse(req.body)
    for (num = 0; num < userList.data.length; num++) {
        //判断userList中是否存在该用户并且用户密码是否正确
        if (username === userList.data[num].username && password === userList.data[num].password) {
            return {
                status: 0,
                data: userList.data[num]
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
    return {
        status: 0,
        msg: "拉取成功",
        data: userList.data[0],
    }
});
// 拉去产品数量
Mock.mock('/api/carts/products/sum', 'get', () => {
    return {
        status: 0,
        msg: "拉取成功",
        data: productNum
    }
});
Mock.mock('/api/products', {
    "status": 0,
    "data": {
        list: [{
                "id": 31,
                "mainImage": "/imgs/nav-img/nav-1.png",
                "name": "小米CC9",
                "subtitle": "高像素",
                "price": 2999
            },
            {
                "id": 32,
                "mainImage": "/imgs/nav-img/nav-2.png",
                "name": "小米12pro",
                "subtitle": "高像素",
                "price": 2000
            },
            {
                "id": 33,
                "mainImage": "/imgs/nav-img/nav-3.png",
                "name": "小米12x",
                "subtitle": "高像素",
                "price": 888
            },
            {
                "id": 34,
                "mainImage": "/imgs/nav-img/nav-4.png",
                "name": "小米12",
                "subtitle": "高像素",
                "price|1000-2000": 0
            },
            {
                "id": 35,
                "mainImage": "/imgs/nav-img/nav-5.png",
                "name": "小米mix4",
                "subtitle": "高像素",
                "price|2000-3000": 0
            },
            {
                "id": 36,
                "mainImage": "/imgs/nav-img/nav-6.png",
                "name": "小米civi",
                "subtitle": "高像素",
                "price|2000-000": 0
            },
            {
                "id": 37,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 38,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 39,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 40,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 41,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 42,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 43,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            },
            {
                "id": 44,
                "mainImage": "/imgs/product.jpg",
                "name": "RedMi",
                "subtitle": "曲面屏，高像素",
                "price|2000-3000": 0
            }
        ],
    }

});
Mock.mock(RegExp('/api/products' + '.*'), (options) => {
    let idx = options.url;
    let idd = idx.substring(idx.length - 2);
    for (let j = 0; j < productList.data.length; j++) {
        if (productList.data[j].id == idd) {
            return {
                "status": 0,
                "data": productList.data[j]
            }
        }
    }
    return {
        "status": 0,
        "data": productList.data[2]
    }

});
Mock.mock(RegExp('/api/carts' + '.*'), () => {

    return {
        "status": 0,
        "data": {
            "cartProductVoList": productNum++
        }
    }

});
Mock.mock('/api/carts', { status: 10 });