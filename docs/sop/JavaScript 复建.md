---
description: javascipt复建
title: js极速版
readingTime: false
# publish: false
tag:
  - 面试
---
# js极速版
::: tip
    修考未果，
    归来仍是牛马，
    一滴泪落
:::

## ES5和ES6的区别

![image-20250405165419634](/Users/lionsmith/blog/docs/sop/assets/image-20250405165419634.png)

### 新特性

1. 新增块级作用域(const, let)

   var 存在变量提升，可以在声明前调用，值为undefined； 可多次重复声明，后者覆盖前者。

   let，const不存在变量提升，如果在声明之前调用会抛出异常。

   存在暂时性死区：

   ````js
   // 示例1：典型的TDZ
   console.log(x); // ReferenceError: Cannot access 'x' before initialization
   let x = 5;
   
   // 示例2：函数内的TDZ
   function test() {
       console.log(a); // ReferenceError
       let a = 10;
   }
   
   // 示例3：块级作用域TDZ
   {
       console.log(b); // ReferenceError
       const b = 20;
   }
   ````

   不能在同一个作用域重复声明。

2. 新增定义类的语法糖(class)
3. 新增一种基本数据类型(symbol)
4. 新增解构赋值
5. 新增函数参数的默认值
6. 数组新增api
7. Promise

​	将异步操作队列话，解决回调地狱。自身的方法有：Reject, Resolve,all,race；原型上的方法：then, catch。

​	三种状态：pending：等待; rejected：操作失败；fulfilled: 成功。

​	详见下文

8. 对象和数组新增扩展运算符
9. 新增模块化(import 和export)
10. 新增了map和set数据结构
11. 新增generator
12. 新增箭头函数
    - 不能作为构造函数，没有原型，不能用new关键字
    - 无arguments
    - 不能使用apply, call, bind
    - this 指向外层第一个this



## 对象

创建对象的方法

字面变量创建

````

````



## 引用类型

### 深拷贝

完全拷贝一个对象。会在堆内存中开辟一个新的空间。拷贝的对象修改后不会影响原来的对象。主要针对引用数据类型。

方法有以下几种

1. 扩展运算符：可以实现浅层拷贝，对于嵌套对象则仍然是浅拷贝

   ````javascript
   const original = { a: 1, b: { c: 2 } };
   const copy = { ...original };
   
   // 修改第一层属性不会影响原对象
   copy.a = 10;
   console.log(original.a); // 1 (未改变)
   
   // 修改嵌套对象会影响原对象
   copy.b.c = 20;
   console.log(original.b.c); // 20 (被改变了)
   ````

2. JSON.parse(JSON.stringify())

   - 不能拷贝函数、Symbol、undefined 等特殊类型
   - 会丢失对象的原型链
   - 不能处理循环引用

3. 利用递归手动实现：


````javascript
function deepClone(obj, cache = new WeakMap()){
  if(obj == 'null' || typeof obj !== 'object') return obj
  
  if(obj instanceof Date) return new Date(obj)
  
  if(obj instanceof RegExp) return new RegExp(obj)
  
  // 避免循环调用
  if(cache.has(obj)) return cache.get(obj)
  
  let clone = Array.isArray(obj)?[]:{}
  
  for(let key in obj){
    if(obj.hasOwnProperty(key))
      clone[key]=deepClone(obj[key],cache)
	}
  
  reuturn obj
}
````

### 判断对象属于哪个类

`typeof` 判断原始类型和function

````js
typeof "1"; // "string"
typeof 1; // "number"
typeof true; // "boolean"
typeof null; // "object"
typeof undefined; // "undefined"
typeof 11n; // "bigint"
typeof Symbol(); // "symbol"
typeof function() {}; // "function"
typeof {}; // "object"
typeof []; // "object"
````



`instanceof` 判断引用类型，无法判断原始类型。检测构造函数是否出现在某个实例对象的原型链上，但原始类型（像 '123'、42、true）**没有原型链**，它们不是对象，所以无法用instanceOf 判断。

````js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true

console.log(auto instanceof Object); // true

// 不能判断原始类型
'123' instanceof String  // false ❌
````

模拟instanceOf实现

````js
function muInstanceOf(objA,objB){
		objB = obj.prototype //获取b的原型对象
		
		let proto = Object.getPrototypeOf(objA)
		
    // 顺着原型链一直找下去
		while(proto != null){
			if(proto === objB) return true
			proto = Object.getPrototypeOf(proto)
		}
  
  return false
}
````

`Object.prototype.constructor()` 返回构造函数，此属性值是对函数的引用。

````js
const o = {}
o.constructor === Object // true

const o = new Object
o.constructor === Object // true

const a = []
a.constructor === Array // true

const a = new Array
a.constructor === Array // true

const n = new Number(3)
n.constructor === Number // true
````

`Object.protorype.toString().call()` toString 返回一个表示对象的字符串，可以用于检查对象类。

````js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

````



## 函数

### 函数名

函数名是指向函数的指针。一个函数可以有多个函数名。

````js
const sum = function(num1,num2){
	return num1 + num2
}

let anotherSum = sum
console.log(anotherSum(10,10)) // 20

let sum = null
console.log(anotherSum(10,10)) // 20

````

注：使用不带括号的函数名会访问函数指针，而不是执行函数。



创建函数的四种方式：

最常见的函数表达式

``````js
function sum(num1,num2){
	return num1 + num2
}
``````

函数声明：

``````js
const sum = function(num1,num2){
	return num1 + num2
}
``````

这个函数通过sum变量来引用

箭头函数(arrow function):

``````js
let sum = (num1,num2) => {
	return num1 + num2
}
``````

使用function构造函数，这个构造函数接受任意多个字符串。最后一个参数会被当做函数体。

``````js
let sum = new function("num1","num2","return num1 + num2")
``````

### 函数的属性和方法

ECMAScript的函数是对象，意味着每个函数有方法和属性。每个函数都有两个属性：length和prototype。lenght是函数命名参数的个数。

``````js
function sum(num1,num2){
	return num1 + num2
}

console。log(sum.length) // 2
``````

`prototype` 是函数特有的属性，指向函数的原型对象。当函数作为构造函数使用时，新创建的对象会继承该原型对象的属性和方法。

```javascript
function Person() {}
Person.prototype.sayHello = function() {
  console.log("Hello!");
};

const person = new Person();
person.sayHello(); // "Hello!"
```

函数还有两个方法apply()和call()。

`apply()` 方法调用一个函数，允许你指定 `this` 值和以数组（或类数组对象）形式提供的参数。

语法：
```javascript
func.apply(thisArg, [argsArray])
```

示例：
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

greet.apply(person, ["Hello", "!"]); // "Hello, Alice!"
```



`call()` 方法与 `apply()` 类似，但参数是逐个传递的，而不是作为数组。

语法：
```javascript
func.call(thisArg, arg1, arg2, ...)
```

示例：
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Bob" };

greet.call(person, "Hi", "!!"); // "Hi, Bob!!"
```

可以改变this绑定的还有bind():

语法：
```javascript
func.bind(thisArg, arg1, arg2, ...)
```

示例：
```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Charlie" };
const greetPerson = greet.bind(person);

greetPerson("Hey"); // "Hey, Charlie"
```

### 函数表达式

定义函数有两种方法：函数声明和函数表达式

````js
function funcationName(){

}//函数声明

sayHi()
function sayHi(){
	console.log("hi")
} // 函数声明提升
````

函数声明的关键是**函数声明提升**，函数声明会在代码执行之前被定义。意味着函数调用可以在声明之前

第二中是函数表达式，先创建一个函数，再把它赋给某个变量。

````js
let functionName = function(agr1, agr2){
	// body
}
````

这样创建的函数叫做匿名函数(aonoymous)，function关键字后面没有表示符，匿名函数的name属性是空字符串。跟函数声明不同的是，函数表达式需要先赋值再使用。

### 闭包

闭包（closure）指的是引用了另一个函数中变量的函数。通常在嵌套函数中实现。

**JavaScript 执行上下文**：

当一段 JavaScript 代码在运行的时候，它实际上是运行在执行上下文中。下面 3 种类型的代码会创建一个新的执行上下文：

- 全局执行上下文：只有一个，为存在于 JavaScript 函数之外的任何代码而创建，浏览器中的全局对象就是 `window` 对象。
- 函数执行上下文：存在无数个，函数调用时创建。这个上下文就是通常说的“本地上下文”。
- `eval` 函数： 指的是运行在 `eval` 函数中的代码，很少用而且不建议使用。

在调用一个函数的时候，会为函数调用创建一个执行上下文，并创建执行作用域链。

**在函数外部访问函数内部的变量**，并**持久化这个作用域**。

#### 节流和防抖

````js
// 只有最后一次调用生效
function debounce(fn, delay) {
  let timer = null;

  return function (...args) {

    clearTimeout(timer); // 先清除之前的定时器
    timer = setTimeout(() => {
      fn.apply(this, args); // 保持 this 不变
    }, delay);
  };
}

// 隔段时间只触发一次
function throttle(fn, delay) {
  // 上一次执行 fn 的时间（初始为 0）
  let lastTime = 0;

  // 返回一个新的函数，用于节流执行 fn
  return function (...arg) {
    // 获取当前时间
    let now = new Date();

    // 如果距离上一次执行超过了 delay 毫秒，就执行
    if (now - lastTime >= delay) {
      fn.apply(this, arg); // 保留原本的 this 和参数
      lastTime = now;      // 更新 lastTime 为当前时间
    }
  };
}
````



### this指向

this是普通函数的自有变量，指向堆中的某种属性

根据以下四种属性指向堆中对象，优先级从高到低

1. new调用

2. Call/bind/apply

   apply和call作用一样，改变将任意对象设置为任意函数的作用域。区别是传参形式不同

   ``````js
   sum.apply(this,[num1, num2]) // 传入数组
   sum.apply(this, arguments)
   
   sum.call(this, num1, num2)
   ``````

   如果想传arguments或者数组对象，可以使用apply。call()只能将参数一个一个列出来。

3. 作为对象方法调用

4. undefined

#### 手撕apply call bind

````javascript
//apply
function.prototype.myApply = function(context){
    // 如果上下文是null 或者 undefined 自动指向全局
    context = context || window

    /**
     * cnotext 在手写 apply / call 时我们传进来的对象
     * 生成唯一下标 防止命名冲突
     *  */ 
    fnSymbol = Symbol()
    context[fnSymbol] = this // 让函数的 this 指向这个对象

    const result = arg?context[fnSymbol](...arg):context[fnSymbol]()

    delete context[fnSymbol]

    return result

}
````

### 立即调用IIFE

立即调用函数是一个在**定义的时候**就会执行的函数

````javascript
(function(){
	// statement
})();
````

IIFE 会立即执行并**生成一个私有作用域**，这个作用域不会泄漏到外部，可以实现私有数据。

````js
(function () {
    var secret = "我藏起来了";
})();
console.log(secret); // ❌ 报错：secret is not defined
````



将IIFE函数分配给一个变量，不是存储IIFE本身，而是存储IIFE执行后返回的结果。

````javascript
var result = (function(){
	return 'oi'
})();

console.log(result) // oi
````

使用场景：

经典面试题， 闭包 + 异步执行（setTimeout）。由于var是函数作用域，每次循环不会创建新的i，setTimeout是异步执行，它的回调函数会在同步代码执行之后执行，所有的 setTimeout 回调函数**共享同一个 i**，当它们在 1000ms 后执行时，看到的都是 i = 3。

````javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function(){
    console.log(i); 
  }, 1000);
} // 3 3 3
````

如果想要输出变成  0 1 2，可以使用IIFE函数：

````javascript
for (var i = 0; i < 3; i++) {
	(function(j){
			setTimeout(function(){
				console.log(i);
			},1000)
	}(i)) // 每次传入的i
}

// 等价于
var i = 0;
// 执行：
(function(j){ setTimeout(() => console.log(j), 1000); })(0);

i = 1;
// 执行：
(function(j){ setTimeout(() => console.log(j), 1000); })(1);

i = 2;
// 执行：
(function(j){ setTimeout(() => console.log(j), 1000); })(2);
````







## 继承与原型

### javascript 继承的四种方式

````js
/**
 * javascript 继承
 */

/** 
 * 1、使用原型链
 * 让一个构造函数的原型是另一个类型的实例
 * */ 
function Parent(){
    this.isShow = true
    this.info = {
        age: 29,
        name:'James'
    }
}

Parent.prototype.getInfo = function(){
    console.log(this.isShow)
    console.log(this.info)
}

function Child(){}

Child.prototype = new Parent()

let c1 = new Child()
c1.info.gender = 'female'
c1.getInfo()

let c2 = new Child()
c2.isShow = false
c1.info.gender = 'male'
c2.getInfo()
// 缺点：实例共享所有的方法和属性，无法向父组件传参

/**
 * ---------------------2、使用构造函数继承------------------
 * 在子类构造函数内调用父类构造函数，通过apply()或者call()将父类的构造函数绑定到子类上
 * 优点：解决了父类原型共享和不能传参问题
 * 缺点：无法实现函数复用；父类方法对子类不可见，所有类型只能使用构造函数模式
 */
function Parent2(gender){
    this.isShow = true
    this.info = {
        age: 29,
        name:'James',
        gender:gender
    }
}
 
function Child2(gender){
    // 在child2的上下文环境中调用Parent2
    Parent2.call(this,gender)
}

let logos = new Child2('unkown')
logos.info.nickname = 'logos'
console.log(logos.info.gender)
console.log(logos.info.nickname)

/**
 * ----------------------------3、组合继承---------------
 * 保证原型链上的方法共享，同时每个实例有自己单独的属性
 * 缺点：调用两次父类构造函数 
 */
function Parent3(name,gender){
    console.log('--------被调用--------')
    this.info = {
        age: 32,
        name:name,
        gender:gender
    }
}

Parent3.prototype.getInfo = function(){
    console.log(this.info.name,"你这个月 的评分是：3.0,tangyingo")
}

function Child3(gender){
    Parent3.call(this,gender)
}

Child3.prototype = new Parent3() // [!code focus]

let ew = new Child3("ew","female")
ew.getInfo()

/**
 * -----------------4.class 类 ---------------
 * 通过extend关键字实现，实质是 父类创建this ,然后用子类的构造函数修改this
 * 必须调用super 才能使用this 
 */

class Animal{
    constructor(name,spices){
        this.name = name
        this.spices = spices
    }

    getName(){
        return this.name
    }

    getSpices(){
        return this.spices
    }
}

class Parrot extends Animal{
    constructor(){
        super('tuotuo','parrot') // 父类的构造函数，表示新建this  
    }

    getInfo(){
        console.log("saymyname:"+this.getName())
    }
}

let p = new Parrot()
p.getInfo()
 


````

### new 操作符

new操作符具体做了什么？

1. **创建一个新对象**
   - 创建一个空的普通 JavaScript 对象（即 `{}`）
2. **设置原型链**
   - 将这个新对象的 `[[Prototype]]`（即 `__proto__`）链接到构造函数的 `prototype` 属性
   - `新对象.__proto__ = Constructor.prototype`
3. **绑定 `this` 并执行构造函数**
   - 将新创建的对象作为 `this` 上下文
   - 执行构造函数内部的代码（即调用 `Constructor` 函数，并将 `this` 绑定到新对象）
4. **处理返回值**
   - 如果构造函数返回一个**对象**，则返回该对象
   - 如果构造函数返回**原始值**（非对象），则忽略返回值，返回新创建的对象
   - 如果构造函数没有返回语句（即返回 `undefined`），则返回新创建的对象



### 原型与原型链

原型就是一个**对象**，为了构造函数共享实例与方法。

所有实例的原型都是同一个对象。

使用原型链继承的好处：所有实例共享原型上的方法，节省内存。

<!-- ![IMG_5020](/Users/lionsmith/blog/docs/sop/assets/IMG_5020.png) -->

## 异步

在早期的javascript，只支持定义回调函数来表名异步操作。串联多个回调函数，往往造成回调地狱。

````js
function fn(){
	seiTimeout(()=>setTimeout(console.log, 0, value*2),1000)
}

fn(3)
````

### promise

Promise是抽象异步处理对象以及对其进行各种操作的组件。在ES6被引入。

模拟promise的实现

````js
class myPromise{
	constructor(executor){
		this.state = 'pending'
    this.value = undefined
    this.error = undefined

    this.onFulfilledList = []
    this.onRejectedList = []
	}
  
  const resolve = ()=>{
    if (this.state == 'pending')
    	this.state = 'fulfilled'
    	this.onFulfilledList
  }
  
  then(resolved, rejected){
    if(this.state == 'fulfilled')
  }
}
````

手撕promise.all

````js
promise.all = funtion(promises){
  	// 判断是否是可迭代对象
    if(typeof promise[Symbol.iterator]!='function')
        return reject(new TypeError('not iterator obj'))

    let res = []
    let count = 0

    const promiseLists = Array.from(promise)

    if(promiseLists.length == 0)
        return reject([])

    promiseLists.forEach((p,index)=>{
        promise.resolve(p).then((val)=>{
            res[index] = val
            count++
            if(count === promiseLists.length)
                resolve(res)
        })
    }).catch(res=>{
        reject(err)
    })
}
````



### Async 和Await

ES7引入，promise的语法糖

可通过promise+生成器模拟效果。 `async`关键字放在`function`前面，表达这个函数总是返回一个Promise，qi

## 垃圾回收机制

js的垃圾回收是自动进行的，不需要手动释放。它是内存生命周期的一部分

判断对象是否可以被回收的核心依据：可达性（Reachability)

垃圾回收器会以某些“根（root）”为起点，去找哪些对象还“活着”。

这些根通常是：

- 当前执行的函数中的变量
- 全局变量（比如 window 上的属性）
- 闭包中的变量
- 函数参数 / 局部变量
- DOM 中还引用着的对象

只要某个对象能被这些根访问到（**直接或间接引用**），它就是“可达的”，不会被回收。

最常见的回收算法是标记清理：

这个算法流程如下：

1. **标记所有活动对象（可达）**
2. **清除所有没被标记的对象（不可达）**
3. **释放它们所占用的内存**

限制：循环引用

## DOM

### defer和async



`defer` 和 `async` 都是 `<script>` 标签的属性，用于控制脚本的加载和执行行为，但它们的工作方式有重要区别：

## 

| 特性             | 没有属性 (默认)        | `async`                    | `defer`                         |
| :--------------- | :--------------------- | :------------------------- | :------------------------------ |
| **执行顺序**     | 立即执行，阻塞HTML解析 | 加载完成后立即执行，无序   | 按文档顺序执行，在DOM解析完成后 |
| **执行时机**     | 遇到脚本立即执行       | 加载完成后尽快执行         | DOMContentLoaded前执行          |
| **是否阻塞解析** | 是                     | 可能阻塞                   | 不阻塞                          |
| **适用场景**     | 极少使用               | 独立第三方脚本(如分析工具) | 需要DOM的脚本                   |

## 发布订阅模式

这一设计模式在js很多地方都有出现，比如浏览器监听。

手写实现：

````js
class EventBus{
    constructor(){
        this.events = {}
    }

  // 订阅
    on(event,callback){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    off(event,callback){
        if(!this.events[event]) return
        this.events[event] = this.events[event].filter(fn =>fn !== callback)
    }

  // 发布
    emit(event,...arg){
        if(!this.events[event]) return
        this.events[event].forEach(fn=>fn(...arg))
    }
}
````

## 代理和反射

ECMScript 6新增的代理和反射，提供了拦截并向基本操作嵌入额外行为的能力。

在代理上执行的任何操作，都会应用到到目标对象上。

````js
const target = {
	id:'target'
}

const handler = {}

const proxy = new Proxy(target,handler)

// 访问的是同一个值
console.log(proxy.id) //target
console.log(target.id) //target
````

使用代理的目的是定义捕获器(trap)，也就是基本操作拦截器。当用代理对象调用某些基本操作的时候，代理会在操作之前先调用捕获函数，从而拦截修改相应的行为。

````js
const target = {
	foo:'bar'
}

const handler = {
  get(){
    return 'trap'
  }
}

const proxy = new Proxy(target,handler)

console.log(proxy.foo) //trap
console.log(target.foo) //bar
````

Get()捕获器会接收目标对象，要查询的属性和代理对象，基于这些参数可以重建被捕获方法的原始行为。但是有些捕获器远比get()要复杂，通过手动重建并不现实，于是可以通过调用全局Reflect对象上的同名方法来重建。

Reflect 是 ES6 提供的一个内置对象，它提供了很多跟对象操作相关的方法，跟以前的 Object 方法类似，但更**统一、可控、安全**。

详细一下，你是一个外卖员，要来小区里面送货，而Proxy对象则是一个保安，外卖员想进入小区，必须先进过保安。

````js
const house = new Proxy(obj, {
  get(target, prop) {
    console.log(`有人想访问 ${prop} 房间`)
    return target[prop]
  }
})
````

每次外卖员出入小区，保安都会记录一笔。而Reflect，官方配的“万能钥匙工具箱”，能正确、安全地操作房间。

````js
const obj = {
  name: 'Vue',
  fridge: 'milk'
}

const proxy = new Proxy(obj, {
  get(target, key) {
    if (key === 'fridge') {
      return '禁止访问冰箱 ❌'
    }

    // 这里就像是说：除了冰箱外，我啥都按原计划办
    return Reflect.get(target, key)
  }
})
````

Reflect**就是用来“模拟原本没被 Proxy 拦截时的行为”**。它是**官方提供的标准方式**，用来访问对象属性。

**为什么用 Reflect.get，而不是直接写 target[prop]？**

1. **更安全**：Reflect 会考虑原型链、绑定 this 等复杂场景
2. **可控返回值**：不会抛异常，失败会返回 false 或 undefined
3. **统一操作方式**：所有操作都用 Reflect，风格一致