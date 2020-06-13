# stylus学习笔记

## 	选择器：

​			用缩进代替花括号，冒号可加可不加（color: red color blue）

​			字符`&`指向父选择器



		## 	运算符：

###### 		范围.. 	...

​				同时提供包含界线操作符(`..`)和范围操作符(`...`)，见下表达式：

```stylus
1..5
// => 1 2 3 4 5

1...5
// => 1 2 3 4
```

###### 		加减：+	 -

​			二元***加乘运算其单位会转化***，或使用默认字面量值。例如，`5s - 2px`结果是`3s`.

```stylus
15px - 5px
// => 10px

5 - 2
// => 3

5in - 50mm
// => 3.031in

5s - 1000ms
// => 4s

20mm + 4in
// => 121.6mm

"foo " + "bar"
// => "foo bar"

"num " + 15
// => "num 15"
```



​		

######        乘除：/ 	*	 %

```stylus
2000ms + (1s * 2)
// => 4000ms

5s / 2
// => 2.5s

4 % 2
// => 0
```

​		当在属性值内使用`/`时候，你必须用括号包住。否则`/`会根据其字面意思处理（支持CSS的`line-height`）。



###### 	指数：**

​		指数操作符：

```stlyus
2 ** 8
// => 256
```



###### 	相等与关系运算：== != >= <= > <

​		相等运算符可以被用来等同单位、颜色、字符串甚至标识符。这是个强大的概念，甚至任意的标识符（例如`wahoo`）可以作为原子般使用。函数可以返回`yes`和`no`代替`true`和`false`（虽然不建议）。

```stylus
5 == 5
// => true

10 > 5
// => true

#fff == #fff
// => true

true == false
// => false

wahoo == yay
// => false

wahoo == wahoo
// => true

"test" == "test"
// => true

true is true
// => true

'hey' is not 'bye'
// => true

'hey' isnt 'bye'
// => true

(foo bar) == (foo bar)
// => true

(1 2 3) == (1 2 3)
// => true

(1 2 3) == (1 1 3)
// => false
```

​	***只有精确值才匹配***，例如，`0 == false`和`null == false`均返回`false`.

别名：

```
==    is
!=    is not
!=    isnt
```



###### 	真与假

​		Stylus近乎一切都是`true`, 包括有后缀的单位，甚至`0%`, `0px`等都被认作`true`.

​		不过，`0`在算术上本身是`false`.

​		表达式（或“列表”）长度大于1被认为是真。

`true`例子：

```stylus
0% 
0px
1px 
-1
-1px
hey
'hey'
(0 0 0)
('' '')
```

`false`例子：

```stylus
0 
null
false
''
```











## 选择器

### 缩排

```stylus
body
    color white
```

```css
body {
    color: #fff;
}
```





### 父级引用

```stylus
textarea
input
  color #A7A7A7
  &:hover
    color #000
```

```css
textarea,
input {
    color: #A7A7A7;
}
textarea:hover,
input:hover {
    color: #000;
}
```



## 变量

### 定义变量

```stylus
font-size = 14px // 前面也可以加`$` $font-size

body 
    font-size font-size // font-size: 14px;
```



```css
body {
    font-size: 14px;
}
```

