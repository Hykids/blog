---
layout: blog
title: JavaScript文件流
date: 2022-08-04T06:54:23.816Z
---
前端对二进制数据的处理

---

## 概述

* Blob: 前端的一个专门用于支持文件操作的二进制对象
* ArrayBuffer：前端的一个通用的二进制缓冲区，类似数组，但在API和特性上却有诸多不同
* Buffer：Node.js提供的一个二进制缓冲区，常用来处理I/O操作

## Blob

`Blob` 全称：`Binary Large Object`

Blob用来支持文件操作。`Blob` 对象表示一个二进制文件的数据内容，通常用来**读写文件**。
构造函数File继承了blob的所有属性，可以看作是一种特殊的Blob对象。

### 功能

![](https://img2018.cnblogs.com/blog/1060770/201912/1060770-20191217112525289-384672077.png)
通过window.URL.createObjectURL方法可以把一个blob转化为一个Blob URL，并且用做文件下载或者图片显示的链接。
```
  var blob = new Blob(["Hello World"]);//构造一个blob对象
  var url = window.URL.createObjectURL(blob);//转化为blob url
  var a = document.getElementById("h");//获取dom节点
  a.download = "helloworld.txt";//赋给 a.download属性
  a.href = url;//点击链接下载
```

### 文件流下载
后端返回的数据是文件流的时候，需要在axios请求指定responseType：
```
responseType: 'blob',  // 需要指定
```
创建blob对象，创建reader，监听加载时间，创建a标签，模拟点击事件，移除a标签。这就是一个文件流下载的基本流程：

```
const blob = new Blob([res.data]);
const reader = new FileReader();//fileReader对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
reader.readAsDataURL(blob);
reader.onload = (e) => {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = e.target.result;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
```


## ArrayBuffer

是javascript操作二进制数据的一个接口。`ArrayBuffer` 对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（`TypedArray`视图和`DataView`视图）来读写，视图的作用是以指定格式解读二进制数据。
[](https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE0a025e2378877fdd139b5b83df3e2309/40846)

ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。
### arrayBuffer与普通数组
[](https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE16c7d6a4cc7763e55d9edbbf558f5cc3/40914)

### 视图
操作arraybuffer对象，必须使用视图
[视图对象本身并不存储任何东西。它是一副“眼镜”，透过它来解释存储在 ArrayBuffer 中的字节。](https://zh.javascript.info/arraybuffer-binary-arrays)
例如：
* **`Uint8Array`** —— 将 `ArrayBuffer` 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位，因此只能容纳那么多）。这称为 “8 位无符号整数”。

* **`Uint16Array`** —— 将每 2 个字节视为一个 0 到 65535 之间的整数。这称为 “16 位无符号整数”。
* **`Uint32Array`** —— 将每 4 个字节视为一个 0 到 4294967295 之间的整数。这称为 “32 位无符号整数”。
* **`Float64Array`** —— 将每 8 个字节视为一个 `5.0x10<sup>-324</sup>` 到 `1.8x10<sup>308</sup>` 之间的浮点数。

```
let view = new Uint32Array(buffer); // 将 buffer 视为一个 32 位整数的序列

alert(Uint32Array.BYTES_PER_ELEMENT); // 每个整数 4 个字节

alert(view.length); // 4，它存储了 4 个整数
alert(view.byteLength); // 16，字节中的大小
```


