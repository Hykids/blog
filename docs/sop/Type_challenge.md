---
title: Type Challenge Solution
description: 学习TS类型体操
tag:
  - Typescript
---

# Typescript 类型体操

TypeScript 类型体操（TypeScript Type Challenges），是一种利用 TypeScript 的类型系统来实现各种复杂的类型逻辑的编程技巧。它涉及到灵活使用泛型、条件类型、映射类型、递归类型、联合类型、交叉类型等，旨在实现对类型的精确控制和推导。
## 为什么其他语言没有类型体操？

TypeScript 基于 JavaScript 开发的语言，它在设计时必须考虑到 JavaScript 的动态特性，这也导致 TypeScript 的类型系统需要支持更多复杂的情况。例如，处理动态对象、不同类型的函数签名、异构数据结构等。这种设计需求催生了 TypeScript 类型系统的灵活性。  

传统静态语言则不需要处理如此复杂的类型推导场景，因此其类型系统通常较为简单。动态语言虽然可以做很多事情，但它们不提供编译时类型检查，因此也没有类似的“类型体操”概念。



## 常见使用技巧

### 1. **提取对象中的某个属性**  
我们可以通过键名提取对象中的某个属性的类型。

```ts
type Person = {
  name: string;
  age: number;
};

type NameType = Person['name']; // string
```

### 2. **条件类型**  
条件类型根据某个条件进行类型选择。

```ts
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
```

### 3. **提取联合类型中的某些类型**  
通过条件类型可以从联合类型中提取出符合条件的类型。

```ts
type ExtractString<T> = T extends string ? T : never;

type Test3 = ExtractString<string | number>; // string
```

### 4. **递归类型**  
递归类型通常用于处理嵌套结构。

```ts
type NestedArray<T> = T | NestedArray<T>[];

type Test4 = NestedArray<number>; // number | number[]
```

### 5. **联合类型转交叉类型**  
我们可以将联合类型转为交叉类型，通过递归来遍历和合并。

```ts
type UnionToIntersection<U> = 
  (U extends any ? (arg: U) => void : never) extends (arg: infer I) => void ? I : never;

type Test5 = UnionToIntersection<{ a: string } | { b: number }>; 
// { a: string } & { b: number }
```

### 6. **递归地将对象的属性设为可选**  
使用递归类型可以实现对象所有层级属性可选。

```ts
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type Person = {
  name: string;
  address: {
    city: string;
    zip: string;
  };
};

type PartialPerson = DeepPartial<Person>;
```

### 7. **Union类型剔除某个类型**  
通过条件类型，可以从联合类型中排除特定类型。

```ts
type ExcludeType<T, U> = T extends U ? never : T;

type Test6 = ExcludeType<string | number | boolean, boolean>; // string | number
```

### 8. **推导函数返回值类型**  
TypeScript 提供了内置的 `ReturnType<T>`，你可以通过它来获取函数的返回值类型。

```ts
type Func = () => string;
type ReturnTypeOfFunc = ReturnType<Func>; // string
```

通过类型体操，我们可以构造非常复杂的类型逻辑，甚至能够在类型层面实现类似编程语言中的功能，例如模式匹配、递归、条件判断等。这在实际开发中，特别是大型项目中，能够极大提升类型安全性和代码的可维护性。

## 推荐项目：
- [Type-challenge](https://github.com/type-challenges/type-challenges) - type 类型体操
- [Type-challenge-solution](https://github.com/ghaiklor/type-challenges-solutions?tab=readme-ov-file)