## call(),bind()&apply()

### call()方法的使用

在 JavaScript 中，每个函数都是一个对象，因此可以使用 call() 方法来调用一个函数，并将一个指定的对象作为函数的上下文（即 this 对象）。call() 方法的使用方式如下：

```js
javascriptCopy code
func.call(thisArg, arg1, arg2, ...)
```

其中，func 是要调用的函数，thisArg 是要绑定到函数的 this 对象的值，arg1、arg2 等是函数的参数。

当使用 call() 方法调用一个函数时，会将 func 的 this 对象指向 thisArg，也就是将函数内部的 this 指向 thisArg。这样可以使得函数在执行时访问到正确的上下文对象。

例如，以下是一个简单的例子，使用 call() 方法调用一个函数：

```js
javascriptCopy codeconst person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const fullName = person.fullName.call(person); // 将函数的 this 绑定到 person 对象
console.log(fullName); // 输出 "John Doe"
```

在这个例子中，我们定义了一个 person 对象，并在其中定义了一个 fullName 方法，该方法返回 person 对象的 firstName 和 lastName 属性的组合。然后，我们使用 call() 方法将 fullName 方法的 this 对象绑定到 person 对象，并调用 fullName 方法，将结果赋值给 fullName 变量。最后，我们输出 fullName 变量的值，即 "John Doe"。

需要注意的是，如果 thisArg 为 null 或 undefined，则会被忽略，并将全局对象作为 thisArg。如果不需要指定 this 对象，可以使用 null 或 undefined 作为参数。另外，call() 方法还可以用于实现继承等高级应用场景。

### call(),apply(),bind()区别

当需要在 JavaScript 中绑定函数的上下文时，可以使用 call()、apply() 或 bind() 方法。这三个方法的作用都是将一个函数绑定到指定的上下文对象上，并执行该函数。

它们之间的主要区别在于参数的传递方式和返回值：

- call() 和 apply() 方法的作用是相同的，它们都是将一个函数绑定到指定的上下文对象上，并执行该函数。它们的区别在于参数的传递方式不同。call() 方法的参数是一个一个地传递，而 apply() 方法的参数是以数组的形式传递。例如：

  ```js
  javascriptCopy codeconst obj = { name: 'John' };
  
  function sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
  
  sayHi.call(obj); // 输出 "Hello, John!"
  sayHi.apply(obj); // 输出 "Hello, John!"
  ```

- bind() 方法不会立即执行函数，而是返回一个新的函数，该函数的上下文被绑定到指定的对象上。bind() 方法接受与 call() 方法相同的参数。例如：

  ```js
  javascriptCopy codeconst obj = { name: 'John' };
  
  function sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const boundSayHi = sayHi.bind(obj);
  boundSayHi(); // 输出 "Hello, John!"
  ```

  在这个例子中，使用 bind() 方法创建了一个新的函数 boundSayHi，该函数的上下文被绑定到 obj 对象上，因此在调用 boundSayHi() 时，会输出 "Hello, John!"。

因此，当需要在 JavaScript 中绑定函数的上下文时，可以选择使用 call()、apply() 或 bind() 方法，具体使用哪一种方法取决于参数的传递方式和是否需要立即执行函数。

### 手写实现

 `call` 方法：

```js
javascriptCopy codeFunction.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

 `apply` 方法：

```js
javascriptCopy codeFunction.prototype.myApply = function (context, args = []) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

 `bind` 方法：

```js
javascriptCopy codeFunction.prototype.myBind = function (context, ...args1) {
  const self = this;
  return function (...args2) {
    context = context || this;
    return self.apply(context, [...args1, ...args2]);
  };
};
```

在这些实现中，`call` 和 `apply` 方法的实现比较相似，主要是在调用时传递参数的方式不同。`bind` 方法则需要返回一个新的函数，且可以在调用时传递额外的参数。