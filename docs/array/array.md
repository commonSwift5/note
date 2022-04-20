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
### 连接
> concat()
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
### 多个删除
**Array.prototype.splice()**
* splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
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
### Array.prototype.map()
map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
示例 
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
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
### Array.prototype.some()
> some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
```js
    const array = [1, 2, 3, 4, 5];
    
    // checks whether an element is even
    const even = (element) => element % 2 === 0;
    
    console.log(array.some(even));
    // expected output: true

```
### Array.prototype.filter()
* filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
```js
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    
    const result = words.filter(word => word.length > 6);
    
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]
```


### Array.prototype.reduce()

reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
#### 参数
callbackFn
一个 “reducer” 函数，包含四个参数：

* previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
* currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
* currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。
* array：用于遍历的数组。

```
callbackfn 被调用时会传入四个参数：

previousValue（前一次调用 callbackfn 得到的返回值）
currentValue（数组中正在处理的元素）
currentIndex（数组中正在处理的元素的索引）
被遍历的对象 

```

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

```
#### 语法
```
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

## 排序
### Array.prototype.sort()
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
```js
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers);
    
    也可以写成：
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers);

```
#### 参数
compareFunction 可选
用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
firstEl
第一个用于比较的元素。
secondEl
第二个用于比较的元素。
#### 注意点
==sort 方法会产生改变原始数组中元素顺序的副作用。 换句话说，它会改变数组的位置。 避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住 slice 和 concat 返回一个新数组），再用sort方法。==