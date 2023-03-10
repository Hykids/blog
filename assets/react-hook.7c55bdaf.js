import{jsx as e,jsxs as t,Fragment as s}from"react/jsx-runtime";const c={layout:"blog",title:"React Hook\u5E95\u5C42\u539F\u7406",date:"2022-08-01T02:20:08.748Z"},i=[{id:"\u6E38\u6807\u6570\u7EC4",text:"\u6E38\u6807\u6570\u7EC4",depth:2},{id:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u5224\u65AD\u4E2D\u4F7F\u7528-",text:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u3001\u5224\u65AD\u4E2D\u4F7F\u7528 .",depth:3},{id:"useeffect",text:"useEffect",depth:2}];function o(r){const n=Object.assign({p:"p",strong:"strong",br:"br",img:"img",h2:"h2",a:"a",h3:"h3"},r.components);return t(s,{children:[t(n.p,{children:[e(n.strong,{children:"\u597D\u5904:"})," .",e(n.br,{}),`
`,"1\u3001\u8DE8\u7EC4\u4EF6\u590D\u7528: \u5176\u5B9E render props / HOC \u4E5F\u662F\u4E3A\u4E86\u590D\u7528\uFF0C\u76F8\u6BD4\u4E8E\u5B83\u4EEC\uFF0CHooks \u4F5C\u4E3A\u5B98\u65B9\u7684\u5E95\u5C42 API\uFF0C\u6700\u4E3A\u8F7B\u91CF\uFF0C\u800C\u4E14\u6539\u9020\u6210\u672C\u5C0F\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u539F\u6765\u7684\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u548C\u4F20\u8BF4\u4E2D\u7684\u5D4C\u5957\u5730\u72F1\uFF1B",e(n.br,{}),`
`,"2\u3001\u7C7B\u5B9A\u4E49\u66F4\u4E3A\u590D\u6742:",e(n.br,{}),`
`,"\u4E0D\u540C\u7684\u751F\u547D\u5468\u671F\u4F1A\u4F7F\u903B\u8F91\u53D8\u5F97\u5206\u6563\u4E14\u6DF7\u4E71\uFF0C\u4E0D\u6613\u7EF4\u62A4\u548C\u7BA1\u7406\uFF1B",e(n.br,{}),`
`,"\u65F6\u523B\u9700\u8981\u5173\u6CE8this\u7684\u6307\u5411\u95EE\u9898\uFF1B",e(n.br,{}),`
`,"\u4EE3\u7801\u590D\u7528\u4EE3\u4EF7\u9AD8\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u7684\u4F7F\u7528\u7ECF\u5E38\u4F1A\u4F7F\u6574\u4E2A\u7EC4\u4EF6\u6811\u53D8\u5F97\u81C3\u80BF\uFF1B",e(n.br,{}),`
`,"3\u3001\u72B6\u6001\u4E0EUI\u9694\u79BB: \u6B63\u662F\u7531\u4E8E Hooks \u7684\u7279\u6027\uFF0C\u72B6\u6001\u903B\u8F91\u4F1A\u53D8\u6210\u66F4\u5C0F\u7684\u7C92\u5EA6\uFF0C\u5E76\u4E14\u6781\u5BB9\u6613\u88AB\u62BD\u8C61\u6210\u4E00\u4E2A\u81EA\u5B9A\u4E49 Hooks\uFF0C\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\u548C UI \u53D8\u5F97\u66F4\u4E3A\u6E05\u6670\u548C\u9694\u79BB\u3002"]}),`
`,t(n.p,{children:[e(n.strong,{children:"\u6CE8\u610F:"}),` .
1.\u907F\u514D\u5728 \u5FAA\u73AF/\u6761\u4EF6\u5224\u65AD/\u5D4C\u5957\u51FD\u6570 \u4E2D\u8C03\u7528 hooks\uFF0C\u4FDD\u8BC1\u8C03\u7528\u987A\u5E8F\u7684\u7A33\u5B9A\uFF1B`,e(n.br,{}),`
`,"2.\u53EA\u6709 \u51FD\u6570\u5B9A\u4E49\u7EC4\u4EF6 \u548C hooks \u53EF\u4EE5\u8C03\u7528 hooks\uFF0C\u907F\u514D\u5728 \u7C7B\u7EC4\u4EF6 \u6216\u8005 \u666E\u901A\u51FD\u6570 \u4E2D\u8C03\u7528\uFF1B",e(n.br,{}),`
`,"3.\u4E0D\u80FD\u5728useEffect\u4E2D\u4F7F\u7528useState\uFF0CReact \u4F1A\u62A5\u9519\u63D0\u793A\uFF1B",e(n.br,{}),`
`,"4.\u7C7B\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u66FF\u6362\u6216\u5E9F\u5F03\uFF0C\u4E0D\u9700\u8981\u5F3A\u5236\u6539\u9020\u7C7B\u7EC4\u4EF6\uFF0C\u4E24\u79CD\u65B9\u5F0F\u80FD\u5E76\u5B58\uFF1B"]}),`
`,t(n.p,{children:[e(n.strong,{children:"\u91CD\u8981\u94A9\u5B50"}),` .
##useState .
\u5F53\u8C03\u7528 useState \u7684\u65F6\u5019\uFF0C\u4F1A\u8FD4\u56DE\u5F62\u5982 (\u53D8\u91CF, \u51FD\u6570) \u7684\u4E00\u4E2A\u5143\u7956\u3002\u5E76\u4E14 state \u7684\u521D\u59CB\u503C\u5C31\u662F\u5916\u90E8\u8C03\u7528 useState \u7684\u65F6\u5019\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u3002`]}),`
`,e(n.p,{children:"\u5DE5\u4F5C\u539F\u7406:"}),`
`,t(n.p,{children:["1.\u521D\u59CB\u5316 .",e(n.br,{}),`
`,e(n.img,{src:"https://miro.medium.com/max/1280/1*LAZDuAEm7nbcx0vWVKJJ2w.png",alt:""}),`
2.\u9996\u6B21\u6E32\u67D3`,e(n.br,{}),`
`,e(n.img,{src:"https://miro.medium.com/max/1260/1*8TpWnrL-Jqh7PymLWKXbWg.png",alt:""}),`
3.\u91CD\u6E32\u67D3
\u6BCF\u6B21\u540E\u7EED\u6E32\u67D3\uFF0C\u5149\u6807\u90FD\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u503C\u4ECE\u6570\u7EC4\u4E2D\u8BFB\u53D6\u3002
`,e(n.img,{src:"https://miro.medium.com/max/1254/1*qtwvPWj-K3PkLQ6SzE2u8w.png",alt:""}),`
4.\u4E8B\u4EF6\u5904\u7406
\u6BCF\u4E2A setter \u90FD\u6709\u4E00\u4E2A\u5BF9\u5176\u5149\u6807\u4F4D\u7F6E\u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u901A\u8FC7\u89E6\u53D1\u5BF9 any \u7684\u8C03\u7528\uFF0Csetter\u5B83\u5C06\u66F4\u6539\u72B6\u6001\u6570\u7EC4\u4E2D\u8BE5\u4F4D\u7F6E\u7684\u72B6\u6001\u503C\u3002
`,e(n.img,{src:"https://miro.medium.com/max/1260/1*3L8YJnn5eV5ev1FuN6rKSQ.png",alt:""})]}),`
`,t(n.h2,{id:"\u6E38\u6807\u6570\u7EC4",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E38\u6807\u6570\u7EC4",children:"#"}),"\u6E38\u6807\u6570\u7EC4"]}),`
`,t(n.p,{children:["\u7531\u6570\u7EC4\u6765\u5B9E\u73B0\u7684\u201C\u94FE\u8868\u201D\u2014\u2014\u6E38\u6807\u6570\u7EC4\u3002",e(n.br,{}),`
`,"\u5176\u4F18\u70B9\u662F\u53EF\u4EE5\u5FEB\u901F\u7684\u63D2\u5165\u548C\u5220\u9664\uFF08\u7531\u4E8E\u4E0D\u9700\u8981\u6307\u9488\u5F0F\u94FE\u8868\u7684malloc\u548Cfree\u7B49\u5185\u5B58\u64CD\u4F5C\uFF0C\u6240\u4EE5\u4F7F\u7528\u65F6\u6E38\u6807\u6570\u7EC4\u53EF\u80FD\u4F1A\u6BD4\u6307\u9488\u5F0F\u94FE\u8868\u8FD8\u8981\u5FEB\u4E00\u70B9\uFF09\uFF0C\u7F3A\u70B9\u5219\u662F\u7EE7\u627F\u81EA\u6570\u7EC4\u2014\u2014\u56FA\u5B9A\u5927\u5C0F\u3002"]}),`
`,t(n.h3,{id:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u5224\u65AD\u4E2D\u4F7F\u7528-",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u5224\u65AD\u4E2D\u4F7F\u7528-",children:"#"}),"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u3001\u5224\u65AD\u4E2D\u4F7F\u7528 ."]}),`
`,e(n.p,{children:"\u5982\u679C\u5728\u6761\u4EF6\u6E32\u67D3\u4E2D\u4F7F\u7528\uFF0C\u4F1A\u5BFC\u81F4\u91CD\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u5F02\u5E38\u7684\u6E38\u6807\u5BF9\u5E94\uFF0C\u5F02\u5E38\u7684\u6E38\u6807\u5BF9\u5E94\u4E5F\u4F1A\u5BFC\u81F4\u8C03\u7528\u7684setState\u65B9\u6CD5\u5931\u6548"}),`
`,t(n.h2,{id:"useeffect",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useeffect",children:"#"}),"useEffect"]}),`
`,e(n.p,{children:`\u4F5C\u7528\u662F\u526F\u4F5C\u7528\uFF0C\u8BF4\u76F4\u767D\u5C31\u662F\u67D0\u4E9Bstate\u6216\u8005props\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u9700\u8981\u76D1\u542C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C\u3002
\u5F85\u5B8C\u5584`})]})}function m(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}const h="2023/2/16 15:25:47",d=`---
layout: blog
title: React Hook\u5E95\u5C42\u539F\u7406
date: 2022-08-01T02:20:08.748Z
---
**\u597D\u5904:** .\\
1\u3001\u8DE8\u7EC4\u4EF6\u590D\u7528: \u5176\u5B9E render props / HOC \u4E5F\u662F\u4E3A\u4E86\u590D\u7528\uFF0C\u76F8\u6BD4\u4E8E\u5B83\u4EEC\uFF0CHooks \u4F5C\u4E3A\u5B98\u65B9\u7684\u5E95\u5C42 API\uFF0C\u6700\u4E3A\u8F7B\u91CF\uFF0C\u800C\u4E14\u6539\u9020\u6210\u672C\u5C0F\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u539F\u6765\u7684\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u548C\u4F20\u8BF4\u4E2D\u7684\u5D4C\u5957\u5730\u72F1\uFF1B  
2\u3001\u7C7B\u5B9A\u4E49\u66F4\u4E3A\u590D\u6742:  
\u4E0D\u540C\u7684\u751F\u547D\u5468\u671F\u4F1A\u4F7F\u903B\u8F91\u53D8\u5F97\u5206\u6563\u4E14\u6DF7\u4E71\uFF0C\u4E0D\u6613\u7EF4\u62A4\u548C\u7BA1\u7406\uFF1B  
\u65F6\u523B\u9700\u8981\u5173\u6CE8this\u7684\u6307\u5411\u95EE\u9898\uFF1B  
\u4EE3\u7801\u590D\u7528\u4EE3\u4EF7\u9AD8\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u7684\u4F7F\u7528\u7ECF\u5E38\u4F1A\u4F7F\u6574\u4E2A\u7EC4\u4EF6\u6811\u53D8\u5F97\u81C3\u80BF\uFF1B  
3\u3001\u72B6\u6001\u4E0EUI\u9694\u79BB: \u6B63\u662F\u7531\u4E8E Hooks \u7684\u7279\u6027\uFF0C\u72B6\u6001\u903B\u8F91\u4F1A\u53D8\u6210\u66F4\u5C0F\u7684\u7C92\u5EA6\uFF0C\u5E76\u4E14\u6781\u5BB9\u6613\u88AB\u62BD\u8C61\u6210\u4E00\u4E2A\u81EA\u5B9A\u4E49 Hooks\uFF0C\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\u548C UI \u53D8\u5F97\u66F4\u4E3A\u6E05\u6670\u548C\u9694\u79BB\u3002  

**\u6CE8\u610F:** . 
1.\u907F\u514D\u5728 \u5FAA\u73AF/\u6761\u4EF6\u5224\u65AD/\u5D4C\u5957\u51FD\u6570 \u4E2D\u8C03\u7528 hooks\uFF0C\u4FDD\u8BC1\u8C03\u7528\u987A\u5E8F\u7684\u7A33\u5B9A\uFF1B  
2.\u53EA\u6709 \u51FD\u6570\u5B9A\u4E49\u7EC4\u4EF6 \u548C hooks \u53EF\u4EE5\u8C03\u7528 hooks\uFF0C\u907F\u514D\u5728 \u7C7B\u7EC4\u4EF6 \u6216\u8005 \u666E\u901A\u51FD\u6570 \u4E2D\u8C03\u7528\uFF1B  
3.\u4E0D\u80FD\u5728useEffect\u4E2D\u4F7F\u7528useState\uFF0CReact \u4F1A\u62A5\u9519\u63D0\u793A\uFF1B  
4.\u7C7B\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u66FF\u6362\u6216\u5E9F\u5F03\uFF0C\u4E0D\u9700\u8981\u5F3A\u5236\u6539\u9020\u7C7B\u7EC4\u4EF6\uFF0C\u4E24\u79CD\u65B9\u5F0F\u80FD\u5E76\u5B58\uFF1B  

**\u91CD\u8981\u94A9\u5B50** . 
##useState . 
\u5F53\u8C03\u7528 useState \u7684\u65F6\u5019\uFF0C\u4F1A\u8FD4\u56DE\u5F62\u5982 (\u53D8\u91CF, \u51FD\u6570) \u7684\u4E00\u4E2A\u5143\u7956\u3002\u5E76\u4E14 state \u7684\u521D\u59CB\u503C\u5C31\u662F\u5916\u90E8\u8C03\u7528 useState \u7684\u65F6\u5019\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u3002    

\u5DE5\u4F5C\u539F\u7406:  

1.\u521D\u59CB\u5316 .     
![](https://miro.medium.com/max/1280/1*LAZDuAEm7nbcx0vWVKJJ2w.png)
2.\u9996\u6B21\u6E32\u67D3  
![](https://miro.medium.com/max/1260/1*8TpWnrL-Jqh7PymLWKXbWg.png)
3.\u91CD\u6E32\u67D3
\u6BCF\u6B21\u540E\u7EED\u6E32\u67D3\uFF0C\u5149\u6807\u90FD\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u503C\u4ECE\u6570\u7EC4\u4E2D\u8BFB\u53D6\u3002
![](https://miro.medium.com/max/1254/1*qtwvPWj-K3PkLQ6SzE2u8w.png)
4.\u4E8B\u4EF6\u5904\u7406
\u6BCF\u4E2A setter \u90FD\u6709\u4E00\u4E2A\u5BF9\u5176\u5149\u6807\u4F4D\u7F6E\u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u901A\u8FC7\u89E6\u53D1\u5BF9 any \u7684\u8C03\u7528\uFF0Csetter\u5B83\u5C06\u66F4\u6539\u72B6\u6001\u6570\u7EC4\u4E2D\u8BE5\u4F4D\u7F6E\u7684\u72B6\u6001\u503C\u3002
![](https://miro.medium.com/max/1260/1*3L8YJnn5eV5ev1FuN6rKSQ.png)

## \u6E38\u6807\u6570\u7EC4

\u7531\u6570\u7EC4\u6765\u5B9E\u73B0\u7684\u201C\u94FE\u8868\u201D\u2014\u2014\u6E38\u6807\u6570\u7EC4\u3002  
\u5176\u4F18\u70B9\u662F\u53EF\u4EE5\u5FEB\u901F\u7684\u63D2\u5165\u548C\u5220\u9664\uFF08\u7531\u4E8E\u4E0D\u9700\u8981\u6307\u9488\u5F0F\u94FE\u8868\u7684malloc\u548Cfree\u7B49\u5185\u5B58\u64CD\u4F5C\uFF0C\u6240\u4EE5\u4F7F\u7528\u65F6\u6E38\u6807\u6570\u7EC4\u53EF\u80FD\u4F1A\u6BD4\u6307\u9488\u5F0F\u94FE\u8868\u8FD8\u8981\u5FEB\u4E00\u70B9\uFF09\uFF0C\u7F3A\u70B9\u5219\u662F\u7EE7\u627F\u81EA\u6570\u7EC4\u2014\u2014\u56FA\u5B9A\u5927\u5C0F\u3002




### \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728\u5FAA\u73AF\u3001\u5224\u65AD\u4E2D\u4F7F\u7528 . 
\u5982\u679C\u5728\u6761\u4EF6\u6E32\u67D3\u4E2D\u4F7F\u7528\uFF0C\u4F1A\u5BFC\u81F4\u91CD\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u5F02\u5E38\u7684\u6E38\u6807\u5BF9\u5E94\uFF0C\u5F02\u5E38\u7684\u6E38\u6807\u5BF9\u5E94\u4E5F\u4F1A\u5BFC\u81F4\u8C03\u7528\u7684setState\u65B9\u6CD5\u5931\u6548

## useEffect

\u4F5C\u7528\u662F\u526F\u4F5C\u7528\uFF0C\u8BF4\u76F4\u767D\u5C31\u662F\u67D0\u4E9Bstate\u6216\u8005props\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u9700\u8981\u76D1\u542C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C\u3002
\u5F85\u5B8C\u5584`;export{d as content,m as default,c as frontmatter,h as lastUpdatedTime,i as toc};
