"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[937],{568:(n,e,r)=>{r.d(e,{$N:()=>m,$n:()=>y,Es:()=>g,N1:()=>u,Tm:()=>w,k2:()=>b,yP:()=>f});var i,t,o,a,d,s,c,l,p=r(528),h=r(197),x=r(475);const m=h.Ay.li(i||(i=(0,p.A)(["\n position: relative;\n display: flex;\n flex-direction: column;\n justify-content: space-evenly;\n\n padding: 1.5rem;\n border: 1px solid rgba(0, 0, 0, 0.1);\n max-height: 429px;\n max-width: 100%;\n width: 326px;\n background-color: white;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n cursor: pointer;\n @media screen and (min-width: 576px) {\n  max-height: 389px;\n  width: 245px;\n }\n @media screen and (min-width: 768px) {\n  max-height: 397px;\n  width: 335px;\n }\n @media screen and (min-width: 1200px) {\n  padding: 1.5rem;\n  width: 390px;\n  max-height: 480px;\n  justify-content: center;\n }\n @media screen and (min-width: 1400px) {\n  width: 400px;\n }\n > h3 {\n  text-transform: capitalize;\n }\n &:hover,\n &:focus {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n"]))),u=((0,h.Ay)(x.k2)(t||(t=(0,p.A)(["\n width: 100%;\n padding: 20px 10px;\n font-weight: 500;\n border: 1px solid rgb(230 229 229 / 60%);\n border-radius: 4px;\n background-color: white;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  color: orangered;\n  border: 1px solid orangered;\n }\n\n &.active {\n  color: white;\n  background-color: orangered;\n }\n"]))),h.Ay.hr(o||(o=(0,p.A)(["\n margin: 0.25rem 0;\n\n border-top: 1px solid #000;\n opacity: 0.25;\n"])))),g=h.Ay.div(a||(a=(0,p.A)(["\n overflow-y: scroll;\n max-width: 340px;\n\n > p {\n  font-size: 14px;\n  margin-top: 1rem;\n  font-family: Raleway, sans-serif;\n  @media screen and (min-width: 1200px) {\n   margin: 1rem 0px 0.5rem;\n  }\n }\n"]))),f=h.Ay.div(d||(d=(0,p.A)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n > p {\n  font-size: 18px;\n  font-weight: 600;\n  color: orangered;\n }\n"]))),b=h.Ay.div(s||(s=(0,p.A)(["\n display: flex;\n justify-content: center;\n > img {\n  max-width: 100%;\n  height: 180px;\n  display: flex;\n  align-items: center;\n  object-fit: cover;\n  transition: transform 0.15s ease-in-out;\n  @media screen and (min-width: 576px) {\n   height: 118px;\n  }\n  @media screen and (min-width: 768px) {\n   height: 150px;\n   object-fit: contain;\n  }\n  @media screen and (min-width: 1200px) {\n   object-fit: cover;\n   height: 233px;\n  }\n  &:hover {\n   transform: scale(1.05);\n  }\n }\n"]))),y=h.Ay.button(c||(c=(0,p.A)(["\n padding: 8px 20px;\n border-radius: 4px;\n font-size: 14px;\n text-decoration: none;\n color: white;\n background-color: orangered;\n font-weight: 500;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n @media screen and (min-width: 1200px) {\n  font-size: 16px;\n }\n\n &:hover,\n &:focus {\n  background-color: grey;\n }\n"]))),w=h.Ay.div(l||(l=(0,p.A)(["\n position: absolute;\n top: 12px;\n right: 12px;\n width: 25px;\n cursor: pointer;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n"])))},937:(n,e,r)=>{r.r(e),r.d(e,{default:()=>tn});var i=r(43),t=r(3),o=r(899);const a=o.Ik().shape({name:o.Yj().required("Please enter your name").min(3,"Name must be at least 3 characters").max(20,"Name must not exceed 20 characters"),email:o.Yj().email("Invalid email").required("Please enter your email"),phone:o.Yj().matches(/^[0-9]+$/,"Phone number must contain only digits").min(10,"Phone number must be at least 10 digits").max(15,"Phone number must not exceed 15 digits").required("Please enter your phone number"),address:o.Yj().required("Please enter your address").min(5,"Address must be at least 5 characters").max(100,"Address must not exceed 100 characters")});var d,s,c,l,p,h,x=r(528),m=r(197);const u=m.Ay.p(d||(d=(0,x.A)(["\n color: orangered;\n font-size: 12px;\n"]))),g=m.Ay.form(s||(s=(0,x.A)(["\n width: 100%;\n padding: 1.5rem 0;\n @media screen and (min-width: 1200px) {\n  width: 350px;\n }\n > h2 {\n  width: 200px;\n  padding: 0 0 5px 0;\n  text-transform: uppercase;\n  color: orangered;\n  font-size: 30px;\n  font-weight: 800;\n  font-family: 'Sulphur Point', sans-serif;\n }\n"]))),f=m.Ay.div(c||(c=(0,x.A)(["\n margin-top: 5px;\n transition: all 250ms ease-in-out 0s;\n @media screen and (min-width: 1200px) {\n  margin-top: 20px;\n }\n &:hover,\n &:focus {\n  color: orangered;\n }\n"]))),b=m.Ay.label(l||(l=(0,x.A)(["\n font-weight: 500;\n margin-bottom: 8px;\n font-size: 16px;\n font-weight: 500;\n line-height: 1;\n letter-spacing: 0.4px;\n"]))),y=m.Ay.input(p||(p=(0,x.A)(["\n width: 100%;\n padding: 10px 12px;\n border-radius: 8px;\n border: 1px solid #ccc;\n color: rgb(63, 63, 63);\n font-size: 16px;\n font-weight: 400;\n line-height: 1.5;\n transition: all 250ms ease-in-out 0s;\n &:hover,\n &:focus {\n  border: 1px solid orangered;\n  color: orangered;\n }\n"]))),w=m.Ay.textarea(h||(h=(0,x.A)(["\n width: 100%;\n font-size: 16px;\n border: 1px solid #ccc;\n border-radius: 4px;\n cursor: pointer;\n\n resize: none;\n min-height: 100px;\n background-color: transparent;\n color: rgb(0, 0, 0);\n line-height: 1.5;\n padding: 1.375rem 0.75rem;\n font-family: Raleway, sans-serif;\n transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n &:hover,\n &:focus {\n  border: 1px solid orangered;\n }\n"])));var A=r(579);const j=i.forwardRef(((n,e)=>{const[r,t]=(0,i.useState)({name:"",email:"",phone:"",address:""}),[d,s]=(0,i.useState)({}),c=a,l=async n=>{const{id:e,value:r}=n.target;try{await o.PZ(c,e).validate(r),s({...d,[e]:""})}catch(i){s({...d,[e]:i.message})}},p=()=>r,h=()=>{t({name:"",email:"",phone:"",address:""})};return i.useImperativeHandle(e,(()=>({getData:p,clearFormValues:h}))),(0,A.jsxs)(g,{ref:e,children:[(0,A.jsx)("h2",{children:"Shipping Information"}),(0,A.jsxs)(f,{children:[(0,A.jsx)(b,{htmlFor:"name",children:"Name"}),(0,A.jsx)(y,{type:"text",id:"name",value:r.name,onBlur:l,onChange:n=>t({...r,name:n.target.value}),required:!0}),d.name&&(0,A.jsx)(u,{children:d.name})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(b,{htmlFor:"email",children:"Email"}),(0,A.jsx)(y,{type:"email",id:"email",value:r.email,onBlur:l,onChange:n=>t({...r,email:n.target.value}),required:!0}),d.email&&(0,A.jsx)(u,{children:d.email})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(b,{htmlFor:"phone",children:"Phone"}),(0,A.jsx)(y,{type:"tel",id:"phone",value:r.phone,onBlur:l,onChange:n=>t({...r,phone:n.target.value}),required:!0}),d.phone&&(0,A.jsx)(u,{children:d.phone})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(b,{htmlFor:"address",children:"Address"}),(0,A.jsx)(w,{id:"address",value:r.address,onBlur:l,onChange:n=>t({...r,address:n.target.value}),required:!0}),d.address&&(0,A.jsx)(u,{children:d.address})]})]})}));var v,k,z,P,C,S,F,E,N,q,B,R=r(902),I=r(568);const D=(0,m.Ay)(I.yP)(v||(v=(0,x.A)(["\n align-items: baseline;\n @media screen and (min-width: 576px) {\n  align-items: center;\n }\n"]))),M=(0,m.Ay)(I.k2)(k||(k=(0,x.A)(["\n width: 150px;\n height: 100px;\n > img {\n  height: 100px;\n  object-fit: contain;\n }\n"]))),T=m.Ay.div(z||(z=(0,x.A)(["\n padding: 1rem 0;\n width: 100%;\n @media screen and (min-width: 576px) {\n  padding: 1.5rem 0;\n }\n @media screen and (min-width: 1200px) {\n  margin-left: 120px;\n  width: 696px;\n }\n @media screen and (min-width: 1400px) {\n  width: 868px;\n }\n > h2 {\n  padding: 0 0 20px 0;\n  text-transform: uppercase;\n  color: orangered;\n  font-size: 30px;\n  font-weight: 800;\n  font-family: 'Sulphur Point', sans-serif;\n }\n > ul {\n  margin-top: 34px;\n  height: 350px;\n  overflow-y: scroll;\n  @media screen and (min-width: 576px) {\n   height: 510px;\n  }\n  > li {\n   display: flex;\n\n   padding: 1.5rem;\n   border: 1px solid rgba(0, 0, 0, 0.1);\n   max-height: 480px;\n   max-width: 100%;\n   background-color: white;\n   transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n   cursor: pointer;\n   &:not(:last-child) {\n    margin-bottom: 10px;\n   }\n   &:hover,\n   &:focus {\n    border: 1px solid orangered;\n   }\n  }\n }\n"]))),_=m.Ay.div(P||(P=(0,x.A)(["\n display: flex;\n flex-direction: column;\n padding: 0 0 0 18px;\n width: 100%;\n justify-content: space-evenly;\n @media screen and (min-width: 576px) {\n  padding: 0 0 0 28px;\n }\n > h3 {\n  text-transform: capitalize;\n }\n > p {\n  font-size: 14px;\n }\n"]))),L=m.Ay.h4(C||(C=(0,x.A)(["\n font-size: 16px;\n font-weight: 300;\n color: orangered;\n"]))),Y=m.Ay.div(S||(S=(0,x.A)(["\n display: flex;\n justify-content: flex-end;\n"]))),O=m.Ay.button(F||(F=(0,x.A)(["\n cursor: pointer;\n\n padding: 8px 20px;\n border-radius: 4px;\n text-decoration: none;\n color: white;\n background-color: orangered;\n font-weight: 500;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  background-color: grey;\n }\n"]))),V=(0,m.Ay)(O)(E||(E=(0,x.A)(["\n background-color: grey;\n color: white;\n\n &:hover,\n &:focus {\n  background-color: orangered;\n }\n"]))),X=m.Ay.input(N||(N=(0,x.A)(["\n margin-left: 30px;\n width: 70px;\n padding: 8px 12px;\n border-radius: 8px;\n border: 1px solid #ccc;\n color: rgb(63, 63, 63);\n\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n @media screen and (min-width: 576px) {\n  margin-right: 10px;\n  margin-left: 20px;\n  width: 90px;\n }\n &:hover,\n &:focus {\n  border-color: orangered;\n }\n"]))),$=m.Ay.div(q||(q=(0,x.A)(["\n display: flex;\n flex-direction: column;\n gap: 5px;\n @media screen and (min-width: 576px) {\n  flex-direction: row;\n  gap: 0px;\n }\n"]))),K=m.Ay.p(B||(B=(0,x.A)(["\n margin: 56px 0 0 0;\n\n font-size: 18px;\n font-weight: 500;\n @media screen and (min-width: 576px) {\n  margin: 46px 0 0 0;\n }\n @media screen and (min-width: 768px) {\n  margin: 56px 0 0 0;\n }\n > span {\n  color: orangered;\n }\n"]))),W=()=>{const n=(0,t.wA)(),e=(0,t.d4)((n=>n.cart.cartList)),r=parseFloat(e.reduce(((n,e)=>n+e.price*e.count),0).toFixed(2));return(0,A.jsxs)(T,{children:[(0,A.jsx)("h2",{children:"Cart"}),e.length>0&&(0,A.jsx)(Y,{children:(0,A.jsx)(O,{onClick:()=>{n((0,R.sX)())},children:"Remove All"})}),e.length>0?(0,A.jsx)("ul",{children:e.map((e=>{let{id:r,name:i,photo:t,count:o}=e;return(0,A.jsxs)("li",{children:[(0,A.jsx)(M,{children:(0,A.jsx)("img",{src:t,alt:i,width:100})}),(0,A.jsxs)(_,{children:[(0,A.jsx)("h3",{children:i}),(0,A.jsxs)(D,{children:[(0,A.jsx)(L,{children:"Count:"}),(0,A.jsxs)($,{children:[(0,A.jsx)(X,{type:"number",value:o,onChange:e=>((e,r)=>{const i=parseInt(r.target.value);n((0,R.V2)({id:e,count:i}))})(r,e),min:1,max:100}),(0,A.jsx)(V,{onClick:()=>(e=>{n((0,R.SM)(e))})(r),children:"Remove"})]})]})]})]},r)}))}):(0,A.jsx)("div",{style:{height:505,paddingTop:"50px"},children:(0,A.jsx)("p",{children:"Empty"})}),(0,A.jsxs)(K,{children:["Total Price: ",(0,A.jsx)("span",{children:r})]})]})};var G,H,J,Q=r(809),U=r(529),Z=r(349);const nn=m.Ay.div(G||(G=(0,x.A)(["\n width: 100%;\n min-height: 88vh;\n padding-bottom: 8px;\n @media screen and (min-width: 1200px) {\n  display: flex;\n  justify-content: space-between;\n }\n"]))),en=m.Ay.div(H||(H=(0,x.A)(["\n display: flex;\n justify-content: center;\n @media screen and (min-width: 576px) {\n  justify-content: flex-end;\n }\n"]))),rn=m.Ay.button(J||(J=(0,x.A)(["\n cursor: pointer;\n padding: 12px 64px;\n text-decoration: none;\n color: orangered;\n background-color: white;\n font-weight: 500;\n font-size: 16px;\n border: 2px solid orangered;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n @media screen and (min-width: 768px) {\n  padding: 18px 84px;\n  font-size: 18px;\n }\n &:hover,\n &:focus {\n  background-color: orangered;\n  color: white;\n }\n"]))),tn=()=>{const n=(0,t.wA)(),e=(0,t.d4)(U.KM),r=(0,t.d4)(Z.f),o=(0,i.useRef)(null);(0,i.useEffect)((()=>{localStorage.setItem("localStorage\u0421art",JSON.stringify(r))}),[r]);const a=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h1",{hidden:!0,children:"Shopping cart"}),(0,A.jsxs)("section",{children:[(0,A.jsxs)(nn,{children:[(0,A.jsx)(j,{ref:o}),(0,A.jsx)(W,{})]}),(0,A.jsx)(en,{children:(0,A.jsx)(rn,{type:"submit",onClick:async i=>{i.preventDefault();const t=o.current.getData(),d=r.map((n=>({name:n.name,price:n.price,count:n.count,totalByDrug:n.price*n.count,id:n.id,photo:n.photo}))),s=d.reduce(((n,r)=>{const i=((n,e)=>{for(const r of e)for(const e of r.drugslist)if(e.id===n)return r.name;return null})(r.id,e);return n[i]=n[i]||[],n[i].push(r),n}),{}),c={...t,drugslist:Object.entries(s).map((n=>{let[e,r]=n;return{shop:e,orderlist:r.map((n=>n)),totalPriceByShop:r.reduce(((n,e)=>n+Number(e.totalByDrug)),0).toFixed(2)}})),total:d.reduce(((n,e)=>n+e.totalByDrug),0).toFixed(2),order:a};try{await(0,Q.T)(c),n((0,R.sX)()),o.current.clearFormValues(),alert("    We got it! Order number: ".concat(a,".\n    Check your inbox shortly for a confirmation email."))}catch(l){console.error("Error while adding order:",l)}},children:"Submit"})})]})]})}},349:(n,e,r)=>{r.d(e,{f:()=>i});const i=n=>n.cart.cartList},529:(n,e,r)=>{r.d(e,{AQ:()=>t,KM:()=>i,NE:()=>o});const i=n=>n.shops.items,t=n=>n.shops.drugsList,o=n=>{let{shops:e}=n;return e.loading}},809:(n,e,r)=>{r.d(e,{T:()=>o,W:()=>t});const i=r(154).A.create({baseURL:"https://medicine-delivery-app-backend-9d0u.onrender.com/api"}),t=async()=>{try{const{data:n}=await i.get("/orders");return n}catch(n){throw console.error("Error adding order:",n),n}},o=async n=>{try{const{data:e}=await i.post("/orders",n);return e}catch(e){throw console.error("Error adding order:",e),e}}}}]);
//# sourceMappingURL=937.79763afe.chunk.js.map