#本项目使用的是express+MongoDB搭建的后台框架，使用到express的中间件和mongoose对MongoDB数据库进行操作

1、使用到的express中间件有：
#body-parser：是一个http请求体解析中间件，请求体解析的api有bodyParser.json()-解析JSON格式数据、bodyParser.raw()-解析二进制格式数据、bodyParser.text()-解析文本格式数据、bodyParser.urlencoded()-解析文本格式数据。

#connect-history-api-fallback：单页面应用中使用H5 History路由模式时，可以指定代理请求返回一个页面的中间件。

#express-static：express内置中间件，用于访问静态文件。

#express.Router()：使用express的路由中间件和路由系统


2、使用到的mongoose对MongoDB数据库进行操作：
定义mongoose的Schema和Models，在Schema中定义字段的数据类型和限制条件，再在Models中引入该Schema
使用Models进行操作MongoDB数据库

3、使用JWT(jsonwebtoken插件)实现服务器和客户端的安全通讯，通过设置token实现
注册token：jwt.sign()
验证token的合法性：jwt.verify()
返回解码没有验证签名是否有效
4、使用bcryptjs插件实现数据加密
加密：bcrypt.hashSync()
解密，验证密码正确性：bcrypt.compareSync()