
## 转化为数组
### String.prototype.split()
split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
## 字符串截取
### String.prototype.charAt()

#### 概述
charAt() 方法从一个字符串中返回指定的字符。
#### 语法
str.charAt(index)
#### 参数 
index 默认 0

### String.prototype.substring()

#### 语法
```js
str.substring(indexStart[, indexEnd])
```
#### 描述
substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。
特别地：

* 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
* 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
* 如果任一参数小于 0 或为 NaN，则被当作 0。
* 如果任一参数大于 stringName.length，则被当作 stringName.length。
* 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。
#### 示例
```js
let anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```
 