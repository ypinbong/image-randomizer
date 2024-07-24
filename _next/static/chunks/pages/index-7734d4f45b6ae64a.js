(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3537)}])},3537:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),a=n(7294),o=n(9008),i=n.n(o),s=n(9747),c=n(4246),l=n(4440),d=n(1796),h=n(7969),m=n(6625),p=n(3305),f=n(9496),x=n(1191),u=n(9917),g=n(7105),j=n(2003),v=n.n(j);let w=e=>{let{enqueueSnackbar:t}=(0,f.Ds)(),n=()=>{navigator.clipboard.writeText(e).then(()=>{t("URL copied to clipboard.",{variant:"success"})}).catch(e=>{t("Failed to copy text.",{variant:"success"})})};return(0,r.jsx)(p.ZP,{onClick:()=>{n()},className:v().card,sx:e=>({[e.breakpoints.down("md")]:{paddingBlock:"5px !important"}}),children:(0,r.jsx)(x.Z,{title:"Click to copy this link!",followCursor:!0,children:(0,r.jsxs)(l.Z,{sx:e=>({display:"flex",columnGap:"10px",alignItems:"center",overflow:"hidden",cursor:"pointer",[e.breakpoints.down("sm")]:{flexDirection:"column"}}),children:[(0,r.jsx)(u.Z,{src:e,variant:"rounded",sx:{width:"100px",height:"100px"},children:(0,r.jsx)(g.Z,{variant:"circular",width:40,height:40})}),(0,r.jsx)(c.Z,{className:v().code,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",sx:e=>({[e.breakpoints.down("sm")]:{paddingTop:"5px",fontSize:"12px !important"}}),children:e})]})})})};var b=n(8163);let k=(0,a.forwardRef)(function(e,t){let{loading:n,spinnerSize:a,href:o,disabled:i,border:s,shape:c="normal",color:l,...d}=e;return(0,r.jsx)(b.Z,{ref:t,...o?{to:o}:{},...d,style:{boxShadow:"none",borderStyle:s,pointerEvents:i?"none":"auto",opacity:i?.5:1,height:"40px",...d.style,..."pill"===c?{borderRadius:30}:{}},children:d.children})});function N(){let{enqueueSnackbar:e}=(0,f.Ds)(),[t,n]=(0,a.useState)([]),[o,x]=(0,a.useState)(!1),u=(0,a.useRef)(null),g=()=>{setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"end"})},500)},j=(0,a.useCallback)(async()=>{x(!0);try{let r=t.length>=5,a=await Promise.all(Array.from({length:r?5:5-t.length},()=>fetch("https://picsum.photos/100/100")));a.map(e=>e.status).every(e=>200===e)?(n(e=>r?[...a.map(e=>e.url)]:[...e,...a.map(e=>e.url)]),g()):e("Failed to fetch images",{variant:"error"})}catch(t){console.log("index.tsx ~ line 29: error:",t),e("Failed to fetch images",{variant:"error"})}x(!1)},[e,t,n,x]),b=(0,a.useCallback)(async()=>{x(!0);try{let t=await fetch("https://picsum.photos/100/100");200===t.status?(n(e=>[...e,t.url]),g()):e("Failed to fetch image",{variant:"error"})}catch(t){e("Failed to fetch image",{variant:"error"})}x(!1)},[e,n,x]),N=(0,a.useCallback)(()=>{if(0===t.length)return;if(1===t.length)return n([]);let e=Math.floor(Math.random()*t.length);n(t=>[...t.filter((t,n)=>n!==e)])},[t,n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Image Randomizer"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:v().main,children:[(0,r.jsx)("div",{className:v().center}),(0,r.jsx)("div",{className:v().header,children:(0,r.jsx)(c.Z,{fontSize:"20px",className:v().code,children:"Random Image Generator"})}),(0,r.jsxs)("div",{className:v().listWrapper,children:[0===t.length&&(0,r.jsx)(l.Z,{className:v().card,sx:{border:"1px solid ".concat((0,d.Fq)("#fff",.2)," !important")},children:(0,r.jsx)(c.Z,{className:v().code,children:o?"Generating images...":"No Image to display. Click 'Add an Image' to get started."})}),(0,r.jsx)(h.Z,{children:(0,r.jsxs)(s.Z,{children:[t.map(e=>(0,r.jsx)(m.Z,{direction:"left",children:w(e)},e)),(0,r.jsx)(p.ZP,{className:v().card,onClick:b,sx:{cursor:"pointer",opacity:t.length>=5||o?.5:1,pointerEvents:t.length>=5||o?"none":"auto"},children:(0,r.jsx)(c.Z,{ref:u,className:v().code,children:"+ Add an Image"})})]})})]}),(0,r.jsxs)("div",{className:v().footer,children:[(0,r.jsx)(k,{variant:"contained",disabled:o,onClick:j,sx:{backgroundColor:"#fff !important",color:"#000 !important","&:hover":{backgroundColor:"".concat((0,d.Fq)("#fff",.7)," !important")}},children:(0,r.jsx)(c.Z,{className:v().code,textTransform:"none",children:t.length<5?"Add ".concat(5-t.length," Images"):"Randomize Images"})}),(0,r.jsx)(k,{variant:"outlined",onClick:N,disabled:o||0===t.length,sx:{borderColor:"#fff !important",color:"#fff !important","&:hover":{borderColor:"".concat((0,d.Fq)("#fff",.7)," !important"),color:"".concat((0,d.Fq)("#fff",.7)," !important")}},children:(0,r.jsx)(c.Z,{className:v().code,component:"span",textTransform:"none",children:"Remove a Random Image"})})]})]}),(0,r.jsx)(f.wT,{})]})}}},function(e){e.O(0,[980,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);