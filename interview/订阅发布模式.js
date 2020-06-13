// ``` javascript
// // 订阅一个事件
// pubsub.subscribe('example1', function (topics, data) {
//   console.log(topics + ": " + data);
// });

// // 再订阅一个事件
// pubsub.subscribe('example1', function (topics, data) {
//   console.log(topics + "******* " + data);
// });

// //发布通知
// pubsub.publish('example1', 'hello world!');

// //执行结果
// example1******* hello world!
// example1: hello world!
// ```

class Pubsub {
  constructor() {
    this.map = new Map()
  }

  subscribe(name, cb) {
    this.map.set(cb, name)
  }

  publish(name, str) {
    this.map.forEach((value, key) => {
      if (value === name) {
        key(name, str)
      }
    })
  }
}

const pubsub = new Pubsub()

pubsub.subscribe('example1', function (topics, data) {
  console.log(topics + ": " + data);
});

// 再订阅一个事件
pubsub.subscribe('example1', function (topics, data) {
  console.log(topics + "******* " + data);
});

//发布通知
pubsub.publish('example1', 'hello world!');

//执行结果
// example1******* hello world!
// example1: hello world!
