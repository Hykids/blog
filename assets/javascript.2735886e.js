import{jsx as n,jsxs as r,Fragment as l}from"react/jsx-runtime";const t={layout:"blog",title:"JavaScript\u6587\u4EF6\u6D41",date:"2022-08-04T06:54:23.816Z"},c=[{id:"\u6982\u8FF0",text:"\u6982\u8FF0",depth:2},{id:"blob",text:"Blob",depth:2},{id:"\u529F\u80FD",text:"\u529F\u80FD",depth:3},{id:"\u6587\u4EF6\u6D41\u4E0B\u8F7D",text:"\u6587\u4EF6\u6D41\u4E0B\u8F7D",depth:3},{id:"arraybuffer",text:"ArrayBuffer",depth:2},{id:"arraybuffer\u4E0E\u666E\u901A\u6570\u7EC4",text:"arrayBuffer\u4E0E\u666E\u901A\u6570\u7EC4",depth:3},{id:"\u89C6\u56FE",text:"\u89C6\u56FE",depth:3}];function d(a){const e=Object.assign({p:"p",hr:"hr",h2:"h2",a:"a",ul:"ul",li:"li",code:"code",strong:"strong",h3:"h3",img:"img",pre:"pre"},a.components);return r(l,{children:[n(e.p,{children:"\u524D\u7AEF\u5BF9\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u5904\u7406"}),`
`,n(e.hr,{}),`
`,r(e.h2,{id:"\u6982\u8FF0",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6982\u8FF0",children:"#"}),"\u6982\u8FF0"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Blob: \u524D\u7AEF\u7684\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u7684\u4E8C\u8FDB\u5236\u5BF9\u8C61"}),`
`,n(e.li,{children:"ArrayBuffer\uFF1A\u524D\u7AEF\u7684\u4E00\u4E2A\u901A\u7528\u7684\u4E8C\u8FDB\u5236\u7F13\u51B2\u533A\uFF0C\u7C7B\u4F3C\u6570\u7EC4\uFF0C\u4F46\u5728API\u548C\u7279\u6027\u4E0A\u5374\u6709\u8BF8\u591A\u4E0D\u540C"}),`
`,n(e.li,{children:"Buffer\uFF1ANode.js\u63D0\u4F9B\u7684\u4E00\u4E2A\u4E8C\u8FDB\u5236\u7F13\u51B2\u533A\uFF0C\u5E38\u7528\u6765\u5904\u7406I/O\u64CD\u4F5C"}),`
`]}),`
`,r(e.h2,{id:"blob",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#blob",children:"#"}),"Blob"]}),`
`,r(e.p,{children:[n(e.code,{children:"Blob"})," \u5168\u79F0\uFF1A",n(e.code,{children:"Binary Large Object"})]}),`
`,r(e.p,{children:["Blob\u7528\u6765\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u3002",n(e.code,{children:"Blob"})," \u5BF9\u8C61\u8868\u793A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u901A\u5E38\u7528\u6765",n(e.strong,{children:"\u8BFB\u5199\u6587\u4EF6"}),`\u3002
\u6784\u9020\u51FD\u6570File\u7EE7\u627F\u4E86blob\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u79CD\u7279\u6B8A\u7684Blob\u5BF9\u8C61\u3002`]}),`
`,r(e.h3,{id:"\u529F\u80FD",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u529F\u80FD",children:"#"}),"\u529F\u80FD"]}),`
`,r(e.p,{children:[n(e.img,{src:"https://img2018.cnblogs.com/blog/1060770/201912/1060770-20191217112525289-384672077.png",alt:""}),`
\u901A\u8FC7window.URL.createObjectURL\u65B9\u6CD5\u53EF\u4EE5\u628A\u4E00\u4E2Ablob\u8F6C\u5316\u4E3A\u4E00\u4E2ABlob URL\uFF0C\u5E76\u4E14\u7528\u505A\u6587\u4EF6\u4E0B\u8F7D\u6216\u8005\u56FE\u7247\u663E\u793A\u7684\u94FE\u63A5\u3002`]}),`
`,n(e.pre,{children:n(e.code,{children:`  var blob = new Blob(["Hello World"]);//\u6784\u9020\u4E00\u4E2Ablob\u5BF9\u8C61
  var url = window.URL.createObjectURL(blob);//\u8F6C\u5316\u4E3Ablob url
  var a = document.getElementById("h");//\u83B7\u53D6dom\u8282\u70B9
  a.download = "helloworld.txt";//\u8D4B\u7ED9 a.download\u5C5E\u6027
  a.href = url;//\u70B9\u51FB\u94FE\u63A5\u4E0B\u8F7D
`})}),`
`,r(e.h3,{id:"\u6587\u4EF6\u6D41\u4E0B\u8F7D",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6587\u4EF6\u6D41\u4E0B\u8F7D",children:"#"}),"\u6587\u4EF6\u6D41\u4E0B\u8F7D"]}),`
`,n(e.p,{children:"\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u662F\u6587\u4EF6\u6D41\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5728axios\u8BF7\u6C42\u6307\u5B9AresponseType\uFF1A"}),`
`,n(e.pre,{children:n(e.code,{children:`responseType: 'blob',  // \u9700\u8981\u6307\u5B9A
`})}),`
`,n(e.p,{children:"\u521B\u5EFAblob\u5BF9\u8C61\uFF0C\u521B\u5EFAreader\uFF0C\u76D1\u542C\u52A0\u8F7D\u65F6\u95F4\uFF0C\u521B\u5EFAa\u6807\u7B7E\uFF0C\u6A21\u62DF\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u79FB\u9664a\u6807\u7B7E\u3002\u8FD9\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6\u6D41\u4E0B\u8F7D\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A"}),`
`,n(e.pre,{children:n(e.code,{children:`const blob = new Blob([res.data]);
const reader = new FileReader();//fileReader\u5BF9\u8C61\u5141\u8BB8 Web \u5E94\u7528\u7A0B\u5E8F\u5F02\u6B65\u8BFB\u53D6\u5B58\u50A8\u5728\u7528\u6237\u8BA1\u7B97\u673A\u4E0A\u7684\u6587\u4EF6\uFF08\u6216\u539F\u59CB\u6570\u636E\u7F13\u51B2\u533A\uFF09\u7684\u5185\u5BB9
reader.readAsDataURL(blob);
reader.onload = (e) => {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = e.target.result;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
`})}),`
`,r(e.h2,{id:"arraybuffer",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#arraybuffer",children:"#"}),"ArrayBuffer"]}),`
`,r(e.p,{children:["\u662Fjavascript\u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u4E2A\u63A5\u53E3\u3002",n(e.code,{children:"ArrayBuffer"})," \u5BF9\u8C61\u4EE3\u8868\u50A8\u5B58\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u6BB5\u5185\u5B58\uFF0C\u5B83\u4E0D\u80FD\u76F4\u63A5\u8BFB\u5199\uFF0C\u53EA\u80FD\u901A\u8FC7\u89C6\u56FE\uFF08",n(e.code,{children:"TypedArray"}),"\u89C6\u56FE\u548C",n(e.code,{children:"DataView"}),`\u89C6\u56FE\uFF09\u6765\u8BFB\u5199\uFF0C\u89C6\u56FE\u7684\u4F5C\u7528\u662F\u4EE5\u6307\u5B9A\u683C\u5F0F\u89E3\u8BFB\u4E8C\u8FDB\u5236\u6570\u636E\u3002
`,n(e.a,{href:"https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE0a025e2378877fdd139b5b83df3e2309/40846",target:"_blank",rel:"nofollow"})]}),`
`,n(e.p,{children:"ArrayBuffer\u4E5F\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u5206\u914D\u4E00\u6BB5\u53EF\u4EE5\u5B58\u653E\u6570\u636E\u7684\u8FDE\u7EED\u5185\u5B58\u533A\u57DF\u3002"}),`
`,r(e.h3,{id:"arraybuffer\u4E0E\u666E\u901A\u6570\u7EC4",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#arraybuffer\u4E0E\u666E\u901A\u6570\u7EC4",children:"#"}),"arrayBuffer\u4E0E\u666E\u901A\u6570\u7EC4"]}),`
`,n(e.p,{children:n(e.a,{href:"https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE16c7d6a4cc7763e55d9edbbf558f5cc3/40914",target:"_blank",rel:"nofollow"})}),`
`,r(e.h3,{id:"\u89C6\u56FE",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u89C6\u56FE",children:"#"}),"\u89C6\u56FE"]}),`
`,r(e.p,{children:[`\u64CD\u4F5Carraybuffer\u5BF9\u8C61\uFF0C\u5FC5\u987B\u4F7F\u7528\u89C6\u56FE
`,n(e.a,{href:"https://zh.javascript.info/arraybuffer-binary-arrays",target:"_blank",rel:"nofollow",children:"\u89C6\u56FE\u5BF9\u8C61\u672C\u8EAB\u5E76\u4E0D\u5B58\u50A8\u4EFB\u4F55\u4E1C\u897F\u3002\u5B83\u662F\u4E00\u526F\u201C\u773C\u955C\u201D\uFF0C\u900F\u8FC7\u5B83\u6765\u89E3\u91CA\u5B58\u50A8\u5728 ArrayBuffer \u4E2D\u7684\u5B57\u8282\u3002"}),`
\u4F8B\u5982\uFF1A`]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:n(e.code,{children:"Uint8Array"})})," \u2014\u2014 \u5C06 ",n(e.code,{children:"ArrayBuffer"})," \u4E2D\u7684\u6BCF\u4E2A\u5B57\u8282\u89C6\u4E3A 0 \u5230 255 \u4E4B\u95F4\u7684\u5355\u4E2A\u6570\u5B57\uFF08\u6BCF\u4E2A\u5B57\u8282\u662F 8 \u4F4D\uFF0C\u56E0\u6B64\u53EA\u80FD\u5BB9\u7EB3\u90A3\u4E48\u591A\uFF09\u3002\u8FD9\u79F0\u4E3A \u201C8 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:n(e.code,{children:"Uint16Array"})})," \u2014\u2014 \u5C06\u6BCF 2 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A 0 \u5230 65535 \u4E4B\u95F4\u7684\u6574\u6570\u3002\u8FD9\u79F0\u4E3A \u201C16 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:n(e.code,{children:"Uint32Array"})})," \u2014\u2014 \u5C06\u6BCF 4 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A 0 \u5230 4294967295 \u4E4B\u95F4\u7684\u6574\u6570\u3002\u8FD9\u79F0\u4E3A \u201C32 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002"]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[n(e.strong,{children:n(e.code,{children:"Float64Array"})})," \u2014\u2014 \u5C06\u6BCF 8 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A ",n(e.code,{children:"5.0x10<sup>-324</sup>"})," \u5230 ",n(e.code,{children:"1.8x10<sup>308</sup>"})," \u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\u3002"]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`let view = new Uint32Array(buffer); // \u5C06 buffer \u89C6\u4E3A\u4E00\u4E2A 32 \u4F4D\u6574\u6570\u7684\u5E8F\u5217

alert(Uint32Array.BYTES_PER_ELEMENT); // \u6BCF\u4E2A\u6574\u6570 4 \u4E2A\u5B57\u8282

alert(view.length); // 4\uFF0C\u5B83\u5B58\u50A8\u4E86 4 \u4E2A\u6574\u6570
alert(view.byteLength); // 16\uFF0C\u5B57\u8282\u4E2D\u7684\u5927\u5C0F
`})})]})}function i(a={}){const{wrapper:e}=a.components||{};return e?n(e,Object.assign({},a,{children:n(d,a)})):d(a)}const h="2023/2/16 15:25:47",b=`---
layout: blog
title: JavaScript\u6587\u4EF6\u6D41
date: 2022-08-04T06:54:23.816Z
---
\u524D\u7AEF\u5BF9\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u5904\u7406

---

## \u6982\u8FF0

* Blob: \u524D\u7AEF\u7684\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u7684\u4E8C\u8FDB\u5236\u5BF9\u8C61
* ArrayBuffer\uFF1A\u524D\u7AEF\u7684\u4E00\u4E2A\u901A\u7528\u7684\u4E8C\u8FDB\u5236\u7F13\u51B2\u533A\uFF0C\u7C7B\u4F3C\u6570\u7EC4\uFF0C\u4F46\u5728API\u548C\u7279\u6027\u4E0A\u5374\u6709\u8BF8\u591A\u4E0D\u540C
* Buffer\uFF1ANode.js\u63D0\u4F9B\u7684\u4E00\u4E2A\u4E8C\u8FDB\u5236\u7F13\u51B2\u533A\uFF0C\u5E38\u7528\u6765\u5904\u7406I/O\u64CD\u4F5C

## Blob

\`Blob\` \u5168\u79F0\uFF1A\`Binary Large Object\`

Blob\u7528\u6765\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u3002\`Blob\` \u5BF9\u8C61\u8868\u793A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u901A\u5E38\u7528\u6765**\u8BFB\u5199\u6587\u4EF6**\u3002
\u6784\u9020\u51FD\u6570File\u7EE7\u627F\u4E86blob\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u79CD\u7279\u6B8A\u7684Blob\u5BF9\u8C61\u3002

### \u529F\u80FD

![](https://img2018.cnblogs.com/blog/1060770/201912/1060770-20191217112525289-384672077.png)
\u901A\u8FC7window.URL.createObjectURL\u65B9\u6CD5\u53EF\u4EE5\u628A\u4E00\u4E2Ablob\u8F6C\u5316\u4E3A\u4E00\u4E2ABlob URL\uFF0C\u5E76\u4E14\u7528\u505A\u6587\u4EF6\u4E0B\u8F7D\u6216\u8005\u56FE\u7247\u663E\u793A\u7684\u94FE\u63A5\u3002
\`\`\`
  var blob = new Blob(["Hello World"]);//\u6784\u9020\u4E00\u4E2Ablob\u5BF9\u8C61
  var url = window.URL.createObjectURL(blob);//\u8F6C\u5316\u4E3Ablob url
  var a = document.getElementById("h");//\u83B7\u53D6dom\u8282\u70B9
  a.download = "helloworld.txt";//\u8D4B\u7ED9 a.download\u5C5E\u6027
  a.href = url;//\u70B9\u51FB\u94FE\u63A5\u4E0B\u8F7D
\`\`\`

### \u6587\u4EF6\u6D41\u4E0B\u8F7D
\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u662F\u6587\u4EF6\u6D41\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5728axios\u8BF7\u6C42\u6307\u5B9AresponseType\uFF1A
\`\`\`
responseType: 'blob',  // \u9700\u8981\u6307\u5B9A
\`\`\`
\u521B\u5EFAblob\u5BF9\u8C61\uFF0C\u521B\u5EFAreader\uFF0C\u76D1\u542C\u52A0\u8F7D\u65F6\u95F4\uFF0C\u521B\u5EFAa\u6807\u7B7E\uFF0C\u6A21\u62DF\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u79FB\u9664a\u6807\u7B7E\u3002\u8FD9\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6\u6D41\u4E0B\u8F7D\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A

\`\`\`
const blob = new Blob([res.data]);
const reader = new FileReader();//fileReader\u5BF9\u8C61\u5141\u8BB8 Web \u5E94\u7528\u7A0B\u5E8F\u5F02\u6B65\u8BFB\u53D6\u5B58\u50A8\u5728\u7528\u6237\u8BA1\u7B97\u673A\u4E0A\u7684\u6587\u4EF6\uFF08\u6216\u539F\u59CB\u6570\u636E\u7F13\u51B2\u533A\uFF09\u7684\u5185\u5BB9
reader.readAsDataURL(blob);
reader.onload = (e) => {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = e.target.result;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
\`\`\`


## ArrayBuffer

\u662Fjavascript\u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u4E2A\u63A5\u53E3\u3002\`ArrayBuffer\` \u5BF9\u8C61\u4EE3\u8868\u50A8\u5B58\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u6BB5\u5185\u5B58\uFF0C\u5B83\u4E0D\u80FD\u76F4\u63A5\u8BFB\u5199\uFF0C\u53EA\u80FD\u901A\u8FC7\u89C6\u56FE\uFF08\`TypedArray\`\u89C6\u56FE\u548C\`DataView\`\u89C6\u56FE\uFF09\u6765\u8BFB\u5199\uFF0C\u89C6\u56FE\u7684\u4F5C\u7528\u662F\u4EE5\u6307\u5B9A\u683C\u5F0F\u89E3\u8BFB\u4E8C\u8FDB\u5236\u6570\u636E\u3002
[](https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE0a025e2378877fdd139b5b83df3e2309/40846)

ArrayBuffer\u4E5F\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u5206\u914D\u4E00\u6BB5\u53EF\u4EE5\u5B58\u653E\u6570\u636E\u7684\u8FDE\u7EED\u5185\u5B58\u533A\u57DF\u3002
### arrayBuffer\u4E0E\u666E\u901A\u6570\u7EC4
[](https://note.youdao.com/yws/public/resource/e9cb4307115bb0ffbd0d639ad3e45234/xmlnote/WEBRESOURCE16c7d6a4cc7763e55d9edbbf558f5cc3/40914)

### \u89C6\u56FE
\u64CD\u4F5Carraybuffer\u5BF9\u8C61\uFF0C\u5FC5\u987B\u4F7F\u7528\u89C6\u56FE
[\u89C6\u56FE\u5BF9\u8C61\u672C\u8EAB\u5E76\u4E0D\u5B58\u50A8\u4EFB\u4F55\u4E1C\u897F\u3002\u5B83\u662F\u4E00\u526F\u201C\u773C\u955C\u201D\uFF0C\u900F\u8FC7\u5B83\u6765\u89E3\u91CA\u5B58\u50A8\u5728 ArrayBuffer \u4E2D\u7684\u5B57\u8282\u3002](https://zh.javascript.info/arraybuffer-binary-arrays)
\u4F8B\u5982\uFF1A
* **\`Uint8Array\`** \u2014\u2014 \u5C06 \`ArrayBuffer\` \u4E2D\u7684\u6BCF\u4E2A\u5B57\u8282\u89C6\u4E3A 0 \u5230 255 \u4E4B\u95F4\u7684\u5355\u4E2A\u6570\u5B57\uFF08\u6BCF\u4E2A\u5B57\u8282\u662F 8 \u4F4D\uFF0C\u56E0\u6B64\u53EA\u80FD\u5BB9\u7EB3\u90A3\u4E48\u591A\uFF09\u3002\u8FD9\u79F0\u4E3A \u201C8 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002

* **\`Uint16Array\`** \u2014\u2014 \u5C06\u6BCF 2 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A 0 \u5230 65535 \u4E4B\u95F4\u7684\u6574\u6570\u3002\u8FD9\u79F0\u4E3A \u201C16 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002
* **\`Uint32Array\`** \u2014\u2014 \u5C06\u6BCF 4 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A 0 \u5230 4294967295 \u4E4B\u95F4\u7684\u6574\u6570\u3002\u8FD9\u79F0\u4E3A \u201C32 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u201D\u3002
* **\`Float64Array\`** \u2014\u2014 \u5C06\u6BCF 8 \u4E2A\u5B57\u8282\u89C6\u4E3A\u4E00\u4E2A \`5.0x10<sup>-324</sup>\` \u5230 \`1.8x10<sup>308</sup>\` \u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\u3002

\`\`\`
let view = new Uint32Array(buffer); // \u5C06 buffer \u89C6\u4E3A\u4E00\u4E2A 32 \u4F4D\u6574\u6570\u7684\u5E8F\u5217

alert(Uint32Array.BYTES_PER_ELEMENT); // \u6BCF\u4E2A\u6574\u6570 4 \u4E2A\u5B57\u8282

alert(view.length); // 4\uFF0C\u5B83\u5B58\u50A8\u4E86 4 \u4E2A\u6574\u6570
alert(view.byteLength); // 16\uFF0C\u5B57\u8282\u4E2D\u7684\u5927\u5C0F
\`\`\`


`;export{b as content,i as default,t as frontmatter,h as lastUpdatedTime,c as toc};
