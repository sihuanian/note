### require



1. http
2. fs
3. express
4. mongoose
5. mysql
6. art-template(模版引擎)
7. url（处理url）
8. body-parser(处理post请求的数据)
9. path(路径处理)
10. blueimp-md5（数据加密）
11. express-session



### node



- Node.js 是什么

  - JavaScript 运行时
  - 既不是语言，也不是框架，它是一个平台

- Node.js 中的 JavaScript

  - 没有 BOM、DOM

  - EcmaScript 基本的 JavaScript 语言部分

  - 在 Node 中为 JavaScript 提供了一些服务器级别的 API

    - 文件操作的能力

    - http 服务的能力

      

### 执行js文件



- cmd进入js文件路径
- node 文件名
- 在文件操作中，使用相对路径是不可靠的，因为在node中文件操作的路径被设计为相对于执行node命令所处的路径
- 模块中的路径标识和文件操作中的相对路径标识不一致
  - 模块中的./就是相对于当前文件目录
  - 文件操作中的路径标识相对于执行时的文件路径

###　node文件读写



- 浏览器中的javascript没有文件操作能力

- node具有文件操作能力

  - 读文件

  1.  const fs = require('fs') ` 引入fileSystem`

  2. fs.readFiel(‘文件路径’， function (error, data){})

  3. 成功 error为Null data为数据(data是一个二进制数据 )

  4. 失败error为错误对象 data为undefined

  - 写文件

    1. const fs = require('fs')

    2. fs.writeFile('文件路径'， ‘文件内容’， function(error){})

    - 成功 error为null

    - 失败error为错误对象

      

### 创建服务器



[创建服务器代码](F:\study\nodejs资料（7天）\01\code\05-http.js)

1. const http = require('http')

2. var server = http.createServer()

3. server.on('request', function(){})

4. server.listen('端口号'， function(){})

   

### 模块化



require 方法有两个作用：

1. 加载文件模块并执行里面的代码

2. 拿到被加载文件模块导出的接口对象
     在每个文件模块中都提供了一个对象：exports
      exports 默认是一个空对象
      你要做的就是把所有需要被外部访问的成员挂载到这个 exports 对象中

   [简单的模块化](F:\study\nodejs资料（7天）\01\code\09-简单的模块化\加载与导出)



### 端口号



1. ip地址用来定位计算机
2. 端口号用来确定应用
3. 一切要联网的程序都要占用一个端口号



### 设置响应头（解决中文乱码）



response.setHeader('Content-Type','text/plain;charset=utf-8')

[content-Type](http://tool.oschina.net)



### 启动mongodb



1. cmd切换到mongodb的bin目录下
2. `mongod --dbpath f:/data/db`(存放数据库的目录)
3. 另切一个cmd，`mongo`


### yarn npm

| npm | yarn |
| :--: | :--: |
| npm install |	yarn |
| npm install react --save | yarn add react |
| npm uninstall react --save | yarn remove react |
| npm install react --save-dev | yarn add react --dev |
| npm update --save | yarn upgrade |

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |