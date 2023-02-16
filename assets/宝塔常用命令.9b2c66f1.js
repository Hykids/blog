import{jsx as t,jsxs as r,Fragment as o}from"react/jsx-runtime";const i=void 0,l=[],a="\u5B9D\u5854\u5E38\u7528\u547D\u4EE4";function c(e){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code"},e.components);return r(o,{children:[r(n.h1,{id:"\u5B9D\u5854\u5E38\u7528\u547D\u4EE4",children:[t(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9D\u5854\u5E38\u7528\u547D\u4EE4",children:"#"}),"\u5B9D\u5854\u5E38\u7528\u547D\u4EE4"]}),`
`,t(n.p,{children:"netstat -tln | grep 8900"}),`
`,r(n.p,{children:[t(n.code,{children:"netstat -tln | grep 8900"}),"\u67E5\u770B8080\u7AEF\u53E3\u662F\u5426\u6B63\u5728\u88AB\u5360\u7528"]}),`
`,r(n.p,{children:[t(n.code,{children:"lsof -i:8900"}),"\u67E5\u770B8080\u7AEF\u53E3\u5230\u5E95\u662F\u54EA\u4E2A\u8FDB\u7A0B\u5728\u5360\u7528"]}),`
`,r(n.p,{children:[t(n.code,{children:"kill pid"}),"\u6740\u6B7B\u8FDB\u7A0B"]})]})}function s(e={}){const{wrapper:n}=e.components||{};return n?t(n,Object.assign({},e,{children:t(c,e)})):c(e)}const h="2022/8/14 18:30:55",p=`# \u5B9D\u5854\u5E38\u7528\u547D\u4EE4\r
\r
netstat -tln | grep 8900\r
\r
\`netstat -tln | grep 8900\`\u67E5\u770B8080\u7AEF\u53E3\u662F\u5426\u6B63\u5728\u88AB\u5360\u7528\r
\r
\`lsof -i:8900\`\u67E5\u770B8080\u7AEF\u53E3\u5230\u5E95\u662F\u54EA\u4E2A\u8FDB\u7A0B\u5728\u5360\u7528\r
\r
\`kill pid\`\u6740\u6B7B\u8FDB\u7A0B`;export{p as content,s as default,i as frontmatter,h as lastUpdatedTime,a as title,l as toc};
