## 对象 增删改查
### 增加 修改;
`obj[属性] = xxx;`
### 查找 
```js
obj.apple ;obj[属性]
```
###  删除 delete 
`delete foods.apples;`
## 检查对象是否包含某属性
### Object.prototype.hasOwnProperty()
hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
```js
    const object1 = {};
    object1.property1 = 42;
    
    console.log(object1.hasOwnProperty('property1'));
    // expected output: true
    
    console.log(object1.hasOwnProperty('toString'));
    // expected output: false
    
    console.log(object1.hasOwnProperty('hasOwnProperty'));
    // expected output: false
```

### in关键字 也可以用来检查
` 'Alan' in users;`

## 对象遍历
### for...in
* for...in语句以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。
 示例：
#### 语法 
```js
for (variable in object)
  statement
```  
> **variable**
在每次迭代时，variable会被赋值为不同的属性名。
**object**
非Symbol类型的可枚举属性被迭代的对象。
```js
    var obj = {a:1, b:2, c:3};
    
    for (var prop in obj) {
      console.log("obj." + prop + " = " + obj[prop]);
    }
    
    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"
```

### Object.keys()
 * Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
#### 语法
```js
    Object.keys(obj)
    ```
    #### 示例
    ```js
    // simple array
    var arr = ['a', 'b', 'c'];
    console.log(Object.keys(arr)); // console: ['0', '1', '2']
    
    // array like object
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.keys(obj)); // console: ['0', '1', '2']
    
    // array like object with random key ordering
    var anObj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.keys(anObj)); // console: ['2', '7', '100']

```