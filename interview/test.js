/* class EventEmitter {
    constructor () {
        this._eventpool = {};
    }
    on (event, callback) {
        this._eventpool[event] ? this._eventpool[event].push(callback) : this._eventpool[event] = [callback]
    }
    emit (event, ...args) {
        this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args))
    }
    off (event) {
        if (this._eventpool[event]) {
            delete this._eventpool[event]
        }
    }
    once (event, callback) {
        this.on(event, (...args) => {
            callback(...args);
            this.off(event)
        })
    }
} */

/* Array.prototype.map = function (callback) {
    var arr = this;
    return arr.reduce((acc, cur, i) => {
        acc.push(callback(cur, i, arr));
        console.log(acc)
        return acc
    }, []);
}
var m = [1,2,3,4,54].map(function (v, i, arr) {
    return v * v
});
console.log(m) */

/* async function async1() {
  console.log('async1 start'); // 2
  await async2();
  await async2();
  console.log('async1 end'); // 6
}

async function async2() {
  console.log('async2'); // 3
}

console.log('script start'); // 1

setTimeout(function () {
  console.log('setTimeout'); // 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1'); // 4
  resolve();
}).then(function () {
  console.log('promise2'); // 7
});

console.log('script end'); // 5 */

/* const obj = {
name: " jsCoder",
skill: ["es6", "react", "angular"],
say: function () {
 for(let i = 0, len = this.skill.length; i< len; i++){
   (function() {
    setTimeout(function(){
      console.log('No.' + i + obj.name);
      console.log(obj.skill[i]);
      console.log('--------------------------');
    }, 0);
   })(i)
   console.log(i);
 }
}
};
obj.say() */

// var a = function () { this.b = 3; }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a();
// console.log(b);
// console.log(c.b);

// 1234567890 ->1,234,567,890
function format(str) {
  let reverse = Array.from(str).reverse().join('')
  reverse = reverse.replace(/(\d){3}/g, content => {
    return (content + ',')
  })
  return Array.from(reverse).reverse().join('')
}

console.log(format('1234567890'))