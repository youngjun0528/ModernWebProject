(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={home:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("7cf4")},"402c":function(t,e,o){"use strict";var a=o("2b0e"),r=o("f309");a["a"].use(r["a"]),e["a"]=new r["a"]({})},"7cf4":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("HelloWorld")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2021")])])],1)},n=[],s=o("add6"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},l=[],c={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},d=c,u=o("2877"),f=o("6544"),v=o.n(f),g=o("62ad"),p=o("a523"),m=o("adda"),h=o("0fd9"),b=Object(u["a"])(d,i,l,!1,null,null,null),w=b.exports;v()(b,{VCol:g["a"],VContainer:p["a"],VImg:m["a"],VRow:h["a"]});var y={components:{HelloWorld:w,MainMenu:s["a"]},data:function(){return{}},created:function(){}},_=y,x=o("7496"),O=o("553a"),k=o("f6c4"),E=Object(u["a"])(_,r,n,!1,null,null,null),S=E.exports;v()(E,{VApp:x["a"],VFooter:O["a"],VMain:k["a"]});var C=o("402c");a["a"].config.productionTip=!1,new a["a"]({vuetify:C["a"],render:function(t){return t(S)}}).$mount("#app")},"9b19":function(t,e,o){t.exports=o.p+"static/img/logo.63a7d78d.svg"},add6:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-view-dashboard")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Dashboard")])],1)],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Vue.js - Django Web Programming")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),o("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),o("v-btn",{attrs:{text:""}},[t._v("/")]),o("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),o("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[o("v-icon",[t._v("mdi-account")]),t._v(" "+t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[o("v-list-item-title",[t._v("Register")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("Logout")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[o("v-list-item-title",[t._v("Password Change")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Login form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"loginform",attrs:{id:"login-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Register form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"registerform",attrs:{id:"register-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Password change form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"pwdchgform",attrs:{id:"pwdchg-form"}},[o("v-text-field",{attrs:{label:"Old Password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New Password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New Password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("Password Change")])],1)],1)],1)],1)},r=[],n=o("bc3a"),s=o.n(n);s.a.defaults.xsrfHeaderName="X-CSRFTOKEN",s.a.defaults.xsrfCookieName="csrftoken";var i={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"}}},created:function(){this.getUserInfo()},methods:{dialogOpen:function(t){console.log("dialogOpen()...",t),"login"==t?this.dialog.login=!0:"register"==t?this.dialog.register=!0:"pwdchg"==t&&(this.dialog.pwdchg=!0)},cancel:function(t){console.log("cancel()...",t),"login"==t?(this.dialog.login=!1,this.$refs.loginform.reset()):"register"==t?(this.dialog.register=!1,this.$refs.registerform.reset()):"pwdchg"==t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgform.reset())},save:function(t){console.log("save()...",t),"login"==t?(this.login(),this.dialog.login=!1,this.$refs.loginform.reset()):"register"==t?(this.register(),this.dialog.register=!1,this.$refs.registerform.reset()):"pwdchg"==t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgform.reset())},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));s.a.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login NOK")}))},register:function(){console.log("register()...");var t=new FormData(document.getElementById("register-form"));s.a.post("/api/register/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user ".concat(t.data.username," created OK."))})).catch((function(t){console.log("REGISTER POST ERR.RESPONSE",t.response),alert("register NOK")}))},logout:function(){var t=this;console.log("logout()..."),s.a.get("/api/logout/").then((function(e){console.log("LOGOUT GET RES",e),alert("user ".concat(t.me.username," logout OK.")),t.me={username:"Anonymous"}})).catch((function(t){console.log("LOGOUT GET ERR.RESPONSE",t.response),alert("logout NOK")}))},pwdchg:function(){var t=this;console.log("pwdchg()...");var e=new FormData(document.getElementById("pwdchg-form"));s.a.post("/api/pwdchg/",e).then((function(e){console.log("PASSWORD CHANGE POST RES",e),alert("user ".concat(t.me.username," password change OK."))})).catch((function(t){console.log("PASSWORD CHANGE POST ERR.RESPONSE",t.response),alert("password change NOK")}))},getUserInfo:function(){var t=this;console.log("getUserInfo()..."),s.a.get("/api/me/").then((function(e){console.log("GETUSERINTO GET RES",e),t.me=e.data})).catch((function(t){console.log("GETUSERINTO GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},l=i,c=o("2877"),d=o("6544"),u=o.n(d),f=o("40dc"),v=o("5bc1"),g=o("8336"),p=o("b0af"),m=o("99d9"),h=o("169a"),b=o("4bd4"),w=o("132d"),y=o("8860"),_=o("da13"),x=o("1800"),O=o("5d23"),k=o("e449"),E=o("f774"),S=o("2fa4"),C=o("8654"),R=o("71d9"),P=o("2a7f"),V=Object(c["a"])(l,a,r,!1,null,null,null);e["a"]=V.exports;u()(V,{VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:g["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VDialog:h["a"],VForm:b["a"],VIcon:w["a"],VList:y["a"],VListItem:_["a"],VListItemAction:x["a"],VListItemContent:O["a"],VListItemTitle:O["b"],VMenu:k["a"],VNavigationDrawer:E["a"],VSpacer:S["a"],VTextField:C["a"],VToolbar:R["a"],VToolbarTitle:P["a"]})}});
//# sourceMappingURL=home.0aba1616.js.map