---
layout: blog
title: React Hook底层原理
date: 2022-08-01T02:20:08.748Z
---

# React Hook 底层原理

**好处:** .\
1、跨组件复用: 其实 render props / HOC 也是为了复用，相比于它们，Hooks 作为官方的底层 API，最为轻量，而且改造成本小，不会影响原来的组件层次结构和传说中的嵌套地狱；  
2、类定义更为复杂:  
不同的生命周期会使逻辑变得分散且混乱，不易维护和管理；  
时刻需要关注 this 的指向问题；  
代码复用代价高，高阶组件的使用经常会使整个组件树变得臃肿；  
3、状态与 UI 隔离: 正是由于 Hooks 的特性，状态逻辑会变成更小的粒度，并且极容易被抽象成一个自定义 Hooks，组件中的状态和 UI 变得更为清晰和隔离。

**注意:** . 1.避免在 循环/条件判断/嵌套函数 中调用 hooks，保证调用顺序的稳定；  
2.只有 函数定义组件 和 hooks 可以调用 hooks，避免在 类组件 或者 普通函数 中调用；  
3.不能在 useEffect 中使用 useState，React 会报错提示；  
4.类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存；

**重要钩子** .
##useState .
当调用 useState 的时候，会返回形如 (变量, 函数) 的一个元祖。并且 state 的初始值就是外部调用 useState 的时候，传入的参数。

工作原理:

1.初始化 .  
![](https://miro.medium.com/max/1280/1*LAZDuAEm7nbcx0vWVKJJ2w.png) 2.首次渲染  
![](https://miro.medium.com/max/1260/1*8TpWnrL-Jqh7PymLWKXbWg.png) 3.重渲染
每次后续渲染，光标都会被重置，并且这些值从数组中读取。
![](https://miro.medium.com/max/1254/1*qtwvPWj-K3PkLQ6SzE2u8w.png) 4.事件处理
每个 setter 都有一个对其光标位置的引用，因此通过触发对 any 的调用，setter 它将更改状态数组中该位置的状态值。
![](https://miro.medium.com/max/1260/1*3L8YJnn5eV5ev1FuN6rKSQ.png)

## 游标数组

由数组来实现的“链表”——游标数组。  
其优点是可以快速的插入和删除（由于不需要指针式链表的 malloc 和 free 等内存操作，所以使用时游标数组可能会比指针式链表还要快一点），缺点则是继承自数组——固定大小。

### 为什么不能在循环、判断中使用 .

如果在条件渲染中使用，会导致重渲染的时候，异常的游标对应，异常的游标对应也会导致调用的 setState 方法失效

## useEffect

作用是副作用，说直白就是某些 state 或者 props 变化的时候，需要监听并执行相应的操作。
待完善
