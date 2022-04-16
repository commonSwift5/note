## 增加 删除相关

### 添加
>  push()
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

> unshift() 
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

### 删除
> shift()
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

> pop()
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

### 多个删除
**Array.prototype.splice()**
### 参数 
1. index 从哪个索引开始  参数可为负数 表示从最后几位开始删除*
2. howmany 删几个 *
3. item  添加
*  返回被删除的元素组成的数组

### slice()
**slice()** 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

### 语法
arr.slice([begin[, end]])
* 总结用于截取数组 某些元素

## 数组合并相关方法
### Array.prototype.concat()
* concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

 示例：
```js
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
#### 总结
 只能首尾合并  运用扩展运算符 合并更灵活
 
## 查找相关
### Array.prototype.indexOf()
* indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
#### 语法
* arr.indexOf(searchElement[, fromIndex])
```js
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    
    console.log(beasts.indexOf('bison'));
    // expected output: 1
    
    // start from index 2
    console.log(beasts.indexOf('bison', 2));
    // expected output: 4
    
    console.log(beasts.indexOf('giraffe'));
    // expected output: -1
```

### Array.prototype.findIndex()
* **findIndex()**方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
#### 语法
 arr.findIndex(callback[, thisArg])
#### 示例
```js
    const array1 = [5, 12, 8, 130, 44];
    
    const isLargeNumber = (element) => element > 13;
    
    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3
```
#### indexOf和findIndex对比
* 相同点：
   - 返回都是索引
   - 没找到都返回-1
* 不同点 参数不同 indexOf参数为元素 findIndex参数为 函数

### Array.prototype.find()
**find()** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
```js
    const array1 = [5, 12, 8, 130, 44];
    
    const found = array1.find(element => element > 10);
    
    console.log(found);
    // expected output: 12

```
#### 与findeIndex 对比
* 相同点 参数一样
* 不同 放回的值 找不到 返回的是undefined

## 数组遍历

### Array.prototype.forEach() 
* forEach() 方法对数组的每个元素执行一次给定的函数。
```
    const array1 = ['a', 'b', 'c'];
    
    array1.forEach(element => console.log(element));
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

```
### Array.prototype.every()
* every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
>备注：：若收到一个空数组，此方法在一切情况下都会返回 true。

示例：
```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

```