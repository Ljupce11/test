(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(23),n(9)),s=n(5),l=n(17),u=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://stage.attainr.io/attainr-core/auth/authentication/api/public/authentication",{method:"GET",credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),n?o.a.createElement(s.a,{to:"/login"}):o.a.createElement("div",{className:"d-flex flex-grow-1 justify-content-center align-items-center vh-100"},o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))},m=function(){return o.a.createElement("h1",null,"Login page")};var h=function(){return o.a.createElement(i.a,null,o.a.createElement(s.b,{path:"/",exact:!0,component:u}),o.a.createElement(s.b,{path:"/login",component:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5902a281.chunk.js.map