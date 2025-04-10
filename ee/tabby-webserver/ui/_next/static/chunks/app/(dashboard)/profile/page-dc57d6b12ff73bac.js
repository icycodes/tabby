(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5688],{62002:function(e,r,t){Promise.resolve().then(t.bind(t,79879))},79879:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var n=t(36164),a=t(3546),s=t(2578),o=t(43240),l=t(98454),i=t(11634),d=t(73492),u=t(31458),c=t(81565),f=t(11208),m=t(52569);let x=(0,o.BX)("\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n"),p=()=>{var e;let[r,t]=(0,a.useState)(!1),[o,p]=(0,a.useState)(""),[{data:h}]=(0,l.P)(),v=(0,i.Db)(x,{onError(e){s.A.error(e.message)}});if(!(null==h?void 0:null===(e=h.me)||void 0===e?void 0:e.email))return null;let w=async()=>{var e;t(!0);let r=await v({avatarBase64:o.split(",")[1],id:h.me.id});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.uploadUserAvatarBase64)===!0&&(await (0,d.gw)(1e3),(0,m.nY)(h.me.id),s.A.success("Successfully updated your profile picture!"),await (0,d.gw)(200)),p(""),t(!1)};return(0,n.jsxs)("div",{className:"grid gap-6",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"avatar-file",className:"absolute left-0 top-0 z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background/90 opacity-0 transition-opacity hover:opacity-100",children:(0,n.jsx)(c.IconCloudUpload,{})}),(0,n.jsx)("input",{id:"avatar-file",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:e=>{let r=e.target.files?e.target.files[0]:null;if(r){let e=parseFloat((r.size/1024).toFixed(2));if(e>500)return s.A.error("The image you are attempting to upload is too large. Please ensure the file size is under ".concat(500,"KB and try again."));let t=new FileReader;t.onloadend=()=>{let e=t.result;p(e)},t.readAsDataURL(r)}}}),o&&(0,n.jsx)("img",{src:o,className:"absolute left-0 top-0 z-10 h-16 w-16 rounded-full border object-cover",alt:"avatar to be uploaded"}),(0,n.jsx)(m.SQ,{className:(0,d.cn)("relative h-16 w-16 border",{"opacity-0":o})})]}),(0,n.jsx)(f.Z,{}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)(u.z,{type:"submit",disabled:!o||r,onClick:w,className:"mr-5 w-40",children:[r&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]}),(0,n.jsx)("div",{className:"flex flex-1 justify-end",children:(0,n.jsx)("p",{className:" text-xs text-muted-foreground lg:text-sm",children:"Square image recommended. Accepted file types: .png, .jpg. Max file size: ".concat(500,"KB.")})})]})]})};var h=t(84381),v=t(5493),w=t(23782),j=t(98150),g=t(82394),N=t(29),b=t(90379);let y=(0,o.BX)("\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n"),S=e=>{var r;let{onSuccess:t,defaultValues:a}=e,[{data:s,fetching:o}]=(0,l.P)(),d=null==s?void 0:null===(r=s.me)||void 0===r?void 0:r.isSsoUser,m=w.Ry({name:w.Z_()}),x=(0,v.cI)({resolver:(0,h.F)(m),defaultValues:a}),{isSubmitting:p}=x.formState,{name:b}=x.watch(),S=(0,i.Db)(y,{form:x,onCompleted(e){(null==e?void 0:e.updateUserName)&&(null==t||t())}}),C=async e=>{await S({id:s.me.id,name:e.name})},_=b!==a.name;return(0,n.jsx)(j.l0,{...x,children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:x.handleSubmit(C),children:[(0,n.jsx)(j.Wi,{control:x.control,name:"name",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{children:"Name"}),(0,n.jsx)(j.NI,{children:(0,n.jsxs)(N.u,{children:[(0,n.jsx)(N.aJ,{asChild:!0,children:(0,n.jsx)(g.I,{className:"w-full md:w-[350px]",...r,disabled:o||d})}),(0,n.jsx)(N._v,{hidden:!d,align:"end",side:"top",children:"The name cannot be altered for users created through SSO"})]})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsx)(j.zG,{}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)(u.z,{type:"submit",disabled:!b||!_||p,className:"w-40",children:[p&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},C=()=>{let[{data:e},r]=(0,l.P)();return e?(0,n.jsx)(S,{onSuccess:()=>{s.A.success("Name is updated"),r()},defaultValues:{name:e.me.name}}):(0,n.jsx)(b.cg,{})};var _=t(4302);let I=(0,o.BX)("\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n"),A=e=>{let{onSuccess:r,showOldPassword:t}=e,[s,o]=a.useState(!1),[l,d]=a.useState(!1),m=w.Ry({oldPassword:t?w.Z_():w.Z_().optional(),newPassword1:w.Z_(),newPassword2:w.Z_()}),x=(0,v.cI)({resolver:(0,h.F)(m)}),{isSubmitting:p}=x.formState,{newPassword1:N}=x.watch(),[b]=(0,_.Y0)(N),y=(0,i.Db)(I,{form:x,onCompleted(e){(null==e?void 0:e.passwordChange)&&(null==r||r(),x.reset({newPassword1:"",newPassword2:"",oldPassword:""}))}}),S=async e=>{await y({input:e})},C=()=>{if(0===b.length)return o(!1);d(!0)};return(0,n.jsx)(j.l0,{...x,children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:x.handleSubmit(S),children:[t&&(0,n.jsx)(j.Wi,{control:x.control,name:"oldPassword",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Old password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(g.I,{className:"w-full md:w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(j.Wi,{control:x.control,name:"newPassword1",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"New password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(g.I,{className:"w-full md:w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r,onFocus:()=>o(!0),onBlur:C})})]})}}),(0,n.jsx)(_.Lu,{password:N||"",showPasswordSchema:s,passworErrors:b,showPasswordError:l})]}),(0,n.jsx)(j.Wi,{control:x.control,name:"newPassword2",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Confirm new password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(g.I,{className:"w-full md:w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsx)(j.zG,{}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)(u.z,{type:"submit",disabled:p,className:"w-40",children:[p&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},E=()=>{var e;let[{data:r},t]=(0,l.P)();return r?(0,n.jsx)(A,{onSuccess:()=>{s.A.success("Password is updated"),t()},showOldPassword:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.isPasswordSet}):(0,n.jsx)(b.cg,{})};var P=t(71480);let R=()=>{var e;let[{data:r}]=(0,l.P)();return(0,n.jsx)("div",{children:(0,n.jsx)(g.I,{disabled:!0,className:"w-full md:w-[350px]",value:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.email,onChange:P.Z})})};var T=t(79972);let z=e=>{var r;let{title:t,description:a,footer:s,footerClassname:o,className:i,hideForSsoUser:u,children:c,...m}=e,[{data:x}]=(0,l.P)(),p=null==x?void 0:null===(r=x.me)||void 0===r?void 0:r.isSsoUser;return p&&u?null:(0,n.jsxs)("div",{className:(0,d.cn)("flex w-full flex-col gap-8 rounded-lg border p-6 pb-0 xl:w-[800px]",i),...m,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(T.ll,{children:t}),a&&(0,n.jsx)("div",{className:"mt-4 text-sm text-muted-foreground",children:a})]}),(0,n.jsx)(T.aY,{className:"p-0",children:c}),(0,n.jsxs)("div",{className:(0,d.cn)("rounded-b-lg pb-6 text-sm text-muted-foreground",o),children:[!!s&&(0,n.jsx)(f.Z,{className:"mb-6"}),s]})]})};function k(){return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,n.jsx)(z,{title:"Your Name",footerClassname:"pb-0",children:(0,n.jsx)(C,{})}),(0,n.jsx)(z,{title:"Your Email",description:"This will be the email you use to log in and receive notifications.",footer:"The feature to change your email address will be available in a future release.",children:(0,n.jsx)(R,{})}),(0,n.jsx)(z,{title:"Your Avatar",description:"This is your avatar image.",footerClassname:"pb-0",children:(0,n.jsx)(p,{})}),(0,n.jsx)(z,{title:"Change Password",footerClassname:"pb-0",hideForSsoUser:!0,children:(0,n.jsx)(E,{})})]})}},4302:function(e,r,t){"use strict";t.d(r,{Lu:function(){return f},Y0:function(){return c}});var n,a,s=t(36164),o=t(3546),l=t(74630),i=t(23782),d=t(73492);(n=a||(a={})).LOWERCASE_MSISSING="lowercase_missing",n.UPPERCASE_MSISSING="uppercase_missing",n.NUMBER_MISSING="number_missing",n.SPECIAL_CHAR_MISSING="special_char_missing",n.AT_LEAST_EIGHT_CHAR="at_least_eight_char",n.AT_MOST_TWENTY_CHAT="at_most_twenty_char";let u=i.Z_().refine(e=>/[a-z]/.test(e),{params:{errorCode:a.LOWERCASE_MSISSING}}).refine(e=>/[A-Z]/.test(e),{params:{errorCode:a.UPPERCASE_MSISSING}}).refine(e=>/\d/.test(e),{params:{errorCode:a.NUMBER_MISSING}}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{params:{errorCode:a.SPECIAL_CHAR_MISSING}}).refine(e=>e.length>=8,{params:{errorCode:a.AT_LEAST_EIGHT_CHAR}}).refine(e=>e.length<=20,{params:{errorCode:a.AT_MOST_TWENTY_CHAT}}),c=e=>{let[r,t]=o.useState([]);return o.useEffect(()=>{if(!(0,l.Z)(e))try{u.parse(e),t([])}catch(e){e instanceof i.jm&&t(e.issues.map(e=>e.params.errorCode))}},[e]),[r,t]};function f(e){let{password:r,showPasswordSchema:t,passworErrors:n,showPasswordError:o}=e;function l(e){let{errorCode:t,text:a}=e;return(0,s.jsx)("li",{className:(0,d.cn)("py-0.5",{"text-green-600 dark:text-green-500":r.length>0&&!n.includes(t),"text-red-600 dark:text-red-500":o&&r.length>0&&n.includes(t)}),children:a})}return(0,s.jsxs)("div",{className:(0,d.cn)("relative text-sm transition-all",{"h-0 opacity-0 -z-10":!t,"mt-4 h-40 opacity-100":t}),children:[(0,s.jsx)("p",{className:"mb-0.5 text-xs text-muted-foreground",children:"Set up a strong password with"}),(0,s.jsxs)("ul",{className:"list-disc pl-4",children:[(0,s.jsx)(l,{errorCode:a.AT_LEAST_EIGHT_CHAR,text:"At least 8 characters long"}),(0,s.jsx)(l,{errorCode:a.AT_MOST_TWENTY_CHAT,text:"No more than 20 characters long"}),(0,s.jsx)(l,{errorCode:a.LOWERCASE_MSISSING,text:"At least one lowercase character"}),(0,s.jsx)(l,{errorCode:a.UPPERCASE_MSISSING,text:"At least one uppercase character"}),(0,s.jsx)(l,{errorCode:a.NUMBER_MISSING,text:"At least one numeric character"}),(0,s.jsx)(l,{errorCode:a.SPECIAL_CHAR_MISSING,text:"At least one special character , such as @#$%^&{}"})]})]})}},90379:function(e,r,t){"use strict";t.d(r,{PF:function(){return i},cg:function(){return o},tB:function(){return l}});var n=t(36164),a=t(73492),s=t(3448);let o=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("space-y-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},l=e=>{let{className:r,...t}=e;return(0,n.jsx)(s.O,{className:(0,a.cn)("h-4 w-full",r),...t})},i=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})}},31458:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return d}});var n=t(36164),a=t(3546),s=t(74047),o=t(98641),l=t(73492);let i=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:d=!1,...u}=e,c=d?s.g7:"button";return(0,n.jsx)(c,{className:(0,l.cn)(i({variant:a,size:o,className:t})),ref:r,...u})});d.displayName="Button"},79972:function(e,r,t){"use strict";t.d(r,{Ol:function(){return l},Zb:function(){return o},aY:function(){return u},eW:function(){return c},ll:function(){return i}});var n=t(36164),a=t(3546),s=t(73492);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});o.displayName="Card";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});l.displayName="CardHeader";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});i.displayName="CardTitle";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});d.displayName="CardDescription";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...a})});u.displayName="CardContent";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});c.displayName="CardFooter"},98150:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return c},l0:function(){return d},lX:function(){return p},pf:function(){return v},xJ:function(){return x},zG:function(){return w}});var n=t(36164),a=t(3546),s=t(74047),o=t(5493),l=t(73492),i=t(5266);let d=o.RV,u=a.createContext({}),c=e=>{let{...r}=e;return(0,n.jsx)(u.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},f=()=>{let e=a.useContext(u),r=a.useContext(m),{getFieldState:t,formState:n}=(0,o.Gc)(),s=e.name||"root",l=t(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:i}=r;return{id:i,name:s,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...l}},m=a.createContext({}),x=a.forwardRef((e,r)=>{let{className:t,...s}=e,o=a.useId();return(0,n.jsx)(m.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...s})})});x.displayName="FormItem";let p=a.forwardRef((e,r)=>{let{className:t,required:a,...s}=e,{error:o,formItemId:d}=f();return(0,n.jsx)(i._,{ref:r,className:(0,l.cn)(o&&"text-destructive",a&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:d,...s})});p.displayName="FormLabel";let h=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:o,formDescriptionId:l,formMessageId:i}=f();return(0,n.jsx)(s.g7,{ref:r,id:o,"aria-describedby":a?"".concat(l," ").concat(i):"".concat(l),"aria-invalid":!!a,...t})});h.displayName="FormControl";let v=a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:s}=f();return(0,n.jsx)("div",{ref:r,id:s,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});v.displayName="FormDescription";let w=a.forwardRef((e,r)=>{let{className:t,children:a,...s}=e,{error:o,formMessageId:i}=f(),d=o?String(null==o?void 0:o.message):a;return d?(0,n.jsx)("p",{ref:r,id:i,className:(0,l.cn)("text-sm font-medium text-destructive",t),...s,children:d}):null});w.displayName="FormMessage"},82394:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(36164),a=t(3546),s=t(73492);let o=a.forwardRef((e,r)=>{let{className:t,type:a,...o}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},5266:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(36164),a=t(3546),s=t(90893),o=t(98641),l=t(73492);let i=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(s.f,{ref:r,className:(0,l.cn)(i(),t),...a})});d.displayName=s.f.displayName},11208:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(36164),a=t(3546),s=t(74225),o=t(73492);let l=a.forwardRef((e,r)=>{let{className:t,orientation:a="horizontal",decorative:l=!0,...i}=e;return(0,n.jsx)(s.f,{ref:r,decorative:l,orientation:a,className:(0,o.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...i})});l.displayName=s.f.displayName},3448:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(36164),a=t(73492);function s(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-border",r),...t})}},29:function(e,r,t){"use strict";t.d(r,{_v:function(){return u},aJ:function(){return d},pn:function(){return l},u:function(){return i}});var n=t(36164),a=t(3546),s=t(44421),o=t(73492);let l=s.zt,i=s.fC,d=s.xz;s.h_;let u=a.forwardRef((e,r)=>{let{className:t,sideOffset:a=4,...l}=e;return(0,n.jsx)(s.VY,{ref:r,sideOffset:a,className:(0,o.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...l})});u.displayName=s.VY.displayName},52569:function(e,r,t){"use strict";t.d(r,{SQ:function(){return N},Yt:function(){return g},nY:function(){return j}});var n=t(36164),a=t(3546),s=t(87782),o=t(21454),l=t(36327),i=t(98454),d=t(3765),u=t(73492),c=t(66612);let f=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(c.fC,{ref:r,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});f.displayName=c.fC.displayName;let m=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(c.Ee,{ref:r,className:(0,u.cn)("aspect-square h-full w-full",t),...a})});m.displayName=c.Ee.displayName;let x=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(c.NY,{ref:r,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});x.displayName=c.NY.displayName;var p=t(3448),h=t(30410).lW;let v="not_found",w=new Set,j=e=>{w.delete(e),(0,o.JG)("/avatar/".concat(e))};function g(e){var r;let{user:t,className:o,fallback:i}=e,c=null==t?void 0:t.id,j=c?"/avatar/".concat(c):null,{data:g,isLoading:N,error:b}=(0,l.Z)(j,e=>{if(!(!c||w.has(c)))return(0,d.Z)(e,{responseFormatter:async e=>{let r=await e.blob(),t=h.from(await r.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})}),y=a.useMemo(()=>{if(null==t?void 0:t.email)return(0,s.B)(t.email)},[null==t?void 0:t.email]);return N?(0,n.jsx)(p.O,{className:(0,u.cn)("h-16 w-16 rounded-full",o)}):((null==b?void 0:b.message)===v&&c&&w.add(c),g||y||!i)?!g&&y?(0,n.jsx)(s.Z,{className:(0,u.cn)("h-16 w-16",o),...y}):(0,n.jsxs)(f,{className:(0,u.cn)("h-16 w-16",o),children:[(0,n.jsx)(m,{src:g,alt:null==t?void 0:t.email,className:"object-cover"}),(0,n.jsx)(x,{children:null==t?void 0:null===(r=t.email)||void 0===r?void 0:r.substring(0,2)})]}):i}function N(e){let[{data:r}]=(0,i.P)();return(0,n.jsx)(g,{user:null==r?void 0:r.me,...e})}},98454:function(e,r,t){"use strict";t.d(r,{P:function(){return o}});var n=t(40055),a=t(43240);let s=(0,a.BX)("\n  query MeQuery {\n    me {\n      id\n      email\n      name\n      isAdmin\n      isOwner\n      authToken\n      isPasswordSet\n      isSsoUser\n    }\n  }\n"),o=()=>(0,n.aM)({query:s})},3765:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(44745),a=t(57778),s=t(79716),o=t(91302),l=t(66794);async function i(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var r;if(e.startsWith("/oauth/providers"))return!1;let t=null===(r=(0,l.bW)())||void 0===r?void 0:r.accessToken,n=(0,l.jW)();if(t)try{let{exp:e}=(0,s.o)(t);return(0,l.pw)(e)}catch(e){return!0}else if(n)return!(null==n?void 0:n.authorization);else return!0}(e))return l.gN.refreshToken(d).then(t=>f(e,r));let a=await n(e,u(r));return 401===a.status?(l.gN.clearAccessToken(),l.gN.refreshToken(d).then(t=>f(e,r))):m(a,r)}async function d(){var e,r;let t=null===(e=(0,l.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let n=await c(t);return null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.refreshToken}function u(e){var r,t;let n=new Headers(null==e?void 0:e.headers),a=null===(r=(0,l.bW)())||void 0===r?void 0:r.accessToken,s=(0,l.jW)();if(a)n.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken));else if(s){let e={Authorization:"Bearer ".concat(s.authorization),...s.headers},r=Object.keys(e);for(let t of r)n.append(t,e[t])}return{...e||{},headers:n}}async function c(e){let r=new n.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[n.Ek]}),t=r.createRequestOperation("mutation",(0,a.h)(o.Dp,{refreshToken:e}));return r.executeMutation(t)}function f(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;return n(e,u(r)).then(e=>m(e,r))}function m(e,r){return(null==e?void 0:e.ok)?(null==r?void 0:r.responseFormatter)?r.responseFormatter(e):(null==r?void 0:r.responseFormat)==="blob"?e.blob():e.json():(null==r?void 0:r.errorHandler)?r.errorHandler(e):void 0}},29434:function(e,r,t){"use strict";t.d(r,{M:function(){return i}});var n,a=t(3546),s=t(65292);let o=(n||(n=t.t(a,2)))["useId".toString()]||(()=>void 0),l=0;function i(e){let[r,t]=a.useState(o());return(0,s.b)(()=>{e||t(e=>null!=e?e:String(l++))},[e]),e||(r?`radix-${r}`:"")}},74225:function(e,r,t){"use strict";t.d(r,{f:function(){return u}});var n=t(65122),a=t(3546),s=t(72205);let o="horizontal",l=["horizontal","vertical"],i=(0,a.forwardRef)((e,r)=>{let{decorative:t,orientation:l=o,...i}=e,u=d(l)?l:o;return(0,a.createElement)(s.WV.div,(0,n.Z)({"data-orientation":u},t?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},i,{ref:r}))});function d(e){return l.includes(e)}i.propTypes={orientation(e,r,t){let n=e[r],a=String(n);return n&&!d(n)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${o}\`.`):null}};let u=i}},function(e){e.O(0,[7565,8415,5811,55,3594,340,9906,1283,3087,2429,240,4421,1454,4546,9275,3492,1565,410,3396,3375,5289,1744],function(){return e(e.s=62002)}),_N_E=e.O()}]);