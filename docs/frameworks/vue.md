# Vue

::: warning ✍️ advanced
OnePage 速通中
:::

## Reactivity in Depth

Vue reactivity is a feature that automatically updates the UI when the data model changes and vice versa, simplifying the process of building dynamic and interactive user interfaces. Today, I am going to figure it out and try to complete its main function.

```js
let price = 3
let quantity = 4
let total = price * quantity

console.log('total:',total)//12

qunality = 5

console.log('total:',total)//12
```

This is not how Javascript usually work .So Vue somehow knows to go and update the template and computer property which updates the template. How can we save the date calculation so we can run it again,when price or quantity updates?

In javasricpt, we can set total calculation in an anonymous function,and  store inside of effect.

```javascript
let effect = function(){
	total = price * quantity
    // the code we want to save it
}
```

​	Not the same as React, Vue is based on Object.defineProperity to achieve data reactivity. Before diving into the study, it is important to understand the Observer Pattern.

The Observer Patten is one of design pattern used to establish one-to-many dependency between object. In this pattern ,when one object change its state,all its dependents are notified and update automatically.



## 
