---
title: mac使用指南
description: 记录命令行，快捷键已经好用的小工具
tag:
  - 工具
sidebar: false
---

# mac使用指南

## 文件和目录管理命令
### **`ls` - 列出目录内容**
列出当前目录下的所有文件和子目录。
```bash
ls
```
- **`ls -l`**：显示详细信息（权限、所有者、文件大小等）。
- **`ls -a`**：显示所有文件，包括隐藏文件（以`.`开头的文件）。
- **`ls -lh`**：显示人类可读的文件大小（如KB、MB）。

### **`cd` - 更改目录**
用于在目录之间导航。
```bash
cd /path/to/directory
```
- **`cd ~`**：返回到当前用户的主目录。
- **`cd ..`**：返回到上一级目录。

### **`pwd` - 显示当前工作目录**
显示当前所在的目录路径。
```bash
pwd
```

### **`mkdir` - 创建目录**
创建一个新目录。
```bash
mkdir new_directory
```
- **`mkdir -p /path/to/new_directory`**：递归创建目录结构。

### **`touch` - 创建空文件**
创建一个空文件或更新已有文件的时间戳。
```bash
touch filename.txt
```

### **`mv` - 移动或重命名文件/目录**
移动文件或目录，或者重命名文件。
```bash
mv old_name.txt new_name.txt
```
- **`mv /path/to/file /new/path/to/file`**：移动文件到新位置。

### **`rm` - 删除文件或目录**
删除文件或目录。
```bash
rm filename.txt
```
- **`rm -r directory_name`**：递归删除目录及其内容（**危险操作，需谨慎使用**）。
- **`rm -f filename.txt`**：强制删除文件，不提示确认。

### **`cat` - 查看文件内容**
用于查看文件内容，特别适合查看小型文本文件。
```bash
cat filename.txt
```

### **`nano` 或 `vi` - 编辑文件**
使用终端内置的文本编辑器编辑文件。
```bash
nano filename.txt
```
```bash
vi filename.txt
```

### **`find` - 查找文件或目录**
根据名称或其他条件查找文件或目录。
```bash
find /path/to/search -name "filename.txt"
```

### **`grep` - 搜索文件内容**
在文件中搜索特定字符串。
```bash
grep "search_term" filename.txt
```
- **`grep -r "search_term" /path/to/search`**：递归搜索目录中的文件。

### **`chmod` - 更改文件权限**
更改文件或目录的访问权限。
```bash
chmod 755 filename.txt
```

### **`open` - 打开文件或应用程序**
在默认应用程序中打开文件，或在Finder中打开目录。
```bash
open filename.txt
```
- **`open .`**：在Finder中打开当前目录。

在macOS终端中，可以使用以下命令来关闭和打开应用程序：

## app相关
### 1. **打开应用程序**

要打开一个应用程序，你可以使用 `open` 命令。

```bash
open -a "ApplicationName"
```

例如，打开Safari浏览器：

```bash
open -a "Safari"
```

如果你不知道应用程序的确切名称，或者想指定应用程序的路径，也可以直接打开应用程序的 `.app` 文件：

```bash
open /Applications/Safari.app
```

### 2. **关闭应用程序**

要关闭一个正在运行的应用程序，可以使用 `killall` 命令。这个命令会强制关闭所有匹配的进程。

```bash
killall "ApplicationName"
```

例如，关闭Safari浏览器：

```bash
killall "Safari"
```

### 3. **强制关闭应用程序**

如果应用程序没有响应，无法通过 `killall` 正常关闭，你可以使用 `kill` 命令配合应用程序的进程ID (PID) 来强制关闭：

1. 首先，使用 `ps` 或 `pgrep` 查找应用程序的进程ID：

   ```bash
   pgrep "ApplicationName"
   ```

   或者：

   ```bash
   ps aux | grep "ApplicationName"
   ```

2. 然后，使用 `kill` 命令强制关闭：

   ```bash
   kill -9 PID
   ```

例如，强制关闭Safari：

```bash
kill -9 $(pgrep Safari)
```

### 总结

- **打开应用程序**：使用 `open -a "ApplicationName"`。
- **关闭应用程序**：使用 `killall "ApplicationName"`。
- **强制关闭应用程序**：使用 `kill -9 PID`。

## Http相关

在macOS终端中，有一些常用的命令可以用于处理HTTP相关的任务，主要包括 `curl` 和 `wget` 等命令行工具。以下是一些常用的HTTP相关命令：

### **`curl` - 发送HTTP请求**

`curl` 是一个非常强大的工具，用于从命令行发送HTTP请求和处理HTTP响应。以下是一些常用的`curl`命令示例：

- **发送GET请求**：
  ```bash
  curl http://example.com
  ```

- **下载文件**：
  ```bash
  curl -O http://example.com/file.zip
  ```

- **发送POST请求**：
  ```bash
  curl -X POST -d "param1=value1&param2=value2" http://example.com/api
  ```

- **发送POST请求（带JSON数据）**：
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' http://example.com/api
  ```

- **添加自定义请求头**：
  ```bash
  curl -H "Authorization: Bearer your_token" http://example.com/api
  ```

- **保存响应到文件**：
  ```bash
  curl -o output.html http://example.com
  ```

- **查看HTTP响应头**：
  ```bash
  curl -I http://example.com
  ```

- **跟随重定向**：
  ```bash
  curl -L http://example.com
  ```

- **指定请求方法**（如PUT、DELETE等）：
  ```bash
  curl -X PUT http://example.com/api/resource
  ```

- **查看详细的请求和响应信息**：
  ```bash
  curl -v http://example.com
  ```

### **`wget` - 下载文件**

`wget` 是另一个用于从Web服务器下载文件的工具，虽然不如 `curl` 功能丰富，但在批量下载或递归下载网站时非常有用。

- **下载文件**：
  ```bash
  wget http://example.com/file.zip
  ```

- **保存文件为指定名称**：
  ```bash
  wget -O newfile.zip http://example.com/file.zip
  ```

- **递归下载整个网站**：
  ```bash
  wget -r http://example.com
  ```

- **下载时跳过证书检查**：
  ```bash
  wget --no-check-certificate https://example.com/file.zip
  ```

### **`httpie` - 更友好的HTTP客户端**

`httpie` 是一个更加友好和易于使用的HTTP客户端，语法比`curl`更加直观。

- **发送GET请求**：
  ```bash
  http http://example.com
  ```

- **发送POST请求**：
  ```bash
  http POST http://example.com/api key1=value1 key2=value2
  ```

- **发送带JSON数据的POST请求**：
  ```bash
  http POST http://example.com/api key1=value1 key2=value2
  ```

- **添加自定义请求头**：
  ```bash
  http GET http://example.com Authorization:'Bearer your_token'
  ```

### **`telnet` - 手动HTTP请求**

`telnet` 可以用于手动发送HTTP请求，主要用于调试和诊断网络问题。

- **使用`telnet` 连接到HTTP服务器**：
  ```bash
  telnet example.com 80
  ```

  然后，你可以手动输入HTTP请求：

  ```
  GET / HTTP/1.1
  Host: example.com
  ```

  按两次回车发送请求并查看响应。

### 总结

- **`curl`**：功能丰富的HTTP客户端，适合各种HTTP操作。
- **`wget`**：主要用于下载文件，支持递归下载。
- **`httpie`**：更人性化的HTTP客户端，语法更加简洁。
- **`telnet`**：用于手动发送HTTP请求，适合调试和诊断。

