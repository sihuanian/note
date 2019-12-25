## 基本数据类型 复杂数据类型存储方式
基本数据类型： 存储在栈中，闭包存储在堆内存中
复杂数据类型： 存储在堆内存中

## typeof
1. 使用`typeof aaa` `aaa` 是一个未定义的变量依旧会返回`undefined`
2. `typeof` 对于对象，除了函数都会返回`object`
3. `typeof null` 返回`object` ps: 32位操作系统中使用低位存储变量的类型信息，000 代表对象，而`null` 全为0
4. `void` 后面跟个表达式，问题返回`undefined`

## 转Boolean
- 在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象
- [] == false 为true

## 对象转基本类型
1. 对象转基本类型首先会调用`valueof`方法，然后调用`toString`方法

## 四则运算符
1. 加法运算时，一方是字符串，会将另一方也转换成字符串，否则只要一方是数字，另一方会转化成数字

## 原型
1. 每个函数都有`prototype`属性，除了`Function.prototype.bind()`，每个对象都有`__proto__`属性

## 提升
1. 函数声明提升高于变量声明提升
2. 非匿名自调用函数中打印这个自调用函数结果会是函数本身，会创建一个自执行函数名相同的只读属性
```js
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

## setTimeout setInterval
1. setTimeout setInterval 共用一个编码池，技术上，可以使用clearInterval 清除setTimeout,反之也可
2. setTimeout setInterval 第三个参数及其后的参数作为第一个参数的实参

## CommonJS 与 ES6 模块化的区别 
CommonJS 是同步加载的 ES6模块化是异步加载的
CommonJS 是执行时加载 ES6模块化是编译时加载
CommonJS 导出的是值的拷贝 ES6 导出的是值的引用

## DOMContentLoaded
1. 如果页面中同时存在css和js，并且存在js在css后面，则DOMContentLoaded事件会在css加载完后才执行。
2. 其他情况下，DOMContentLoaded都不会等待css加载，并且DOMContentLoaded事件也不会等待图片、视频等其他资源加载。