(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{55:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n.n(c),s=n(15),o=(n(55),n(33)),j=n.n(o),d=n(25),u=n(35),b=n(36),l=n(37),h=n(45),x=n(46),O=n(84),p=n(86),f=n(87),v=n(2);var m=function(e){return Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsxs)(p.a,{className:"error",children:[Object(v.jsx)(f.a,{variant:"h4",id:"errorHeading",children:"Ruh Ro - an error has occurred!"}),Object(v.jsx)(f.a,{id:"errorBody",children:e.children})]})})},g=n(43),k=n.n(g);n(62);var w=function(){return Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{className:"loading",children:Object(v.jsx)(k.a,{type:"bars",color:"black"})})})},y=n(89),P=n(44),C=n.n(P),I=n(88);var S=function(e){var t=r.useState(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return setTimeout((function(){return c(!0)}),800),Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{children:Object(v.jsxs)(O.a,{container:!0,spacing:3,children:[Object(v.jsxs)(O.a,{item:!0,xs:12,children:[Object(v.jsx)(f.a,{id:"setup",children:e.jokeData.setup}),Object(v.jsx)(y.a,{in:a,children:Object(v.jsx)(f.a,{id:"punchline",children:e.jokeData.punchline})})]}),Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsxs)(I.a,{variant:"contained",color:"secondary",onClick:e.reload,id:"addButton",children:[Object(v.jsx)(C.a,{}),"Get me a new joke!"]})})]})})})},A=a.a.createContext([{APIPath:""},function(e){}]),D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return n}(Object(x.a)(Error));function F(){return(F=Object(u.a)(j.a.mark((function e(t,n,r){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=11;break}return e.next=4,fetch(t);case 4:if(200!==(a=e.sent).status&&202!==a.status){e.next=10;break}return e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",r(c,""));case 10:throw new D("Failed to get an OK from the server");case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",r({},e.t0.stack));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var B=function(){var e=Object(r.useContext)(A),t=Object(s.a)(e,1)[0],n=Object(r.useState)({loading:!0,data:{},error:"",reload:!0}),a=Object(s.a)(n,2),c=a[0],i=a[1];if("function"==typeof t)throw new TypeError("Context state is a function");return Object(r.useEffect)((function(){c.loading&&function(e,t,n){F.apply(this,arguments)}(t.APIPath,c.reload,(function(e,t){return i(Object(d.a)(Object(d.a)({},c),{},{loading:!1,data:e,reload:!1,error:t}))}))}),[c,t.APIPath]),c.loading?Object(v.jsx)(w,{}):Object.entries(c.data).length>0?Object(v.jsx)(S,{jokeData:c.data,reload:function(){i(Object(d.a)(Object(d.a)({},c),{},{reload:!0,loading:!0}))}}):Object(v.jsxs)(m,{children:[" ",c.error?c.error:{}," "]})},E={APIPath:"https://official-joke-api.appspot.com/jokes/random"};var J=function(){var e=Object(r.useState)(E),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(A.Provider,{value:[n,function(e){return a(e)}],children:[Object(v.jsxs)(O.a,{container:!0,spacing:3,children:[Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{children:Object(v.jsx)(f.a,{variant:"h3",id:"header",children:"Your Go to Joke Simulator"})})}),Object(v.jsx)(B,{})]}),Object(v.jsx)(O.a,{container:!0,spacing:3,style:{position:"fixed",bottom:"0px",left:"0px"},children:Object(v.jsx)(O.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{children:"Copyright of DadJokesRUs"})})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),T()}},[[68,1,2]]]);
//# sourceMappingURL=main.03787fcc.chunk.js.map