"use strict";(self.webpackChunkrent_car_ukraine=self.webpackChunkrent_car_ukraine||[]).push([[944],{2463:function(n,e,t){t.d(e,{H:function(){return kn}});var r,o=t(9439),i=t(168),a=t(6444),l=t(2791),c=["title","titleId"];function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function f(n,e){var t=n.title,o=n.titleId,i=u(n,c);return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",ref:e,"aria-labelledby":o},i),t?l.createElement("title",{id:o},t):null,r||(r=l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})))}var d,p,h,g,x,m,b,v,j,w,y,Z,k=l.forwardRef(f),P=(t.p,a.ZP.ul(d||(d=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  grid-row-gap: 50px;\n  grid-column-gap: 28px;\n\n  margin-bottom: 100px;\n"])))),O=a.ZP.li(p||(p=(0,i.Z)(["\n  position: relative;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5px;\n"]))),I=a.ZP.button(h||(h=(0,i.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n  &.liked {\n    color: rgba(52, 112, 255, 1);\n  }\n  &.non-liked {\n    color: transparent;\n  }\n"]))),S=(0,a.ZP)(k)(g||(g=(0,i.Z)(["\n  fill: currentColor;\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.liked {\n    stroke: currentColor;\n  }\n  &.non-liked {\n    stroke: rgba(255, 255, 255, 0.8);\n  }\n  &:focus,\n  &:hover {\n    fill: rgba(52, 112, 255, 1);\n    stroke: currentColor;\n  }\n"]))),z=a.ZP.img(x||(x=(0,i.Z)(["\n  margin-bottom: 14px;\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n  object-fit: cover;\n  object-position: 50% 50%;\n  overflow: hidden;\n"]))),C=a.ZP.button(m||(m=(0,i.Z)(["\n  width: 100%;\n  padding: 12px;\n  text-align: center;\n  margin-top: 28px;\n"]))),E=t(1210),L=a.ZP.div(b||(b=(0,i.Z)(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  color: #121417;\n"]))),M=a.ZP.h2(v||(v=(0,i.Z)(["\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),R=a.ZP.span(j||(j=(0,i.Z)(["\n  color: #3470ff;\n"]))),T=a.ZP.span(w||(w=(0,i.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),N=t(3329),F=function(n){var e=n.car;return(0,N.jsxs)(L,{children:[(0,N.jsxs)(M,{children:[(0,N.jsxs)("span",{children:[e.make," "]}),(0,N.jsxs)(R,{children:[e.model,", "]}),(0,N.jsx)("span",{children:e.year})]}),(0,N.jsx)(T,{children:e.rentalPrice})]})},A=a.ZP.ul(y||(y=(0,i.Z)(["\n  display: flex;\n  justify-content: start;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  & > li {\n    padding-left: 6px;\n    padding-right: 6px;\n    white-space: nowrap;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n  }\n  & > li:first-child {\n    padding-left: 0px;\n  }\n  & > li:last-child {\n    padding-left: 6px;\n    border-right: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]))),V=function(n){var e=n.carInfo;return(0,N.jsx)(A,{children:e.map((function(n,e){return(0,N.jsx)("li",{children:n},e)}))})},_=t(9434),B=t(8649),$=t(3433),H=["title","titleId"];function W(){return W=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},W.apply(this,arguments)}function K(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function q(n,e){var t=n.title,r=n.titleId,o=K(n,H);return l.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},o),t?l.createElement("title",{id:r},t):null,Z||(Z=l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})))}var G,J,Q,X,Y,D,U,nn,en,tn,rn,on,an=l.forwardRef(q),ln=(t.p,a.ZP.div(G||(G=(0,i.Z)(["\n  position: relative;\n  width: 541px;\n\n  padding: 40px;\n  border-radius: 24px;\n  background: #fff;\n"])))),cn=a.ZP.img(J||(J=(0,i.Z)(["\n  margin-bottom: 14px;\n  border-radius: 14px;\n\n  overflow: hidden;\n\n  object-fit: cover;\n  object-position: 50% 50%;\n"]))),sn=a.ZP.button(Q||(Q=(0,i.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n"]))),un=(0,a.ZP)(an)(X||(X=(0,i.Z)(["\n  stroke: #121417;\n\n  &:focus,\n  &:hover {\n    stroke: rgba(52, 112, 255, 1);\n  }\n"]))),fn=((0,a.ZP)(F)(Y||(Y=(0,i.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.333;\n"]))),(0,a.ZP)(V)(D||(D=(0,i.Z)(["\n  margin-bottom: 4px;\n"])))),dn=(0,a.ZP)(V)(U||(U=(0,i.Z)(["\n  margin-bottom: 14px;\n"]))),pn=a.ZP.p(nn||(nn=(0,i.Z)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n\n  color: #121417;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857;\n"]))),hn=a.ZP.h3(en||(en=(0,i.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42857;\n"]))),gn=a.ZP.ul(tn||(tn=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n\n  & > li {\n    padding: 7px 14px;\n    border-radius: 35px;\n    background-color: #f9f9f9;\n\n    color: #363535;\n    font-family: Montserrat;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: -0.24px;\n\n    & > span {\n      color: #3470ff;\n    }\n  }\n"]))),xn=a.ZP.a(rn||(rn=(0,i.Z)(["\n  padding: 12px 50px;\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),mn=t(948),bn=function(n){var e=n.car,t=n.toggleModal,r=function(n){var e=n.rentalConditions,t=n.mileage,r=n.rentalPrice,o=e.split("\n"),i=o[0].slice(-2);return o=o.slice(1),[i].concat((0,$.Z)(o),[(0,N.jsx)(mn.h3,{thousandSeparator:!0,displayType:"text",value:t}),(0,N.jsx)(mn.h3,{valueIsNumericString:!0,thousandSeparator:!0,displayType:"text",suffix:"$",value:r})])}(e);return(0,N.jsxs)(ln,{children:[(0,N.jsx)(sn,{type:"button",onClick:function(){return t()},children:(0,N.jsx)(un,{width:24,height:24})}),(0,N.jsx)(cn,{src:e.img,alt:"".concat(e.make," ").concat(e.model,", ").concat(e.year),width:"461",height:"248"}),(0,N.jsx)(F,{car:e}),(0,N.jsx)(fn,{carInfo:(0,E.jb)(e)}),(0,N.jsx)(dn,{carInfo:(0,E.Id)(e)}),(0,N.jsx)(pn,{children:e.description}),(0,N.jsx)(hn,{style:{marginBottom:8},children:"Accessories and functionalities:"}),(0,N.jsx)(V,{carInfo:e.accessories}),(0,N.jsx)(V,{carInfo:e.functionalities}),(0,N.jsx)(hn,{style:{marginTop:24,marginBottom:8},children:"Rental Conditions:"}),(0,N.jsxs)(gn,{children:[(0,N.jsxs)("li",{children:["Minimum age: ",(0,N.jsx)("span",{children:r[0]})]}),(0,N.jsx)("li",{children:r[1]}),(0,N.jsx)("li",{children:r[2]}),(0,N.jsxs)("li",{children:["Mileage: ",r[3]]}),(0,N.jsxs)("li",{children:["Price: ",r[4]]})]}),(0,N.jsx)(xn,{href:"tel:+380730000000",children:"Rental car"})]})},vn=t(4164),jn=a.ZP.div(on||(on=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(18, 20, 23, 0.5);\n  z-index: 100;\n"]))),wn=document.querySelector("#modal-root"),yn=function(n){var e=n.children,t=n.toggleModal;(0,l.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),document.body.classList.add("lock-scroll"),function(){window.removeEventListener("keydown",n),document.body.classList.remove("lock-scroll")}}),[t]);return(0,vn.createPortal)((0,N.jsx)(jn,{onClick:function(n){n.target===n.currentTarget&&t()},children:e}),wn)},Zn=function(n){var e=n.car,t=n.toggleModal;return(0,N.jsx)(yn,{toggleModal:t,children:(0,N.jsx)(bn,{car:e,toggleModal:t})})},kn=function(n){var e=n.cars,t=(0,l.useState)(!1),r=(0,o.Z)(t,2),i=r[0],a=r[1],c=(0,l.useState)(),s=(0,o.Z)(c,2),u=s[0],f=s[1],d=function(n){a((function(n){return!n})),f(n)},p=(0,_.I0)();return(0,N.jsxs)(P,{children:[e.map((function(n){return(0,N.jsxs)(O,{children:[(0,N.jsx)(I,{type:"button",className:n.favorite?"liked":"non-liked",onClick:function(){return e=n.id,void p((0,B.o)(e));var e},children:(0,N.jsx)(S,{width:18,height:18,className:n.favorite?"liked":"non-liked"})}),(0,N.jsx)(z,{src:n.img,alt:"".concat(n.make," ").concat(n.model,", ").concat(n.year),width:"274",height:"268"}),(0,N.jsx)(F,{car:n}),(0,N.jsx)(V,{carInfo:(0,E.OR)(n)}),(0,N.jsx)(V,{carInfo:(0,E.gL)(n)}),(0,N.jsx)(C,{type:"buton",onClick:function(){return d(n)},children:"Learn more"})]},n.id)})),i&&(0,N.jsx)(Zn,{car:u,toggleModal:d})]})}},4824:function(n,e,t){t.d(e,{H:function(){return nn}});var r,o,i,a,l,c,s,u,f,d,p,h,g,x,m=t(9439),b=t(2791),v=t(5705),j=t(168),w=t(6444),y=t(1413),Z=t(948),k=t(3329),P=(0,w.ZP)(v.l0)(r||(r=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 18px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n"]))),O=w.ZP.label(o||(o=(0,j.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28571;\n  margin-bottom: 8px;\n"]))),I=(0,w.ZP)(v.gN)(i||(i=(0,j.Z)(["\n  display: block;\n  padding: 14px 18px;\n  border-radius: 14px;\n  border: none;\n  background: #f7f7fb;\n  color: #121417;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n\n  & > option {\n    color: rgba(18, 20, 23, 0.2);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.25;\n  }\n"]))),S=(0,w.ZP)(I)(a||(a=(0,j.Z)(["\n  width: 224px;\n"]))),z=(0,w.ZP)(I)(l||(l=(0,j.Z)(["\n  width: 125px;\n"]))),C=w.ZP.div(c||(c=(0,j.Z)(["\n  position: absolute;\n  width: 34px;\n  height: 20px;\n  padding: 0px 14 px;\n  z-index: 20;\n\n  top: 14px;\n  right: 0px;\n  background-color: #f7f7fb;\n  border: none;\n\n  pointer-events: none;\n\n  &:focus,\n  &:hover {\n    background-color: #f7f7fb;\n    border: none;\n  }\n"]))),E=(0,w.ZP)((function(n){var e=(0,b.useState)(""),t=(0,m.Z)(e,2),r=t[0],o=t[1];return(0,k.jsx)(Z.h3,(0,y.Z)({valueIsNumericString:!0,thousandSeparator:!0,decimalScale:0,allowNegative:!1,prefix:n.prefix,value:r,onValueChange:function(n){return o(n.formattedValue)}},n))}))(s||(s=(0,j.Z)(["\n  padding: 14px 18px;\n\n  width: 160px;\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n  box-sizing: border-box;\n"]))),L=w.ZP.div(u||(u=(0,j.Z)(["\n  position: relative;\n"]))),M=(0,w.ZP)(E)(f||(f=(0,j.Z)(["\n  width: 160px;\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  padding-left: 70px;\n"]))),R=w.ZP.span(d||(d=(0,j.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 24px;\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n"]))),T=w.ZP.span(p||(p=(0,j.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 184px;\n  z-index: 1;\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n"]))),N=(0,w.ZP)(E)(h||(h=(0,j.Z)(["\n  position: relative;\n  width: 160px;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  padding-left: 48px;\n"]))),F=w.ZP.button(g||(g=(0,j.Z)(["\n  padding: 14px 44px;\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n"]))),A=["title","titleId"];function V(){return V=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},V.apply(this,arguments)}function _(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function B(n,e){var t=n.title,r=n.titleId,o=_(n,A);return b.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:e,"aria-labelledby":r},o),t?b.createElement("title",{id:r},t):null,x||(x=b.createElement("path",{stroke:"#121417",d:"m5 12.5 5-5 5 5"})))}var $,H=b.forwardRef(B),W=(t.p,["title","titleId"]);function K(){return K=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},K.apply(this,arguments)}function q(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function G(n,e){var t=n.title,r=n.titleId,o=q(n,W);return b.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:e,"aria-labelledby":r},o),t?b.createElement("title",{id:r},t):null,$||($=b.createElement("path",{stroke:"#121417",d:"m5 7.5 5 5 5-5"})))}var J=b.forwardRef(G),Q=(t.p,t(9434)),X=t(4809),Y=t(1210),D=t(6727),U={make:"",rentalPrice:"",mileageFrom:"",mileageTo:""},nn=function(n){var e=n.setQuery,t=(0,Q.v9)(X.H3),r=(0,Q.v9)(X.Wz),o=(0,b.useState)([]),i=(0,m.Z)(o,2),a=i[0],l=i[1],c=(0,b.useState)(!1),s=(0,m.Z)(c,2),u=s[0],f=s[1],d=(0,b.useState)(!1),p=(0,m.Z)(d,2),h=p[0],g=p[1];(0,b.useEffect)((function(){l((0,Y.Ku)(r))}),[r]);var x=function(){f((function(n){return!n}))},j=function(){g((function(n){return!n}))},w=function(n){return n.map((function(n){return(0,k.jsx)("option",{value:n,onClick:function(){g(!1)},children:"".concat(n,"$")},n)}))};return(0,k.jsx)(v.J9,{initialValues:U,validationSchema:D.Ry().shape({make:D.Z_().oneOf(t,"Invalid make of car"),rentalPrice:D.Rx().oneOf(a,"Invalid value of price"),mileageFrom:D.Rx(),mileageTo:D.Rx()}),onSubmit:function(n){e(n)},children:function(n){var e,r=n.values,o=n.setFieldValue;return(0,k.jsxs)(P,{children:[(0,k.jsxs)(O,{children:["Car brand",(0,k.jsxs)(L,{children:[(0,k.jsxs)(S,{name:"make",type:"text",as:"select",onClick:x,onChange:function(n){o("make",n.target.value),f(!0)},children:[(0,k.jsx)("option",{value:"",children:"Enter the text"}),(e=t,e.map((function(n){return(0,k.jsx)("option",{value:n,onClick:function(){f(!1)},children:n},n)})))]}),(0,k.jsx)(C,{children:u?(0,k.jsx)(H,{width:20,height:20}):(0,k.jsx)(J,{width:20,height:20})}),(0,k.jsx)(v.Bc,{name:"make"})]})]}),(0,k.jsxs)(O,{children:["Price/1 hour",(0,k.jsxs)(L,{children:[(0,k.jsxs)(z,{name:"rentalPrice",type:"number",as:"select",onClick:j,onChange:function(n){o("rentalPrice",n.target.value),g(!0)},children:[(0,k.jsx)("option",{value:"",children:"To $"}),w(a)]}),(0,k.jsx)(C,{children:h?(0,k.jsx)(H,{width:20,height:20}):(0,k.jsx)(J,{width:20,height:20})}),(0,k.jsx)(v.Bc,{name:"rentalPrice"})]})]}),(0,k.jsxs)(O,{children:["\u0421ar mileage/km",(0,k.jsxs)(L,{children:[(0,k.jsx)(R,{children:"From "}),(0,k.jsx)(M,{value:r.mileageFrom,onValueChange:function(n){return o("mileageFrom",n.floatValue)}}),(0,k.jsx)(v.Bc,{name:"mileageFrom"}),(0,k.jsx)(T,{children:"To "}),(0,k.jsx)(N,{value:r.mileageTo,onValueChange:function(n){return o("mileageTo",n.floatValue)}}),(0,k.jsx)(v.Bc,{name:"mileageTo"})]})]}),(0,k.jsx)(F,{type:"submit",children:"Search"})]})}})}},458:function(n,e,t){t.d(e,{C:function(){return i}});var r,o=t(168),i=t(6444).ZP.button(r||(r=(0,o.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #3470ff;\n  background-color: inherit;\n  border: none;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n\n  &:focus,\n  &:hover {\n    background-color: inherit;\n    color: rgba(11, 68, 205, 1);\n  }\n"])))},7002:function(n,e,t){t.d(e,{R:function(){return o}});var r=t(3433),o=function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,i=[];if(0===n.lenth)return i;var a=e.make,l=e.rentalPrice,c=e.mileageFrom,s=e.mileageTo;i=(0,r.Z)(n),a&&(i=i.filter((function(n){return n.make===a}))),l&&(i=i.filter((function(n){return Number.parseInt(n.rentalPrice.replaceAll("$","").replaceAll(",",""))<=Number.parseInt(l)}))),c&&(i=i.filter((function(n){return n.mileage>=c}))),s&&(i=i.filter((function(n){return n.mileage<=s})));var u=t*o-o;return i.slice(u,u+o)}},1210:function(n,e,t){t.d(e,{Id:function(){return c},Ku:function(){return u},OR:function(){return i},gL:function(){return a},jb:function(){return l}});var r=t(7762),o=function(n){var e=n.split(",");return{city:e[1],country:e[2]}},i=function(n){var e,t=n.address,i=n.rentalCompany,a=n.accessories,l=o(t),c=[l.city,l.country,i],s=(0,r.Z)(a);try{for(s.s();!(e=s.n()).done;){if(e.value.toLowerCase().includes("premium")){c.push("Premium");break}}}catch(u){s.e(u)}finally{s.f()}return c},a=function(n){return[n.type,n.model,n.mileage,n.functionalities[0]]},l=function(n){var e=n.address,t=n.id,r=n.year,i=n.type,a=o(e);return[a.city,a.country,"id: ".concat(t),"Year: ".concat(r),"Type: ".concat(i)]},c=function(n){var e=n.fuelConsumption,t=n.engineSize;return["Fuel Consumption: ".concat(e),"Engine Size: ".concat(t)]};function s(n){return 10*Math.ceil(n/10)}var u=function(n){for(var e=n.map((function(n){var e=n.rentalPrice;return Number.parseInt(e.replaceAll(",","").replaceAll("$",""))})).reduce((function(n,e){return e<n.min&&(n.min=e),e>n.max&&(n.max=e),n}),{min:Number.MAX_SAFE_INTEGER,max:0}),t=s(e.min),r=s(e.max),o=[],i=t;i<=r;i+=10)o.push(i);return o}}}]);
//# sourceMappingURL=944.f8a37842.chunk.js.map