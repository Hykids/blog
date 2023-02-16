# JavaScript 面试准备

#### JavaScript基本数据类型：

布尔值(Boolean)、 字符串(String)、 数值(Number)、大整数(BigInt)(ES7引入) 、null、Symbol(ES6新引入)、undefined

#### Symbol类型

ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它属于 JavaScript 语言的数据类型之一。Symbol 值通过`Symbol()`函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

```javascript
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

可以添加字符串做参数以便区分。

注意，`Symbol`函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的`Symbol`函数的返回值是不相等的。

```javascript
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

Symbol值可以转化为字符串，可以转化为布尔值，但不能转换为数字

##### BigInt类型

**`BigInt`数据类型的目的是比`Number`数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用`BigInt`，整数溢出将不再是问题。**

#### **null和undefined区别**

undefined代表未定义，变量声明了但是未定义会返回undefined。

null表示空对象。用于赋值给可能会返回对象的变量，作初始化。

#### 堆(**heap**)和栈(**stack**)有什么区别存储机制

栈是一种连续的数据结构，具有先进后出，后进先出的性质

堆是一种非连续的数据结构，具有队列优先，先进先出。 每个节点有一个值，整棵树是经过排序的。特点是根结点的值最小（或最大），且根结点的两个子树也是一个堆。常用来实现优先队列，存取随意。

#### 类型转换

转换为数字：Number(),parseInt(),parseFloat()

转换为字符串：String(),toStrong()(注意：null、undefined没有.toString方法)

转化为Boolean值(Bealoon()方法)

##### 隐式转换：

```javascript
let str = '123'
let res = str - 1 //122
str+1 // '1231'
+str+1 // 124
```

#### 块级作用域与函数声明

`let`实际上为 JavaScript 新增了块级作用域。

```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```

上面的函数有两个代码块，都声明了变量`n`，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用`var`定义变量`n`，最后输出的值才是 10。

ES6 规定，块级作用域之中，函数声明语句的行为类似于`let`，在块级作用域之外不可引用。

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```javascript
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```

另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

#### Iterator遍历器

遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。

原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

#### Set 和 Map

##### Set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成 Set 数据结构。下面代码通过`add()`方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```javascript
const set = new Set(document.querySelectorAll('div'));
set.size // 56
```

数组去重

```javascript
[...new Set(array)]

//字符串去重
[...new Set('ababbc')].join('')
// "abc"
```

`Array.from`方法可以将 Set 结构转为数组。

```javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

##### Map

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构

#### == 和 ===

=== 属于严格判断，直接判断两者类型是否相同，如果两边的类型不一致时，不会做强制类型准换，不同则返回false如果相同再比较大小，不会进行任何隐式转换对于引用类型来说，比较的都是引用内存地址，所以===这种方式的比较，除非两者存储的内存地址相同才相等，反之false

== 二等表示值相等。判断操作符两边对象或值是否相等类型可以不同，如果两边的类型不一致，则会进行强制类型转化后再进行比较，使用Number()转换成Number类型在进行判断。例外规则，null==undefined，null/undefined进行运算时不进行隐式类型转换。通常把值转为Boolean值，进行条件判断。Boolean(null)===Boolean(undefined)>false===false 结果为true

#### 原型 && 原型链

- 每个 class都有显示原型 prototype
- 每个实例都有隐式原型 _ proto_
- 实例的_ proto_指向对应 class 的 prototype

‌ **原型:** 在 JS 中，每当定义一个对象（函数也是对象）时，对象中都会包含一些预定义的属性。其中每个`函数对象`都有一个`prototype` 属性，这个属性指向函数的`原型对象`。

原型链：函数的原型链对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针__proto__,该指针是指向上一层的原型对象，而上一层的原型对象的结构依然类似。因此可以利用__proto__一直指向Object的原型对象上，而Object原型对象用Object.prototype.__ proto__ = null表示原型链顶端。如此形成了js的原型链继承。同时所有的js对象都有Object的基本防范