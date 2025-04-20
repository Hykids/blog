---
description: javascipt复建
title: js极速版
readingTime: false
# publish: false
tag:
  - JavaScript
---
# js极速版
::: info
    修考失败
    回来继续当牛马
    落泪
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

   ````js
   function deepClone(obj, hash = new WeakMap()) {
     if (obj === null || typeof obj !== 'object') {
       return obj;
     }
     
     // 处理循环引用
     if (hash.has(obj)) {
       return hash.get(obj);
     }
     
     let clone = Array.isArray(obj) ? [] : {};
     hash.set(obj, clone);
     
     // 拷贝Symbol属性
     const symKeys = Object.getOwnPropertySymbols(obj);
     if (symKeys.length) {
       symKeys.forEach(symKey => {
         clone[symKey] = deepClone(obj[symKey], hash);
       });
     }
     
     // 拷贝普通属性
     for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
         clone[key] = deepClone(obj[key], hash);
       }
     }
     
     return clone;
   }
   
   // 使用示例
   const original = { a: 1, b: { c: 2 } };
   const copy = deepClone(original);
   ````

   

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



在调用一个函数的时候，会为函数调用创建一个执行上下文，并创建执行作用域链。

函数在背调用时自动创建两个变量：this he 

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

Async 和await

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