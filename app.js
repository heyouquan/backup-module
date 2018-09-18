const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./server/api/user');
const history = require('connect-history-api-fallback');
const env = process.env.NODE_ENV || 'development';

let dbUrl = 'www.xxxx'; // 远程MongoDB数据库
if(env === 'development') {
    dbUrl = 'mongodb://localhost:27017/express-server-app';
}
mongoose.connect(dbUrl); // 连接MongoDB数据库
mongoose.Promise = global.Promise; // 设置mongoose使用的是原生的Promise对象

const app = express(); // 开启express应用

app.set('tokenSecret', 'expressserverapp'); // 设置token的名称
// 使用中间件
app.use(bodyParser.json()); // 解析请求体

// 使用路由中间件
app.use('/auth', userRoutes);

// 添加验证token的中间件
app.use(require('./server/middlewares/jwtMid')); 

// 使用接口路由中间件

app.use(history());

if(env !== 'development') {
    app.use('/static', express.static(__dirname + './public')); // 使用静态文件中间件
}

app.use((err, req, res, next) => {
    res.status(442).send({ error: err.message }); // 错误处理中间件
});

app.listen(4000, () => {
    console.log(`Express started in ${app.get('env')} mode on http://localhost:4000`);
});
