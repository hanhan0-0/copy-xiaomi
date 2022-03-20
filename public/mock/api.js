import Mock from 'mockjs'
//第一个参数是请求地址，第二个是返回值,当拦截到匹配 url 的 Ajax 请求时根据数据模板生成模拟数据
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|1-3": 0,
        "username": "admin",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});