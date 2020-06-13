/**
 * Prmise 状态不可变更一旦执行reject/resolve,就不会执行下面的reslove/reject
 * then 默认是执行第一个函数，除非报错或异常（1. throw new Error 2. console.log(a); a 未定义）
 * then 是报警或异常执行下一个then 中的第二个函数
 */


/* console.log(200);

const p = new Promise(function(resolve, reject) {
  resolve();
  reject();
  console.log(400);
})

p.then(() => {
  console.log('成功');
}, () => {
  console.log('失败');
}).then(() => {
  console.log('1');
}, () => {
  console.log('2');
})

console.log(300); */

/* function f() {
  // console.log(5);
  //setTimeout(() => {
  //  console.log(5);
  //})

  return new Promise(function(resolve, reject) {
    console.log(5);
    resolve();
  });
}

console.log(1);
async function fn () {
  console.log(2);
  await f();
  console.log(3);
}
fn();
console.log(4); */

/* console.log(0);

setTimeout(() => {
  console.log(1);
}, 0);

function foo() {
  return new Promise(function (resolve, reject) {
    console.log('promise');
    resolve()
  });
}

async function fn() {
  console.log(100);
  await foo();
  console.log(200);
}

fn();

new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  console.log(2);
});

console.log(3); */

/* function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: Symbol()
  }
}
obj.b.e = function () {
  console.log(1)
};
let newObj = deepClone(obj)
newObj.b.c = 1
console.log(obj.b.c) // 2
console.log(newObj) */

