(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{3263:function(e,t,n){Promise.resolve().then(n.bind(n,99968))},99968:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R},metadata:function(){return Z}});var r=n(36164),s=n(40055),i=n(70410),l=n(99047),u=n(6230),a=n(3546),o=n(70652),c=n.n(o),d=n(97651),f=n.n(d),x=n(74630),m=n(99092),h=n.n(m),j=n(73492),v=n(81565),b=n(29),p=n(90379),g=n(17484);function N(e){let{count:t,activeClass:n,tooltip:s}=e;return(0,r.jsx)(b.pn,{delayDuration:0,children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{children:(0,r.jsx)("div",{className:(0,j.cn)("flex h-8 w-8 cursor-default items-center justify-center rounded-full",n),children:t||0})}),(0,r.jsx)(b._v,{children:(0,r.jsx)("p",{children:s})})]})})}function w(e){let{name:t}=e,[{data:n,fetching:l}]=(0,s.aM)({query:i.yB,variables:{jobs:[t]}});return(0,r.jsx)(u.Z,{loading:l,fallback:(0,r.jsx)(p.tB,{className:"w-1/3"}),children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(N,{count:null==n?void 0:n.jobRunStats.success,activeClass:"bg-green-600 text-xs text-white",tooltip:"Success"}),(0,r.jsx)(N,{count:null==n?void 0:n.jobRunStats.pending,activeClass:"bg-blue-600 text-xs text-white",tooltip:"Pending"}),(0,r.jsx)(N,{count:null==n?void 0:n.jobRunStats.failed,activeClass:"bg-red-600 text-xs text-white",tooltip:"Failed"})]})})}function y(e){var t;let{name:n}=e,[{data:o,fetching:d}]=(0,s.aM)({query:i.GG,variables:{last:10,jobs:[n]}}),m=null==o?void 0:null===(t=o.jobRuns)||void 0===t?void 0:t.edges,N=(0,a.useMemo)(()=>null==m?void 0:m.slice().reverse(),[m]),y=null==N?void 0:N[0],Z=null==N?void 0:N.find(e=>!!e.node.finishedAt),R=Z?h()(Z.node.finishedAt).format("YYYY-MM-DD HH:mm"):null;return(0,r.jsx)(u.Z,{loading:d,fallback:(0,r.jsx)(l.SC,{children:(0,r.jsx)(l.pj,{colSpan:4,children:(0,r.jsx)(p.tB,{})})}),children:(0,r.jsxs)(l.SC,{className:"h-16",children:[(0,r.jsx)(l.pj,{className:"font-bold",children:(0,g.Y)(n)}),(0,r.jsx)(l.pj,{children:(0,r.jsx)("div",{className:"grid grid-cols-5 flex-wrap gap-1.5  xl:flex",children:null==N?void 0:N.map(e=>{var t;let{createdAt:n,finishedAt:s,startedAt:i}=e.node,l=!s&&!!i,u=n&&h()(n).format("YYYY-MM-DD HH:mm"),a=null!==(t=i&&s&&f().humanizer({language:"shortEn",languages:{shortEn:{d:()=>"d",h:()=>"h",m:()=>"m",s:()=>"s"}}})(h().duration(h()(s).diff(i)).asMilliseconds(),{units:["d","h","m","s"],round:!1,largest:1,spacer:"",language:"shortEn"}))&&void 0!==t?t:null,o="";if(null!==a){let e=a.endsWith("s");if(e)o=a;else{let e=a.charAt(a.length-1),t=parseInt(a)+1;o=t+e}}return(0,r.jsx)(b.pn,{delayDuration:0,children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{asChild:!0,children:(0,r.jsxs)(c(),{href:"/jobs/detail?id=".concat(e.node.id),className:(0,j.cn)("flex h-8 w-8 items-center justify-center rounded text-xs text-white hover:opacity-70",{"bg-blue-600":(0,x.Z)(e.node.exitCode),"bg-green-600":0===e.node.exitCode,"bg-red-600":!(0,x.Z)(e.node.exitCode)&&0!==e.node.exitCode}),children:[o,l&&(0,r.jsx)(v.IconSpinner,{})]})}),(0,r.jsx)(b._v,{children:u&&(0,r.jsx)("p",{children:u})})]})},e.node.id)})})}),(0,r.jsx)(l.pj,{children:(0,r.jsx)(c(),{href:"/jobs/detail?id=".concat(null==y?void 0:y.node.id),className:"flex items-center underline",children:(0,r.jsx)("p",{children:R})})}),(0,r.jsx)(l.pj,{children:(0,r.jsx)(w,{name:n})})]})})}let Z={title:"Jobs"};function R(){let[{data:e,fetching:t}]=(0,s.aM)({query:i.DQ});return(0,r.jsx)(u.Z,{loading:t,children:(0,r.jsxs)(l.iA,{children:[(0,r.jsx)(l.xD,{children:(0,r.jsxs)(l.SC,{children:[(0,r.jsx)(l.ss,{className:"w-[20%]",children:"Job"}),(0,r.jsx)(l.ss,{className:"w-56 xl:w-auto",children:"Recent Tasks"}),(0,r.jsx)(l.ss,{className:"w-auto xl:w-[20%]",children:"Last Run"}),(0,r.jsx)(l.ss,{className:"w-[20%]",children:"Job Runs"})]})}),(0,r.jsx)(l.RM,{children:null==e?void 0:e.jobs.map(e=>(0,r.jsx)(y,{name:e},e))})]})})}},17484:function(e,t,n){"use strict";n.d(t,{H:function(){return l},Y:function(){return i}});var r=n(74630);let s={scheduler_git:"Git",scheduler_github_gitlab:"Github / Gitlab",web_crawler:"Docs"};function i(e){return e in s?s[e]:e}function l(e){return e?(0,r.Z)(e.exitCode)?e.startedAt?"Running":"Pending":0===e.exitCode?"Success":"Failed":"Pending"}},6230:function(e,t,n){"use strict";var r=n(36164),s=n(3546),i=n(24449),l=n(90379);t.Z=e=>{let{triggerOnce:t=!0,loading:n,fallback:u,delay:a,children:o}=e,[c,d]=s.useState(!n),[f]=(0,i.n)(c,null!=a?a:200);return(s.useEffect(()=>{t?n||c||d(!0):d(!n)},[n]),f)?o:u||(0,r.jsx)(l.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return a},cg:function(){return l},tB:function(){return u}});var r=n(36164),s=n(73492),i=n(3448);let l=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...n,children:[(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})},u=e=>{let{className:t,...n}=e;return(0,r.jsx)(i.O,{className:(0,s.cn)("h-4 w-full",t),...n})},a=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})}},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(36164),s=n(73492);function i(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-border",t),...n})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return a},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return d},xD:function(){return u}});var r=n(36164),s=n(3546),i=n(73492);let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",n),...s})});l.displayName="Table";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",n),...s})});u.displayName="TableHeader";let a=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",n),...s})});a.displayName="TableBody";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...s})});o.displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...s})});c.displayName="TableRow";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...s})});d.displayName="TableHead";let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,i.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0",n),...s})});f.displayName="TableCell";let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",n),...s})});x.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return o},pn:function(){return u},u:function(){return a}});var r=n(36164),s=n(3546),i=n(44421),l=n(73492);let u=i.zt,a=i.fC,o=i.xz;i.h_;let c=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...u}=e;return(0,r.jsx)(i.VY,{ref:t,sideOffset:s,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...u})});c.displayName=i.VY.displayName},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return u},n:function(){return a}});var r=n(3546),s=n(45391),i=n(16784);let l=e=>{let t=(0,i.d)(e);r.useEffect(()=>()=>{t.current()},[])};function u(e,t,n){let u=(0,i.d)(e),a=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.current(...t)},t,n),[]);return l(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,a),a.cancel()}),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,t,n){let[s,i]=r.useState(e),{run:l}=u(()=>{i(e)},t,n);return r.useEffect(()=>{l()},[e]),[s,i]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(3546);function s(e){let t=r.useRef(e);return t.current=e,t}},70652:function(e,t,n){e.exports=n(54007)},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,s=n(3546),i=n(65292);let l=(r||(r=n.t(s,2)))["useId".toString()]||(()=>void 0),u=0;function a(e){let[t,n]=s.useState(l());return(0,i.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?`radix-${t}`:"")}},18216:function(e,t,n){"use strict";var r=n(6670),s=/^\s+/;t.Z=function(e){return e?e.slice(0,(0,r.Z)(e)+1).replace(s,""):e}},6670:function(e,t){"use strict";var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},45391:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(84639),s=n(48717),i=function(){return s.Z.Date.now()},l=n(26165),u=Math.max,a=Math.min,o=function(e,t,n){var s,o,c,d,f,x,m=0,h=!1,j=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=s,r=o;return s=o=void 0,m=t,d=e.apply(r,n)}function p(e){var n=e-x,r=e-m;return void 0===x||n>=t||n<0||j&&r>=c}function g(){var e,n,r,s=i();if(p(s))return N(s);f=setTimeout(g,(e=s-x,n=s-m,r=t-e,j?a(r,c-n):r))}function N(e){return(f=void 0,v&&s)?b(e):(s=o=void 0,d)}function w(){var e,n=i(),r=p(n);if(s=arguments,o=this,x=n,r){if(void 0===f)return m=e=x,f=setTimeout(g,t),h?b(e):d;if(j)return clearTimeout(f),f=setTimeout(g,t),b(x)}return void 0===f&&(f=setTimeout(g,t)),d}return t=(0,l.Z)(t)||0,(0,r.Z)(n)&&(h=!!n.leading,c=(j="maxWait"in n)?u((0,l.Z)(n.maxWait)||0,t):c,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,s=x=o=f=void 0},w.flush=function(){return void 0===f?d:N(i())},w}},96786:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,n){"use strict";var r=n(17996),s=n(96786);t.Z=function(e){return"symbol"==typeof e||(0,s.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},26165:function(e,t,n){"use strict";var r=n(18216),s=n(84639),i=n(55357),l=0/0,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt;t.Z=function(e){if("number"==typeof e)return e;if((0,i.Z)(e))return l;if((0,s.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,s.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,r.Z)(e);var n=a.test(e);return n||o.test(e)?c(e.slice(2),n?2:8):u.test(e)?l:+e}}},function(e){e.O(0,[7565,8415,5811,55,3594,340,4007,1283,3087,4421,7651,3492,1565,410,3375,5289,1744],function(){return e(e.s=3263)}),_N_E=e.O()}]);