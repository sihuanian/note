## 伪类选择器

1. :first-child :last-child :nth-child(n)

```html
<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
	<li>列表项四</li>
</ul>
```

在上述代码中，如果我们要设置第一个li的样式，那么代码应该写成`li:first-child{sRules}`，而不是ul:first-child{sRules}。



```
p:first-child{color:#f00;}

<div>
	<h2>我是一个标题</h2>
	<p>我是一个p</p>
</div>
```

样式设置无效，因为p标签不是其父元素的第一个孩子



2. :first-of-type :last-of-type :nth-of-type

   匹配同类型中的第一个(最后一个，第n个)兄弟元素

3. 伪对象选择器
4. `E::first-letter,E::first-line`仅适用于块级元素
5. `E::after,E::before`默认是行内元素


## 行内块，行内元素同行显示会有间隔

![行内元素同行显示间隔问题](img\行内元素同样显示有间隔.png)

![](img\span间存在空格.png)



- 解决方法

  1. 不换行，代码中同行元素写在同一行中

     ```html
     <input type="text"><input type="text">
     ```
     
  2. 父元素设置font-size: 0px; ，自身也设置font-size属性，否则font-size会被继承
     
     ```html
     <style>
             .test {
                 font-size: 0;
             }
         </style>
     </head>
     <body>
     <div class="test">
         <input type="text">
         <input type="text">
     </div>
     </body>
     ```
     
     ```html
     <style>
             .test {
                 font-size: 0;
             }
     
             span {
                 font-size: 16px;
             }
         </style>
     </head>
     <body>
     <div class="test">
         <span>hello</span> <span>world</span>
     </div>
     </body>
     ```
     
     

- 出现原因是因为同行显示的行内元素，行内块元素中间存在空白符





## 去除图片底侧空白缝隙

有个很重要特性你要记住： 图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个空白缝隙。

<img src="img/行内元素与父元素的基线对齐.png"  width="300" style="border: 1px dashed #000;"/>



解决方法：

1. 给img标签加vertical-align: middle/top/bottom
2. 设置img标签display: block



## live-server

1. 介绍 使用 live-server 当 html 文件改变时，浏览器会自动刷新
2. 安装 `npm i -g live-server`
3. 使用 使终端在项目文件夹下 使用 `live-server`  （默认执行 index.html 文件）  或 `live-server + 文件地址`



## 转换属性

| 属性                                                         | 描述                                 | CSS  |
| :----------------------------------------------------------- | :----------------------------------- | :--- |
| [transform](http://www.w3school.com.cn/cssref/pr_transform.asp) | 向元素应用 2D 或 3D 转换。           | 3    |
| [transform-origin](http://www.w3school.com.cn/cssref/pr_transform-origin.asp) | 允许你改变被转换元素的位置。         | 3    |
| [transform-style](http://www.w3school.com.cn/cssref/pr_transform-style.asp) | 规定被嵌套元素如何在 3D 空间中显示。 | 3    |
| [perspective](http://www.w3school.com.cn/cssref/pr_perspective.asp) | 规定 3D 元素的透视效果。             | 3    |
| [perspective-origin](http://www.w3school.com.cn/cssref/pr_perspective-origin.asp) | 规定 3D 元素的底部位置。             | 3    |
| [backface-visibility](http://www.w3school.com.cn/cssref/pr_backface-visibility.asp) | 定义元素在不面对屏幕时是否可见。     | 3    |





## canvas

- **替换内容**当浏览器(IE 9以下)不支持canvas 标签会显示canvas 标签的内容，忽略canvas 容器，支持canvas 的浏览器会渲染容器忽略canvas 的内容
- canvas 的结束标签不能省略，如果省略，其后的所有内容都会被理解为替换内容
- getContext('2d')  用来获得渲染上下文和它的绘画功能。



### canvas的方法/属性

1. Element.getContext() 

   > const canvas = document.querySelector('#id')
   >
   > const ctx = canvas.getContext('2d')

2. ctx.fillStyle 填充的颜色

   > ctx.fillSyle = '#ccc'

3. ctx.fillRect(x轴， y轴， width, height)

   绘制一个填充矩形

4. ctx.strokeRect(x, y, width, height)

   绘制一个矩形边框

5. ctx.clearRect(x, y, width, height)

   清除指定矩形区域，让清除部分变得完全透明

6. ctx.moveTo(x, y) 将笔触移动到指定的坐标上

7. ctx.lineTo(x, y) 绘制直线

8. ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

   - 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

9. ctxbeginPath()
	新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
   
10. ctx.closePath()

	闭合路径之后图形绘制命令又重新指向到上下文中。

11. ctx.stroke()
	通过线条来绘制图形轮廓。

12. ctx.fill()
	通过填充路径的内容区域生成实心的图形。


### js 修改元素的 transform属性
```javascript
	const p = document.querySelector('p')
	p.style.WebkitTransform = 'translateX(20px)'
```



### 文本超出隐藏
- 单行文本
```css
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
```
- 多行文本
```css
	display: -webkit-box;             /*将对象转为弹性盒模型展示*/
 	-webkit-box-orient: vertical;     /*设置弹性盒模型子元素的排列方式*/
  	-webkit-line-clamp: 5;            /*限制文本行数*/
  	overflow: hidden;  
```


### 清除浮动

1. 添加一个空标签

   ```css
   <div style="clear: both;"></div>
   ```

2. 给父级添加 overflow属性

   ```css
   parentElement {
       overflow: hidden|auto|scroll
   }
   ```

3. 添加 :after 伪元素清除浮动

   ```css
   parentElement::after {
       content: '';
       visibility: hidden;
       clear: both;
       display: block;
       height: 0;
   }
   parentElement {
       zoom: 1;
   }
   ```



### css盲点

1. animation-fill-mode forwards // 动画结束之后保持动画最后的样式


