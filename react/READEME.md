# react


## 初识react

1. 引入 react 所需的  js文件
	- react.development.js	react的核心包
	- react-dom.development.js	react虚拟DOM
	- babel.min.js	解析 .jsx文件
	- prop-types.js	react 的 props

	tips: script 标签中使用了 jsx 语法需要在 script 标签中添加 src="text/bable"
	
```html
<body>
    <div class="test"></div>
</body>
<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>
<script type="text/babel"> /* 让babel 解析下面的代码 jsx => js */
    // type => text/babel
    // 创建虚拟 DOM
    const vDom = <h1>Hello React!</h1> // jsx 代码 不要加'' 不是字符串
    // 将虚拟 DOM 渲染到真实的 DOM 中
    ReactDOM.render(vDom, document.querySelector('.test'))
</script>
```

## 创建虚拟DOM

1. react 原生方法创建虚拟 DOM
	- param1 标签名  param2 属性对象，键值对  param3 标签间的文字
	
	> const vDOM = React.createElement('h2', {id: 'idName'}, 标签间的内容)
2. jsx 语法创建虚拟 DOM
```react
 const vDom = <h1>Hello React!</h1> // jsx 代码 不要加引号
```

## 渲染虚拟DOM到真实DOM中
- param1 虚拟DOM	param2 真实 DOM对象
> ReactDOM.render(vDOM2, document.querySelector('#test2'))

```javascript
	const items = {
        title: '前端JS框架列表',
        lessons: ['jquery','zeptoo','angular','react全家桶','vue全家桶']
    }

    const vDOM1 = <h1>{items.title}</h1>
    
    // 将一个数据的数组转换成一个标签的数组
    const vDOM2 = (
    <ul>
        {
            items.lessons.map((lession, index) => <li key={index}>{lession}</li>)
        }
    </ul>)

    ReactDOM.render(vDOM1, document.querySelector('.title'))
    ReactDOM.render(vDOM2, document.querySelector('.items'))
```

## 组件化

1. 使用工厂函数创建组件，适用于简单的组件，没有状态的（无state）
```javascript
	function MyComponent(params) {
        return <h2>工厂组件（简单组件）</h2>
    }
```

2. 使用ES6类组件，适用于复杂组件（有state）
```javascript
	class MyComponent2 extends React.Component {
        render() {
            return <h2>ES6类组件（复杂组件）</h2>
        }
    }
```

tips: 注意： 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。

## state

1. 初始化state
	- 在constructor 中使用 `this.state = {key: value}`初始化state
2. 读取state
	- 类似于访问对象 `this.state.objName`
3. 更新state
	- this.setState({}) 不能使用 this.state.objName = xxx 的方式更新 state, 1. 这样修改state 不会触发render() 2. state 和 props 的更新是异步的 3. state更新是合并的过程，只需要传入发生改变的 state属性
```javascript
	class Like extends React.Component {
                constructor (props) {
                    super(props)
                    // 初始化状态
                    this.state = {
                        isLike: false
                    }

                    // 为新增的handleClick方法绑定this => 组件对象<Like />
                    // debugger
                    this.handleClick = this.handleClick.bind(this)
                }

                handleClick() {
                    // 读取状态中的 isLike
                    const isLike = !this.state.isLike
                    // 更新状态中的 isLike
                    // debugger
                    this.setState({isLike})
                    // this.state.isLike = isLike 
                    // 1. 这样修改state 不会触发render() 2. state 和 props 的更新是异步的 3. state更新是合并的过程，只需要传入发生改变的 state属性
                }

                render() {
                    // 读取状态中的 isLike
                    const {isLike} = this.state
                    // 定义组件，并绑定点击事件 onClick (C为大写，与原生js区别开来)
                    return <h2 onClick={this.handleClick}>{isLike?'我喜欢你':'你喜欢我'}</h2>
                }
            }
```



## 事件处理

- 绑定事件
	- react 定义事件采用驼峰命名，这一点不同于原生 js全小写命名
	- react 中阻止事件默认行为不能使用 return false; 必须使用 event.preventDefault()
	- 将绑定的事件定义在与 render同级下
	- 将事件的this 指向组件对象，在 constructor中指定

```javascript
	 class Like extends React.Component {
                constructor (props) {
                    super(props)
                    // 初始化状态
                    this.state = {
                        isLike: false
                    }

                    // 为新增的handleClick方法绑定this => 组件对象<Like />
                    // debugger
                    this.handleClick = this.handleClick.bind(this)
                }

                handleClick() {
                    // 读取状态中的 isLike
                    const isLike = !this.state.isLike
                    // 更新状态中的 isLike
                    // debugger
                    this.setState({isLike})
                    // this.state.isLike = isLike 
                    // 1. 这样修改state 不会触发render() 2. state 和 props 的更新是异步的 3. state更新是合并的过程，只需要传入发生改变的 state属性
                }

                render() {
                    // 读取状态中的 isLike
                    const {isLike} = this.state
                    // 定义组件，并绑定点击事件 onClick (C为大写，与原生js区别开来)
                    return <h2 onClick={this.handleClick}>{isLike?'我喜欢你':'你喜欢我'}</h2>
                }
            }
```

## props

	1. 默认 props值
	```javascript
		Person.defaultProps = {
	    age: 18,
	    gender: '女'
	}
	```
	
	2. 设置属性类型和属性是否必须填写
	```javascript
		Person.propTypes = {
	    // 这里P是大写的与上面不同
	    name: PropTypes.string.isRequired,
	    age: PropTypes.number,
	    gender: PropTypes.string
	}
	```
	
	- 常见的属性类型
		- array bool func number object string(详见官网) 

```javascript
	/* function Person(props) {
        return (
            <ul>
                <li>姓名：{props.name}</li>
                <li>年龄：{props.age}</li>
                <li>性别：{props.gender}</li>
            </ul>
        )
    } */

    class Person extends React.Component {
        render() {
            return (
                <ul>
                <li>姓名：{this.props.name}</li>
                <li>年龄：{this.props.age}</li>
                <li>性别：{this.props.gender}</li>
            </ul>
            )
        }
    }

    // 设置默认属性
    Person.defaultProps = {
        age: 18,
        gender: '女'
    }

    // 设置属性类型和属性是否必须填写
    Person.propTypes = {
        // 这里P是大写的与上面不同
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string
    }

    const p1 = { name: 'Kobe', age: 39, gender: '男' }
    const p2 = { name: 'James', age: 35, gender: '男' }

    // ReactDOM.render(<Person name={p1.name} age={p1.age} gender={p1.gender}/>, document.querySelector('.example1'))
    ReactDOM.render(<Person {...p1}/>, document.querySelector('.example1'))
    ReactDOM.render(<Person {...p2}/>, document.querySelector('.example2'))
    ReactDOM.render(<Person name={'Rose'}/>, document.querySelector('.example3'))
```

## refs

```React
	class MyComponent extends React.Component {
        constructor(props) {
            super(props)
            // 改变组件中函数的 this指向，指向组件
            this.handleClick = this.handleClick.bind(this)
            this.handleBlur = this.handleBlur.bind(this)
        }

        handleClick() {
            // console.log(this)
            // alert(this.refs.content.value)
            // 通过refs 获取DOM 中的值
            alert(this.input.value)
        }

        handleBlur(e) {
            // 因为是显示本身的 value,所以使用事件对象
            alert(e.target.value)
        }

        render() {
            return (
                // jsx中标签一定要闭合，多个标签一定要被一个标签包裹
                // ref 相当于给标签取了个 id（记号）,通过这个记号，我们就可以通过组件中的this.refs 来获取这个标签
                // <input ref='content' type="text"/>&nbsp;&nbsp; 官方使用下面的方式使用ref,但是没有废除这种
                <div>
                    <input ref={input => this.input = input} type="text"/>&nbsp;&nbsp;
                    <button onClick={this.handleClick}>提示输入内容</button>&nbsp;&nbsp;
                    <input type="text" onBlur={this.handleBlur} placeholder="失去焦点后显示输入数据"/>
                </div>
            )
        }
    }

    ReactDOM.render(<MyComponent />, document.querySelector('.example'))
```