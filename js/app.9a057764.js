(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9261773"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=a[e]=[t,r]}));t.push(s[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var l=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(u);var s=a[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,s[1](l)}a[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=s("ce5b"),n=s.n(a);s("bf40");r["default"].use(n.a);var o={icons:{iconfont:"mdi"}},i=new n.a(o),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{app:""}},[e._v("21 天英打鍛鍊武道大會")]),s("v-content",[s("v-container",{attrs:{fluid:""}},[s("router-view")],1)],1),s("v-footer",{attrs:{app:""}},[s("v-btn",{attrs:{text:"",color:"#FF7F50"},on:{click:e.toGithub}},[s("v-icon",[e._v("mdi-source-repository")]),e._v("原始碼")],1),s("v-spacer"),s("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)],1)},l=[],u={methods:{toGithub:function(){window.open("https://github.com/advancedor96/hex_keybr_fronted","_blank")}}},f=u,d=(s("5c0b"),s("2877")),b=Object(d["a"])(f,c,l,!1,null,null,null),h=b.exports,m=(s("d3b7"),s("8c4f")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"aaa",staticClass:"home"},[e.isLoading?s("div",{staticClass:"progress text-center"},[s("v-progress-circular",{staticClass:"mt-12",attrs:{size:80,width:"7",color:"green",indeterminate:""}})],1):e._e(),s("v-flex",{staticClass:"ml-2",attrs:{row:"","align-center":""}},[s("v-card",{attrs:{"max-width":"160"}},[s("v-img",{attrs:{height:"160px",src:"https://i.imgur.com/fqbzjoG.png"}})],1),s("div",{staticClass:"font-weight-black ml-4",staticStyle:{"font-size":"40px",flex:"1"}},[e._v("你今天...練英打了嗎？")])],1),s("v-card-text",[s("v-autocomplete",{attrs:{items:e.userListForUi,color:"black","item-text":"Description","item-value":"fullUser",label:"關注自己   (輸入暱稱尋找自己)",placeholder:"搜尋參賽者名稱","prepend-icon":"mdi-database-search","return-object":""},model:{value:e.auto_select_user,callback:function(t){e.auto_select_user=t},expression:"auto_select_user"}})],1),e.showAlert?s("v-alert",{attrs:{border:"bottom","colored-border":"",type:"warning",elevation:"2",dismissible:""}},[e._v(" "+e._s(e.auto_select_user?e.auto_select_user.fullUser.nickName:"")+" 你今天還沒練打字！ "),s("br"),e._v("👉 "),s("a",{attrs:{href:"https://www.keybr.com/"}},[e._v("https://www.keybr.com")])]):e._e(),s("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"1280"}},[s("v-toolbar",{attrs:{color:"light-blue",dark:""}},[s("v-toolbar-title",[e._v(e._s(e.auto_select_user?e.auto_select_user.fullUser.nickName:""))])],1),s("v-card-text",[s("line-chart",{ref:"oneUserLineChart",attrs:{"chart-data":e.oneUserCollection,options:"oneUserChartOptions()"}})],1)],1),s("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"600"}},[s("v-toolbar",{attrs:{color:"light-blue",dark:""}},[s("v-toolbar-title",[e._v("進步排行榜")]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:e.tollgeAllProgressList}},[s("v-icon",[e._v("mdi-arrow-expand-vertical")])],1)],1),s("v-list",{attrs:{rounded:""}},[s("v-list-item-group",{attrs:{color:"primary"},model:{value:e.clickListItem,callback:function(t){e.clickListItem=t},expression:"clickListItem"}},e._l(e.showProgressList,(function(t,r){return s("v-list-item",{key:r,on:{click:function(t){return e.peopleSelect(r)}}},[s("v-list-item-avatar",[e._v(" "+e._s(r+1)+" ")]),s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:e._s("<strong>"+t.nickName+"</strong>")}}),s("v-list-item-subtitle",{domProps:{innerHTML:e._s("進步<strong>"+t.progress+"</strong> ("+t.startScore+"→"+t.endScore+" wpm)")}})],1)],1)})),1)],1)],1),s("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"1280"}},[s("v-toolbar",{attrs:{color:"light-blue",dark:""}},[s("v-toolbar-title",[e._v("所有人")])],1),s("v-card-text",[s("line-chart",{ref:"allUserLineChart",attrs:{"chart-data":e.allUserDataCollection,options:e.allUserChartOption}})],1)],1)],1)},j=[],v=(s("99af"),s("cb29"),s("4de4"),s("7db0"),s("c740"),s("a630"),s("d81d"),s("fb6a"),s("b680"),s("3ca3"),s("96cf"),s("1da1")),g=s("1fca"),k=g["b"].reactiveProp,y={extends:g["a"],mixins:[k],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},w=s("bc3a"),_=s.n(w),L=s("5a0c"),x=s.n(L),U={name:"Home",components:{LineChart:y},data:function(){return{allUserChartOption:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{display:!1}},oneUserChartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{display:!0}},userList:null,auto_select_user:null,allUserDataCollection:{},allUserDataSet:null,oneUserCollection:{},countOf21Days:null,clickListItem:null,isLoading:!1,showAlert:!1,isShowAllProgress:!1}},mounted:function(){this.getData(),window.dd=this,window.dayjs=x.a},watch:{auto_select_user:function(e){localStorage.setItem("nickName",e.fullUser.nickName),this.oneUserDataSet=[{label:e.fullUser.nickName,data:e.fullUser.grade.filter((function(e){return"0.0"!==e})),backgroundColor:C(),borderColor:C(),fill:!1}],this.oneUserCollection={labels:Array.from(Array(D()),(function(e,t){return"Day ".concat(t+1," (").concat(x()("2020-03-30").add(t,"day").format("MM/DD"),")")})),datasets:this.oneUserDataSet};var t=x()().diff(x()("2020-03-30"),"days");t<21&&0===parseFloat(this.auto_select_user.fullUser.grade[t])?this.showAlert=!0:this.showAlert=!1},userListForUi:function(e){if(localStorage.getItem("nickName")){var t=this.userListForUi.find((function(e,t){return e.fullUser.nickName===localStorage.getItem("nickName")}));this.auto_select_user=t}}},computed:{userListForUi:function(){if(this.userList)return this.userList.map((function(e,t){return{fullUser:e,Description:"".concat(e.nickName," (").concat(e.grade.filter((function(e){return"0.0"!==e})).length,")天記錄")}}))},progressList:function(){if(this.userList)return this.userList.map((function(e,t){var s=e.grade.filter((function(e){return 0!==parseFloat(e)})),r=s[0]||0,a=s[s.length-1]||0,n=parseFloat((a-r).toFixed(2));return{nickName:e.nickName,startScore:r,endScore:a,progress:n,grade:e.grade}})).sort((function(e,t){return t.progress-e.progress}))},showProgressList:function(){if(this.userList)return this.isShowAllProgress?this.progressList:this.progressList.slice(0,10)}},methods:{tollgeAllProgressList:function(){this.isShowAllProgress=!this.isShowAllProgress},makeLabels:function(){var e=this;return Array.from(Array(D()),(function(t,s){return"Day ".concat(s+1," (").concat(e.countOf21Days[s],")")}))},peopleSelect:function(e){var t=this.showProgressList[e],s=this.userListForUi.findIndex((function(e,s){return e.fullUser.nickName===t.nickName}));this.auto_select_user=this.userListForUi[s]},makeChart:function(){window.user=this.userList,this.countOf21Days=Array(21).fill(0);for(var e=0;e<this.userList.length;e++)for(var t=this.userList[e],s=0;s<t.grade.length;s++)0!==parseFloat(t.grade[s])&&this.countOf21Days[s]++;this.allUserDataSet=this.userList.map((function(e,t){return{label:e.nickName,data:e.grade.filter((function(e){return"0.0"!==e})),backgroundColor:C(),borderColor:C(),fill:!1}})),this.allUserDataCollection={labels:this.makeLabels(),datasets:this.allUserDataSet}},getData:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,_.a.get("https://hexschool-keybr.herokuapp.com/api/users");case 4:s=t.sent,e.userList=s.data.sort((function(e,t){var s=e.grade.filter((function(e){return"0.0"!==e})).length,r=t.grade.filter((function(e){return"0.0"!==e})).length;return r-s})),console.log("user",e.userList),e.makeChart(),21,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("err",t.t0);case 14:return t.prev=14,e.isLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()}}},C=function(){for(var e="0123456789ABCDEF",t="#",s=0;s<6;s++)t+=e[Math.floor(16*Math.random())];return t},D=function(){var e=new Date("2020-03-30").getTime(),t=(new Date).getTime(),s=(t-e)/1e3/86400,r=Math.floor(s+2);return r>=21&&(r=21),r},S=U,O=(s("d11c"),Object(d["a"])(S,p,j,!1,null,"23b71972",null)),z=O.exports;r["default"].use(m["a"]);var A=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],P=new m["a"]({routes:A}),F=P,N=s("2f62");r["default"].use(N["a"]);var M=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({vuetify:i,router:F,store:M,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var r=s("9c0c"),a=s.n(r);a.a},"78d7":function(e,t,s){},"9c0c":function(e,t,s){},d11c:function(e,t,s){"use strict";var r=s("78d7"),a=s.n(r);a.a}});