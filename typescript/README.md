# typescript

## 编译 .ts文件
> tsc src/app.ts --outFile dist/app.js
> tsc src/* --outDir dist
> tsc src/* --outDir dist --watch

## 原始数据类型

### 布尔值
- boolean 布尔值
- Boolean 对象

### 数值
- number

### 字符串
- string

### 空值
- void
- tips: 
1. 可以用`void`表示没有任何返回值的函数
2. 声明一个`void`类型的变量没有什么用，因为你只能将它赋值为`undefined`和`null`

```javascript
function alertName(): void {
    alert('My name is Tom');
}
```

### null 和 undefined
tips: 与`void`的区别是，`undefined`和`null`是所有类型的子类型。也就是说`undefined`类型的变量，可以赋值给`number`类型的变量，而`void`不能赋值给`number`类型的变量。


## 任意值

> let a: any = 'str' | 666 | false

tips: 未声明类型的变量，被默认设定为任意值类型

> let a; => let a: any;


## 数据推论

- 有赋值操作时，变量会进行类型推论
> let name = 'sihuanian'; => let name: string = 'sihuanian';


## 联合类型

联合类表示取值可以为多种类型中的一种，可选类型用`|`隔开
> let age: string | number;

tips: 
1. 当typescript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里的共有的属性或方法

```javascript
	function getLength(any: string | number): number {
		return any.length
	}
	// Property 'length' does not exist on type 'number'.


	function getString(something: string | number): string{
    	return something.toString();
	}
```
2. 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

```javascript
	let age: number | string;
	age = 17 // age被推断成数值类型可以使用数值类型上的方法
	console.log(age.length) // Property 'length' does not exist on type 'number'
	age = '18' // age被推断成字符串类型可以使用字符串类型上的方法
	console.log(age.length) // 18
```

## 接口

```javascript
interface Person {
	name: string;
	age: number;
}
let sihuanian: Person = {
	name: 'sihuanian',
	age: 21
}
// 属性要与接口一致，不能多也不能少
```

### 可选属性

```javascript
interface Person {
	name: string;
	age?: number;
}

let sihuanian: Person = {
	name: 'sihuanina',
	age: 21 // 可选的
}
```

### 任意属性
一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

```javascript
interface Person {
	name: string;
	age?: number;
	[propName: string]: any;
}

let s: Person = {
	name: 'sihuanian',
	age: 21,
	gender: 'm'
}
```
### 只读属性
```javascript
interface Person {
	name: string;
	readonly age: number;
}

let p: Person = {
	name: 'sihuanian',
	age: 21
}

// s.age 不能为只读属性赋值
```


## 数组的类型
> 类型 + []  let arr: number[] = [1, 2, 3]

数组的类型一旦定义之后，不能向其中添加非指定类型的值。

> 数组的泛型 let arr: Array<number> = [1, 2, 3]
> 接口， 类数组经常使用接口定义类型



## 函数
1. 函数的重载
2. 函数的可选参数
3. 函数的默认值
4. 函数的剩余参数