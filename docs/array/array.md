### 数组相关方法

1. 判断是不是数组
```js
		// 方法一 推荐
			var arr = [1, 2, 3]
			var obj = { a: 1, b: 2 }
			// 推荐方法 toString()
			console.log(Object.prototype.toString.call(arr))
			console.log(Object.prototype.toString.call(obj))
			// 方法二  constructor
			console.log(arr.constructor == Array)
			console.log(obj.constructor == Object) //注意 要写构造函数
			// 方法三
			console.log(arr instanceof Array) //true
			console.log(arr instanceof Object) //true
			console.log(obj instanceof Array) //false
			console.log(obj instanceof Object) //false
			// 方法四Array.isArray()
			console.log(Array.isArray(obj))
			console.log(Array.isArray(arr))

```