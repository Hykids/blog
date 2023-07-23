import{_ as s,o as n,c as a,U as p}from"./chunks/framework.9adb0f96.js";const y=JSON.parse('{"title":"记录微信小程序打开多个文档问题的解决","description":"","frontmatter":{"layout":"blog","title":"记录微信小程序打开多个文档问题的解决","date":"2022-08-09T02:37:26.309Z"},"headers":[],"relativePath":"mini-apps/记录微信小程序打开多个文档问题的解决.md","filePath":"mini-apps/记录微信小程序打开多个文档问题的解决.md"}'),l={name:"mini-apps/记录微信小程序打开多个文档问题的解决.md"},e=p(`<p>小程序无法打开文件夹，可是有时候需要预览多个pdf文件。</p><p>一开始，我的思路是在for循环中使用openDocument Api打开多个文档。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (let index in that.data.files) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.openDocument({</span></span>
<span class="line"><span style="color:#A6ACCD;">       filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${that.data.files[index]}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    showMenu: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    success: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(&#39;打开文档成功&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    fail: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;预览失败&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>在PC端测试的时候，的确同时打开了多个文档。</p><p>可是切换到真机测试的时候，发现还是只能打开第一个文件。</p><p>在网上查询过原因后，发现手机系统层面限制只能同时打开一个。因为他们调用的是同一个第三方应用（一般是QQ浏览器）打开文档的，这个限制同时只能运行一个实例。</p><p>于是另寻出路。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">openDocument(n, fileList) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (n &gt;= fileList.length) { return }</span></span>
<span class="line"><span style="color:#A6ACCD;">        wx.openDocument({</span></span>
<span class="line"><span style="color:#A6ACCD;">            filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${fileList[n]}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">            showMenu: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            success: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                that.openDocument(n + 1, fileList)</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&#39;打开文档成功&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            fail: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                that.openDocument(n + 1, fileList)</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&quot;预览失败&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span></code></pre></div><p>改为递归调用。返回后打开下一个pdf，可以实现循环预览了。</p>`,9),o=[e];function t(c,i,A,r,C,_){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{y as __pageData,u as default};
