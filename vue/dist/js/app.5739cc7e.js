(function(t){function e(e){for(var r,s,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("0987"),o=n("bc3a"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._l(t.tasks,(function(n,r){return e("form",{key:"task-"+n.id,ref:"task-"+n.id,refInFor:!0,on:{submit:function(e){return e.preventDefault(),t.save(n)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.text,expression:"task.text"}],attrs:{type:"text"},domProps:{value:n.text},on:{input:function(e){e.target.composing||t.$set(n,"text",e.target.value)}}}),e("a",{on:{click:function(e){return e.preventDefault(),t.del(n.id,r)}}},[t._v("удалить")])])})),e("br"),e("br"),e("br"),e("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[t._v(" Новая задача: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],attrs:{type:"text"},domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value)}}})])],2)},i=[],u=(n("14d9"),{name:"App",data(){return{tasks:[],newTask:""}},methods:{async load(){this.tasks=await this.$get("/")},async save(t){this.$refs["task-"+t.id][0].classList.add("loading"),await this.$post("/update",{id:t.id,text:t.text}),this.$refs["task-"+t.id][0].classList.remove("loading")},async add(t){t.target.classList.add("loading");let e=await this.$post("/create",{text:this.newTask});t.target.classList.remove("loading"),this.tasks.push(e.task),this.newTask=""},async del(t,e){await this.$post("/delete",{id:t}),this.tasks.splice(e,1)}},async mounted(){await this.load()}}),l=u,c=(n("ccb0"),n("2877")),p=Object(c["a"])(l,s,i,!1,null,null,null),d=p.exports;r["a"].use(a["a"],{axios:o["a"],config:{baseURL:"/api",headers:{"Content-Type":"application/x-www-form-urlencoded"}}}),r["a"].config.productionTip=!1,new r["a"]({render:t=>t(d)}).$mount("#app")},"84d1":function(t,e,n){},ccb0:function(t,e,n){"use strict";n("84d1")}});
//# sourceMappingURL=app.5739cc7e.js.map