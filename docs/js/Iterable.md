## 可迭代对象

### Iterable

可迭代对象（Iterable）是指实现了 `Symbol.iterator` 方法的对象。在 JavaScript 中，可迭代对象常见的有数组、字符串、Map、Set 等。

`Symbol.iterator` 方法是一个无参数函数，返回一个迭代器对象（Iterator）。迭代器对象是一个包含 `next()` 方法的对象，每次调用 `next()` 方法，迭代器将返回一个包含 `value` 和 `done` 两个属性的对象。其中，`value` 表示当前迭代的值，`done` 表示是否迭代完成。

例如，以下是一个自定义迭代器的例子：

```js
javascriptCopy codeconst myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let value of myIterable) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```

在上面的例子中，我们定义了一个名为 `myIterable` 的对象，并实现了 `Symbol.iterator` 方法，该方法返回了一个迭代器对象，该迭代器对象使用 `yield` 关键字返回了三个值 1、2、3。然后我们使用 `for...of` 循环遍历 `myIterable` 对象，每次迭代都会输出当前的值。

值得注意的是，可迭代对象并不一定是数组或类数组对象，只要实现了 `Symbol.iterator` 方法并返回了迭代器对象，那么它就是一个可迭代对象。通过 `for...of` 循环遍历可迭代对象，可以遍历它的所有值。

### Map和Set

Map 和 Set 是 ES6 中新增的两个数据结构，它们分别用于存储键值对和唯一值。

#### Map

Map 是一种可迭代的键值对集合，其中的每个键和值都可以是任意类型的数据。它类似于对象，但有一些特点：

- 对象的键只能是字符串或 Symbol 类型，而 Map 的键可以是任意类型。
- Map 中的键值对是有序的，而对象中的键值对是无序的。

下面是 Map 的一些常用操作：

##### 创建 Map

可以通过以下方式创建一个 Map：

```
javascriptCopy code
const map = new Map();
```

##### 添加键值对

可以使用 `set()` 方法向 Map 中添加键值对：

```
pythonCopy code
map.set('key', 'value');
```

##### 获取值

可以使用 `get()` 方法获取指定键的值：

```
goCopy code
const value = map.get('key');
```

##### 判断键是否存在

可以使用 `has()` 方法判断指定键是否存在：

```
goCopy code
const hasKey = map.has('key');
```

##### 删除键值对

可以使用 `delete()` 方法删除指定键的键值对：

```
goCopy code
map.delete('key');
```

##### 清空 Map

可以使用 `clear()` 方法清空 Map 中的所有键值对：

```
pythonCopy code
map.clear();
```

##### 遍历 Map

可以使用 `for...of` 循环遍历 Map 中的所有键值对：

```
cCopy codefor (const [key, value] of map) {
  console.log(key, value);
}
```

##### 获取 Map 的长度

可以使用 `size` 属性获取 Map 中键值对的数量：

```js
goCopy code
const length = map.size;
```

#### Set

Set 是一种可迭代的无重复元素集合，它存储的是一组唯一的值，不允许重复。下面是 Set 的一些常用操作：

##### 创建 Set

可以通过以下方式创建一个 Set：

```js
vbnetCopy code
const set = new Set();
```

##### 添加元素

可以使用 `add()` 方法向 Set 中添加元素：

```js
csharpCopy code
set.add('value');
```

##### 判断元素是否存在

可以使用 `has()` 方法判断指定元素是否存在：

```js
cCopy code
const hasValue = set.has('value');
```

### 删除元素

可以使用 `delete()` 方法删除指定元素：

```js
pythonCopy code
set.delete('value');
```

##### 清空 Set

可以使用 `clear()` 方法清空 Set 中的所有元素：

```js
pythonCopy code
set.clear();
```

##### 遍历 Set

可以使用 `for...of` 循环遍历 Set 中的所有元素：

```js
cCopy codefor (const value of set) {
  console.log(value);
}
```

##### 获取 Set 的长度

可以使用 `size` 属性获取 Set 中元素的数量：

```js
cCopy code
const length = set.size;
```

由于 Set 的元素不能重复，因此可以使用 Set 来去除数组中的重复元素：

```js
javascriptCopy codeconst arr = [1, 2, 3, 2, 1];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
```