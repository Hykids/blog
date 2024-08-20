---
description: 快速学习Latex基础排版
title: 📚 Latex快速入门
readingTime: false
tag:
  - Academic
recommend: 3
---

## **📚 Latex 快速入门**

### 🌟 语言特性

Latex 是一种排版语言，主要用于科学、技术和数学领域的文档制作，文件后缀为 TEX。支持多种输出格式，如 PDF、HTML 等

### 🚀 解决了什么问题·

在传统的排版方式中，制作复杂的文档需要耗费大量时间和精力。而 Latex 通过使用标记语言，将文档内容和样式分离，实现了快速、准确、高质量的文档制作。

### 🔑 基础语法

Latex 的基础语法包括：

- 命令：以反斜杠（\）开头，控制文档的格式和样式
- 环境：以\begin 和\end 组成，用于对文本进行分组和设置样式
- 注释：以%开头，用于注释文档内容
- 转义字符：用于输出特殊字符，如#、$、%等

### 🔗 下载链接

- [TEX LIVE](https://www.tug.org/texlive/)：适用于多个操作系统的完整 Latex 发行版
- [MikTex](https://miktex.org/)：适用于 Windows 操作系统的 Latex 发行版

### 🌐 Overleaf

[Overleaf](https://www.overleaf.com/)是一个基于 Web 的 Latex 编辑器，它支持在线协作和实时预览，用户可以在任何地方使用它。

### 📦 宏包介绍

Latex 的宏包可以扩展 Latex 的功能，包括添加新的命令、环境和文档类等。常用的宏包包括：

- amsmath：用于数学公式排版
- graphicx：用于插入图形
- hyperref：用于添加超链接
- listings：用于排版代码

以上仅是常用宏包的部分，用户还可以根据自己的需要选择适合自己的宏包。

### 📜 文档结构

一个 LaTeX 文档一般由以下几个部分组成：

- 文档类声明：用于定义文档类型、版式等。
- 导言区：用于声明宏包、自定义命令等。
- 正文区：正式的文档内容。
- 参考文献：参考文献列表。
- 附录：额外的部分，如代码清单、图表等。

下面是一个简单的 LaTeX 文档示例：

```latex
latexCopy code\documentclass{article}
\usepackage{graphicx}

\begin{document}
    \title{这是一个LaTeX文档示例}
    \author{作者名字}
    \date{\today}
    \maketitle

    \section{引言}
    这是一段引言。

    \section{正文}
    这是一段正文。这是一个插入图片的例子：

    \begin{figure}[htbp]
        \centering
        \includegraphics[width=0.5\textwidth]{example.jpg}
        \caption{这是一张图片}
        \label{fig:example}
    \end{figure}

    \begin{itemize}
    \item 列表项
    \item 列表项
    \item 列表项
    \end{itemize}

    \begin{enumerate}
    \item 列表项
    \item 列表项
    \item 列表项
    \end{enumerate}

    \begin{equation}
    E=mc^2
    \end{equation}

    \section{结论}
    这是结论。
\end{document}
```

### 📝 基础语法

#### 标题、段落和换行

LaTeX 中，可以使用`\section{}`、`\subsection{}`、`\subsubsection{}`命令来设置标题级别，同时可以使用`\paragraph{}`和`\subparagraph{}`来设置段落标题。在段落中，可以使用`\\`命令来手动换行，也可以使用`\newline`或`\par`命令来分段。

```
latexCopy code\section{一级标题}
这是一段正文。

\subsection{二级标题}
这是一段正文。

\subsubsection{三级标题}
这是一段正文。

\paragraph{段落标题}
这是一段正文。

\subparagraph{子段落标题}
这是一段正文。\\
这是另一段正文。
```

#### 字体、颜色和大小

在 LaTeX 中，可以使用一些命令来控制字体、颜色和大小。如下表所示：

| 命令                | 作用     |
| ------------------- | -------- |
| `\textbf{}`         | 加粗     |
| `\textit{}`         | 斜体     |
| `\underline{}`      | 下划线   |
| `\textcolor{red}{}` | 颜色     |
| `\tiny{}`           | 超小     |
| `\scriptsize{}`     | 超小     |
| `\footnotesize{}`   | 脚注大小 |
|                     |          |
