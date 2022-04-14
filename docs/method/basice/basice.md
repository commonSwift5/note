### 数据类型转换
### typeof 

   * 简单数据类型有 string number boolean undefined null  (null是空对象  类型是object)
   * typeof 能判断的类型: string number boolean undefined object function 

   ```js
   var a= function() { 
   }
    console.log(typeof '1231') //string
    console.log(typeof 1312) // number
    console.log(typeof [1, 2]) //object
    console.log(typeof null) // object
    console.log(typeof {}) //object
    console.log(typeof undefined) // undefined
    console.log(typeof NaN) //number
    console.log(typeof true) //Boolean
    console.log(typefo a) //function
    // 注意 typeof 不能判断是不是数组 
   ```

### 转数字相关
* 字符串转为数字
`Number(数据)`
* 转化为整数
`parseInt(string)`
* 转换为浮点数
`parseFloat(string)`
* 区别
Number()  自能放数字类型字符 ，不能放abc 否则返回NaN 

#### 转为字符串
* 数字转为字符串
`toString()`
