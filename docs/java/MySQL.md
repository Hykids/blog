# MySQL

## 下载安装

### 下载步骤

官网下载 zip 安装包

[MySQL :: Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/5.7.html)

解压

添加环境变量

![image-20230720133241476](/img/image-20230720133241476.png)

添加配置文件 my.ini,使用安装目录。

```ini
[mysqld]
#设置3306端口号
port=3306
#设置MySQL的安装目录
basedir=D:\\Program Files\\MySQL\\mysql-5.7.43-winx64
#设置MySQL数据库的数据存放目录
datadir=D:\\Program Files\\MySQL\\mysql-5.7.43-winx64\\data
#运行最大连接数
max_connections=200
#运行连接失败的次数。这也是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
#服务端使用的字符集默认为utf-8
character-set-server=utf8
[mysql]
#客户端使用的字符集默认为utf8
default-character-set=utf8
[client]
#客户端默认端口号为3306
port=3306
skip-grant-tables
```

cmd 管理员模式，进入 bin 目录，输入命令

```
mysqld -install
```

初始化数据

```
mysqld --initialize-insecure --user=mysql
```

```
net start mysql
```

再次启动 mysql，进入管理界面。

```
mysql -u root -p
```

### 常见问题

![image-20230720134725385](/img/image-20230720134725385.png)

原因：用户名和密码错误，访问失效。

步骤：

在 Mysql 下载目录配置文件中找到 my.ini,加上 skip-grant-tables。

网上的，对我无效。还是网上看的：

首先停止 mysql 服务：

```
net stop mysql
```

在 cmd 中输入以下：

mysqld --defaults-file="D:\Program Files\MySQL\mysql-5.7.43-winx64\my.ini" --skip-grant-tables

中间用 my.ini 路径替换。

打开另一个 cmd。

进入 mysql 服务。输入密码时直接回车。

成功：

![image-20230720135905490](/img/image-20230720135905490.png)

别忘了更新密码(分号不能忘)：

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```

## 基本命令行操作

命令行连接

```
mysql -uroot -p123456 -- 链接数据库
flush privileges; -- 刷新权限
---------------------------------------------------------------
show databases; -- 查看所有数据库

mysql> use TABLEname -- 切换数据库
Database changed

--
show tables; -- 查看数据库中所有的表
create database 数据库名称 -- 新建数据库

exit -- 推出链接
```

## 操作数据库

创建数据库

```
CREATE DATABASE [IF NOT EXISTS] db -- 可选项
DROP DATABASE [IF EXISTS] db -- 删除数据库
use `database` -- 选择数据库
show database -- 查看所有数据库

select * from `table` --查看表中所有数据
```
