---
layout: blog
title: 记录微信小程序下载并预览pdf问题
date: 2022-08-11T11:02:50.692Z
---
小程序下载pdf至本地，并打开预览。

一开始我采用的是writeFile，加上savefile，先写入再保存。但是运行ios真机测试时遇到了问题，报了如下错误。
![](https://codimd.xixiaoyao.cn/uploads/upload_c1798be2417af5e9d145e60adb352dd7.png)

后来我查阅很多代码后，发现调用writeFile写入的文件似乎不用保存可直接打开。

ios的确成功下载没报错
![](https://codimd.xixiaoyao.cn/uploads/upload_6a15656c47491962a126b7aad6139186.png)
但是打开文档后显示 . 
![](https://codimd.xixiaoyao.cn/uploads/upload_6bc50bae8d61373b291a423774f3280d.png)

 我以为是文件没能保存本地，但是调用api查询之后发现文件存在。

 呃。。继续找方案