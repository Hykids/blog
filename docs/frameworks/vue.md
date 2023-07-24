# Vue

::: warning ✍️ 基础篇
OnePage 速通(更新中
:::

## 生命周期

有关 vue 的生命周期，分为四个阶段：

- **Creation**阶段：组件被创建，首先调用 setup 钩子函数，其中设置了响应式数据初始化和逻辑设置。接着 beforeCreate 被触发，此时组件实例已经创建。在组件挂在在 DOM 之前，还会触发 beforeMount，此时模板的编译已经完成。
- **onMount**阶段：组件挂在到 Dom 上之后，Mounted 钩子触发。此时，已经可以和 DOM 交互。

![image-20230724183601373](/img/image-20230724183601373.png)

## Vue 组件

## 表单组件

## diff 渲染机制
