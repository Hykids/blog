# git命令详解

### 基本概念

- 版本库👉.git

   - 当我们使用git管理文件时，比如git init时，这个时候，会多一个.git文件，我们把这个文件称之为版本库。
   - .git文件另外一个作用就是它在创建的时候，会自动创建master分支，并且将HEAD指针指向master分支。



- 工作区

  - 本地项目存放文件的位置
  - 可以理解成图上的workspace



- 暂存区 (Index/Stage)

  - 顾名思义就是暂时存放文件的地方，通过是通过add命令将工作区的文件添加到缓冲区



- 本地仓库（Repository）

  - 通常情况下，我们使用commit命令可以将暂存区的文件添加到本地仓库
  - 通常而言，HEAD指针指向的就是master分支



- 远程仓库（Remote）

  - 举个例子，当我们使用GitHub托管我们项目时，它就是一个远程仓库。
  - 通常我们使用clone命令将远程仓库代码拷贝下来，本地代码更新后，通过push托送给远程仓库

### HEAD指针是什么？
HEAD就是当前活跃分支的游标，指向当前分支。

### 常见命令

#### 分支管理
- 查看本地分支
```
git branch
```
- 查看远程分支
```
git branch -r
```
- 查看本地和远程分支
```
git branch -a
```
- 从当前分支切换到其他分支
```
git checkout <branch-name>
```
- 创建并切换到其他分支
```
git checkout -b <branch-name>
```
- 推送分支到远端
```
git push origin <branch>
```
- 删除分支
```
git branch -d <branch-name>
```
- 合并分支
```
git merge <branch>
```
- 拉取远程分支并创建本地分支
```
git checkout -b <local branch-name> orgin/<branch-name>
```

### fetch指令

将远程仓库内容更新到本地

- 将远程主机的更新全拉到本地
```
git fetch origin

git reset --hard origin/master
//想要丢弃你所有的本地改动与提交，可以到服务器上获取最新的版本并将你本地主分支指向到它
```
- 取回特定分支
```
git fetch origin:<branch>
```

### 撤销操作

- 撤销**工作区**修改
```
git checkout --
```
- 撤销**暂存区**修改
```
git reset head
```

### 状态查询
- 查看日志
```
git log
```
- 查看历史操作
```
git relog
```
- 查看状态
```
git status
```