"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n  background: #a76922;\r\n}\r\n\r\nh1 {\r\n  font-size: 4rem;\r\n  font-family: 'Aboreto', sans-serif;\r\n  color: #fff;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n#my-app {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 95%;\r\n  margin: auto;\r\n}\r\n\r\n.scores {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.scores-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  column-gap: 20px;\r\n}\r\n\r\n#refresh-btn {\r\n  background: #fff;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\r\n  padding: 8px;\r\n  border: 0;\r\n  border-radius: 4px;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n#refresh-btn .icon {\r\n  fill: #323232;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  background: #def4d7;\r\n  cursor: pointer;\r\n}\r\n\r\n#refresh-btn:active .icon {\r\n  fill: #5ac938;\r\n}\r\n\r\n#refresh-btn.loading {\r\n  background: #def4d7;\r\n  cursor: wait;\r\n}\r\n\r\n#refresh-btn.loading .icon {\r\n  fill: #5ac938;\r\n  -webkit-animation: rotating 1s linear;\r\n  -moz-animation: rotating 1s linear;\r\n  -ms-animation: rotating 1s linear;\r\n  -o-animation: rotating 1s linear;\r\n  animation: rotating 1s linear;\r\n}\r\n\r\n@keyframes rotating {\r\n  from {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n#recent-scores {\r\n  border-collapse: collapse;\r\n  width: 90%;\r\n  max-width: 500px;\r\n  table-layout: fixed;\r\n}\r\n\r\ntable {\r\n  border: 1px solid rgb(192, 192, 192);\r\n}\r\n\r\n#recent-scores td {\r\n  padding: 0.6rem 1rem;\r\n}\r\n\r\n#recent-scores tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n#recent-scores tr:hover {\r\n  background-color: rgb(199, 199, 199);\r\n}\r\n\r\n#recent-scores tr:nth-child(odd):hover {\r\n  background-color: #8a5213;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#add-score-form {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n#add-score-form input {\r\n  width: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#submit-btn {\r\n  font-family: bely-display, sans-serif;\r\n  color: #fff;\r\n  background: none;\r\n  pointer-events: auto;\r\n  cursor: pointer;\r\n  border: none;\r\n  padding: 0.5rem 2rem;\r\n  margin: 0;\r\n  font-size: inherit;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n#submit-btn::before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  content: '';\r\n  background: #000;\r\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);\r\n  clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);\r\n  transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1), -webkit-clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1);\r\n}\r\n\r\n#submit-btn:hover::before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #000;\r\n  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n}\r\n\r\n#submit-btn span {\r\n  display: block;\r\n  mix-blend-mode: difference;\r\n  transition: transform 0.4s cubic-bezier(0.5, 1, 0.8, 1);\r\n}\r\n\r\n#submit-btn:hover span {\r\n  transform: translate3d(-10px, 0, 0);\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=o(m,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},854:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),d=e(565),l=e.n(d),u=e(216),p=e.n(u),m=e(589),f=e.n(m),h=e(426),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const g=document.getElementById("my-app"),v=(n,r)=>{const e=document.createElement("tr");return e.innerHTML=`<td>${n}: ${r}</td>`,e};let y=[];const x=n=>{let r={};return r=n[Math.floor(Math.random()*n.length)],r},w=async()=>{const n=new Request("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ly6jTi9zvHL9a3FJYQo/scores/"),r=await fetch(n),e=await r.text();(n=>{y=[];const r=document.getElementById("recent-scores").firstElementChild;r.innerHTML="";for(let e=0;e<15;e+=1){const t=x(n),o=v(t.user,t.score);y.includes(o.innerHTML)?e-=1:r.appendChild(o),y.push(o.innerHTML)}})(JSON.parse(e).result)};g.insertAdjacentHTML("beforeend",'<h1>Leaderboard</h1>\n    <div class="main-content">\n      <div class="scores">\n        <div class="scores-header">\n          <h2>Recent Scores</h2>\n          <button id="refresh-btn" type="button"><svg class="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.8995816 10.3992354c0 .1000066-.1004184.1000066-.1004184.2000132 0 0 0 .1000066-.1004184.1000066-.1004184.1000066-.2008369.2000132-.3012553.2000132-.1004184.1000066-.3012552.1000066-.4016736.1000066h-6.0251046c-.6025105 0-1.0041841-.4000264-1.0041841-1.00006592 0-.60003954.4016736-1.00006591 1.0041841-1.00006591h3.5146443l-2.8117154-2.60017136c-.9037657-.90005932-1.9079498-1.50009886-3.0125523-1.90012523-2.0083682-.70004614-4.2175733-.60003954-6.12552305.30001977-2.0083682.90005932-3.41422594 2.50016478-4.11715481 4.5002966-.20083682.50003295-.80334728.80005275-1.30543933.60003954-.50209205-.10000659-.80334728-.70004613-.60251046-1.20007909.90376569-2.60017136 2.71129707-4.60030318 5.12133891-5.70037568 2.41004184-1.20007909 5.12133894-1.30008569 7.63179914-.40002637 1.4058578.50003296 2.7112971 1.30008569 3.7154812 2.40015819l3.0125523 2.70017795v-3.70024386c0-.60003955.4016736-1.00006591 1.0041841-1.00006591s1.0041841.40002636 1.0041841 1.00006591v6.00039545.10000662c0 .1000066 0 .2000132-.1004184.3000197zm-3.1129707 3.7002439c-.5020921-.2000132-1.1046025.1000066-1.3054394.6000396-.4016736 1.1000725-1.0041841 2.200145-1.9079497 3.0001977-1.4058578 1.5000989-3.5146444 2.3001516-5.623431 2.3001516-2.10878662 0-4.11715482-.8000527-5.72384938-2.4001582l-2.81171548-2.6001714h3.51464435c.60251046 0 1.0041841-.4000263 1.0041841-1.0000659 0-.6000395-.40167364-1.0000659-1.0041841-1.0000659h-6.0251046c-.10041841 0-.10041841 0-.20083682 0s-.10041841 0-.20083682 0c0 0-.10041841 0-.10041841.1000066-.10041841 0-.20083682.1000066-.20083682.2000132s0 .1000066-.10041841.1000066c0 .1000066-.10041841.1000066-.10041841.2000132v.2000131.1000066 6.0003955c0 .6000395.40167364 1.0000659 1.0041841 1.0000659s1.0041841-.4000264 1.0041841-1.0000659v-3.7002439l2.91213389 2.8001846c1.80753138 2.0001318 4.31799163 3.0001977 7.02928871 3.0001977 2.7112971 0 5.2217573-1.0000659 7.1297071-2.9001911 1.0041841-1.0000659 1.9079498-2.3001516 2.4100418-3.7002439.1004185-.6000395-.2008368-1.2000791-.7029288-1.3000857z" transform=""/></svg></button>\n        </div>\n        <table id="recent-scores">\n          <tr></tr>\n        </table>\n      </div>\n      <div class="add-score">\n        <h2>Add your score</h2>\n        <form id="add-score-form" action="index.html" method="post">\n          <input type="text" name="name" id="name" placeholder="Your Name"><br>\n          <input type="number" name="score" id="score" placeholder="Your Score"><br>\n          <button type="submit" id="submit-btn"><span>Submit</span></button>\n        </form>\n      </div>\n    </div>'),w();const k=document.getElementById("refresh-btn");k.addEventListener("click",w),k.addEventListener("click",(()=>{k.classList.toggle("loading"),setTimeout((()=>{k.classList.toggle("loading")}),1200)})),document.getElementById("submit-btn").addEventListener("click",(async n=>{n.preventDefault();const r=document.getElementById("name").value,e=document.getElementById("score").value;((n,r)=>0!==n.length&&!Number.isNaN(parseInt(r,10)))(r,e)&&(await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ly6jTi9zvHL9a3FJYQo/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:`${r}`,score:`${e}`})}),((n,r)=>{const e=document.getElementById("recent-scores").firstElementChild,t=v(n,r);e.insertAdjacentHTML("afterbegin",t.outerHTML),document.getElementById("recent-scores").firstElementChild.lastChild.remove()})(r,e),(()=>{const n=document.getElementById("name"),r=document.getElementById("score");n.value="",r.value=""})())}))}},n=>{n(n.s=854)}]);