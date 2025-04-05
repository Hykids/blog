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

1. 新增块级作用域(const let)
2. 新增定义类的语法糖(class)
3. 新增一种基本数据类型(symbol)
4. 新增解构赋值
5. 新增函数参数的默认值

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