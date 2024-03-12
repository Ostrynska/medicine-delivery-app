"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[505],{568:(n,e,r)=>{r.d(e,{$N:()=>g,$n:()=>y,Es:()=>m,N1:()=>u,Tm:()=>A,k2:()=>b,yP:()=>f});var o,t,i,a,s,d,l,c,p=r(528),h=r(197),x=r(475);const g=h.Ay.li(o||(o=(0,p.A)(["\n position: relative;\n display: flex;\n flex-direction: column;\n justify-content: space-evenly;\n\n padding: 1.5rem;\n border: 1px solid rgba(0, 0, 0, 0.1);\n max-height: 480px;\n max-width: 100%;\n background-color: white;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n cursor: pointer;\n > h3 {\n  text-transform: capitalize;\n }\n &:hover,\n &:focus {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n"]))),u=((0,h.Ay)(x.k2)(t||(t=(0,p.A)(["\n width: 100%;\n padding: 20px 10px;\n font-weight: 500;\n border: 1px solid rgb(230 229 229 / 60%);\n border-radius: 4px;\n background-color: white;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  color: orangered;\n  border: 1px solid orangered;\n }\n\n &.active {\n  color: white;\n  background-color: orangered;\n }\n"]))),h.Ay.hr(i||(i=(0,p.A)(["\n margin: 0.25rem 0;\n\n border-top: 1px solid #000;\n opacity: 0.25;\n"])))),m=h.Ay.div(a||(a=(0,p.A)(["\n overflow-y: scroll;\n max-width: 340px;\n > p {\n  font-size: 14px;\n  margin: 1rem 0px 0.5rem;\n  font-family: Raleway, sans-serif;\n }\n"]))),f=h.Ay.div(s||(s=(0,p.A)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n > p {\n  font-size: 18px;\n  font-weight: 600;\n  color: orangered;\n }\n"]))),b=h.Ay.div(d||(d=(0,p.A)(["\n display: flex;\n justify-content: center;\n > img {\n  object-fit: cover;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  transition: transform 0.15s ease-in-out;\n  &:hover {\n   transform: scale(1.05);\n  }\n }\n"]))),y=h.Ay.button(l||(l=(0,p.A)(["\n padding: 8px 20px;\n border-radius: 4px;\n text-decoration: none;\n color: white;\n background-color: orangered;\n font-weight: 500;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  background-color: grey;\n }\n"]))),A=h.Ay.div(c||(c=(0,p.A)(["\n position: absolute;\n top: 12px;\n right: 12px;\n width: 25px;\n cursor: pointer;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n"])))},505:(n,e,r)=>{r.r(e),r.d(e,{default:()=>Q});var o,t,i,a,s,d=r(43),l=r(3),c=r(528),p=r(197);const h=p.Ay.form(o||(o=(0,c.A)(["\n width: 350px;\n padding: 1.5rem 0;\n > h2 {\n  width: 200px;\n  padding: 0 0 5px 0;\n  text-transform: uppercase;\n  color: orangered;\n  font-size: 30px;\n  font-weight: 800;\n  font-family: 'Sulphur Point', sans-serif;\n }\n"]))),x=p.Ay.div(t||(t=(0,c.A)(["\n margin-top: 20px;\n transition: all 250ms ease-in-out 0s;\n &:hover,\n &:focus {\n  color: orangered;\n }\n"]))),g=p.Ay.label(i||(i=(0,c.A)(["\n font-weight: 500;\n margin-bottom: 8px;\n font-size: 16px;\n font-weight: 500;\n line-height: 1;\n letter-spacing: 0.4px;\n"]))),u=p.Ay.input(a||(a=(0,c.A)(["\n width: 100%;\n padding: 10px 12px;\n border-radius: 8px;\n border: 1px solid #ccc;\n color: rgb(63, 63, 63);\n font-size: 16px;\n font-weight: 400;\n line-height: 1.5;\n transition: all 250ms ease-in-out 0s;\n &:hover,\n &:focus {\n  border: 1px solid orangered;\n  color: orangered;\n }\n"]))),m=p.Ay.textarea(s||(s=(0,c.A)(["\n width: 100%;\n font-size: 16px;\n border: 1px solid #ccc;\n border-radius: 4px;\n cursor: pointer;\n\n resize: none;\n min-height: 100px;\n background-color: transparent;\n color: rgb(0, 0, 0);\n line-height: 1.5;\n padding: 1.375rem 0.75rem;\n font-family: Raleway, sans-serif;\n transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n &:hover,\n &:focus {\n  border: 1px solid orangered;\n }\n"])));var f=r(579);const b=d.forwardRef(((n,e)=>{const[r,o]=(0,d.useState)({name:"",email:"",phone:"",address:""}),t=()=>r,i=()=>{o({name:"",email:"",phone:"",address:""})};return d.useImperativeHandle(e,(()=>({getData:t,clearFormValues:i}))),(0,f.jsxs)(h,{ref:e,children:[(0,f.jsx)("h2",{children:"Shipping Information"}),(0,f.jsxs)(x,{children:[(0,f.jsx)(g,{htmlFor:"name",children:"Name"}),(0,f.jsx)(u,{type:"text",id:"name",value:r.name,onChange:n=>o({...r,name:n.target.value}),required:!0})]}),(0,f.jsxs)(x,{children:[(0,f.jsx)(g,{htmlFor:"email",children:"Email"}),(0,f.jsx)(u,{type:"email",id:"email",value:r.email,onChange:n=>o({...r,email:n.target.value}),required:!0})]}),(0,f.jsxs)(x,{children:[(0,f.jsx)(g,{htmlFor:"phone",children:"Phone"}),(0,f.jsx)(u,{type:"tel",id:"phone",value:r.phone,onChange:n=>o({...r,phone:n.target.value}),required:!0})]}),(0,f.jsxs)(x,{children:[(0,f.jsx)(g,{htmlFor:"address",children:"Address"}),(0,f.jsx)(m,{id:"address",value:r.address,onChange:n=>o({...r,address:n.target.value}),required:!0})]})]})}));var y,A,v,w,j,k,z,C,S,E=r(902);const F=p.Ay.div(y||(y=(0,c.A)(["\n margin-left: 120px;\n padding: 1.5rem 0;\n width: 696px;\n\n > h2 {\n  padding: 0 0 20px 0;\n  text-transform: uppercase;\n  color: orangered;\n  font-size: 30px;\n  font-weight: 800;\n  font-family: 'Sulphur Point', sans-serif;\n }\n > ul {\n  margin-top: 34px;\n  height: 510px;\n  overflow-y: scroll;\n  > li {\n   display: flex;\n\n   padding: 1.5rem;\n   border: 1px solid rgba(0, 0, 0, 0.1);\n   max-height: 480px;\n   max-width: 100%;\n   background-color: white;\n   transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n   cursor: pointer;\n   &:not(:last-child) {\n    margin-bottom: 10px;\n   }\n   &:hover,\n   &:focus {\n    border: 1px solid orangered;\n   }\n  }\n }\n"]))),R=p.Ay.div(A||(A=(0,c.A)(["\n display: flex;\n flex-direction: column;\n padding: 0 0 0 28px;\n width: 100%;\n justify-content: space-evenly;\n > h3 {\n  text-transform: capitalize;\n }\n > p {\n  font-size: 14px;\n }\n"]))),N=p.Ay.h4(v||(v=(0,c.A)(["\n font-size: 16px;\n font-weight: 300;\n color: orangered;\n"]))),P=p.Ay.div(w||(w=(0,c.A)(["\n display: flex;\n justify-content: flex-end;\n"]))),M=p.Ay.button(j||(j=(0,c.A)(["\n cursor: pointer;\n\n padding: 8px 20px;\n border-radius: 4px;\n text-decoration: none;\n color: white;\n background-color: orangered;\n font-weight: 500;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  background-color: grey;\n }\n"]))),_=(0,p.Ay)(M)(k||(k=(0,c.A)(["\n background-color: grey;\n color: white;\n\n &:hover,\n &:focus {\n  background-color: orangered;\n }\n"]))),D=p.Ay.input(z||(z=(0,c.A)(["\n margin-left: 20px;\n width: 90px;\n padding: 8px 12px;\n border-radius: 8px;\n border: 1px solid #ccc;\n color: rgb(63, 63, 63);\n margin-right: 10px;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  border-color: orangered;\n }\n"]))),I=p.Ay.div(C||(C=(0,c.A)([""]))),L=p.Ay.p(S||(S=(0,c.A)(["\n margin: 56px 0 0 0;\n font-size: 18px;\n font-weight: 500;\n > span {\n  color: orangered;\n }\n"])));var q=r(568);const T=()=>{const n=(0,l.wA)(),e=(0,l.d4)((n=>n.cart.cartList)),r=parseFloat(e.reduce(((n,e)=>n+e.price*e.count),0).toFixed(2));return(0,f.jsxs)(F,{children:[(0,f.jsx)("h2",{children:"Cart"}),e.length>0&&(0,f.jsx)(P,{children:(0,f.jsx)(M,{onClick:()=>{n((0,E.sX)())},children:"Remove All"})}),e.length>0?(0,f.jsx)("ul",{children:e.map((e=>{let{id:r,name:o,photo:t,count:i}=e;return(0,f.jsxs)("li",{children:[(0,f.jsx)(q.k2,{children:(0,f.jsx)("img",{src:t,alt:o,width:100,height:100})}),(0,f.jsxs)(R,{children:[(0,f.jsx)("h3",{children:o}),(0,f.jsxs)(q.yP,{children:[(0,f.jsx)(N,{children:"Count:"}),(0,f.jsxs)(I,{children:[(0,f.jsx)(D,{type:"number",value:i,onChange:e=>((e,r)=>{const o=parseInt(r.target.value);n((0,E.V2)({id:e,count:o}))})(r,e),min:1,max:100}),(0,f.jsx)(_,{onClick:()=>(e=>{n((0,E.SM)(e))})(r),children:"Remove"})]})]})]})]},r)}))}):(0,f.jsx)("div",{style:{height:505,paddingTop:"50px"},children:(0,f.jsx)("p",{children:"Empty"})}),(0,f.jsxs)(L,{children:["Total Price: ",(0,f.jsx)("span",{children:r})]})]})};const B=r(154).A.create({baseURL:"https://medicine-delivery-app-backend-9d0u.onrender.com/api"});var V,X,K,O=r(529),$=r(349);const G=p.Ay.div(V||(V=(0,c.A)(["\n width: 100%;\n min-height: 88vh;\n padding-bottom: 8px;\n display: flex;\n justify-content: space-between;\n"]))),H=p.Ay.div(X||(X=(0,c.A)(["\n display: flex;\n justify-content: flex-end;\n"]))),J=p.Ay.button(K||(K=(0,c.A)(["\n cursor: pointer;\n\n padding: 18px 84px;\n text-decoration: none;\n color: orangered;\n background-color: white;\n font-weight: 500;\n font-size: 18px;\n border: 2px solid orangered;\n transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;\n\n &:hover,\n &:focus {\n  background-color: orangered;\n  color: white;\n }\n"]))),Q=()=>{const n=(0,l.wA)(),e=(0,l.d4)(O.KM),r=(0,l.d4)($.f),o=(0,d.useRef)(null);(0,d.useEffect)((()=>{localStorage.setItem("localStorage\u0421art",JSON.stringify(r))}),[r]);const t=(n,e)=>{const r=e.find((e=>e.drugslist.some((e=>e.id===n))));return r?r.name:null};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{hidden:!0,children:"Shopping cart"}),(0,f.jsxs)("section",{children:[(0,f.jsxs)(G,{children:[(0,f.jsx)(b,{ref:o}),(0,f.jsx)(T,{})]}),(0,f.jsx)(H,{children:(0,f.jsx)(J,{type:"submit",onClick:async i=>{i.preventDefault();const a=o.current.getData(),s=r.map((n=>t(n.id,e))),d=r.map((n=>({name:n.name,price:n.price,count:n.count,totalByDrug:n.price*n.count}))),l=d.reduce(((n,e)=>n+e.totalByDrug),0),c={...a,drugslist:[...new Set(s)].map((n=>({shop:n,orderList:d.filter((r=>t(r.id,e)===n)),totalPriceByShop:l}))),total:l};try{await(async n=>{try{const{data:e}=await B.post("/orders",n);return console.log("data",e),e}catch(e){throw console.error("Error adding order:",e),e}})(c),n((0,E.sX)()),o.current.clearFormValues(),alert("We got it! Order number: ".concat(Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),". Check your inbox shortly for a confirmation email."))}catch(p){console.error("Error while adding order:",p)}},children:"Submit"})})]})]})}},349:(n,e,r)=>{r.d(e,{f:()=>o});const o=n=>n.cart.cartList},529:(n,e,r)=>{r.d(e,{AQ:()=>t,KM:()=>o,NE:()=>i});const o=n=>n.shops.items,t=n=>n.shops.drugsList,i=n=>{let{shops:e}=n;return e.loading}}}]);
//# sourceMappingURL=505.61a5e0d6.chunk.js.map