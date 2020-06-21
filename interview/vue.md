# vue
[参考文章](https://juejin.im/post/5d59f2a451882549be53b170#heading-21)

## v-if v-show 区别
1. v-if: 条件渲染，条件为真时场内的组件被渲染，为假时销毁，隋性的，如果一开始为假，什么都不会做，直到条件为真时才会渲染条件块
2. v-show: 不管什么条件下都会被渲染，只是通过css 的display 属性进行切换
note: v-if 适合条件变化少的，v-show 适合条件频繁切换的

## computed 和 watch 的区别和运用的场景
1. computed: 依赖属性值，computed计算的值具有缓存，只有当它依赖的值改变时才会重新计算新值
2. watch: 每当监听的数据改变时就会执行回调

## 直接给一个数组项赋值，vue 能检测到变化吗

`vm.items[index] = newVal`
`vm.items.length = newLength`
不能检测到变化
``` js
// 可以检测到变化
Vue.set(vm.items, index, newVal)
vm.$set(vm.items, index, newVal)
vm.items.splice(index, 1, newVal)
```

## 父组件监听子组件的生命周期
``` vue
// 1. 
// parent.vue
<Child @mounted="dosomething"/>

// child.vue
mounted() {
  this.$emit('mounted')
}


// 2.
// parent.vue
<child @hook:mounted="dosomething"/>
```

## keep-alive

1. Vue 的一个内置组件，不会被渲染成DOM结构
2. 会缓存包裹组件的状态，避免重新渲染
3. 具有两个生命周期方法 actived deactived
<<<<<<< HEAD
<<<<<<< acd44f89644ebca8121c0b26bfadc7ba48f392a4
4. include exclude 前者表示包含的组件被缓存，后者表示包含的组件不能被缓存，与name值匹配,其中 exclude 的优先级比 include 高；
=======
4. include exclude 前者表示包含的组件被缓存，后者表示包含的组件不能被缓存，与name值匹配
>>>>>>> update:第一次提交笔记内容
=======
4. include exclude 前者表示包含的组件被缓存，后者表示包含的组件不能被缓存，与name值匹配
>>>>>>> update:第一次提交笔记内容

## 双向数据绑定
view ->　data 通过事件监听
data -> view 通过definedProperty 来对对象属性上设置 getter setter 来实现数据劫持

1. 监听器（observer）: 对数据对象进行遍历，包括子属性对象的属性，利用Object.definedProperty() 对属性添加 setter, getter ,这样对这个对象赋值就会触发setter ,就可以监听到数据变化
2. 解析器（compiler）: 解析vue 的模版指令，将模版中的变量替换成数据，初始化页面，将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据发生变动，收到通知就会调用更新函数进行数据更新
3. 订阅器（dep）: 用来收集订阅者，对监听器observer 和 订阅者 watcher 进行统一管理
4. 订阅者（watcher）: watcher 是 Observer 与 compile 之间通信的桥梁，主要任务是订阅observer 中属性的变化，当接收到属性变化时就会触发compiler 中相应的更新函数

## proxy 与 Object.definedProperty 对比
proxy: 
1. 可以直接监听对象而非属性，可以监听到未来新增的属性
2. 可以直接监听数组的变化
3. 有13 种拦截方法
4. proxy 返回的是一个新的对象

Object.definedProperty
1. 兼容性好， proxy 无法使用pollyfill 磨平

## vue 中 key 的作用
使diff 算法更准确、快速（可以根据key 值来就地复用DOM ，而不是重新渲染DOM）