1. new 的实现
```js
const create = function () {
  // 1. 创建一个空对象
  const obj = {};

  // 2. 取到构造函数
  const proto = [].shift.call(arguments);

  // 3. 新对象的隐式原型指向构造函数的显示原型
  obj.__proto__ = proto.prototype;

  // 4. 执行构造函数
  const res = proto.apply(obj, arguments);
  // 5. 返回一个对象
  return typeof res === 'object' ? res : obj;
}

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`my name is ${this.name}`);
}

const p1 = new Person('zs');
const p2 = create (Person, 'ls');

p1.greet();
p2.greet();
```

2. instanceof 的实现
```js
console.log(function(){} instanceof Function);

const myInstanceOf = function(left, right) {
  while(left.__proto__ !== right.prototype) {
    left = left.__proto__;
    if (left=== null) {
      return false;
    }
  }
  return true;
}

console.log(myInstanceOf(function() {}, Function));
```

3. 柯里化
```js
function add(a, b) {
  return a + b;
}

// console.log(add(1, 2));

/* console.log(newAdd(1)(2)); // 3

function newAdd() {
  const arg1 = [].slice.call(arguments);
  return function () {
    const arg2 = [].slice.call(arguments);
    return Number(arg1) + Number(arg2);
  }
} */
/**
 * 
 * @param {*} fn function
 * @param {*} args array
 */
function curry(fn, args) {
  // fn参数列表的个数
  var len = fn.length;
  var args = args || [];
  
  return function() {
    // 拼接参数
    newArgs = [...args, ...[].slice.call(arguments)];
    if (newArgs.length < len) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  }
}

const curry2 = (fn, args = []) => {
  return () => {
    const newArgs = [...args, ...arguments];
    return newArgs === fn.length ? fn.apply(this, newArgs) : curry2.call(this, fn, newArgs);
  }
}

const addCurry = curry(add);
console.log(addCurry(1)(2));


const addCurry2 = curry2(add); //3
console.log(addCurry(1)(2)); //3

let curryTest=curry((a,b,c,d)=>a+b+c+d)
console.log(curryTest(1,2,3)(4))//返回10
console.log(curryTest(1,2)(4)(3)) //返回10
console.log(curryTest(1,2)(3,4))//返回10
```