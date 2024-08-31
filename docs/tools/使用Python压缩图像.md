---
title: 使用Python压缩图像
description: python学习日志
sidebar: false
tag:
    - python
---

# 使用Python压缩图像
在考试网站上传证件照，提示我照片超出限制。遂查找在线压缩工具，一找一个都需要添加微信号才能下载。一怒之下准备自己写一个工具，刚好最近有在尝试学习python，准备试着写一个脚本，也当是学习了。

## [Pillow](https://pillow.readthedocs.io/en/stable/)

*Pillow 是第三方开源的 Python 图像处理库，它支持多种图片格式，包括 BMP、GIF、JPEG、PNG、TIFF 等*

首先，下载安装：
```shell
pip install pillow
```
`image`类是pillow中重要的一个类。该类型的示例可以完成图像创建，加载以及处理一列功能。

从最基本的`open()`开始吧，`open()`可以loading当前项目根目录下的图像文件。

```python
from PIL import Image

if __name__ == '__main__':
    im = Image.open("image.png")
    print(im.format, im.size, im.mode)
    #PNG (1624, 2186) RGBA
```
我们可以通过im实例获取到图像的格式、尺寸以及像素类型。拿到`im`实例之后，我们还可以调用模块内的`show()`功能展示图片。
```python
im.show()
```
### 读写以及格式转换
`image`类下的`save()`方法可以保存文件到指定目录
```python

import os
from PIL import Image


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    infills = os.listdir("image")
    for infile in infills:
        f, e = os.path.splitext(infile)
        outfile = f+".jpg"
        if infile != outfile:
            try:
                with Image.open(os.path.join("image", infile)) as im:
                    im.save(outfile)
            except OSError:
                print("cannot convert", infile)
```
::: tip
如果格式转换失败，可能是因为像素类型不支持。
例如我尝试将png转化为jpg保存,但是我的图像是以 RGBA 模式存储的，但 JPEG 格式不支持这种模式。这时候可以尝试
可以使用 convert() 方法来完成从 RGBA 模式转换为 RGB 模式的操作：
```python
     if im.mode == 'RGBA':
        im = im.convert('RGB')

```
:::

学会了读写文件，可以开始压缩图片了  
### 压缩图片

压缩图片的主要方法是调整图像质量或分辨率。下面是两个常见的方法：

1. **通过调整图像质量来压缩**
你可以通过在保存图片时设置 `quality` 参数来调整 JPEG 图片的压缩质量。`quality` 的取值范围是 1 到 95，数字越小，压缩率越高，文件越小，但图像质量也会降低。

```python
from PIL import Image
import os

# 打开图片
with Image.open("image.png") as im:
    # 将图片保存为 JPEG 格式，并设置质量为 85（通常质量设置在70-85之间效果比较好）
    im.save("compressed_example.jpg", "JPEG", quality=85)
```

2. **通过调整图像分辨率来压缩**
调整图片的分辨率（即尺寸）也可以减少文件大小。你可以使用 `resize()` 方法来缩放图片。

```python
from PIL import Image
import os

# 打开图片
with Image.open("image.png") as im:
    # 计算新的尺寸，保持长宽比
    new_size = (im.width // 2, im.height // 2)
    
    # 调整图像大小
    resized_image = im.resize(new_size)
    
    # 将图片保存为 JPEG 格式，设置质量为 85
    resized_image.save("resized_compressed_example.jpg", "JPEG", quality=85)
```

3. **组合使用：调整质量和分辨率**
可以将调整质量和分辨率的方法结合使用，以进一步压缩图片：

```python
from PIL import Image
import os

# 打开图片
with Image.open("image.png") as im:
    # 计算新的尺寸，保持长宽比
    new_size = (im.width // 2, im.height // 2)
    
    # 调整图像大小
    resized_image = im.resize(new_size)
    
    # 将图片保存为 JPEG 格式，设置质量为 75
    resized_image.save("final_compressed_example.jpg", "JPEG", quality=75)
```
转完像素模式后之后会遇到一个问题，原本白底的证件照变成了黑底。
可以通过创建一个纯白背景,然后将原始图像粘贴到这个背景上，最后再进行转换和保存。
```python
 background = Image.new("RGB", im.size, (255, 255, 255))
background.paste(im, mask=im.split()[3])  # 使用Alpha通道作为掩码
im = background
```
最后我将包含转换和压缩功能封装成了一个 [imageProcessor](https://github.com/Hykids/ImageProcessor)类。

最后成功压缩图片，获得了符合要求的证件照, 但是因为报名太晚已经抢不到名额了😢