## 13事件

### 事件流

1. 事件流： 页面接收事件的顺序
2. 事件冒泡： 事件开始由具体的元素沿着文档树向上传递到document/window
3. 事件捕获： 与事件冒泡相反，由最外层的结构documentwindow沿着文档树向下传递给最具体的元素
4. 事件流包括三个阶段：
	4.1 事件捕获阶段
	4.2 处于目标阶段
	4.3 事件冒泡阶段

### 事件处理程序

** 注意 **
HTML事件处理程序与DOM0,DOM2级事件处理程序同时存在时无效，即不会触发HTML事件处理程序的代码

1. HTML事件处理程序： 在html标签内绑定事件
```js
	<div onclick="alert('javascript')">javascript高级程序设计</div>

	<div onclick="print">javascript高级程序设计</div>
	<script>
		function print() {
			console.log('javascirpt')
		}
	</script>
```
1.1 弊端
	1.1.1 在html结构解析完成，javascript代码解析之前，触发事件会报错
	1.1.2 代码耦合度高

2. DOM0级事件处理程序： 将一个函数赋值给事件处理程序属性
```js
	document.getElementByID('btn').onclick = function() {}
```
	2.1 不可以重复是定义同样的事件，后者覆盖前者
	2.2 事件处理程序的this 指向元素
3. DOM2级事件处理程序 addEventListener() removeEventListener()
	3.1 可以添加多个事件处理程序，触发顺序是代码编写的顺序
	3.2 通过addEventListener 添加的事件处理程序只能通过removeEventListener移除
	3.3 通过removeEventListener 移除必须与添加事件处理程序的参数列表一致（匿名函数无数移除）
	3.4 addEventListener('事件名'， 事件处理函数， boolean）boolean 为false 时，在冒泡阶段触发，为true时在捕获阶段触发
	3.5 事件处理程序的this 指向元素

4. IE事件处理程序
	4.1 attachEvent(),detachEvent() 绑定与解除事件
	4.2 事件名前辍为 `on` attachEvent('onclick', handler)
	4.3 事件处理程序this指向window
	4.4 可以绑定多个事件处理程序，触发顺序与代码编写顺序相反