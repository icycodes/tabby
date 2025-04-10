(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2048],{98641:function(e,r,t){"use strict";t.d(r,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.flat(1/0).filter(Boolean).join(" ")},o=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return s(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:l}=r,a=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],s=null==l?void 0:l[e];if(null===r)return null;let o=n(r)||n(s);return i[e][o]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{}),d=null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:n,...s}=r;return Object.entries(s).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...l,...c}[r]):({...l,...c})[r]===t})?[...e,t,n]:e},[]);return s(e,a,d,null==t?void 0:t.class,null==t?void 0:t.className)}},14872:function(e,r,t){Promise.resolve().then(t.bind(t,26756))},26756:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(36164),s=t(3546),o=t(70652),i=t.n(o),l=t(11978),a=t(31458),c=t(81565),d=t(84381),u=t(5493),f=t(23782),m=t(43240),p=t(11634),x=t(98150),h=t(82394);let v=(0,m.BX)("\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n"),g=f.Ry({password1:f.Z_(),password2:f.Z_(),code:f.Z_().optional()});function b(e){let{className:r,code:t,onSuccess:s,...o}=e,i=(0,u.cI)({resolver:(0,d.F)(g),defaultValues:{code:t}});(0,l.useRouter)();let{isSubmitting:f}=i.formState,m=(0,p.Db)(v,{form:i});return(0,n.jsx)(x.l0,{...i,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:i.handleSubmit(e=>{var r;return m({input:{...e,code:null!==(r=e.code)&&void 0!==r?r:""}}).then(e=>{var r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.passwordReset)&&(null==s||s())})}),children:[(0,n.jsx)(x.Wi,{control:i.control,name:"password1",render:e=>{let{field:r}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"New Password"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(h.I,{type:"password",...r})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsx)(x.Wi,{control:i.control,name:"password2",render:e=>{let{field:r}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Confirm New Password"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(h.I,{type:"password",...r})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsx)(x.Wi,{control:i.control,name:"code",render:e=>{let{field:r}=e;return(0,n.jsx)(x.xJ,{className:"hidden",children:(0,n.jsx)(x.NI,{children:(0,n.jsx)(h.I,{type:"hidden",...r})})})}}),(0,n.jsxs)(a.z,{type:"submit",className:"mt-2",disabled:f,children:[f&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Reset password"]})]}),(0,n.jsx)(x.zG,{className:"text-center"})]})})}function j(){let[e,r]=s.useState(!1),t=(0,l.useSearchParams)(),o=t.get("code")||void 0;return e?(0,n.jsx)("div",{className:"w-[350px] space-y-6",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(c.IconCheckCircled,{className:"h-12 w-12 text-successful-foreground"})}),(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"pb-4 text-sm text-muted-foreground",children:"Your password has been changed."}),(0,n.jsx)(i(),{replace:!0,href:"/auth/signin",className:(0,a.d)(),children:"Go to Sign In"})]})}):(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Please enter a new password for your account."})]}),(0,n.jsx)(b,{code:o,onSuccess:()=>r(!0)})]})}},31458:function(e,r,t){"use strict";t.d(r,{d:function(){return a},z:function(){return c}});var n=t(36164),s=t(3546),o=t(74047),i=t(98641),l=t(73492);let a=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:c=!1,...d}=e,u=c?o.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(a({variant:s,size:i,className:t})),ref:r,...d})});c.displayName="Button"},98150:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return x},pf:function(){return v},xJ:function(){return p},zG:function(){return g}});var n=t(36164),s=t(3546),o=t(74047),i=t(5493),l=t(73492),a=t(5266);let c=i.RV,d=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(d.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},f=()=>{let e=s.useContext(d),r=s.useContext(m),{getFieldState:t,formState:n}=(0,i.Gc)(),o=e.name||"root",l=t(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:a}=r;return{id:a,name:o,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...l}},m=s.createContext({}),p=s.forwardRef((e,r)=>{let{className:t,...o}=e,i=s.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...o})})});p.displayName="FormItem";let x=s.forwardRef((e,r)=>{let{className:t,required:s,...o}=e,{error:i,formItemId:c}=f();return(0,n.jsx)(a._,{ref:r,className:(0,l.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:c,...o})});x.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:l,formMessageId:a}=f();return(0,n.jsx)(o.g7,{ref:r,id:i,"aria-describedby":s?"".concat(l," ").concat(a):"".concat(l),"aria-invalid":!!s,...t})});h.displayName="FormControl";let v=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:o}=f();return(0,n.jsx)("div",{ref:r,id:o,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});v.displayName="FormDescription";let g=s.forwardRef((e,r)=>{let{className:t,children:s,...o}=e,{error:i,formMessageId:a}=f(),c=i?String(null==i?void 0:i.message):s;return c?(0,n.jsx)("p",{ref:r,id:a,className:(0,l.cn)("text-sm font-medium text-destructive",t),...o,children:c}):null});g.displayName="FormMessage"},82394:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(36164),s=t(3546),o=t(73492);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},5266:function(e,r,t){"use strict";t.d(r,{_:function(){return c}});var n=t(36164),s=t(3546),o=t(90893),i=t(98641),l=t(73492);let a=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(o.f,{ref:r,className:(0,l.cn)(a(),t),...s})});c.displayName=o.f.displayName},70652:function(e,r,t){e.exports=t(54007)},65122:function(e,r,t){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},79869:function(e,r,t){"use strict";t.d(r,{F:function(){return s},e:function(){return o}});var n=t(3546);function s(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function o(...e){return(0,n.useCallback)(s(...e),e)}},72205:function(e,r,t){"use strict";t.d(r,{WV:function(){return l},jH:function(){return a}});var n=t(65122),s=t(3546),o=t(30171),i=t(74047);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,s.forwardRef)((e,t)=>{let{asChild:o,...l}=e,a=o?i.g7:r;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(a,(0,n.Z)({},l,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&(0,o.flushSync)(()=>e.dispatchEvent(r))}},74047:function(e,r,t){"use strict";t.d(r,{A4:function(){return a},g7:function(){return i}});var n=t(65122),s=t(3546),o=t(79869);let i=(0,s.forwardRef)((e,r)=>{let{children:t,...o}=e,i=s.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:s.Children.count(e)>1?s.Children.only(null):(0,s.isValidElement)(e)?e.props.children:null);return(0,s.createElement)(l,(0,n.Z)({},o,{ref:r}),(0,s.isValidElement)(e)?(0,s.cloneElement)(e,void 0,t):null)}return(0,s.createElement)(l,(0,n.Z)({},o,{ref:r}),t)});i.displayName="Slot";let l=(0,s.forwardRef)((e,r)=>{let{children:t,...n}=e;return(0,s.isValidElement)(t)?(0,s.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let s=e[n],o=r[n],i=/^on[A-Z]/.test(n);i?s&&o?t[n]=(...e)=>{o(...e),s(...e)}:s&&(t[n]=s):"style"===n?t[n]={...s,...o}:"className"===n&&(t[n]=[s,o].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?(0,o.F)(r,t.ref):t.ref}):s.Children.count(t)>1?s.Children.only(null):null});l.displayName="SlotClone";let a=({children:e})=>(0,s.createElement)(s.Fragment,null,e);function c(e){return(0,s.isValidElement)(e)&&e.type===a}}},function(e){e.O(0,[7565,8415,5811,55,3594,9906,4007,240,3492,1565,410,3396,3375,5289,1744],function(){return e(e.s=14872)}),_N_E=e.O()}]);