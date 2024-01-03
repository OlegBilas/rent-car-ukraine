"use strict";(self.webpackChunkrent_car_ukraine=self.webpackChunkrent_car_ukraine||[]).push([[714],{7714:function(n,e,t){t.d(e,{Z:function(){return Fe}});var r,i=t(9439),o=t(2791),a=t(9085),l=t(168),c=t(6444),d=["title","titleId"];function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function f(n,e){var t=n.title,i=n.titleId,a=u(n,d);return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",ref:e,"aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})))}var p,h,x,m,g,b,v=o.forwardRef(f),w=(t.p,t(454)),j=t(7828),y=c.ZP.ul(p||(p=(0,l.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(\n    1,\n    ","\n  );\n  grid-template-rows: auto;\n  grid-row-gap: ",";\n  grid-column-gap: ",";\n\n  margin-bottom: ",";\n\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(\n      2,\n      ","\n    );\n  }\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(\n      4,\n      ","\n    );\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("236px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width)}),(function(n){var e=n.theme;return(0,j.fL)("28px",e.width)}),(function(n){var e=n.theme;return(0,j.fL)("100px",e.width)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("302px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("274px",e.width)})),Z=c.ZP.li(h||(h=(0,l.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5px;\n"]))),k=c.ZP.button(x||(x=(0,l.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n  &.liked {\n    color: rgba(52, 112, 255, 1);\n  }\n  &.non-liked {\n    color: transparent;\n  }\n"]))),P=(0,c.ZP)(v)(m||(m=(0,l.Z)(["\n  fill: currentColor;\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.liked {\n    stroke: currentColor;\n  }\n  &.non-liked {\n    stroke: rgba(255, 255, 255, 0.8);\n  }\n  &:focus,\n  &:hover {\n    fill: rgba(52, 112, 255, 1);\n    stroke: currentColor;\n  }\n"]))),E=c.ZP.img(g||(g=(0,l.Z)(["\n  margin-bottom: 14px;\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n  object-fit: cover;\n  object-position: 50% 50%;\n  overflow: hidden;\n"]))),L=c.ZP.button(b||(b=(0,l.Z)(["\n  width: 100%;\n  padding: 12px;\n  text-align: center;\n  margin-top: ",";\n"])),(function(n){var e=n.theme;return(0,j.fL)("28px",e.width)})),T=t(6092),O=t(7762),S=function(n){var e=n.split(",");return{city:e[1],country:e[2]}},z=function(n){var e,t=n.address,r=n.rentalCompany,i=n.accessories,o=S(t),a=[o.city,o.country,r],l=(0,O.Z)(i);try{for(l.s();!(e=l.n()).done;){if(e.value.toLowerCase().includes("premium")){a.push("Premium");break}}}catch(c){l.e(c)}finally{l.f()}return a},I=function(n){var e=n.address,t=n.id,r=n.year,i=n.type,o=S(e);return[o.city,o.country,"id: ".concat(t),"Year: ".concat(r),"Type: ".concat(i)]},C=function(n){var e=n.fuelConsumption,t=n.engineSize;return["Fuel Consumption: ".concat(e),"Engine Size: ".concat(t)]};function A(n){return 10*Math.ceil(n/10)}var B,F,R,M,N,_,V=c.ZP.div(B||(B=(0,l.Z)(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  color: #121417;\n"]))),D=c.ZP.h2(F||(F=(0,l.Z)(["\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),K=c.ZP.span(R||(R=(0,l.Z)(["\n  color: #3470ff;\n"]))),H=c.ZP.span(M||(M=(0,l.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),$=t(3329),W=function(n){var e=n.car;return(0,$.jsxs)(V,{children:[(0,$.jsxs)(D,{children:[(0,$.jsxs)("span",{children:[e.make," "]}),(0,$.jsxs)(K,{children:[e.model,", "]}),(0,$.jsx)("span",{children:e.year})]}),(0,$.jsx)(H,{children:e.rentalPrice})]})},q=c.ZP.ul(N||(N=(0,l.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: start;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  & > li {\n    padding-left: 6px;\n    padding-right: 6px;\n    white-space: nowrap;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n  }\n  & > li:first-child {\n    padding-left: 0px;\n  }\n  & > li:last-child {\n    padding-right: 0px;\n    border-right: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]))),J=function(n){var e=n.carInfo;return(0,$.jsx)(q,{children:e.map((function(n,e){return(0,$.jsx)("li",{children:n},e)}))})},G=t(9434),Q=t(8649),X=t(3433),Y=["title","titleId"];function U(){return U=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},U.apply(this,arguments)}function nn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function en(n,e){var t=n.title,r=n.titleId,i=nn(n,Y);return o.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,_||(_=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})))}var tn,rn,on,an,ln,cn,dn,sn,un,fn,pn,hn,xn,mn,gn,bn,vn,wn,jn,yn,Zn,kn,Pn,En,Ln,Tn,On,Sn,zn,In,Cn=o.forwardRef(en),An=(t.p,c.ZP.div(tn||(tn=(0,l.Z)(["\n  position: relative;\n  width: ",";\n  max-width: 100%;\n  max-height: 100vh;\n  box-sizing: border-box;\n  overflow-y: scroll;\n  padding: 40px;\n  border-radius: 24px;\n  background: #fff;\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("296px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("620px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("541px",e.width)}))),Bn=c.ZP.img(rn||(rn=(0,l.Z)(["\n  width: 100%;\n  margin-bottom: 14px;\n  border-radius: 14px;\n\n  overflow: hidden;\n\n  object-fit: cover;\n  object-position: 50% 50%;\n"]))),Fn=c.ZP.button(on||(on=(0,l.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n"]))),Rn=(0,c.ZP)(Cn)(an||(an=(0,l.Z)(["\n  stroke: #121417;\n\n  &:focus,\n  &:hover {\n    stroke: rgba(52, 112, 255, 1);\n  }\n"]))),Mn=((0,c.ZP)(W)(ln||(ln=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.333;\n"]))),(0,c.ZP)(J)(cn||(cn=(0,l.Z)(["\n  margin-bottom: 4px;\n"])))),Nn=(0,c.ZP)(J)(dn||(dn=(0,l.Z)(["\n  margin-bottom: 14px;\n"]))),_n=c.ZP.p(sn||(sn=(0,l.Z)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n\n  color: #121417;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857;\n"]))),Vn=c.ZP.h3(un||(un=(0,l.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42857;\n"]))),Dn=c.ZP.ul(fn||(fn=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n\n  & > li {\n    padding: 7px 14px;\n    border-radius: 35px;\n    background-color: #f9f9f9;\n\n    color: #363535;\n    font-family: Montserrat;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: -0.24px;\n\n    & > span {\n      color: #3470ff;\n    }\n  }\n"]))),Kn=c.ZP.a(pn||(pn=(0,l.Z)(["\n  padding: 12px 50px;\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Hn=t(948),$n=function(n){var e=n.car,t=n.toggleModal,r=function(n){var e=n.rentalConditions,t=n.mileage,r=n.rentalPrice,i=e.split("\n"),o=i[0].slice(-2);return i=i.slice(1),[o].concat((0,X.Z)(i),[(0,$.jsx)(Hn.h3,{thousandSeparator:!0,displayType:"text",value:t}),(0,$.jsx)(Hn.h3,{valueIsNumericString:!0,thousandSeparator:!0,displayType:"text",suffix:"$",value:r})])}(e);return(0,$.jsxs)(An,{children:[(0,$.jsx)(Fn,{type:"button",onClick:function(){return t()},children:(0,$.jsx)(Rn,{width:24,height:24})}),(0,$.jsx)(Bn,{src:e.img.replace(new RegExp("upload/(.*?)/"),"upload/c_fill,g_auto,w_".concat(461,"/")),alt:"".concat(e.make," ").concat(e.model,", ").concat(e.year),width:"461"}),(0,$.jsx)(W,{car:e}),(0,$.jsx)(Mn,{carInfo:I(e)}),(0,$.jsx)(Nn,{carInfo:C(e)}),(0,$.jsx)(_n,{children:e.description}),(0,$.jsx)(Vn,{style:{marginBottom:8},children:"Accessories and functionalities:"}),(0,$.jsx)(J,{carInfo:e.accessories}),(0,$.jsx)(J,{carInfo:e.functionalities}),(0,$.jsx)(Vn,{style:{marginTop:24,marginBottom:8},children:"Rental Conditions:"}),(0,$.jsxs)(Dn,{children:[(0,$.jsxs)("li",{children:["Minimum age: ",(0,$.jsx)("span",{children:r[0]})]}),(0,$.jsx)("li",{children:r[1]}),(0,$.jsx)("li",{children:r[2]}),(0,$.jsxs)("li",{children:["Mileage: ",r[3]]}),(0,$.jsxs)("li",{children:["Price: ",r[4]]})]}),(0,$.jsx)(Kn,{href:"tel:+380730000000",children:"Rental car"})]})},Wn=t(4164),qn=c.ZP.div(hn||(hn=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(18, 20, 23, 0.5);\n  z-index: 100;\n"]))),Jn=document.querySelector("#modal-root"),Gn=function(n){var e=n.children,t=n.toggleModal;(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),document.body.classList.add("lock-scroll"),function(){window.removeEventListener("keydown",n),document.body.classList.remove("lock-scroll")}}),[t]);return(0,Wn.createPortal)((0,$.jsx)(qn,{onClick:function(n){n.target===n.currentTarget&&t()},children:e}),Jn)},Qn=function(n){var e=n.car,t=n.toggleModal;return(0,$.jsx)(Gn,{toggleModal:t,children:(0,$.jsx)($n,{car:e,toggleModal:t})})},Xn=function(n){var e=n.cars,t=(0,c.Fg)();e=(0,T.J)(e,274,t.width);var r=(0,o.useState)(!1),a=(0,i.Z)(r,2),l=a[0],d=a[1],s=(0,o.useState)(),u=(0,i.Z)(s,2),f=u[0],p=u[1],h=function(n){d((function(n){return!n})),p(n)},x=(0,G.I0)();return(0,$.jsxs)(y,{children:[e.map((function(n){return(0,$.jsxs)(Z,{children:[(0,$.jsx)(k,{type:"button",className:n.favorite?"liked":"non-liked",onClick:function(){return e=n.id,void x((0,Q.o)(e));var e},children:(0,$.jsx)(P,{width:18,height:18,className:n.favorite?"liked":"non-liked"})}),(0,$.jsx)(E,{src:n.img,alt:"".concat(n.make," ").concat(n.model,", ").concat(n.year),width:(0,j.fL)(274,t.width),height:"268"}),(0,$.jsx)(W,{car:n}),(0,$.jsx)(J,{carInfo:z(n)}),(0,$.jsx)(J,{carInfo:(e=n,[e.type,e.model,e.mileage,e.functionalities[0]])}),(0,$.jsx)(L,{className:"accent-button",type:"buton",onClick:function(){return h(n)},children:"Learn more"})]},n.id);var e})),l&&(0,$.jsx)(Qn,{car:f,toggleModal:h})]})},Yn=t(5705),Un=t(1413),ne=(0,c.ZP)(Yn.l0)(xn||(xn=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  row-gap: 18px;\n  column-gap: 8px;\n  margin-bottom: ",";\n\n  @media screen and (min-width: ",") {\n    align-items: flex-end;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width)}),w.v.DESKTOP),ee=c.ZP.label(mn||(mn=(0,l.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28571;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PRETABLET),te=(0,c.ZP)(Yn.gN)(gn||(gn=(0,l.Z)(["\n  padding: 14px 18px;\n  margin-top: 8px;\n  box-sizing: border-box;\n  border-radius: 14px;\n  border: none;\n  background: #f7f7fb;\n  color: #121417;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n  }\n"])),w.v.TABLET),re=(0,c.ZP)(te)(bn||(bn=(0,l.Z)(["\n  width: ",";\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n  &::placeholder {\n    color: #121417;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("124px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("224px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("224px",e.width)})),ie=c.ZP.ul(vn||(vn=(0,l.Z)(["\n  position: absolute;\n  top: 52px;\n  z-index: 1;\n\n  width: 100%;\n  height: 272px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  padding: 14px 18px;\n  color: rgba(18, 20, 23, 0.2);\n  background-color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.25;\n\n  border-radius: 14px;\n  border: 1px solid rgba(18, 20, 23, 0.05);\n  background: #fff;\n  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(18, 20, 23, 0.05);\n    border-radius: 10px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #fff;\n  }\n\n  & > li:hover,\n  & > li:focus {\n    color: #121417;\n  }\n"])),w.v.TABLET),oe=(0,c.ZP)((function(n){return(0,$.jsx)(Hn.h3,(0,Un.Z)({valueIsNumericString:!0,thousandSeparator:!0,decimalScale:0,allowNegative:!1,prefix:n.prefix,suffix:n.suffix},n))}))(wn||(wn=(0,l.Z)(["\n  margin-top: 8px;\n  padding: 14px 14px;\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n  box-sizing: border-box;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    padding: 14px 18px;\n  }\n"])),w.v.TABLET),ae=(0,c.ZP)(oe)(jn||(jn=(0,l.Z)(["\n  width: ",";\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  border-radius: 14px;\n  font-family: Manrope;\n\n  &::placeholder {\n    color: #121417;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("125px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("125px",e.width)})),le=c.ZP.div(yn||(yn=(0,l.Z)(["\n  position: absolute;\n  width: 34px;\n  height: 20px;\n  z-index: 20;\n\n  top: 22px;\n  right: 0px;\n  background-color: #f7f7fb;\n  border: none;\n\n  pointer-events: none;\n\n  &:focus,\n  &:hover {\n    background-color: #f7f7fb;\n    border: none;\n  }\n"]))),ce=c.ZP.div(Zn||(Zn=(0,l.Z)(["\n  display: flex;\n"]))),de=c.ZP.div(kn||(kn=(0,l.Z)(["\n  position: relative;\n"]))),se=(0,c.ZP)(oe)(Pn||(Pn=(0,l.Z)(["\n  width: ",";\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  padding-left: ",";\n  @media screen and (min-width: ",") {\n    width: 160px;\n    padding-left: 70px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width,320)}),w.v.TABLET),ue=c.ZP.span(En||(En=(0,l.Z)(["\n  position: absolute;\n  top: 22px;\n  left: ",";\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  @media screen and (min-width: ",") {\n    left: 24px;\n    font-size: 18px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("12px",e.width,320)}),w.v.TABLET),fe=(0,c.ZP)(ue)(Ln||(Ln=(0,l.Z)([""]))),pe=(0,c.ZP)(oe)(Tn||(Tn=(0,l.Z)(["\n  width: ",";\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  padding-left: ",";\n  @media screen and (min-width: ",") {\n    width: 160px;\n    padding-left: 52px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("32px",e.width,320)}),w.v.TABLET),he=c.ZP.button(On||(On=(0,l.Z)(["\n  align-self: flex-end;\n  padding: 14px ",";\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  @media screen and (min-width: ",") {\n    padding: 14px 44px;\n  }\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n  text-align: center;\n"])),(function(n){var e=n.theme;return(0,j.fL)("34px",e.width,320)}),w.v.TABLET),xe=c.ZP.div(Sn||(Sn=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n  gap: 8px;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PRETABLET),me=c.ZP.div(zn||(zn=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n  gap: 8px;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PREDESKTOP),ge=["title","titleId"];function be(){return be=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},be.apply(this,arguments)}function ve(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function we(n,e){var t=n.title,r=n.titleId,i=ve(n,ge);return o.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,In||(In=o.createElement("path",{stroke:"#121417",d:"m5 12.5 5-5 5 5"})))}var je,ye=o.forwardRef(we),Ze=(t.p,["title","titleId"]);function ke(){return ke=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ke.apply(this,arguments)}function Pe(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Ee(n,e){var t=n.title,r=n.titleId,i=Pe(n,Ze);return o.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,je||(je=o.createElement("path",{stroke:"#121417",d:"m5 7.5 5 5 5-5"})))}var Le,Te=o.forwardRef(Ee),Oe=(t.p,t(4809)),Se=t(6727),ze={make:"",rentalPrice:"",mileageFrom:"",mileageTo:""},Ie=function(n){var e=n.setQuery,t=(0,G.v9)(Oe.H3),r=(0,G.v9)(Oe.Wz),a=(0,o.useState)([]),l=(0,i.Z)(a,2),c=l[0],d=l[1],s=(0,o.useState)(!1),u=(0,i.Z)(s,2),f=u[0],p=u[1],h=(0,o.useState)(!1),x=(0,i.Z)(h,2),m=x[0],g=x[1];(0,o.useEffect)((function(){d(function(n){for(var e=n.map((function(n){var e=n.rentalPrice;return Number.parseInt(e.replaceAll(",","").replaceAll("$",""))})).reduce((function(n,e){return e<n.min&&(n.min=e),e>n.max&&(n.max=e),n}),{min:Number.MAX_SAFE_INTEGER,max:0}),t=A(e.min),r=A(e.max),i=[],o=t;o<=r;o+=10)i.push(o);return i}(r))}),[r]);var b=function(){p((function(n){return!n}))},v=function(){g((function(n){return!n}))},w=function(n,e,t){return n.map((function(n){return(0,$.jsx)("li",{onClick:function(){e(t,n)},children:n},n)}))};return(0,$.jsx)(Yn.J9,{initialValues:ze,validationSchema:Se.Ry().shape({make:Se.Z_().oneOf(t,"Invalid make of car"),rentalPrice:Se.Rx().oneOf(c,"Invalid rental price of car"),mileageFrom:Se.Rx().lessThan(Se.iH("mileageTo")>0?Se.iH("mileageTo"):Number.MAX_SAFE_INTEGER,"From should be < To"),mileageTo:Se.Rx().moreThan(Se.iH("mileageFrom")>0?Se.iH("mileageFrom"):0,"To should be > From")}),onSubmit:function(n){e(n),p(!1),g(!1)},children:function(n){var r=n.values,i=n.setFieldValue;return(0,$.jsxs)(ne,{children:[(0,$.jsxs)(xe,{children:[(0,$.jsxs)(ee,{children:["Car brand",(0,$.jsxs)(de,{children:[(0,$.jsx)(re,{name:"make",type:"text",onClick:b,placeholder:"Enter the text",autoComplete:"off"}),f&&(0,$.jsxs)(ie,{children:[" ",w(t,i,"make")]}),(0,$.jsx)(le,{children:f?(0,$.jsx)(ye,{width:20,height:20}):(0,$.jsx)(Te,{width:20,height:20})}),(0,$.jsx)(Yn.Bc,{name:"make"})]})]}),(0,$.jsxs)(ee,{children:["Price/1 hour",(0,$.jsxs)(de,{children:[(0,$.jsx)(ae,{onClick:v,value:r.rentalPrice,onValueChange:function(n){return i("rentalPrice",n.floatValue)},prefix:"To ",suffix:"$",placeholder:"To $",autoComplete:"off"}),m&&(0,$.jsx)(ie,{children:w(c,i,"rentalPrice")}),(0,$.jsx)(le,{children:m?(0,$.jsx)(ye,{width:20,height:20}):(0,$.jsx)(Te,{width:20,height:20})}),(0,$.jsx)(Yn.Bc,{name:"rentalPrice"})]})]})]}),(0,$.jsxs)(ee,{children:["\u0421ar mileage/km",(0,$.jsxs)(ce,{children:[(0,$.jsxs)(de,{children:[(0,$.jsx)(ue,{children:"From "}),(0,$.jsx)(se,{value:r.mileageFrom,onValueChange:function(n){return i("mileageFrom",n.floatValue)}}),(0,$.jsx)(Yn.Bc,{name:"mileageFrom"})]}),(0,$.jsxs)(de,{children:[(0,$.jsx)(fe,{children:"To "}),(0,$.jsx)(pe,{value:r.mileageTo,onValueChange:function(n){return i("mileageTo",n.floatValue)}}),(0,$.jsx)(Yn.Bc,{name:"mileageTo"})]})]})]}),(0,$.jsxs)(me,{children:[(0,$.jsx)(he,{className:"accent-button",type:"submit",children:"Search"}),(0,$.jsx)(he,{className:"accent-button",type:"reset",onClick:function(n){e(n),p(!1),g(!1)},children:"Reset"})]})]})}})},Ce=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,i=[];if(0===n.lenth)return i;var o=e.make,a=e.rentalPrice,l=e.mileageFrom,c=e.mileageTo;i=(0,X.Z)(n),o&&(i=i.filter((function(n){return n.make===o}))),a&&(i=i.filter((function(n){return Number.parseInt(n.rentalPrice.replaceAll("$","").replaceAll(",",""))<=Number.parseInt(a)}))),l&&(i=i.filter((function(n){return n.mileage>=l}))),c&&(i=i.filter((function(n){return n.mileage<=c})));var d=t*r,s=i.slice(0,d);return{overallLength:i.length,carsFiltered:s}},Ae=c.ZP.button(Le||(Le=(0,l.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #3470ff;\n  background-color: inherit;\n  border: none;\n\n  font-size: ",";\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    background-color: inherit;\n    color: rgba(11, 68, 205, 1);\n    transform: scale(1.1);\n  }\n"])),(function(n){var e=n.theme;return(0,j.i)("16px",e.width)})),Be=t(6907),Fe=function(n){var e=n.allCars,t=n.title,r=(0,o.useState)({}),l=(0,i.Z)(r,2),c=l[0],d=l[1],s=(0,o.useState)(1),u=(0,i.Z)(s,2),f=u[0],p=u[1],h=(0,o.useState)([]),x=(0,i.Z)(h,2),m=x[0],g=x[1],b=(0,o.useRef)();(0,o.useEffect)((function(){p(1),g([]),b.current=!1}),[c]),(0,o.useEffect)((function(){var n=Ce(e,c,f);g(n.carsFiltered),0===n.overallLength&&1===f&&(b.current=!0)}),[e,f,c]);return(0,$.jsxs)("section",{children:[(0,$.jsx)(Be.ql,{children:(0,$.jsx)("title",{children:t})}),(0,$.jsx)(Ie,{setQuery:d}),(0,$.jsx)(Xn,{cars:m}),!b.current&&(0,$.jsx)(Ae,{type:"buttton",onClick:function(){var n=Ce(e,c,f);if(p((function(n){return n+1})),0===n.overallLength&&1===f)return a.Am.error("We didn't find any info on your request!"),void(b.current=!0);n.overallLength===n.carsFiltered.length&&(a.Am.warn("It's the end of the collection!"),b.current=!0),g(n.carsFiltered)},children:"Load more"})]})}},6092:function(n,e,t){t.d(e,{J:function(){return o}});var r=t(1413),i=t(7828),o=function(n,e,t){var o=(0,i.V)(e,t);return n.map((function(n){var e=n.img.replace("upload/","upload/c_fill,g_auto,w_".concat(o,"/"));return(0,r.Z)((0,r.Z)({},n),{},{img:e})}))}}}]);
//# sourceMappingURL=714.732a6ad8.chunk.js.map