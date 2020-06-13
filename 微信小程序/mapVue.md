## 创建mapVue项目
1. vue init mpvue/mpvue-quickstart my-project(项目名称)
2. cd my-project
3. npm install
4. npm run dev


## 全局的.js,.json,.vue
- app.js



```javascript
import Vue from 'vue'
import App from './app'

// 设置vue的提示功能关闭
Vue.config.productionTip = false

// 声明当前组件类型
App.mpType = 'app' // 应用

// 生成应用的实例
const app = new Vue(App)

// 挂载整个应用
app.$mount()
```

- app.json
相当于原生小程序中的app.json

- app.vue
相当于原生小程序中的app.wxml,app.wxss,所以其中只有 `<script> style` 标签



## 页面中的main.js .vue main.json

- main.js


```javascript
import Vue from 'vue' // 引入 vue
import Index from './index' // 引入当前页面

const index = new Vue(Index)

index.$mount()

```

- .vue
	- 相当于原生小程序页面中的.wxml .wxss .js 文件
	- 生命周期函数尽量用vue中的钩子函数
	- 绑定事件可以用`@` `v-on` `v-bind`
	- 阻止冒泡`@tap.stop` `@click.stop`
	- template 中使用 vue 中的模版语法 `v-for v-if v-else...`


- main.json
相当于原生小程序页面中的.json文件



## tips
1. 当新建页面时，不会自动将新建的页面编译到 dist 文件中，需要手动编译 `npm start/npm run dev`

