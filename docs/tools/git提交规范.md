---
title: git提交规范
description: git commit message规范
tag:
  - git
sidebar: false
---

# git 提交规范

规范的 git 提交有以下用处：

1. 说明提交功能，修改位置。
2. 过滤 commit，方便后续查找。
3. ChangeLog 可直接从 commit 生成。

## 提交格式

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复 bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包

## 规范工具

### [commitlint](https://link.juejin.cn/?target=https%3A%2F%2Fmarionebl.github.io%2Fcommitlint%2F%23%2F 'https://marionebl.github.io/commitlint/#/')

主要用于 检查 Git 提交信息，确保 commit message 符合特定的格式标准（例如，符合 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 的规范）,且可以被工具（如生成变更日志）自动解析。
检查 git message 提交，当执行`git commit`时会在对应的 git 钩子上做校验，只有符合格式的 Commit message 才能提交成功

全局安装

```shell
npm install commitizen -g
```

项目引入

```shell
npm install commitizen --save-dev
commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
```

上述命令会添加 commitizen 到 package.json devDependencies 依赖中，同时添加配置 config 到 package.json 根目录。

```JSON
 "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

完成安装后，在项目目录下新建 commitlint.config.js 文件

```JavaScript
module.exports = {
	extends: ['@commitlint/config-conventional'], // [!code hl]
	rules: { // type 类型定义
	'type-enum': [2, 'always', [
		"feat", // 新功能 feature
		"fix", // 修复 bug
		"docs", // 文档注释
		"style", // 代码格式(不影响代码运行的变动)
		"refactor", // 重构(既不增加新功能，也不是修复bug)
		"perf", // 性能优化
		"test", // 增加测试
		"chore", // 构建过程或辅助工具的变动
		"revert", // 回退
		"build" // 打包 ]],
	'subject-case': [0] } };
```

### [Husky](https://github.com/typicode/husky)

Husky 是一个 Git 钩子工具，它允许你在特定的 Git 操作（如 commit、push、merge）前后执行自定义脚本。在 git commit 之前运行 commitlint 来检查提交信息，或在 git push 时运行测试等操作。

```JSON
// husky
// 项目目录下安装
npm i husky --save-dev
// 在package.json文件中增加相关配置
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### [commitizen](https://github.com/commitizen/cz-cli)

定制 Commitizen 的提交规范。Commitizen 默认遵循 Conventional Commits 规范，可自定义 Commitizen 的提示内容和选项。

效果展示：

![image-20240819100045993](/Users/peepocry/Desktop/blog/docs/tools/assets/image-20240819100045993.png)

### [cz-customizable](https://github.com/leoforfree/cz-customizable)

Commitizen 插件,定制 commit 信息,可自定义提交模式
全局安装

```
npm i cz-customizable -g
```

项目引入

```
npm install cz-customizable --save-dev
```

配置

```JSON
commitizen init cz-customizable --save --save-exact
// 运行后效果如下
// 会在package.json文件中增加相关配置
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  }
}
```

在项目目录下，新建配置文件 .cz-config.js

```JavaScript
module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     新功能'},
    {value: 'fix',      name: 'fix:      修复'},
    {value: 'docs',     name: 'docs:     文档变更'},
    {value: 'style',    name: 'style:    代码格式(不影响代码运行的变动)'},
    {value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)'},
    {value: 'perf',     name: 'perf:     性能优化'},
    {value: 'test',     name: 'test:     增加测试'},
    {value: 'chore',    name: 'chore:    构建过程或辅助工具的变动'},
    {value: 'revert',   name: 'revert:   回退'},
    {value: 'build',    name: 'build:    打包'}
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
};
```

## Change Log

Change Log 是发布新版本时，用来说明与上一个版本差异的文档。

### 工具

[Conventional Changelog](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%23conventional-changelog 'https://github.com/conventional-changelog/conventional-changelog#conventional-changelog')
自动生成 Change Log 文件

```npm
npm i conventional-changelog-cli --save-dev
```

在 scripts 添加

```JSON
"scripts": { "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s" }
```

引入后可使使用`npm run changelog`自动生成 CHANGELOG.md 文件

## 参考链接

[超详细的 Git 提交规范引入指南](ttps://juejin.cn/post/6844903793033756680)  
[阮一峰 - Commit message 和 Change log 编写指南](https://ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
[git commit 规范校验配置和版本发布配置](https://juejin.cn/post/6844903857718312967#heading-6)
