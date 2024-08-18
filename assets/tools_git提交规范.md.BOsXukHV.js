import{_ as a,o as s,c as n,a7 as e}from"./chunks/framework.CxraDDnc.js";const d=JSON.parse('{"title":"git提交规范","description":"git commit message规范","frontmatter":{"title":"git提交规范","description":"git commit message规范","tag":["git"],"sidebar":false},"headers":[],"relativePath":"tools/git提交规范.md","filePath":"tools/git提交规范.md","lastUpdated":null}'),t={name:"tools/git提交规范.md"},p=e(`<h1 id="git-提交规范" tabindex="-1">git 提交规范 <a class="header-anchor" href="#git-提交规范" aria-label="Permalink to &quot;git 提交规范&quot;">​</a></h1><p>说明提交功能，修改位置。过滤 commit，方便后续查找。ChangeLog 可直接从 commit 生成。</p><h2 id="提交格式" tabindex="-1">提交格式 <a class="header-anchor" href="#提交格式" aria-label="Permalink to &quot;提交格式&quot;">​</a></h2><ul><li>feat - 新功能 feature</li><li>fix - 修复 bug</li><li>docs - 文档注释</li><li>style - 代码格式(不影响代码运行的变动)</li><li>refactor - 重构、优化(既不增加新功能，也不是修复 bug)</li><li>perf - 性能优化</li><li>test - 增加测试</li><li>chore - 构建过程或辅助工具的变动</li><li>revert - 回退</li><li>build - 打包</li></ul><h2 id="规范工具" tabindex="-1">规范工具 <a class="header-anchor" href="#规范工具" aria-label="Permalink to &quot;规范工具&quot;">​</a></h2><h3 id="commitlint" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fmarionebl.github.io%2Fcommitlint%2F%23%2F" title="https://marionebl.github.io/commitlint/#/" target="_blank" rel="noreferrer">commitlint</a> <a class="header-anchor" href="#commitlint" aria-label="Permalink to &quot;[commitlint](https://link.juejin.cn/?target=https%3A%2F%2Fmarionebl.github.io%2Fcommitlint%2F%23%2F &#39;https://marionebl.github.io/commitlint/#/&#39;)&quot;">​</a></h3><p>主要用于 检查 Git 提交信息，确保 commit message 符合特定的格式标准（例如，符合 <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">Conventional Commits</a> 的规范）,且可以被工具（如生成变更日志）自动解析。 检查 git message 提交，当执行<code>git commit</code>时会在对应的 git 钩子上做校验，只有符合格式的 Commit message 才能提交成功</p><p>全局安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install commitizen -g</span></span></code></pre></div><p>项目引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install commitizen --save-dev</span></span>
<span class="line"><span>commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact</span></span></code></pre></div><p>上述命令会添加 commitizen 到 package.json devDependencies 依赖中，同时添加配置 config 到 package.json 根目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &quot;config&quot;: {</span></span>
<span class="line"><span>    &quot;commitizen&quot;: {</span></span>
<span class="line"><span>      &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>完成安装后，在项目目录下新建 commitlint.config.js 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>	extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span>	rules: { // \btype 类型定义</span></span>
<span class="line"><span>	&#39;type-enum&#39;: [2, &#39;always&#39;, [</span></span>
<span class="line"><span>		&quot;feat&quot;, // 新功能 feature</span></span>
<span class="line"><span>		&quot;fix&quot;, // 修复 bug</span></span>
<span class="line"><span>		&quot;docs&quot;, // 文档注释</span></span>
<span class="line"><span>		&quot;style&quot;, // 代码格式(不影响代码运行的变动)</span></span>
<span class="line"><span>		&quot;refactor&quot;, // 重构(既不增加新功能，也不是修复bug)</span></span>
<span class="line"><span>		&quot;perf&quot;, // 性能优化</span></span>
<span class="line"><span>		&quot;test&quot;, // 增加测试</span></span>
<span class="line"><span>		&quot;chore&quot;, // 构建过程或辅助工具的变动</span></span>
<span class="line"><span>		&quot;revert&quot;, // 回退</span></span>
<span class="line"><span>		&quot;build&quot; // 打包 ]],</span></span>
<span class="line"><span>	&#39;subject-case&#39;: [0] } };</span></span></code></pre></div><h3 id="husky" tabindex="-1"><a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a> <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;[Husky](https://github.com/typicode/husky)&quot;">​</a></h3><p>Husky 是一个 Git 钩子工具，它允许你在特定的 Git 操作（如 commit、push、merge）前后执行自定义脚本。在 git commit 之前运行 commitlint 来检查提交信息，或在 git push 时运行测试等操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// husky</span></span>
<span class="line"><span>// 项目目录下安装</span></span>
<span class="line"><span>npm i husky --save-dev</span></span>
<span class="line"><span>// 在package.json文件中增加相关配置</span></span>
<span class="line"><span>&quot;husky&quot;: {</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>    &quot;commit-msg&quot;: &quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="commitizen" tabindex="-1"><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noreferrer">commitizen</a> <a class="header-anchor" href="#commitizen" aria-label="Permalink to &quot;[commitizen](https://github.com/commitizen/cz-cli)&quot;">​</a></h3><p>定制 Commitizen 的提交规范。Commitizen 默认遵循 Conventional Commits 规范，可自定义 Commitizen 的提示内容和选项。</p><h3 id="cz-customizable" tabindex="-1"><a href="https://github.com/leoforfree/cz-customizable" target="_blank" rel="noreferrer">cz-customizable</a> <a class="header-anchor" href="#cz-customizable" aria-label="Permalink to &quot;[cz-customizable](https://github.com/leoforfree/cz-customizable)&quot;">​</a></h3><p>Commitizen 插件,定制 commit 信息,可自定义提交模式 全局安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i cz-customizable -g</span></span></code></pre></div><p>项目引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install cz-customizable --save-dev</span></span></code></pre></div><p>配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>commitizen init cz-customizable --save --save-exact</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在package.json文件中增加相关配置</span></span>
<span class="line"><span>&quot;config&quot;: {</span></span>
<span class="line"><span>  &quot;commitizen&quot;: {</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;./node_modules/cz-customizable&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在项目目录下，新建配置文件 .cz-config.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  types: [</span></span>
<span class="line"><span>    {value: &#39;feat&#39;,     name: &#39;feat:     新功能&#39;},</span></span>
<span class="line"><span>    {value: &#39;fix&#39;,      name: &#39;fix:      修复&#39;},</span></span>
<span class="line"><span>    {value: &#39;docs&#39;,     name: &#39;docs:     文档变更&#39;},</span></span>
<span class="line"><span>    {value: &#39;style&#39;,    name: &#39;style:    代码格式(不影响代码运行的变动)&#39;},</span></span>
<span class="line"><span>    {value: &#39;refactor&#39;, name: &#39;refactor: 重构(既不是增加feature，也不是修复bug)&#39;},</span></span>
<span class="line"><span>    {value: &#39;perf&#39;,     name: &#39;perf:     性能优化&#39;},</span></span>
<span class="line"><span>    {value: &#39;test&#39;,     name: &#39;test:     增加测试&#39;},</span></span>
<span class="line"><span>    {value: &#39;chore&#39;,    name: &#39;chore:    构建过程或辅助工具的变动&#39;},</span></span>
<span class="line"><span>    {value: &#39;revert&#39;,   name: &#39;revert:   回退&#39;},</span></span>
<span class="line"><span>    {value: &#39;build&#39;,    name: &#39;build:    打包&#39;}</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // override the messages, defaults are as follows</span></span>
<span class="line"><span>  messages: {</span></span>
<span class="line"><span>    type: &#39;请选择提交类型:&#39;,</span></span>
<span class="line"><span>    // scope: &#39;请输入文件修改范围(可选):&#39;,</span></span>
<span class="line"><span>    // used if allowCustomScopes is true</span></span>
<span class="line"><span>    customScope: &#39;请输入修改范围(可选):&#39;,</span></span>
<span class="line"><span>    subject: &#39;请简要描述提交(必填):&#39;,</span></span>
<span class="line"><span>    body: &#39;请输入详细描述(可选，待优化去除，跳过即可):&#39;,</span></span>
<span class="line"><span>    // breaking: &#39;List any BREAKING CHANGES (optional):\\n&#39;,</span></span>
<span class="line"><span>    footer: &#39;请输入要关闭的issue(待优化去除，跳过即可):&#39;,</span></span>
<span class="line"><span>    confirmCommit: &#39;确认使用以上信息提交？(y/n/e/h)&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  allowCustomScopes: true,</span></span>
<span class="line"><span>  // allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span>  skipQuestions: [&#39;body&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span>  // limit subject length, commitlint默认是72</span></span>
<span class="line"><span>  subjectLimit: 72</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="change-log" tabindex="-1">Change Log <a class="header-anchor" href="#change-log" aria-label="Permalink to &quot;Change Log&quot;">​</a></h2><p>Change Log 是发布新版本时，用来说明与上一个版本差异的文档。</p><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%23conventional-changelog" title="https://github.com/conventional-changelog/conventional-changelog#conventional-changelog" target="_blank" rel="noreferrer">Conventional Changelog</a> 自动生成 Change Log 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i conventional-changelog-cli --save-dev</span></span></code></pre></div><p>在 scripts 添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: { &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot; }</span></span></code></pre></div><p>引入后可使使用<code>npm run changelog</code>自动生成 CHANGELOG.md 文件</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="ttps://juejin.cn/post/6844903793033756680" target="_blank" rel="noreferrer">超详细的 Git 提交规范引入指南</a><br><a href="https://ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noreferrer">阮一峰 - Commit message 和 Change log 编写指南</a></p>`,39),i=[p];function l(o,c,r,u,h,m){return s(),n("div",null,i)}const b=a(t,[["render",l]]);export{d as __pageData,b as default};
