## html基础

1. img标签
	- srcset 属性：根据设备条件让浏览器选择合适的图片资源
	- sizes属性：设置媒体查询，设置图片的大小
2. picture 标签
	- 也有相似的功能，picture 标签下的source 标签有srcset 属性和media 属性，浏览器会根据设备条件来选择最符合条件的图片显示出来，否则就显示img 标签内的图片
3. script标签
	- 页面解析与script 时会停下来，等到js 下载执行完之后再去解析html
	- defer属性： 页面解析与script 资源可以并行，资源下载完成不会立即执行，等到页面解析完成后执行
	- async属性： 页面解析与script 资源可以并行，资源下载完成会立即执行，导致script 资源是乱序的，如何脚本存在依赖关系，并不适用
4. 预加载
- 在header 标签中声明式的获取一些资源请求
- 不会阻塞页面加载
- 有兼容性问题
> <link rel="preload" href="style.css" as="style" />
5. 预渲染
> <link rel="prerender" href="www.github.com/sihuanian" />

## html 元素的层叠顺序
1. 子元素在父元素之上。
2. Relative、absolute、fixed元素在static元素之上。
3. 同级的元素z-index值高的元素在上。
4. 后定义的元素在先定义的元素之上。
5. 若父元素设定了z-index属性，则子元素受限于父元素的层叠位置；若没有，则子元素被当作与元素同等级的元素。

## 多个inline-block 元素之间和inline-block 元素与其父元素之间存在间隙
原因： 存在换行符
解决办法：
第一种
1. 去掉换行符
2. 父元素设置font-size: 0;子元素设置正确的font-size
3. inline-block元素设置浮动
4. inline-block元素设置margin-left 为负值（不好）
5. 父容器设置display: table; word-spacing: -1em;

第二种
1. 去掉换行符
2. 父元素设置font-size: 0;子元素设置正确的font-size
3. 子元素vertical-align: top | middle | bottom;

## link visited focus hover active 的顺序
顺序： :link :visited :focus :hover :active
hover 必须放到link visited 之后才有效
active 必须放到 hover 后面才有效
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< acd44f89644ebca8121c0b26bfadc7ba48f392a4

## css 选择器优先级

优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

如果存在内联样式，那么 A = 1, 否则 A = 0;
B 的值等于 ID选择器 出现的次数;
C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;
D 的值等于 标签选择器 和 伪元素 出现的总次数 。

## css加载不会阻塞DOM树的解析，css 加载会阻塞DOM 树的渲染，css 加载会阻塞后面的js 的执行

1. DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞DOM的解析。
2. 然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞Dom的渲染的。
3. 由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行
=======
>>>>>>> update:第一次提交笔记内容
=======
>>>>>>> update:第一次提交笔记内容
>>>>>>> 1f95eaa0a3647e0cd5c7b53d6ebb03526f6f64d3
