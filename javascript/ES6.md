# ES6


## let和const

1. for 循环中设置循环变量的那部分是父作用域，循环体中单独的子作用域
```javascript
	for (let i = 0; i < 10; i++) {
		let i = 'abc'
		console.log(i) // abc
	}
```

2. let,const不存在变量提升

3. 暂时性死区
	ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。**凡是在声明之前就使用这些变量，就会报错。**
	总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
```javascript
	var tep = 'abc'

	if (true) {
		tem = 123 // referenceError
		let tep
	}
```

4. 不允许重复声明
```javascript
	function func() {
		let a = 10
		let a = 1
	}
	func() // 'a' has already been declared
```

5. 尽量不要在块级作用域中声明函数，如果确实需要也应该用函数表达式而不是函数声明，因为函数表达式不存在函数提升


## 解构赋值

1. 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

```javascript
	// 数组的解构赋值
	// 模式匹配，解构失败就为 undefined
	let [a, b, c] = [1, 2, 3] // a=1, b=2, c=3
	let [a, [b, c], d] = [1, [2, 3], 4] // a=1, b=1, c=3, d=4
	let [x, y] = [1, 2, 3] // x=1, y=2
	// 允许默认值，当右边的元素=== undefined时，默认值生效
	let [foo = true] = [];
	foo // true

	// 对象的解构赋值
	// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
	// 对象的解构赋值可以可以取得继承的值
	let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
	baz // "aaa"
	foo // error: foo is not defined
```


## JSON

1. JSON.strigify(obj/arr)
	js数组或对象转换成json 数组或对象

2. JSON.parse(obj)
	js数组或对象转换成json 数组或对象


## 三点运算符 

1. ... spread 展开一个数组，多个参数
2. ... reset 收起


## Object

1. Object.defineProperty(obj, {value, writable, configurable, enumerable, get(), set()})
	get() 获取属性值的时候自动调用
	set() 属性值修改时候调用，不一定修改成功

2. Object.defineProperty(obj, {propName: {descriptors}})

3. Object.create(obj, {value, writable, configurable, enumerable, get(), set()})
	为新的对象指定新的属性

4. Object.is()  判断两个数据是否完全相等 `===`的升级版
> 0 == -0 // true  NaN == NaN // fase
> Object.is(0, -0) // false  Object.is(NaN, NaN) // true

5. Object.assign(targetObj, source1, source2...)
	- 只有第一个参数，直接返回该对象
	- 后面的对象参数会覆盖前面的同名属性
	- 如果参数不是对象会转化成对象，第一个参数如果是null, undefined会报错，非第一个参数是 null,undefined不会报错，忽略它。
将源对象的属性复制到目标对象上

6. 对象表达式与属性的简洁表示法不能同时使用
7. 对象的属性名表达式如果是一个对象自动转化成一个字符串`[object Object]`

## 数组

1. call() 函数会立即调用

2. apply() 函数会立即调用

3. bind() 函数不会立即调用，返回一个绑定了this 的原函数  传参方式与 call()一样, 常用来绑定回调函数中的 this

4. Array.from() 将一个可迭代对象转化成数组

5. Array.of(v1, v2,...) 将参数转化成数组

6. Array.prototype.find(function(value, index, arr){return true}) 找出第一个满足返回值为 true的元素  

7. Array.prototype.findIndex(function(value, index, arr){return true}) 找出第一个满足返回值为 true的元素的下标  

8. Array.prototype.flat() 拉平数组， 默认拉平一层，可传number，为拉平层数，有空位会跳过。

9. Array.prototype.entries(),keys(),values()

10. Array.prototype.includes()

11. Array.prototype.flatMap() 相当于先执行map()，再执行flat()

```javascript
	const obj = {name: 'kobe'}
	function func(data) {
		console.log(this, data)
	}

	foo.call(obj) // {name: 'kobe'}
	foo.apply(obj) // {name: 'kobe'}

	foo.call(obj, 666) // {name: 'kobe'} 33
	foo.call(obj, [666]) // {name: 'kobe'} 33

	区别 call(), apply()不传第二个参数没有区别，传入第二个参数时 call()参数依次传入， apply() 要放到数组中
```


## 箭头函数

- 箭头函数的 this
- 官方解释
	箭头函数没有自己的 this,它的 this 不是在调用的时候确定的，而是在定义的时候所处对象就是它的 this
- 理解
	看外层是否有函数，有，就是外层函数的 this，没有，就是 全局对局


## set

1. Set.ptototype.size 返回对象的值的个数 类似于Array 的length
2. Set.ptototype.add(value) 添加一个元素到尾部
3. Set.ptototype.clear() 清空 set对象
4. Set.ptototype.delete(value) 删除set 对象中的元素
5. Set.ptototype.entries() 一个 key 与 value相同的可迭代对象
6. Set.ptototype.forEach() 
7. Set.ptototype.keys() 返回一个可迭代对象
8. Set.ptototype.values() 返回一个可迭代对象
9. Set.ptototype.has(value) 判断对象中是否有这个对象


## map

tips:
1. Map 的键实际是与内存地址绑定的，只要内存地址不同，就是两个不同的键

1. Map.ptototype.size 返回对象的值的个数 类似于Array 的length
2. Map.ptototype.set(key, value) 添加一个元素（返回当前Map 对象，可以链式调用）
3. Map.ptototype.clear() 清空 map对象
4. Map.ptototype.delete(key) 删除set 对象中的元素
5. Map.ptototype.entries() 一个 key 与 value相同的可迭代对象
6. Map.ptototype.forEach() 
7. Map.ptototype.keys() 返回一个可迭代对象
8. Map.ptototype.values() 返回一个可迭代对象
9. Map.ptototype.has(key) 判断map 对象中是否有这个元素
10. Map.ptototype.get(key) 获取对应的键值


## weakset

tips: 
1. WeakSet的成员只能是对象
2. WeakSet 中的对象都是弱引用。当这个对象不被引用时，垃圾回收机制会执行，并不会考虑这个对象还存在WeadSet中
3. 不可遍历（运行前后可能成员不同）


### 实例上可用方法
1. ws.has()
2. ws.add()
3. ws.delete()


##WeakMap

1. WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
```javascript
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};
wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```

### 实例上的方法

1. wm.get(key)
2. wm.has(key)
3. wm.delete(key)
4. wm.set(key, value)

## Number

1. Number.isFinite(i) 是否是有限在的数
2. Number.isNaN(i) 判断是否是 NaN
3. Number.isInteger(i) 判断是否是整数
4. Number.parseInt(str) 将字符串转换成数字，**存在第二个参数（将第一个参数视作N 进制的数转为十进制的数）**


## Math
1. Math.trunc(i) 直接去除小数部分


## String

> tips: 前三个方法支持传入第二个参数，includes,startsWith都是从第 n 个字符开始，endsWith表示前n 个字符

1. includes(str) 判断字符串中是否有str
2. startsWith(str) 判断字符串是否以 str开头
3. endsWith(str) 判断字符串是否以 str结尾
4. repeat(count) 返回重复 count次的字符串
使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
5. padStart(), padEnd()
字符串长度补全，param1 字符串最大长度，param2 用来补全的字符串
6. trimStart()，trimEnd() 去除头尾空白字符

## 拷贝数据的方法

深拷贝 原对象/数组 不改变
浅拷贝 原对象/数组 会改变

对象/数组的拷贝方法
1. 直接赋值 浅拷贝
2. Object.assign() 浅拷贝
3. Array.prototype.slice() 浅拷贝
4. Array.prototype.concat() 浅拷贝
5. JSON.parse(JSON.stringify()) 深拷贝


## 类数组转化成真数组

1. Array.from(str)
2. [].slice.call(str)
3. [...str] 需要有Iterator 接口


## 模块

### import

1. import 具有提升效果，会提升到整个模块的头部。本质：import是编译阶段执行的，在代码运行之前


## Proxy

###下面是 Proxy 支持的拦截操作一览，一共 13 种。

1. get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
2. set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
3. has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
4. deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
5. ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
6. getOwnPropertyDescriptor(target, propKey)：拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
7. defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
8. preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
9. getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
10. isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
11. setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
12. apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
13. construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

tips: 
1. 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
2. 严格模式下，set代理如果没有返回true，就会报错。
3. has  拦截原型链上是否有某个属性，如果某个属性是不可配置的或者目标对象是不可扩展的has 就不能返回false 
4. has 对 for let in 无效


## 模块化

### export

```js
// 1. 
export var firstName = 'Michael'
export var lastName = 'Jackson'

// 2. 推荐
var firstName = 'Michael'
var lastName = 'Jackson'
export { firstName, lastName }

```