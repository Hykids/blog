import{jsx as e,jsxs as i,Fragment as c}from"react/jsx-runtime";const s={layout:"blog",title:"\u8BB0\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6253\u5F00\u591A\u4E2A\u6587\u6863\u95EE\u9898\u7684\u89E3\u51B3",date:"2022-08-09T02:37:26.309Z"},r=[];function o(t){const n=Object.assign({p:"p",pre:"pre",code:"code"},t.components);return i(c,{children:[e(n.p,{children:"\u5C0F\u7A0B\u5E8F\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\u5939\uFF0C\u53EF\u662F\u6709\u65F6\u5019\u9700\u8981\u9884\u89C8\u591A\u4E2Apdf\u6587\u4EF6\u3002"}),`
`,e(n.p,{children:"\u4E00\u5F00\u59CB\uFF0C\u6211\u7684\u601D\u8DEF\u662F\u5728for\u5FAA\u73AF\u4E2D\u4F7F\u7528openDocument Api\u6253\u5F00\u591A\u4E2A\u6587\u6863\u3002"}),`
`,e(n.pre,{children:e(n.code,{children:`for (let index in that.data.files) {
    wx.openDocument({
       filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${that.data.files[index]}\`,
    showMenu: true,
    success: function (res) {
     console.log('\u6253\u5F00\u6587\u6863\u6210\u529F')
    },
    fail: function (res) {
      console.log("\u9884\u89C8\u5931\u8D25")
    }
  })
}

`})}),`
`,e(n.p,{children:"\u5728PC\u7AEF\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u7684\u786E\u540C\u65F6\u6253\u5F00\u4E86\u591A\u4E2A\u6587\u6863\u3002"}),`
`,e(n.p,{children:"\u53EF\u662F\u5207\u6362\u5230\u771F\u673A\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u8FD8\u662F\u53EA\u80FD\u6253\u5F00\u7B2C\u4E00\u4E2A\u6587\u4EF6\u3002"}),`
`,e(n.p,{children:"\u5728\u7F51\u4E0A\u67E5\u8BE2\u8FC7\u539F\u56E0\u540E\uFF0C\u53D1\u73B0\u624B\u673A\u7CFB\u7EDF\u5C42\u9762\u9650\u5236\u53EA\u80FD\u540C\u65F6\u6253\u5F00\u4E00\u4E2A\u3002\u56E0\u4E3A\u4ED6\u4EEC\u8C03\u7528\u7684\u662F\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u5E94\u7528\uFF08\u4E00\u822C\u662FQQ\u6D4F\u89C8\u5668\uFF09\u6253\u5F00\u6587\u6863\u7684\uFF0C\u8FD9\u4E2A\u9650\u5236\u540C\u65F6\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u5B9E\u4F8B\u3002"}),`
`,e(n.p,{children:"\u4E8E\u662F\u53E6\u5BFB\u51FA\u8DEF\u3002"}),`
`,e(n.pre,{children:e(n.code,{children:`openDocument(n, fileList) {
        var that = this;
        if (n >= fileList.length) { return }
        wx.openDocument({
            filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${fileList[n]}\`,
            showMenu: true,
            success: function (res) {
                that.openDocument(n + 1, fileList)
                console.log('\u6253\u5F00\u6587\u6863\u6210\u529F')
            },
            fail: function (res) {
                that.openDocument(n + 1, fileList)
                console.log("\u9884\u89C8\u5931\u8D25")
            }
        })
    },
`})}),`
`,e(n.p,{children:"\u6539\u4E3A\u9012\u5F52\u8C03\u7528\u3002\u8FD4\u56DE\u540E\u6253\u5F00\u4E0B\u4E00\u4E2Apdf\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5FAA\u73AF\u9884\u89C8\u4E86\u3002"})]})}function f(t={}){const{wrapper:n}=t.components||{};return n?e(n,Object.assign({},t,{children:e(o,t)})):o(t)}const a="2023/2/16 15:25:47",u=`---
layout: blog
title: \u8BB0\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6253\u5F00\u591A\u4E2A\u6587\u6863\u95EE\u9898\u7684\u89E3\u51B3
date: 2022-08-09T02:37:26.309Z
---
\u5C0F\u7A0B\u5E8F\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\u5939\uFF0C\u53EF\u662F\u6709\u65F6\u5019\u9700\u8981\u9884\u89C8\u591A\u4E2Apdf\u6587\u4EF6\u3002

\u4E00\u5F00\u59CB\uFF0C\u6211\u7684\u601D\u8DEF\u662F\u5728for\u5FAA\u73AF\u4E2D\u4F7F\u7528openDocument Api\u6253\u5F00\u591A\u4E2A\u6587\u6863\u3002
\`\`\`
for (let index in that.data.files) {
    wx.openDocument({
       filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${that.data.files[index]}\`,
    showMenu: true,
    success: function (res) {
     console.log('\u6253\u5F00\u6587\u6863\u6210\u529F')
    },
    fail: function (res) {
      console.log("\u9884\u89C8\u5931\u8D25")
    }
  })
}

\`\`\`
\u5728PC\u7AEF\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u7684\u786E\u540C\u65F6\u6253\u5F00\u4E86\u591A\u4E2A\u6587\u6863\u3002

\u53EF\u662F\u5207\u6362\u5230\u771F\u673A\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u8FD8\u662F\u53EA\u80FD\u6253\u5F00\u7B2C\u4E00\u4E2A\u6587\u4EF6\u3002

\u5728\u7F51\u4E0A\u67E5\u8BE2\u8FC7\u539F\u56E0\u540E\uFF0C\u53D1\u73B0\u624B\u673A\u7CFB\u7EDF\u5C42\u9762\u9650\u5236\u53EA\u80FD\u540C\u65F6\u6253\u5F00\u4E00\u4E2A\u3002\u56E0\u4E3A\u4ED6\u4EEC\u8C03\u7528\u7684\u662F\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u5E94\u7528\uFF08\u4E00\u822C\u662FQQ\u6D4F\u89C8\u5668\uFF09\u6253\u5F00\u6587\u6863\u7684\uFF0C\u8FD9\u4E2A\u9650\u5236\u540C\u65F6\u53EA\u80FD\u8FD0\u884C\u4E00\u4E2A\u5B9E\u4F8B\u3002

\u4E8E\u662F\u53E6\u5BFB\u51FA\u8DEF\u3002
\`\`\`
openDocument(n, fileList) {
        var that = this;
        if (n >= fileList.length) { return }
        wx.openDocument({
            filePath: \`\${wx.env.USER_DATA_PATH}/mypp/\${fileList[n]}\`,
            showMenu: true,
            success: function (res) {
                that.openDocument(n + 1, fileList)
                console.log('\u6253\u5F00\u6587\u6863\u6210\u529F')
            },
            fail: function (res) {
                that.openDocument(n + 1, fileList)
                console.log("\u9884\u89C8\u5931\u8D25")
            }
        })
    },
\`\`\`
\u6539\u4E3A\u9012\u5F52\u8C03\u7528\u3002\u8FD4\u56DE\u540E\u6253\u5F00\u4E0B\u4E00\u4E2Apdf\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5FAA\u73AF\u9884\u89C8\u4E86\u3002`;export{u as content,f as default,s as frontmatter,a as lastUpdatedTime,r as toc};
