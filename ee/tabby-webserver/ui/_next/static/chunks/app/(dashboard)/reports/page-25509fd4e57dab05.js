(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{97895:function(){},67936:function(e,a,s){Promise.resolve().then(s.bind(s,5973))},5973:function(e,a,s){"use strict";s.r(a),s.d(a,{Report:function(){return T}});var t=s(36164),l=s(3546),n=s(11978),r=s(36758),i=s(80605),c=s(83692),m=s(81565),o=s(54594),d=s(3448),f=s(6230),x=s(73051),u=s(94755),p=s(72223),h=s(9010);function b(e){let{data:a}=e,{theme:s}=(0,h.X)(),l=(0,u.iP)(),n=l.width||0;return(0,t.jsx)(p.ZP,{data:a,colorScheme:"dark"===s?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:n>=1300?13:n>=1100?9:n>=900?6:5,hideTotalCount:!0})}function g(e){let{totalCount:a,dailyData:s}=e;return(0,t.jsxs)("div",{className:"flex h-full flex-col rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,t.jsxs)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:[(0,t.jsx)("b",{children:a})," activities in the last year"]}),(0,t.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,t.jsx)(b,{data:s})})]})}var y=s(99092),j=s.n(y),v=s(39018),N=s.n(v),w=s(60079),k=s(82382),S=s(85948),D=s(25442),C=s(81040),M=s(16294),Y=s(79972),L=s(22119);let A="-14d";function P(e){let{selectedMember:a,sample:s}=e,{theme:n}=(0,h.X)(),[r,i]=(0,l.useState)({from:j()().add(parseInt(A,10),"day").toDate(),to:j()().toDate()}),o=r.from||new Date,x=r.to||o,{fetchingChatDailyStats:u,chatChartData:p,chatDailyStats:b,totalCount:g}=(0,c.Jn)({sample:s,selectedMember:a,dateRange:{from:o,to:x}});return(0,t.jsx)(f.Z,{loading:u,fallback:(0,t.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,t.jsx)(d.O,{className:"h-32 flex-1"}),(0,t.jsx)(d.O,{className:"h-32 flex-1"}),(0,t.jsx)(d.O,{className:"h-32 flex-1"})]}),(0,t.jsx)(d.O,{className:"h-56"})]}),children:(0,t.jsxs)("div",{className:"mb-10 flex flex-col gap-y-5",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center justify-between gap-y-1 md:flex-row md:gap-y-0",children:[(0,t.jsx)("h2",{className:"font-semibold",children:"Chats"}),(0,t.jsx)("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:gap-y-0",children:(0,t.jsx)(L.Z,{options:[{label:"Last 7 days",value:"-7d"},{label:"Last 14 days",value:"-14d"},{label:"Last 30 days",value:"-30d"}],defaultValue:A,onSelect:i,hasToday:!0,hasYesterday:!0})})]}),(0,t.jsx)("div",{className:"grid gap-5 md:grid-cols-3",children:(0,t.jsxs)(Y.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,t.jsxs)(Y.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(Y.ll,{className:"text-sm font-medium",children:"Total Chats"}),(0,t.jsx)(m.IconMessageSquare,{className:"text-muted-foreground"})]}),(0,t.jsx)(Y.aY,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:N()(g).format("0,0")})})]})}),(0,t.jsxs)("div",{className:"rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,t.jsx)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:"Daily Statistics"}),(0,t.jsx)(w.h,{width:"100%",height:300,children:(0,t.jsxs)(k.v,{data:p,margin:{top:5,right:20,left:20,bottom:5},children:[(0,t.jsx)(S.$,{dataKey:"chats",stackId:"stats",fill:"dark"===n?"#423929":"#e8e1d3",radius:3}),(0,t.jsx)(D.K,{dataKey:"name",fontSize:12}),(0,t.jsx)(C.B,{fontSize:12,width:20,allowDecimals:!1}),(0,t.jsx)(M.u,{cursor:{fill:"transparent"},content:(0,t.jsx)(F,{})})]})})]})]})})}function F(e){let{active:a,payload:s,label:l}=e;if(a&&s&&s.length){let{chats:e}=s[0].payload;return e?(0,t.jsx)(Y.Zb,{children:(0,t.jsxs)(Y.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,t.jsxs)("p",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"mr-3 inline-block w-20",children:"Chat:"}),(0,t.jsx)("b",{children:e})]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:l})]})}):null}return null}var B=s(35814),I=s(18500),O=s(63484),E=s(73492),_=s(36065),z=s(84942);function q(e){let{active:a,payload:s,label:l}=e;if(a&&s&&s.length){let{views:e,selects:a}=s[0].payload;return e?(0,t.jsx)(Y.Zb,{children:(0,t.jsxs)(Y.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,t.jsxs)("p",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completion:"}),(0,t.jsx)("b",{children:e})]}),(0,t.jsxs)("p",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptance:"}),(0,t.jsx)("b",{children:a})]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:l})]})}):null}return null}function R(e){let{selectedMember:a,sample:s}=e,{theme:n}=(0,h.X)(),[r,i]=(0,l.useState)({from:j()().add(parseInt(A,10),"day").toDate(),to:j()().toDate()}),[o,x]=(0,l.useState)([]),{completionChartData:u,completionDailyStats:p,fetchingCompletionDailyStats:b}=(0,c.z1)({selectedMember:a,dateRange:r,sample:s,languages:o});return(0,t.jsx)(f.Z,{loading:b,fallback:(0,t.jsxs)("div",{className:"mb-10 flex flex-col gap-5",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,t.jsx)(d.O,{className:"h-32 flex-1"}),(0,t.jsx)(d.O,{className:"h-32 flex-1"}),(0,t.jsx)(d.O,{className:"h-32 flex-1"})]}),(0,t.jsx)(d.O,{className:"h-56"})]}),children:(0,t.jsxs)("div",{className:"mb-10 flex flex-col gap-y-5",children:[(0,t.jsx)("h1",{className:"text-xl font-semibold",children:"Usage"}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-5",children:[(0,t.jsxs)("div",{className:"-mb-2 flex flex-col items-center justify-between gap-y-1 md:flex-row md:gap-y-0",children:[(0,t.jsx)("h2",{className:"font-semibold",children:"Completions"}),(0,t.jsxs)("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:gap-y-0",children:[(0,t.jsxs)(z.J2,{children:[(0,t.jsx)(z.xo,{asChild:!0,children:(0,t.jsxs)("div",{className:"flex h-9 w-[240px] items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed md:w-[150px]",children:[(0,t.jsxs)("div",{className:"w-full",children:[0===o.length&&(0,t.jsx)("p",{className:"w-full overflow-hidden text-ellipsis",children:"All languages"}),1===o.length&&(0,t.jsx)("p",{className:"w-full overflow-hidden text-ellipsis",children:(0,O.t)(o[0])}),o.length>1&&(0,t.jsxs)("span",{className:"px-1",children:[o.length," selected"]})]}),(0,t.jsx)(m.IconChevronUpDown,{className:"h-3 w-3"})]})}),(0,t.jsx)(z.yk,{className:"w-[240px] p-0 md:w-[180px]",align:"end",children:(0,t.jsxs)(_.mY,{children:[(0,t.jsx)(_.sZ,{placeholder:"Language"}),(0,t.jsxs)(_.e8,{children:[(0,t.jsx)(_.rb,{children:"No results found."}),(0,t.jsx)(_.fu,{children:Object.entries(I.SQ).sort((e,a)=>a[1]===I.SQ.Other?-1:0).map(e=>{let[a,s]=e,l=o.includes(s);return(0,t.jsxs)(_.di,{onSelect:()=>{let e=[...o];if(l){let a=e.findIndex(e=>e===s);-1!==a&&e.splice(a,1)}else e.push(s);x(e)},className:"!pointer-events-auto cursor-pointer !opacity-100",children:[(0,t.jsx)("div",{className:(0,E.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",l?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,t.jsx)(m.IconCheck,{className:(0,E.cn)("h-4 w-4")})}),(0,t.jsx)("span",{children:(0,O.t)(s)})]},s)})}),o.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.zz,{}),(0,t.jsx)(_.fu,{children:(0,t.jsx)(_.di,{onSelect:()=>x([]),className:"!pointer-events-auto cursor-pointer justify-center text-center !opacity-100",children:"Clear filters"})})]})]})]})})]}),(0,t.jsx)(L.Z,{options:[{label:"Last 7 days",value:"-7d"},{label:"Last 14 days",value:"-14d"},{label:"Last 30 days",value:"-30d"}],defaultValue:A,onSelect:i,hasToday:!0,hasYesterday:!0})]})]}),(0,t.jsx)(Z,{dailyStats:p}),(0,t.jsxs)("div",{className:"rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,t.jsx)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:"Daily Statistics"}),(0,t.jsx)(w.h,{width:"100%",height:300,children:(0,t.jsxs)(k.v,{data:u,margin:{top:5,right:20,left:20,bottom:5},children:[(0,t.jsx)(S.$,{dataKey:"selects",stackId:"stats",fill:"dark"===n?"#e8e1d3":"#54452c",radius:3}),(0,t.jsx)(S.$,{dataKey:"pendings",stackId:"stats",fill:"dark"===n?"#423929":"#e8e1d3",radius:3}),(0,t.jsx)(D.K,{dataKey:"name",fontSize:12}),(0,t.jsx)(C.B,{fontSize:12,width:20,allowDecimals:!1}),(0,t.jsx)(M.u,{cursor:{fill:"transparent"},content:(0,t.jsx)(q,{})})]})})]})]})]})})}function Z(e){let{dailyStats:a}=e,s=(0,B.Z)(null==a?void 0:a.map(e=>e.views)),l=(0,B.Z)(null==a?void 0:a.map(e=>e.selects)),n=0===l?0:(l/s*100).toFixed(2);return(0,t.jsxs)("div",{className:"flex w-full flex-col items-start justify-center space-y-3 md:flex-row md:items-center md:space-x-6 md:space-y-0 xl:justify-start",children:[(0,t.jsxs)(Y.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,t.jsxs)(Y.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(Y.ll,{className:"text-sm font-medium",children:"Acceptance Rate"}),(0,t.jsx)(m.IconActivity,{className:"text-muted-foreground"})]}),(0,t.jsx)(Y.aY,{children:(0,t.jsxs)("div",{className:"text-2xl font-bold",children:[n,"%"]})})]}),(0,t.jsxs)(Y.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,t.jsxs)(Y.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(Y.ll,{className:"text-sm font-medium",children:"Total Completions"}),(0,t.jsx)(m.IconCode,{className:"text-muted-foreground"})]}),(0,t.jsx)(Y.aY,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:N()(s).format("0,0")})})]}),(0,t.jsxs)(Y.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,t.jsxs)(Y.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(Y.ll,{className:"text-sm font-medium",children:"Total Acceptances"}),(0,t.jsx)(m.IconCheck,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsx)(Y.aY,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:l})})]})]})}function T(){let e=(0,n.useSearchParams)(),[a,s]=(0,r.d)(),u=(0,i.UA)(),[p,h]=(0,l.useState)("all"),b=u||"true"===e.get("sample"),{dailyData:y,fetching:j,totalCount:v}=(0,c.hr)({selectedMember:p,sample:b});return(0,t.jsxs)("div",{className:"w-[calc(100vw-2rem)] md:w-auto 2xl:mx-auto 2xl:max-w-5xl",children:[(0,t.jsxs)("div",{className:"mb-4 flex flex-col items-center justify-between gap-y-2 lg:flex-row lg:items-end lg:gap-y-0",children:[(0,t.jsx)(x.b,{className:"mb-0",children:"Statistics around Tabby IDE / Extensions"}),(0,t.jsx)(f.Z,{loading:s,fallback:(0,t.jsx)(d.O,{className:"h-6 w-32"}),children:(0,t.jsxs)(o.Ph,{defaultValue:"all",onValueChange:h,children:[(0,t.jsx)(o.i4,{className:"h-auto w-auto border-none py-0 shadow-none",children:(0,t.jsxs)("div",{className:"flex h-6 items-center",children:[(0,t.jsx)(m.IconUsers,{className:"mr-[0.45rem]"}),(0,t.jsx)("div",{className:"w-[190px] overflow-hidden text-ellipsis text-left",children:(0,t.jsx)(o.ki,{})})]})}),(0,t.jsx)(o.Bw,{align:"end",children:(0,t.jsxs)(o.DI,{children:[(0,t.jsx)(o.Ql,{value:"all",children:"All members"}),a.map(e=>(0,t.jsx)(o.Ql,{value:e.id,children:e.name||e.email},e.id))]})})]})})]}),(0,t.jsx)(f.Z,{loading:j,fallback:(0,t.jsx)(d.O,{className:"mb-8 h-48"}),children:(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"mb-2 text-center text-xl font-semibold md:text-start",children:"Activity"}),(0,t.jsx)(g,{totalCount:v,dailyData:y})]})}),(0,t.jsx)(R,{sample:b,selectedMember:p}),(0,t.jsx)(P,{sample:b,selectedMember:p})]})}},73051:function(e,a,s){"use strict";s.d(a,{b:function(){return c}});var t=s(36164);s(3546);var l=s(70652),n=s.n(l),r=s(73492),i=s(81565);let c=e=>{let{className:a,externalLink:s,externalLinkText:l="Learn more",children:c}=e;return(0,t.jsx)("div",{className:(0,r.cn)("mb-4 flex items-center gap-4",a),children:(0,t.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[c,!!s&&(0,t.jsxs)(n(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:s,target:"_blank",children:[l,(0,t.jsx)(i.IconExternalLink,{className:"ml-1"})]})]})})}},36065:function(e,a,s){"use strict";s.d(a,{di:function(){return u},e8:function(){return o},fu:function(){return f},mY:function(){return c},rb:function(){return d},sZ:function(){return m},zz:function(){return x}});var t=s(36164),l=s(3546),n=s(53241),r=s(93170),i=s(73492);s(30220);let c=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.mY,{ref:a,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",s),...l})});c.displayName=n.mY.displayName;let m=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,t.jsx)(r.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,t.jsx)(n.mY.Input,{ref:a,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",s),...l})]})});m.displayName=n.mY.Input.displayName;let o=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.mY.List,{ref:a,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",s),...l})});o.displayName=n.mY.List.displayName;let d=l.forwardRef((e,a)=>(0,t.jsx)(n.mY.Empty,{ref:a,className:"py-6 text-center text-sm",...e}));d.displayName=n.mY.Empty.displayName;let f=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.mY.Group,{ref:a,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",s),...l})});f.displayName=n.mY.Group.displayName;let x=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.mY.Separator,{ref:a,className:(0,i.cn)("-mx-1 h-px bg-border",s),...l})});x.displayName=n.mY.Separator.displayName;let u=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.mY.Item,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",s),...l})});u.displayName=n.mY.Item.displayName},30220:function(e,a,s){"use strict";s.d(a,{$N:function(){return p},Be:function(){return h},Vq:function(){return c},cN:function(){return u},cZ:function(){return f},fK:function(){return x},hg:function(){return m}});var t=s(36164),l=s(3546),n=s(4318),r=s(1663),i=s(73492);let c=n.fC,m=n.xz,o=n.h_;n.x8;let d=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.aV,{ref:a,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...l})});d.displayName=n.aV.displayName;let f=l.forwardRef((e,a)=>{let{className:s,children:l,...c}=e;return(0,t.jsxs)(o,{children:[(0,t.jsx)(d,{}),(0,t.jsxs)(n.VY,{ref:a,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...c,children:[l,(0,t.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,t.jsx)(r.Z,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=n.VY.displayName;let x=e=>{let{className:a,...s}=e;return(0,t.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...s})};x.displayName="DialogHeader";let u=e=>{let{className:a,...s}=e;return(0,t.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...s})};u.displayName="DialogFooter";let p=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.Dx,{ref:a,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",s),...l})});p.displayName=n.Dx.displayName;let h=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,t.jsx)(n.dk,{ref:a,className:(0,i.cn)("text-sm text-muted-foreground",s),...l})});h.displayName=n.dk.displayName},84942:function(e,a,s){"use strict";s.d(a,{J2:function(){return i},xo:function(){return c},yk:function(){return m}});var t=s(36164),l=s(3546),n=s(83299),r=s(73492);let i=n.fC,c=n.xz;n.x8,n.h_,n.ee;let m=l.forwardRef((e,a)=>{let{className:s,sideOffset:l=4,...i}=e;return(0,t.jsx)(n.VY,{ref:a,sideOffset:l,className:(0,r.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...i})});m.displayName=n.VY.displayName},80605:function(e,a,s){"use strict";s.d(a,{UA:function(){return f},Uw:function(){return o},c7:function(){return m},jJ:function(){return d},o4:function(){return x},vN:function(){return i},xG:function(){return c}});var t=s(40055),l=s(43240);let n=(0,l.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n      disablePasswordLogin\n    }\n  }\n"),r=()=>{let[{data:e}]=(0,t.aM)({query:n});return null==e?void 0:e.serverInfo},i=()=>{let[{fetching:e}]=(0,t.aM)({query:n});return e},c=()=>{var e;return null===(e=r())||void 0===e?void 0:e.isChatEnabled},m=()=>{var e;return null===(e=r())||void 0===e?void 0:e.isAdminInitialized},o=()=>{var e;return null===(e=r())||void 0===e?void 0:e.isEmailConfigured},d=()=>{var e;return null===(e=r())||void 0===e?void 0:e.allowSelfSignup},f=()=>{var e;return null===(e=r())||void 0===e?void 0:e.isDemoMode},x=()=>{var e;return null===(e=r())||void 0===e?void 0:e.disablePasswordLogin}},83692:function(e,a,s){"use strict";s.d(a,{Jn:function(){return g},hr:function(){return j},z1:function(){return y}});var t=s(3546),l=s(36619),n=s(1853),r=s(35814),i=s(99092),c=s.n(i),m=s(42390),o=s.n(m),d=s(40055),f=s(43240),x=s(18500);let u=(0,f.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      __typename\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),p=(0,f.BX)("\n  query ChatDailyStats($start: DateTime!, $end: DateTime!, $users: [ID!]) {\n    chatDailyStats(start: $start, end: $end, users: $users) {\n      start\n      end\n      chats\n    }\n  }\n"),h=(0,f.BX)("\n  query chatDailyStatsInPastYear($users: [ID!]) {\n    chatDailyStatsInPastYear(users: $users) {\n      __typename\n      start\n      end\n      chats\n    }\n  }\n"),b=(0,f.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n");function g(e){let{dateRange:a,selectedMember:s,sample:i}=e,m=a.from||new Date,f=a.to||m,[{data:x,fetching:u}]=(0,d.aM)({query:p,variables:{start:c()(a.from).startOf("day").utc().format(),end:c()(a.to).endOf("day").utc().format(),users:"all"===s?void 0:(0,n.Z)([s])},pause:!s}),h=(0,t.useMemo)(()=>{if(!i)return null==x?void 0:x.chatDailyStats;{let e=(0,l.Z)({start:m,end:f});return e.map(e=>{let a=o()(c()(e).format("YYYY-MM-DD")+s+"chats"),t=Math.ceil(Math.ceil(50*a()));return{start:c()(e).utc().format(),end:c()(e).add(1,"day").utc().format(),chats:t}})}},[x,i]),b=(0,r.Z)(null==h?void 0:h.map(e=>e.chats)),g={};null==h||h.forEach(e=>{let a=c()(e.start).format("YYYY-MM-DD");g[a]=g[a]||0,g[a]+=e.chats},{});let y=(0,l.Z)({start:a.from,end:a.to}),j=y.map(e=>{let a=c()(e).format("YYYY-MM-DD"),s=g[a]||0;return{name:c()(e).format("MMMM D"),chats:s}});return{chatDailyStats:h,totalCount:b,chatChartData:j,fetchingChatDailyStats:u}}function y(e){let{dateRange:a,selectedMember:s,sample:r,languages:i}=e,[{data:m,fetching:f}]=(0,d.aM)({query:b,variables:{start:c()(a.from).startOf("day").utc().format(),end:c()(a.to).endOf("day").utc().format(),users:"all"===s?void 0:(0,n.Z)([s]),languages:i}}),u=(0,t.useMemo)(()=>{let e;if(r){let t=(0,l.Z)({start:a.from,end:a.to||a.from});e=t.map(e=>{let a=[x.SQ.Typescript,x.SQ.Python,x.SQ.Rust],t=o()(c()(e).format("YYYY-MM-DD")+s+a),l=Math.ceil(20*t()),n=Math.ceil(l/.35);return{start:c()(e).utc().format(),end:c()(e).add(1,"day").utc().format(),completions:n,selects:l,views:n,language:a[l%a.length]}})}else e=null==m?void 0:m.dailyStats;return null==e?void 0:e.filter(e=>null==i||!i.length||i.includes(e.language))},[r,i,m]),p=a.from||new Date,h=a.to||p,g={},y={};null==u||u.forEach(e=>{let a=c()(e.start).format("YYYY-MM-DD");g[a]=g[a]||0,y[a]=y[a]||0,g[a]+=e.views,y[a]+=e.selects},{});let j=(0,l.Z)({start:p,end:h}),v=j.map(e=>{let a=c()(e).format("YYYY-MM-DD"),s=g[a]||0,t=y[a]||0;return{name:c()(e).format("MMMM D"),views:s,selects:t,pendings:s-t}});return{completionChartData:v,completionDailyStats:u,fetchingCompletionDailyStats:f}}function j(e){let a,{selectedMember:s,sample:t}=e,[{data:n,fetching:r}]=(0,d.aM)({query:h,variables:{users:"all"===s?void 0:s},pause:!s}),[{data:i,fetching:m}]=(0,d.aM)({query:u,variables:{users:"all"===s?void 0:s},pause:!s});if(t){let e=(0,l.Z)({start:c()().toDate(),end:c()().subtract(365,"days").toDate()});a=e.map(e=>{let a=o()(c()(e).format("YYYY-MM-DD")+s),t=Math.ceil(20*a()),l=t+Math.floor(10*a());return{__typename:"CompletionStats",start:c()(e).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),end:c()(e).add(1,"day").format("YYYY-MM-DD[T]HH:mm:ss[Z]"),completions:l,selects:t,views:l}})}else a=[...(null==i?void 0:i.dailyStatsInPastYear)||[],...(null==n?void 0:n.chatDailyStatsInPastYear)||[]];let f=0,x=(null==a?void 0:a.reduce((e,a)=>{var s,t;let l=c().utc(a.start).format("YYYY-MM-DD");return"CompletionStats"===a.__typename?(f+=a.views+a.selects,{...e,[l]:(null!==(s=e[l])&&void 0!==s?s:0)+a.views}):"ChatCompletionStats"===a.__typename?(f+=a.chats,{...e,[l]:(null!==(t=e[l])&&void 0!==t?t:0)+a.chats}):e},{}))||{},p=Array(365).fill("").map((e,a)=>{let s=c()().subtract(a,"days").format("YYYY-MM-DD"),t=x[s]||0;return{date:s,count:t,level:Math.min(4,Math.ceil(t/5))}}).reverse();return{yearlyStats:a,dailyData:p,totalCount:f,fetching:r||m}}},63484:function(e,a,s){"use strict";s.d(a,{U$:function(){return o},t:function(){return d}});var t=s(13135),l=s.n(t),n=s(34021),r=s(74630),i=s(18500),c=JSON.parse('{"Mercury":"#ff2b2b","TypeScript":"#2b7489","PureBasic":"#5a6986","Objective-C++":"#6866fb","Self":"#0579aa","edn":"#db5855","NewLisp":"#87AED7","Jupyter Notebook":"#DA5B0B","Rebol":"#358a5b","Frege":"#00cafe","Dart":"#00B4AB","AspectJ":"#a957b0","Shell":"#89e051","Web Ontology Language":"#9cc9dd","xBase":"#403a40","Eiffel":"#946d57","Nix":"#7e7eff","RAML":"#77d9fb","MTML":"#b7e1f4","Racket":"#22228f","Elixir":"#6e4a7e","SAS":"#B34936","Agda":"#315665","wisp":"#7582D1","D":"#ba595e","Kotlin":"#F18E33","Opal":"#f7ede0","Crystal":"#776791","Objective-C":"#438eff","ColdFusion CFC":"#ed2cd6","Oz":"#fab738","Mirah":"#c7a938","Objective-J":"#ff0c5a","Gosu":"#82937f","FreeMarker":"#0050b2","Ruby":"#701516","Component Pascal":"#b0ce4e","Arc":"#aa2afe","Brainfuck":"#2F2530","Nit":"#009917","APL":"#5A8164","Go":"#375eab","Visual Basic":"#945db7","PHP":"#4F5D95","Cirru":"#ccccff","SQF":"#3F3F3F","Glyph":"#e4cc98","Java":"#b07219","MAXScript":"#00a6a6","Scala":"#DC322F","Makefile":"#427819","ColdFusion":"#ed2cd6","Perl":"#0298c3","Lua":"#000080","Vue":"#2c3e50","Verilog":"#b2b7f8","Factor":"#636746","Haxe":"#df7900","Pure Data":"#91de79","Forth":"#341708","Red":"#ee0000","Hy":"#7790B2","Volt":"#1F1F1F","LSL":"#3d9970","eC":"#913960","CoffeeScript":"#244776","HTML":"#e44b23","Lex":"#DBCA00","API Blueprint":"#2ACCA8","Swift":"#ffac45","C":"#555555","AutoHotkey":"#6594b9","Isabelle":"#FEFE00","Metal":"#8f14e9","Clarion":"#db901e","JSONiq":"#40d47e","Boo":"#d4bec1","AutoIt":"#1C3552","Clojure":"#db5855","Rust":"#dea584","Prolog":"#74283c","SourcePawn":"#5c7611","AMPL":"#E6EFBB","FORTRAN":"#4d41b1","ANTLR":"#9DC3FF","Harbour":"#0e60e3","Tcl":"#e4cc98","BlitzMax":"#cd6400","PigLatin":"#fcd7de","Lasso":"#999999","ECL":"#8a1267","VHDL":"#adb2cb","Elm":"#60B5CC","Propeller Spin":"#7fa2a7","X10":"#4B6BEF","IDL":"#a3522f","ATS":"#1ac620","Ada":"#02f88c","Unity3D Asset":"#ab69a1","Nu":"#c9df40","LFE":"#004200","SuperCollider":"#46390b","Oxygene":"#cdd0e3","ASP":"#6a40fd","Assembly":"#6E4C13","Gnuplot":"#f0a9f0","JFlex":"#DBCA00","NetLinx":"#0aa0ff","Turing":"#45f715","Vala":"#fbe5cd","Processing":"#0096D8","Arduino":"#bd79d1","FLUX":"#88ccff","NetLogo":"#ff6375","CSharp":"#178600","CSS":"#563d7c","Emacs Lisp":"#c065db","Stan":"#b2011d","SaltStack":"#646464","QML":"#44a51c","Pike":"#005390","LOLCODE":"#cc9900","ooc":"#b0b77e","Handlebars":"#01a9d6","J":"#9EEDFF","Mask":"#f97732","EmberScript":"#FFF4F3","TeX":"#3D6117","Nemerle":"#3d3c6e","KRL":"#28431f","Ren\'Py":"#ff7f7f","Unified Parallel C":"#4e3617","Golo":"#88562A","Fancy":"#7b9db4","OCaml":"#3be133","Shen":"#120F14","Pascal":"#b0ce4e","F#":"#b845fc","Puppet":"#302B6D","ActionScript":"#882B0F","Diff":"#88dddd","Ragel in Ruby Host":"#9d5200","Fantom":"#dbded5","Zephir":"#118f9e","Click":"#E4E6F3","Smalltalk":"#596706","DM":"#447265","Ioke":"#078193","PogoScript":"#d80074","LiveScript":"#499886","JavaScript":"#f1e05a","VimL":"#199f4b","PureScript":"#1D222D","ABAP":"#E8274B","Matlab":"#bb92ac","Slash":"#007eff","R":"#198ce7","Erlang":"#B83998","Pan":"#cc0000","LookML":"#652B81","Eagle":"#814C05","Scheme":"#1e4aec","PLSQL":"#dad8d8","Python":"#3572A5","Max":"#c4a79c","Common Lisp":"#3fb68b","Latte":"#A8FF97","XQuery":"#5232e7","Omgrofl":"#cabbff","XC":"#99DA07","Nimrod":"#37775b","SystemVerilog":"#DAE1C2","Chapel":"#8dc63f","Groovy":"#e69f56","Dylan":"#6c616e","E":"#ccce35","Parrot":"#f3ca0a","Grammatical Framework":"#79aa7a","Game Maker Language":"#8fb200","Papyrus":"#6600cc","NetLinx+ERB":"#747faa","Clean":"#3F85AF","Alloy":"#64C800","Squirrel":"#800000","PAWN":"#dbb284","UnrealScript":"#a54c4d","Standard ML":"#dc566d","Slim":"#ff8f77","Perl6":"#0000fb","Julia":"#a270ba","Haskell":"#29b544","NCL":"#28431f","Io":"#a9188d","Rouge":"#cc0088","cpp":"#f34b7d","AGS Script":"#B9D9FF","Dogescript":"#cca760","nesC":"#94B0C7"}'),m={abap:{filenames:[],extnames:["abap"]},actionscript:{filenames:[],extnames:["as"]},ada:{filenames:[],extnames:["ada","adb","ads"]},apacheconf:{filenames:[".htaccess","apache2.conf","httpd.conf"],extnames:["apacheconf","vhost"]},apl:{filenames:[],extnames:["apl","dyalog"]},applescript:{filenames:[],extnames:["applescript","scpt"]},arff:{filenames:[],extnames:["arff"]},asciidoc:{filenames:[],extnames:["asciidoc","adoc","asc"]},asm6502:{filenames:[],extnames:["asm"]},autohotkey:{filenames:[],extnames:["ahk","ahkl"]},autoit:{filenames:[],extnames:["au3"]},bash:{filenames:[".bash_history",".bash_logout",".bash_profile",".bashrc",".cshrc",".login",".profile",".zlogin",".zlogout",".zprofile",".zshenv",".zshrc","9fs","PKGBUILD","bash_logout","bash_profile","bashrc","cshrc","gradlew","login","man","profile","zlogin","zlogout","zprofile","zshenv","zshrc"],extnames:["sh","bash","bats","cgi","command","fcgi","ksh","tmux","tool","zsh"]},basic:{filenames:[],extnames:["vb","bas","cls","frm","frx","vba","vbhtml","vbs"]},batch:{filenames:[],extnames:["bat","cmd"]},bison:{filenames:[],extnames:["bison"]},brainfuck:{filenames:[],extnames:["b","bf"]},bro:{filenames:[],extnames:["bro"]},c:{filenames:[],extnames:["c","cats","h","idc"]},csharp:{filenames:[],extnames:["cs","cake","cshtml","csx"]},cpp:{filenames:[],extnames:["cpp","c++","cc","cp","cxx","h","h++","hh","hpp","hxx","inc","inl","ino","ipp","re","tcc","tpp"]},coffeescript:{filenames:["Cakefile"],extnames:["coffee","_coffee","cake","cjsx","iced"]},clojure:{filenames:["riemann.config"],extnames:["clj","boot","cl2","cljc","cljs","cljs.hl","cljscm","cljx","hic"]},crystal:{filenames:[],extnames:["cr"]},css:{filenames:[],extnames:["css"]},d:{filenames:[],extnames:["d","di"]},dart:{filenames:[],extnames:["dart"]},diff:{filenames:[],extnames:["diff","patch"]},django:{filenames:[],extnames:["jinja","jinja2","mustache","njk"]},dockerfile:{filenames:["Dockerfile"],extnames:["dockerfile"]},eiffel:{filenames:[],extnames:["e"]},elixir:{filenames:["mix.lock"],extnames:["ex","exs"]},elm:{filenames:[],extnames:["elm"]},erb:{filenames:[],extnames:["erb"]},erlang:{filenames:["Emakefile","rebar.config","rebar.config.lock","rebar.lock"],extnames:["erl","app.src","es","escript","hrl","xrl","yrl"]},fsharp:{filenames:[],extnames:["fs","fsi","fsx"]},fortran:{filenames:[],extnames:["f90","f","f03","f08","f77","f95","for","fpp"]},gedcom:{filenames:[],extnames:["ged"]},gherkin:{filenames:[],extnames:["feature"]},glsl:{filenames:[],extnames:["glsl","fp","frag","frg","fs","fsh","fshader","geo","geom","glslv","gshader","shader","tesc","tese","vert","vrx","vsh","vshader"]},go:{filenames:[],extnames:["go"]},graphql:{filenames:[],extnames:["graphql","gql"]},groovy:{filenames:["Jenkinsfile"],extnames:["groovy","grt","gtpl","gvy"]},haml:{filenames:[],extnames:["haml"]},handlebars:{filenames:[],extnames:["handlebars","hbs"]},haskell:{filenames:[],extnames:["hs","hsc"]},haxe:{filenames:[],extnames:["hx","hxsl"]},http:{filenames:[],extnames:["http"]},icon:{filenames:[],extnames:["icn"]},inform7:{filenames:[],extnames:["ni","i7x"]},ini:{filenames:[".editorconfig",".gitconfig"],extnames:["ini","cfg","lektorproject","prefs","pro","properties"]},io:{filenames:[],extnames:["io"]},j:{filenames:[],extnames:["ijs"]},java:{filenames:[],extnames:["java"]},javascript:{filenames:["Jakefile"],extnames:["js","_js","cjs","bones","es","es6","frag","gs","jake","jsb","jscad","jsfl","jsm","jss","mjs","njs","pac","sjs","ssjs","xsjs","xsjslib"]},jolie:{filenames:[],extnames:["ol","iol"]},json:{filenames:[".arcconfig",".htmlhintrc",".tern-config",".tern-project","composer.lock","mcmod.info"],extnames:["json","avsc","geojson","gltf","JSON-tmLanguage","jsonl","tfstate","topojson","webapp","webmanifest","yy","yyp"]},julia:{filenames:[],extnames:["jl"]},keyman:{filenames:[],extnames:["kmn"]},kotlin:{filenames:[],extnames:["kt","ktm","kts"]},latex:{filenames:[],extnames:["tex","aux","bbx","bib","cbx","cls","dtx","ins","lbx","ltx","mkii","mkiv","mkvi","sty","toc"]},less:{filenames:[],extnames:["less"]},liquid:{filenames:[],extnames:["liquid"]},lisp:{filenames:[],extnames:["lisp","asd","cl","l","lsp","ny","podsl","sexp"]},livescript:{filenames:["Slakefile"],extnames:["ls","_ls"]},lolcode:{filenames:[],extnames:["lol"]},lua:{filenames:[],extnames:["lua","fcgi","nse","p8","pd_lua","rbxs","wlua"]},cmake:{filenames:["BSDmakefile","GNUmakefile","Kbuild","Makefile","Makefile.am","Makefile.boot","Makefile.frag","Makefile.in","Makefile.inc","Makefile.wat","makefile","makefile.sco","mkfile"],extnames:["mak","d","make","mk","mkfile"]},markdown:{filenames:["contents.lr","LICENSE"],extnames:["md","markdown","mdown","mdwn","mkd","mkdn","mkdown","ronn","workbook"]},markup:{filenames:[],extnames:["apib","blade","chem","ecr","eex","ejs","html","htm","ipynb","kit","latte","marko","mask","mtml","phtml","pic","raml","rhtml","vue","xht","xhtml"]},matlab:{filenames:[],extnames:["matlab","m"]},mel:{filenames:[],extnames:["mel"]},mizar:{filenames:[],extnames:["miz","voc"]},monkey:{filenames:[],extnames:["monkey","monkey2"]},n4js:{filenames:[],extnames:["n4jsd"]},nasm:{filenames:[],extnames:["nasm"]},nginx:{filenames:["nginx.conf"],extnames:["nginxconf","vhost"]},nim:{filenames:[],extnames:["nim","nimrod"]},nix:{filenames:[],extnames:["nix"]},nsis:{filenames:[],extnames:["nsi","nsh"]},objectivec:{filenames:[],extnames:["m","h"]},ocaml:{filenames:[],extnames:["ml","eliom","eliomi","ml4","mli","mll","mly"]},opencl:{filenames:[],extnames:["opencl","cl"]},oz:{filenames:[],extnames:["oz"]},pascal:{filenames:[],extnames:["pas","dfm","dpr","inc","lpr","pascal","pp"]},perl:{filenames:["Makefile.PL","Rexfile","ack","cpanfile"],extnames:["pl","al","cgi","fcgi","perl","ph","plx","pm","psgi","t"]},php:{filenames:[".php",".php_cs",".php_cs.dist","Phakefile"],extnames:["php","aw","ctp","fcgi","inc","php3","php4","php5","phps","phpt"]},plsql:{filenames:[],extnames:["pls","bdy","ddl","fnc","pck","pkb","pks","plb","plsql","prc","spc","tpb","tps","trg","vw"]},powershell:{filenames:[],extnames:["ps1","psd1","psm1"]},processing:{filenames:[],extnames:["pde"]},prolog:{filenames:[],extnames:["pl","pro","prolog","yap"]},properties:{filenames:[],extnames:["properties"]},protobuf:{filenames:[],extnames:["proto"]},pug:{filenames:[],extnames:["jade","pug"]},puppet:{filenames:["Modulefile"],extnames:["pp"]},pure:{filenames:[],extnames:["pure"]},python:{filenames:[".gclient","BUCK","BUILD","BUILD.bazel","SConscript","SConstruct","Snakefile","WORKSPACE","wscript"],extnames:["py","bzl","cgi","fcgi","gyp","gypi","lmi","py3","pyde","pyi","pyp","pyt","pyw","rpy","spec","tac","wsgi","xpy"]},q:{filenames:[],extnames:["q"]},qore:{filenames:[],extnames:["q","qm","qtest"]},r:{filenames:[".Rprofile","expr-dist"],extnames:["r","rd","rsx"]},jsx:{filenames:[],extnames:["jsx"]},toml:{filenames:[],extnames:["toml"]},tsx:{filenames:[],extnames:["tsx"]},renpy:{filenames:[],extnames:["rpy"]},reason:{filenames:[],extnames:["re","rei"]},rest:{filenames:[],extnames:["rst","rest"]},rip:{filenames:[],extnames:["rip"]},ruby:{filenames:[".irbrc",".pryrc","Appraisals","Berksfile","Brewfile","Buildfile","Capfile","Dangerfile","Deliverfile","Fastfile","Gemfile","Gemfile.lock","Guardfile","Jarfile","Mavenfile","Podfile","Puppetfile","Rakefile","Snapfile","Thorfile","Vagrantfile","buildfile"],extnames:["rb","builder","eye","fcgi","gemspec","god","jbuilder","mspec","pluginspec","podspec","rabl","rake","rbuild","rbw","rbx","ru","ruby","spec","thor","watchr"]},rust:{filenames:[],extnames:["rs"]},sas:{filenames:[],extnames:["sas"]},sass:{filenames:[],extnames:["sass"]},scss:{filenames:[],extnames:["scss"]},scala:{filenames:[],extnames:["scala","kojo","sbt","sc"]},scheme:{filenames:[],extnames:["scm","sch","sld","sls","sps","ss"]},smalltalk:{filenames:[],extnames:["st","cs"]},smarty:{filenames:[],extnames:["tpl"]},sql:{filenames:[],extnames:["sql","cql","ddl","inc","mysql","prc","tab","udf","viw"]},soy:{filenames:[],extnames:["soy"]},stylus:{filenames:[],extnames:["styl"]},swift:{filenames:[],extnames:["swift"]},tcl:{filenames:["owh","starfield"],extnames:["tcl","adp","tm"]},textile:{filenames:[],extnames:["textile"]},tt2:{filenames:[],extnames:["pm"]},twig:{filenames:[],extnames:["twig"]},typescript:{filenames:[],extnames:["ts"]},velocity:{filenames:[],extnames:["vm"]},verilog:{filenames:[],extnames:["v","veo"]},vhdl:{filenames:[],extnames:["vhdl","vhd","vhf","vhi","vho","vhs","vht","vhw"]},vim:{filenames:[".gvimrc",".nvimrc",".vimrc","_vimrc","gvimrc","nvimrc","vimrc"],extnames:["vim"]},"visual-basic":{filenames:[],extnames:["vb","bas","cls","frm","frx","vba","vbhtml","vbs"]},wasm:{filenames:[],extnames:["wast","wat"]},xojo:{filenames:[],extnames:["xojo_code","xojo_menu","xojo_report","xojo_script","xojo_toolbar","xojo_window"]},xquery:{filenames:[],extnames:["xquery","xq","xql","xqm","xqy"]},yaml:{filenames:[".clang-format",".clang-tidy",".gemrc","glide.lock"],extnames:["yml","mir","reek","rviz","sublime-syntax","syntax","yaml","yaml-tmlanguage"]}};Object.entries(c).reduce((e,a)=>{let[s,t]=a;return{...e,[s.toLocaleLowerCase()]:t}},{});let o=e=>{let a={},s={};for(let[e,t]of Object.entries(m)){for(let s of t.filenames)(0,n.Z)(a,s)||(a[s]=[]),a[s].push(e);for(let a of t.extnames)(0,n.Z)(s,a)||(s[a]=[]),s[a].push(e)}return[].concat(a[l().basename(e)],s[l().extname(e).substring(1)]).filter(Boolean)},d=(e,a)=>{let s=()=>(0,r.Z)(a)?"Other":a;if(!e)return s();let t=Object.values(i.SQ).map(e=>e.toLocaleLowerCase()).indexOf(e.toLocaleLowerCase());if(-1===t)return s();let l=Object.keys(i.SQ)[t];return({csharp:"C#",cpp:"C++",javascript:"JavaScript",typescript:"TypeScript",php:"PHP"})[l.toLocaleLowerCase()]||l}}},function(e){e.O(0,[7565,8415,5811,55,3594,340,4007,1283,3087,8511,3179,1002,6805,4546,1889,9604,7671,7350,3492,1565,410,4017,3375,5289,1744],function(){return e(e.s=67936)}),_N_E=e.O()}]);