# vue

  vue不支持IE8，原因：IE8不支持vue的核心语法Object.defineProperty(objName, propertyName, {})

### git

[开源协议](<https://blog.csdn.net/maihilton/article/details/80921650>)

1. git init
2. git status
3. git add .
4. git commit -m "init my project"  ***m是message***的意思



提交代码：

1. git add .
2. git commit -m "提交信息"
3. git push



### 使用mui时引用min.js时

![1560653634714](C:\Users\思华年\Desktop\截图\1560653634714.png)

  移除严格模式

	+ [引入mui.js报错](<https://blog.csdn.net/u012815877/article/details/81187826>)
	+ [使用babel-plugin-transform-remove-strict-mode](<https://github.com/genify/babel-plugin-transform-remove-strict-mode>)



### 手机测试项目

+ 在package.json中的dev中加入--host ip地址

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 192.168.1.106",
```





# Webpack

npm init -y 生配置文件——package.json

npm install url-loader -S，安装url-loader并配置到配置文件中

url-loader: limit属性，大于设置定的数值会打包成变通的物理文件，小于设置数值会变成base64



## 项目从低版本webpack升级到高版本webpack



先升级webpack,再根据提示信息完成升级操作,

1、升级loader

2、plugin被替换，用指定的插件替换之

#### 坑：

cnpm install extract-text-webpack-plugin@latest -D

报同样的错误

cnpm install extract-text-webpack-plugin@next -D

webpack3--contenthash  webpack4--hash



## 路由懒加载

```js
1.
{
    path: '/development',
    name: 'development',
    component: (resolve) => {
        require(['../views/development.vue'], resolve)
    }
}

2.
const _import_ = file => () => import('views/' + file + '.vue')

{
    path: '/development',
    name: 'development',
    component: _import_('development')
}

```

## 组合通信

1. .sync
```vue
// 父组件
<home :title.sync="title" />
//编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}

```
2. v-slot
```vue
// 父组件
<todo-list>
 <template v-slot:todo="slotProps" >
   {{slotProps.user.firstName}}
 </template> 
</todo-list> 
//slotProps 可以随意命名
//slotProps 接取的是子组件标签slot上属性数据的集合所有v-bind:user="user"

// 子组件
<slot name="todo" :user="user" :test="test">
    {{ user.lastName }}
</slot> 
data() {
    return {
      user:{
        lastName:"Zhang",
        firstName:"yue"
      },
      test:[1,2,3,4]
    }
  },
// {{ user.lastName }}是默认数据  v-slot:todo 当父页面没有(="slotProps")

```