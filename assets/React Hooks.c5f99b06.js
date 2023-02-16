import{jsx as n,jsxs as l,Fragment as c}from"react/jsx-runtime";const a=void 0,t=[{id:"\u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02",text:"\u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02",depth:2},{id:"hook-\u7684\u542B\u4E49",text:"Hook \u7684\u542B\u4E49\uFF1A",depth:2},{id:"\u4E3A\u4EC0\u4E48\u5F15\u5165",text:"\u4E3A\u4EC0\u4E48\u5F15\u5165\uFF1F",depth:3},{id:"useeffect\u526F\u4F5C\u7528\u94A9\u5B50",text:"useEffect()\uFF1A\u526F\u4F5C\u7528\u94A9\u5B50",depth:2},{id:"usecontext\u5171\u4EAB\u72B6\u6001\u94A9\u5B50",text:"useContext()\uFF1A\u5171\u4EAB\u72B6\u6001\u94A9\u5B50",depth:2},{id:"usereduceraction-\u94A9\u5B50",text:"useReducer()\uFF1Aaction \u94A9\u5B50",depth:2},{id:"\u53C2\u8003\u8FDE\u63A5",text:"\u53C2\u8003\u8FDE\u63A5",depth:2}],i="React Hooks";function s(r){const e=Object.assign({h1:"h1",a:"a",p:"p",em:"em",strong:"strong",h2:"h2",h3:"h3",ul:"ul",li:"li",div:"div",button:"button",span:"span",pre:"pre",code:"code",img:"img"},r.components);return l(c,{children:[l(e.h1,{id:"react-hooks",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#react-hooks",children:"#"}),"React Hooks"]}),`
`,l(e.p,{children:[n(e.em,{children:"Hook"})," \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002"]}),`
`,n(e.p,{children:"React \u7684\u6838\u5FC3\u662F\u7EC4\u4EF6\u3002v16.8 \u7248\u672C\u4E4B\u524D\uFF0C\u7EC4\u4EF6\u7684\u6807\u51C6\u5199\u6CD5\u662F\u7C7B\uFF08class\uFF09\u3002"}),`
`,l(e.p,{children:["React \u56E2\u961F\u5E0C\u671B\uFF0C\u7EC4\u4EF6\u4E0D\u8981\u53D8\u6210\u590D\u6742\u7684\u5BB9\u5668\uFF0C\u6700\u597D\u53EA\u662F\u6570\u636E\u6D41\u7684\u7BA1\u9053\u3002\u5F00\u53D1\u8005\u6839\u636E\u9700\u8981\uFF0C\u7EC4\u5408\u7BA1\u9053\u5373\u53EF\u3002 ",n(e.strong,{children:"\u7EC4\u4EF6\u7684\u6700\u4F73\u5199\u6CD5\u5E94\u8BE5\u662F\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u7C7B\u3002"})]}),`
`,l(e.h2,{id:"\u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02",children:"#"}),"\u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u7C7B\uFF08class\uFF09\u662F\u6570\u636E\u548C\u903B\u8F91\u7684\u5C01\u88C5\u3002"})," \u4E5F\u5C31\u662F\u8BF4\uFF0C\u7EC4\u4EF6\u7684\u72B6\u6001\u548C\u64CD\u4F5C\u65B9\u6CD5\u662F\u5C01\u88C5\u5728\u4E00\u8D77\u7684\u3002\u5982\u679C\u9009\u62E9\u4E86\u7C7B\u7684\u5199\u6CD5\uFF0C\u5C31\u5E94\u8BE5\u628A\u76F8\u5173\u7684\u6570\u636E\u548C\u64CD\u4F5C\uFF0C\u90FD\u5199\u5728\u540C\u4E00\u4E2A class \u91CC\u9762\u3002"]}),`
`,l(e.p,{children:[n(e.strong,{children:"\u51FD\u6570\u4E00\u822C\u6765\u8BF4\uFF0C\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\uFF0C\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002"})," \u5982\u679C\u4F60\u6709\u591A\u4E2A\u64CD\u4F5C\uFF0C\u6BCF\u4E2A\u64CD\u4F5C\u5E94\u8BE5\u5199\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u51FD\u6570\u3002\u800C\u4E14\uFF0C\u6570\u636E\u7684\u72B6\u6001\u5E94\u8BE5\u4E0E\u64CD\u4F5C\u65B9\u6CD5\u5206\u79BB\u3002\u6839\u636E\u8FD9\u79CD\u7406\u5FF5\uFF0CReact \u7684\u51FD\u6570\u7EC4\u4EF6\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF1A\u8FD4\u56DE\u7EC4\u4EF6\u7684 HTML \u4EE3\u7801\uFF0C\u800C\u6CA1\u6709\u5176\u4ED6\u7684\u529F\u80FD\u3002\u53EA\u8FDB\u884C\u5355\u7EAF\u7684\u6570\u636E\u8BA1\u7B97\uFF08\u6362\u7B97\uFF09\u7684\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u91CC\u9762\u79F0\u4E3A ",n(e.strong,{children:'"\u7EAF\u51FD\u6570"'}),"\uFF08pure function\uFF09\u3002"]}),`
`,l(e.h2,{id:"hook-\u7684\u542B\u4E49",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-\u7684\u542B\u4E49",children:"#"}),"Hook \u7684\u542B\u4E49\uFF1A"]}),`
`,n(e.p,{children:"React Hooks \u7684\u610F\u601D\u662F\uFF0C\u7EC4\u4EF6\u5C3D\u91CF\u5199\u6210\u7EAF\u51FD\u6570\uFF0C\u5982\u679C\u9700\u8981\u5916\u90E8\u529F\u80FD\u548C\u526F\u4F5C\u7528\uFF0C\u5C31\u7528\u94A9\u5B50\u6765\u4E3A\u51FD\u6570\u7EC4\u4EF6\u5F15\u5165\u526F\u6548\u5E94\u3002**"}),`
`,l(e.h3,{id:"\u4E3A\u4EC0\u4E48\u5F15\u5165",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3A\u4EC0\u4E48\u5F15\u5165",children:"#"}),"\u4E3A\u4EC0\u4E48\u5F15\u5165\uFF1F"]}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"class\u96BE\u4EE5\u91CD\u7528\u548C\u7EF4\u62A4\uFF0C\u903B\u8F91\u4EE3\u7801\u66F4\u4E3A\u590D\u6742\u3002"}),`
`,n(e.li,{children:"class\u72B6\u6001\u96BE\u4EE5\u5171\u4EAB\u3002"}),`
`,n(e.li,{children:"\u7C7B\u7EC4\u4EF6\u4E2D\u7684this\u589E\u52A0\u5B66\u4E60\u6210\u672C\u3002"}),`
`]}),`
`,n(e.p,{children:"\u4F8B\u5982\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u65F6\u5668\u7EC4\u4EF6\u3002\u6302\u8F7D\u548C\u66F4\u65B0\u65F6\u9700\u8981\u7528\u5230\u751F\u547D\u5468\u671F\u51FD\u6570\u3002"}),`
`,l(e.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#88C0D0"},children:"ComponentDidMount"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#616E88"},children:"//\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u65F6\u89E6\u53D1"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"title"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" 	"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"click"}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#81A1C1"},children:"this"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"porps"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#88C0D0"},children:"ComponentDidUpdate"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#616E88"},children:"//\u7EC4\u4EF6\u66F4\u65B0\u89E6\u53D1"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"document"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"title"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"click"}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#81A1C1"},children:"this"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"porps"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(e.p,{children:"class\u7EC4\u4EF6\u5185\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u65F6\u5668\u5B9E\u73B0\u9700\u8981\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u5E76\u4E14\u7528\u540C\u6837\u7684\u4EE3\u7801\u5B9E\u73B0\u4E86\u540C\u6837\u7684\u529F\u80FD\u3002"}),`
`,n(e.p,{children:"\u800C\u4F7F\u7528Hook\u80FD\u5C06\u76F8\u540C\u7684\u903B\u8F91\u62BD\u79BB\u51FA\u6765\u3002"}),`
`,l(e.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"js"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#88C0D0"},children:"setCount"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"count"}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#ECEFF4"},children:"},"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"conut"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"useeffect\u526F\u4F5C\u7528\u94A9\u5B50",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#useeffect\u526F\u4F5C\u7528\u94A9\u5B50",children:"#"}),"useEffect()\uFF1A\u526F\u4F5C\u7528\u94A9\u5B50"]}),`
`,n(e.p,{children:"\u51FD\u6570\u7EC4\u4EF6\u7684\u4E3B\u4F53\u53EA\u5E94\u8BE5\u7528\u6765\u8FD4\u56DE\u7EC4\u4EF6\u7684 HTML \u4EE3\u7801\uFF0C\u6240\u6709\u7684\u5176\u4ED6\u64CD\u4F5C\uFF08\u526F\u6548\u5E94\uFF09\u90FD\u5FC5\u987B\u901A\u8FC7\u94A9\u5B50\u5F15\u5165\u3002"}),`
`,n(e.p,{children:"\u4F1A\u5728\u6E32\u67D3\u5B8C\u6210\u548CDOM\u66F4\u65B0\u65F6\u89E6\u53D1\u3002"}),`
`,n(e.p,{children:"\u526F\u4F5C\u7528\u5206\u4E3A\u9700\u8981\u6E05\u9664\u548C\u65E0\u9700\u6E05\u9664\u7684\u3002"}),`
`,n(e.p,{children:"useEffect()"}),`
`,n(e.p,{children:"\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u624B\u52A8\u53D8\u66F4 DOM\uFF0C\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5E38\u89C1\u7684\u65E0\u9700\u6E05\u9664\u7684\u64CD\u4F5C\u3002\u56E0\u4E3A\u6211\u4EEC\u5728\u6267\u884C\u5B8C\u8FD9\u4E9B\u64CD\u4F5C\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5FFD\u7565\u4ED6\u4EEC\u4E86\u3002"}),`
`,l(e.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"jsx"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"fetchPosts"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"()"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"res"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"post"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"/posts"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"log"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"res"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#88C0D0"},children:"fetchPosts"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"usecontext\u5171\u4EAB\u72B6\u6001\u94A9\u5B50",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usecontext\u5171\u4EAB\u72B6\u6001\u94A9\u5B50",children:"#"}),"useContext()\uFF1A\u5171\u4EAB\u72B6\u6001\u94A9\u5B50"]}),`
`,l(e.p,{children:["\u5982\u679C\u9700\u8981\u5728\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\u72B6\u6001\uFF0C\u53EF\u4EE5\u4F7F\u7528",n(e.code,{children:"useContext()"}),"\u3002"]}),`
`,n(e.p,{children:"\u5728\u8BBE\u7F6E\u7528\u6237\u767B\u5F55\u529F\u80FD\u65F6\uFF0C\u9700\u8981\u4FDD\u5B58\u7528\u6237\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u4E14\u5C06\u72B6\u6001\u5171\u4EAB\u7ED9\u5B50\u7EC4\u4EF6\u3002"}),`
`,n(e.pre,{children:n(e.code,{children:`export const Context = createContext(INITIAL_STATE)
`})}),`
`,n(e.p,{children:"\u7B2C\u4E00\u6B65\u5C31\u662F\u4F7F\u7528 React Context API\uFF0C\u5728\u7EC4\u4EF6\u5916\u90E8\u5EFA\u7ACB\u4E00\u4E2A Context\u3002"}),`
`,l(e.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"jsx"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"<"}),n(e.span,{style:{color:"#8FBCBB"},children:"Context.Provider"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"value"}),n(e.span,{style:{color:"#81A1C1"},children:"={"}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#88C0D0"},children:"user"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"state"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"user"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#616E88"},children:"//\u5171\u4EAB\u5C5E\u6027"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#D8DEE9"},children:"dispatch"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(e.span,{style:{color:"#81A1C1"},children:"{"}),n(e.span,{style:{color:"#D8DEE9"},children:"children"}),n(e.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"</"}),n(e.span,{style:{color:"#8FBCBB"},children:"Context.Provider"}),n(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(e.p,{children:"==Context.Provider==\u63D0\u4F9B\u4E86\u4E00\u4E2A Context \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u88AB\u5B50\u7EC4\u4EF6\u5171\u4EAB\u3002"}),`
`,n(e.p,{children:"Login\u9875\u9762\u4E2D\uFF0CuseContext\u94A9\u5B50\u7528\u6765Context\u5BF9\u8C61\u5E76\u4ECE\u4E2D\u83B7\u53D6user,dispatch\u5C5E\u6027\u3002"}),`
`,n(e.pre,{children:n(e.code,{children:`const { dispatch,user } = useContext(Context)
`})}),`
`,l(e.h2,{id:"usereduceraction-\u94A9\u5B50",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usereduceraction-\u94A9\u5B50",children:"#"}),"useReducer()\uFF1Aaction \u94A9\u5B50"]}),`
`,n(e.p,{children:"React \u672C\u8EAB\u4E0D\u63D0\u4F9B\u72B6\u6001\u7BA1\u7406\u529F\u80FD\uFF0C\u901A\u5E38\u9700\u8981\u4F7F\u7528\u5916\u90E8\u5E93\u3002\u8FD9\u65B9\u9762\u6700\u5E38\u7528\u7684\u5E93\u662F Redux\u3002"}),`
`,l(e.p,{children:["Redux \u7684\u6838\u5FC3\u6982\u5FF5\u662F\uFF0C\u7EC4\u4EF6\u53D1\u51FA action \u4E0E\u72B6\u6001\u7BA1\u7406\u5668\u901A\u4FE1\u3002\u72B6\u6001\u7BA1\u7406\u5668\u6536\u5230 action \u4EE5\u540E\uFF0C\u4F7F\u7528 Reducer \u51FD\u6570\u7B97\u51FA\u65B0\u7684\u72B6\u6001\u3002\u5B58\u50A8\u5668\u4E2D\u7684\u72B6\u6001\u4E0D\u662F\u76F4\u63A5\u6539\u53D8\u7684\uFF0C\u800C\u662F\u901A\u8FC7\u4E0D\u540C\u7684",n(e.em,{children:"\u52A8\u4F5C"}),"\u6539\u53D8\u7684\u3002"]}),`
`,n(e.p,{children:n(e.img,{src:"https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png",alt:"img"})}),`
`,l(e.p,{children:["\u52A8\u4F5C\u5BF9\u5E94\u7528\u72B6\u6001\u7684\u5F71\u54CD\u662F\u7528\u4E00\u4E2A",n(e.a,{href:"https://redux.js.org/basics/reducers",target:"_blank",rel:"nofollow",children:"reducer"}),"\u6765\u5B9A\u4E49\u7684\u3002\u5728\u5B9E\u8DF5\u4E2D\uFF0Creducer\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u88AB\u8D4B\u4E88\u5F53\u524D\u72B6\u6001\u548C\u4E00\u4E2A\u52A8\u4F5C\u4F5C\u4E3A\u53C2\u6570\u3002\u5B83",n(e.em,{children:"\u8FD4\u56DE"}),"\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\u3002"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"**const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"** "}),n(e.span,{style:{color:"#ECEFF4"},children:"["}),n(e.span,{style:{color:"#D8DEE9"},children:"state"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"dispatch"}),n(e.span,{style:{color:"#ECEFF4"},children:"]"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"useReducer"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"Reducer"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"INITIAL_STATE"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:[n(e.code,{children:"useReducers()"}),"\u94A9\u5B50\u7528\u6765\u5F15\u5165 Reducer \u529F\u80FD\u3002Reducer\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"Reducer"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"state"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"actions"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"switch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"action"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"type"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"case"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"INCREMENT"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#616E88"},children:"//\u51B3\u5B9A\u884C\u52A8\u7684\u7C7B\u578B\u3002"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"state"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"+"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"case"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"DECREMENT"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:":"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"state"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"-"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"case"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"ZERO"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#ECEFF4"},children:":"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"0"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"default"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"\u53C2\u8003\u8FDE\u63A5",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u8003\u8FDE\u63A5",children:"#"}),"\u53C2\u8003\u8FDE\u63A5"]}),`
`,n(e.p,{children:n(e.a,{href:"https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html",target:"_blank",rel:"nofollow",children:"https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html"})}),`
`,n(e.p,{children:n(e.a,{href:"https://www.ruanyifeng.com/blog/2019/09/react-hooks.html",target:"_blank",rel:"nofollow",children:"https://www.ruanyifeng.com/blog/2019/09/react-hooks.html"})}),`
`,n(e.p,{children:n(e.a,{href:"https://zh-hans.reactjs.org/docs/hooks-state.html",target:"_blank",rel:"nofollow",children:"https://zh-hans.reactjs.org/docs/hooks-state.html"})})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}const h="2023/2/16 15:25:47",p=`# React Hooks\r
\r
*Hook* \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002\r
\r
React \u7684\u6838\u5FC3\u662F\u7EC4\u4EF6\u3002v16.8 \u7248\u672C\u4E4B\u524D\uFF0C\u7EC4\u4EF6\u7684\u6807\u51C6\u5199\u6CD5\u662F\u7C7B\uFF08class\uFF09\u3002\r
\r
React \u56E2\u961F\u5E0C\u671B\uFF0C\u7EC4\u4EF6\u4E0D\u8981\u53D8\u6210\u590D\u6742\u7684\u5BB9\u5668\uFF0C\u6700\u597D\u53EA\u662F\u6570\u636E\u6D41\u7684\u7BA1\u9053\u3002\u5F00\u53D1\u8005\u6839\u636E\u9700\u8981\uFF0C\u7EC4\u5408\u7BA1\u9053\u5373\u53EF\u3002 **\u7EC4\u4EF6\u7684\u6700\u4F73\u5199\u6CD5\u5E94\u8BE5\u662F\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u7C7B\u3002**\r
\r
## \u7C7B\u548C\u51FD\u6570\u7684\u5DEE\u5F02\r
\r
**\u7C7B\uFF08class\uFF09\u662F\u6570\u636E\u548C\u903B\u8F91\u7684\u5C01\u88C5\u3002** \u4E5F\u5C31\u662F\u8BF4\uFF0C\u7EC4\u4EF6\u7684\u72B6\u6001\u548C\u64CD\u4F5C\u65B9\u6CD5\u662F\u5C01\u88C5\u5728\u4E00\u8D77\u7684\u3002\u5982\u679C\u9009\u62E9\u4E86\u7C7B\u7684\u5199\u6CD5\uFF0C\u5C31\u5E94\u8BE5\u628A\u76F8\u5173\u7684\u6570\u636E\u548C\u64CD\u4F5C\uFF0C\u90FD\u5199\u5728\u540C\u4E00\u4E2A class \u91CC\u9762\u3002\r
\r
**\u51FD\u6570\u4E00\u822C\u6765\u8BF4\uFF0C\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\uFF0C\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002** \u5982\u679C\u4F60\u6709\u591A\u4E2A\u64CD\u4F5C\uFF0C\u6BCF\u4E2A\u64CD\u4F5C\u5E94\u8BE5\u5199\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u51FD\u6570\u3002\u800C\u4E14\uFF0C\u6570\u636E\u7684\u72B6\u6001\u5E94\u8BE5\u4E0E\u64CD\u4F5C\u65B9\u6CD5\u5206\u79BB\u3002\u6839\u636E\u8FD9\u79CD\u7406\u5FF5\uFF0CReact \u7684\u51FD\u6570\u7EC4\u4EF6\u53EA\u5E94\u8BE5\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF1A\u8FD4\u56DE\u7EC4\u4EF6\u7684 HTML \u4EE3\u7801\uFF0C\u800C\u6CA1\u6709\u5176\u4ED6\u7684\u529F\u80FD\u3002\u53EA\u8FDB\u884C\u5355\u7EAF\u7684\u6570\u636E\u8BA1\u7B97\uFF08\u6362\u7B97\uFF09\u7684\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u91CC\u9762\u79F0\u4E3A **"\u7EAF\u51FD\u6570"**\uFF08pure function\uFF09\u3002\r
\r
## Hook \u7684\u542B\u4E49\uFF1A\r
\r
React Hooks \u7684\u610F\u601D\u662F\uFF0C\u7EC4\u4EF6\u5C3D\u91CF\u5199\u6210\u7EAF\u51FD\u6570\uFF0C\u5982\u679C\u9700\u8981\u5916\u90E8\u529F\u80FD\u548C\u526F\u4F5C\u7528\uFF0C\u5C31\u7528\u94A9\u5B50\u6765\u4E3A\u51FD\u6570\u7EC4\u4EF6\u5F15\u5165\u526F\u6548\u5E94\u3002**\r
\r
### \u4E3A\u4EC0\u4E48\u5F15\u5165\uFF1F\r
\r
- class\u96BE\u4EE5\u91CD\u7528\u548C\u7EF4\u62A4\uFF0C\u903B\u8F91\u4EE3\u7801\u66F4\u4E3A\u590D\u6742\u3002\r
- class\u72B6\u6001\u96BE\u4EE5\u5171\u4EAB\u3002\r
- \u7C7B\u7EC4\u4EF6\u4E2D\u7684this\u589E\u52A0\u5B66\u4E60\u6210\u672C\u3002\r
\r
\u4F8B\u5982\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u65F6\u5668\u7EC4\u4EF6\u3002\u6302\u8F7D\u548C\u66F4\u65B0\u65F6\u9700\u8981\u7528\u5230\u751F\u547D\u5468\u671F\u51FD\u6570\u3002\r
\r
\`\`\`js\r
ComponentDidMount(){//\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u65F6\u89E6\u53D1\r
  document.title = 	\`click\${this.porps.count}\`\r
};\r
\r
ComponentDidUpdate(){//\u7EC4\u4EF6\u66F4\u65B0\u89E6\u53D1\r
    document.title =\`click\${this.porps.count}\`\r
}\r
\`\`\`\r
\r
class\u7EC4\u4EF6\u5185\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u65F6\u5668\u5B9E\u73B0\u9700\u8981\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u5E76\u4E14\u7528\u540C\u6837\u7684\u4EE3\u7801\u5B9E\u73B0\u4E86\u540C\u6837\u7684\u529F\u80FD\u3002\r
\r
\u800C\u4F7F\u7528Hook\u80FD\u5C06\u76F8\u540C\u7684\u903B\u8F91\u62BD\u79BB\u51FA\u6765\u3002\r
\r
\`\`\`js\r
useEffect(()=>{setCount(count+1)},[conut])\r
\`\`\`\r
\r
\r
\r
## useEffect()\uFF1A\u526F\u4F5C\u7528\u94A9\u5B50\r
\r
\u51FD\u6570\u7EC4\u4EF6\u7684\u4E3B\u4F53\u53EA\u5E94\u8BE5\u7528\u6765\u8FD4\u56DE\u7EC4\u4EF6\u7684 HTML \u4EE3\u7801\uFF0C\u6240\u6709\u7684\u5176\u4ED6\u64CD\u4F5C\uFF08\u526F\u6548\u5E94\uFF09\u90FD\u5FC5\u987B\u901A\u8FC7\u94A9\u5B50\u5F15\u5165\u3002\r
\r
\u4F1A\u5728\u6E32\u67D3\u5B8C\u6210\u548CDOM\u66F4\u65B0\u65F6\u89E6\u53D1\u3002\r
\r
\u526F\u4F5C\u7528\u5206\u4E3A\u9700\u8981\u6E05\u9664\u548C\u65E0\u9700\u6E05\u9664\u7684\u3002\r
\r
useEffect()\r
\r
\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u624B\u52A8\u53D8\u66F4 DOM\uFF0C\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5E38\u89C1\u7684\u65E0\u9700\u6E05\u9664\u7684\u64CD\u4F5C\u3002\u56E0\u4E3A\u6211\u4EEC\u5728\u6267\u884C\u5B8C\u8FD9\u4E9B\u64CD\u4F5C\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5FFD\u7565\u4ED6\u4EEC\u4E86\u3002\r
\r
\`\`\`jsx\r
 useEffect(() => {\r
        const fetchPosts = async () => {\r
            const res = await axios.post("/posts")\r
            console.log(res)\r
        }\r
        fetchPosts()\r
    }, [])\r
\`\`\`\r
\r
\r
\r
## useContext()\uFF1A\u5171\u4EAB\u72B6\u6001\u94A9\u5B50\r
\r
\u5982\u679C\u9700\u8981\u5728\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\u72B6\u6001\uFF0C\u53EF\u4EE5\u4F7F\u7528\`useContext()\`\u3002\r
\r
\u5728\u8BBE\u7F6E\u7528\u6237\u767B\u5F55\u529F\u80FD\u65F6\uFF0C\u9700\u8981\u4FDD\u5B58\u7528\u6237\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u4E14\u5C06\u72B6\u6001\u5171\u4EAB\u7ED9\u5B50\u7EC4\u4EF6\u3002\r
\r
\`\`\`\r
export const Context = createContext(INITIAL_STATE)\r
\`\`\`\r
\r
\u7B2C\u4E00\u6B65\u5C31\u662F\u4F7F\u7528 React Context API\uFF0C\u5728\u7EC4\u4EF6\u5916\u90E8\u5EFA\u7ACB\u4E00\u4E2A Context\u3002\r
\r
\`\`\`jsx\r
 <Context.Provider value={{\r
            user: state.user,//\u5171\u4EAB\u5C5E\u6027\r
            dispatch\r
        }}>\r
            {children}\r
</Context.Provider>\r
\`\`\`\r
\r
==Context.Provider==\u63D0\u4F9B\u4E86\u4E00\u4E2A Context \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u88AB\u5B50\u7EC4\u4EF6\u5171\u4EAB\u3002\r
\r
Login\u9875\u9762\u4E2D\uFF0CuseContext\u94A9\u5B50\u7528\u6765Context\u5BF9\u8C61\u5E76\u4ECE\u4E2D\u83B7\u53D6user,dispatch\u5C5E\u6027\u3002\r
\r
\`\`\`\r
const { dispatch,user } = useContext(Context)\r
\`\`\`\r
\r
## useReducer()\uFF1Aaction \u94A9\u5B50\r
\r
React \u672C\u8EAB\u4E0D\u63D0\u4F9B\u72B6\u6001\u7BA1\u7406\u529F\u80FD\uFF0C\u901A\u5E38\u9700\u8981\u4F7F\u7528\u5916\u90E8\u5E93\u3002\u8FD9\u65B9\u9762\u6700\u5E38\u7528\u7684\u5E93\u662F Redux\u3002\r
\r
Redux \u7684\u6838\u5FC3\u6982\u5FF5\u662F\uFF0C\u7EC4\u4EF6\u53D1\u51FA action \u4E0E\u72B6\u6001\u7BA1\u7406\u5668\u901A\u4FE1\u3002\u72B6\u6001\u7BA1\u7406\u5668\u6536\u5230 action \u4EE5\u540E\uFF0C\u4F7F\u7528 Reducer \u51FD\u6570\u7B97\u51FA\u65B0\u7684\u72B6\u6001\u3002\u5B58\u50A8\u5668\u4E2D\u7684\u72B6\u6001\u4E0D\u662F\u76F4\u63A5\u6539\u53D8\u7684\uFF0C\u800C\u662F\u901A\u8FC7\u4E0D\u540C\u7684*\u52A8\u4F5C*\u6539\u53D8\u7684\u3002\r
\r
![img](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)\r
\r
\u52A8\u4F5C\u5BF9\u5E94\u7528\u72B6\u6001\u7684\u5F71\u54CD\u662F\u7528\u4E00\u4E2A[reducer](https://redux.js.org/basics/reducers)\u6765\u5B9A\u4E49\u7684\u3002\u5728\u5B9E\u8DF5\u4E2D\uFF0Creducer\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u88AB\u8D4B\u4E88\u5F53\u524D\u72B6\u6001\u548C\u4E00\u4E2A\u52A8\u4F5C\u4F5C\u4E3A\u53C2\u6570\u3002\u5B83*\u8FD4\u56DE*\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\u3002\r
\r
\`\`\`javascript\r
**const** [state, dispatch] = useReducer(Reducer, INITIAL_STATE)\r
\`\`\`\r
\r
\`useReducers()\`\u94A9\u5B50\u7528\u6765\u5F15\u5165 Reducer \u529F\u80FD\u3002Reducer\u5B9A\u4E49\u5982\u4E0B\uFF1A\r
\r
\`\`\`javascript\r
const Reducer = (state, actions) => {\r
  switch (action.type) {\r
    case 'INCREMENT'://\u51B3\u5B9A\u884C\u52A8\u7684\u7C7B\u578B\u3002\r
      return state + 1\r
    case 'DECREMENT':\r
      return state - 1\r
    case 'ZERO':\r
      return 0\r
    default: \r
      return state\r
  }\r
}\r
\`\`\`\r
\r
## \u53C2\u8003\u8FDE\u63A5\r
\r
https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html\r
\r
https://www.ruanyifeng.com/blog/2019/09/react-hooks.html\r
\r
https://zh-hans.reactjs.org/docs/hooks-state.html\r
\r
`;export{p as content,d as default,a as frontmatter,h as lastUpdatedTime,i as title,t as toc};
