(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},o=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4df2bb53"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,s){r=a[e]=[t,s]}));t.push(r[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=n(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,r[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"23a3":function(e,t,r){"use strict";var s=r("437c"),a=r.n(s);a.a},"437c":function(e,t,r){},4678:function(e,t,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("ce5b"),o=r.n(a);r("bf40");s["default"].use(o.a);var n={icons:{iconfont:"mdi"}},i=new o.a(n),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[e._v("21 天英打鍛鍊武道大會 "),r("v-spacer"),r("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=advancedor96&repo=hex_keybr_fronted&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}})],1),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1),r("v-footer",{attrs:{app:""}},[r("v-spacer"),r("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)],1)},l=[],u={methods:{toGithub:function(){window.open("https://github.com/advancedor96/hex_keybr_fronted","_blank")}}},f=u,d=(r("5c0b"),r("2877")),h=Object(d["a"])(f,c,l,!1,null,null,null),b=h.exports,p=(r("d3b7"),r("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"aaa",staticClass:"home mx-auto"},[e.isLoading?r("v-flex",{staticClass:"progress d-flex",attrs:{"justify-center":""}},[r("v-progress-circular",{staticStyle:{"margin-top":"200px"},attrs:{size:80,width:"7",color:"green",indeterminate:""}})],1):e._e(),r("v-card",{staticClass:"d-flex row round mb-4 mx-auto",attrs:{"max-width":"800",elevation:12}},[r("v-img",{staticClass:"howhow_img",attrs:{src:"https://i.imgur.com/fqbzjoG.png"}}),r("dir",{staticClass:"ml-6",staticStyle:{flex:"1","line-height":"160px",height:"160px"}},[r("h1",{staticClass:"typing"})])],1),r("v-card",{staticClass:"mx-auto py-1 px-2 round",attrs:{"max-width":"800",elevation:12}},[r("v-toolbar",{attrs:{elevation:0}},[r("v-toolbar-title",[e._v("關注自己")])],1),r("v-autocomplete",{attrs:{items:e.userListForUi,color:"black","item-text":"Description","item-value":"fullUser",label:"關注自己   (輸入暱稱尋找自己)",placeholder:"搜尋參賽者名稱","prepend-icon":"mdi-database-search","return-object":""},model:{value:e.auto_select_user,callback:function(t){e.auto_select_user=t},expression:"auto_select_user"}}),e.showAlert?r("v-alert",{attrs:{border:"bottom","colored-border":"",type:"warning",elevation:"6"}},[e._v(" "+e._s(e.auto_select_user?e.auto_select_user.fullUser.nickName:"")+" 你今天還沒練打字！ "),r("br"),e._v("👉 "),r("a",{attrs:{href:"https://www.keybr.com/"}},[e._v("https://www.keybr.com")])]):e._e(),r("v-card-text",[e.auto_select_user&&e.auto_select_user.fullUser.persevere?r("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[e._v("持續中")]):r("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[e._v("不持續")])],1),r("v-card-text",[r("line-chart",{ref:"oneUserLineChart",attrs:{"chart-data":e.oneUserCollection,options:"oneUserChartOptions"}})],1)],1),r("v-card",{staticClass:"d-flex mx-auto round pt-8 pl-2 my-8",staticStyle:{"max-width":"1300px","max-height":"900px",height:"770px"},attrs:{elevation:12}},[r("dir",{staticStyle:{width:"400px"}},[r("v-tabs",{attrs:{"fixed-tabs":!0}},[r("v-tab",[e._v("鐵人進步獎")]),r("v-tab",[e._v("鐵人神速獎")]),r("v-tabs-slider"),r("v-tab-item",[r("v-card",{staticClass:"mx-1",attrs:{elevation:"0"}},[r("v-toolbar",{attrs:{elevation:"0"}},[r("v-toolbar-title",[e._v(e._s(e.progressListTitle))]),r("v-spacer")],1),r("v-list",{staticStyle:{overflow:"auto"},attrs:{rounded:"",dense:"",height:"570"}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.clickListItem,callback:function(t){e.clickListItem=t},expression:"clickListItem"}},e._l(e.showProgressList,(function(t,s){return r("v-list-item",{key:s,on:{click:function(r){return e.peopleSelect(t)}}},[r("v-list-item-avatar",[e._v(" "+e._s(s+1)+" ")]),r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:e._s("<strong>"+t.nickName+"</strong>")}}),r("v-list-item-subtitle",{domProps:{innerHTML:e._s("進步<strong>"+t.progress+"</strong> ("+t.range[0]+"→"+t.range[1]+" wpm)")}})],1)],1)})),1)],1)],1)],1),r("v-tab-item",[r("v-card",{staticClass:"mx-1",attrs:{elevation:"0"}},[r("v-toolbar",{attrs:{elevation:"0"}},[r("v-toolbar-title",[e._v("速度前20名")]),r("v-spacer")],1),r("v-list",{staticStyle:{overflow:"auto"},attrs:{rounded:"",dense:"",height:"570"}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.clickListItem,callback:function(t){e.clickListItem=t},expression:"clickListItem"}},e._l(e.topSpeed20List,(function(t,s){return r("v-list-item",{key:s,on:{click:function(r){return e.peopleSelect(t)}}},[r("v-list-item-avatar",[e._v(" "+e._s(s+1)+" ")]),r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:e._s("<strong>"+t.nickName+"</strong>")}}),r("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.range[1]+" wpm")}})],1)],1)})),1)],1)],1)],1)],1)],1),r("div",{staticClass:"mx-6",staticStyle:{flex:"1","max-width":"700px"}},[r("h1",[e._v(e._s(e.otherPersonNickName))]),r("blockquote",[e._v(e._s(e.otherPersonMotivate?e.otherPersonMotivate:""))]),e.otherPersonFbLink?r("div",[r("a",{attrs:{href:e.otherPersonFbLink}},[e._v(e._s(e.otherPersonFbLink))])]):e._e(),e.otherPersonKeybrLink?r("a",{attrs:{href:e.otherPersonKeybrLink}},[e._v(e._s(e.otherPersonKeybrLink))]):e._e(),r("div",[e._v("成績："+e._s(e.otherPersonGrade.join("、"))+" ")]),r("line-chart",{ref:"otherPersonChart",attrs:{"chart-data":e.otherPersonCollection,options:"oneUserChartOptions",styles:{margin:"auto",position:"relative",width:"500px",height:"500px"}}})],1)],1),r("v-card",{staticClass:"mx-auto my-12 round",attrs:{"max-width":"1280",elevation:12}},[r("v-toolbar",{attrs:{elevation:0}},[r("v-toolbar-title",[e._v("所有人")])],1),r("v-card-text",[r("line-chart",{ref:"allUserLineChart",attrs:{"chart-data":e.allUserDataCollection,options:e.allUserChartOption}})],1)],1)],1)},v=[],j=(r("99af"),r("cb29"),r("4de4"),r("7db0"),r("a630"),r("d81d"),r("fb6a"),r("b680"),r("3ca3"),r("96cf"),r("1da1")),g=r("1fca"),y=g["b"].reactiveProp,k={extends:g["a"],mixins:[y],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},_=r("bc3a"),w=r.n(_),L=r("5a0c"),x=r.n(L),P=r("10b3"),C=r.n(P),S={name:"Home",components:{LineChart:k},data:function(){return{allUserChartOption:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{display:!1}},oneUserChartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{display:!0}},userList:null,auto_select_user:null,allUserDataCollection:{},allUserDataSet:null,oneUserCollection:{},otherPersonCollection:{},otherPersonFbLink:"",otherPersonGrade:[],otherPersonKeybrLink:null,otherPersonMotivate:null,otherPersonNickName:null,otherPersonPersevere:null,otherPersonProgress:null,otherPersonRange:null,countOf21Days:null,clickListItem:null,isLoading:!1,showAlert:!1,isShowAllProgress:!1,avgWpmOf21Days:null}},mounted:function(){this.getData(),window.dd=this,window.dayjs=x.a},watch:{auto_select_user:function(e){localStorage.setItem("nickName",e.fullUser.nickName),this.oneUserDataSet=[{label:e.fullUser.nickName,data:e.fullUser.grade.slice(0,U()),backgroundColor:O(),borderColor:O(),fill:!1},{label:"眾人平均",data:this.avgWpmOf21Days.slice(0,U()),backgroundColor:"#4caf50",borderColor:"#4caf90",fill:!1}],this.oneUserCollection={labels:Array.from(Array(U()),(function(e,t){return"Day ".concat(t+1," (").concat(x()("2020-03-30").add(t,"day").format("MM/DD"),")")})),datasets:this.oneUserDataSet};var t=x()().diff(x()("2020-03-30"),"days");t<21&&0===parseFloat(this.auto_select_user.fullUser.grade[t])?this.showAlert=!0:this.showAlert=!1},userListForUi:function(e){if(localStorage.getItem("nickName")){var t=this.userListForUi.find((function(e,t){return e.fullUser.nickName===localStorage.getItem("nickName")}));this.auto_select_user=t}}},computed:{userListForUi:function(){if(this.userList)return this.userList.map((function(e,t){return{fullUser:e,Description:"".concat(e.nickName," (").concat(e.grade.filter((function(e){return 0!==e})).length,")天記錄")}}))},progressListTitle:function(){return!1===this.isShowAllProgress?"連續練習".concat(U(),"天、並進步15wpm者"):"所有人"},progressList:function(){if(this.userList)return this.userList.concat().sort((function(e,t){return t.progress-e.progress}))},showProgressList:function(){if(this.userList)return this.isShowAllProgress?this.progressList:this.progressList.filter((function(e){return e.persevere&&e.progress>=15}))},topSpeed20List:function(){return this.userList?this.userList.concat().sort((function(e,t){return t.range[1]-e.range[1]})).slice(0,20):[]}},methods:{tollgeAllProgressList:function(){this.isShowAllProgress=!this.isShowAllProgress},makeLabels:function(){var e=this;return Array.from(Array(U()),(function(t,r){return"Day ".concat(r+1," (").concat(e.countOf21Days[r],")平均").concat(e.avgWpmOf21Days[r])}))},peopleSelect:function(e){console.log("click user:",e),this.otherPersonNickName=e.nickName,this.otherPersonFbLink=e.fbLink,this.otherPersonKeybrLink=e.keybrLink,this.otherPersonMotivate=e.motivate,this.otherPersonPersevere=e.persevere,this.otherPersonProgress=e.progress,this.otherPersonRange=e.range,this.otherPersonGrade=e.grade;var t=[{label:e.nickName,data:e.grade.slice(0,U()),backgroundColor:O(),borderColor:O(),fill:!1}];this.otherPersonCollection={labels:Array.from(Array(U()),(function(e,t){return"Day ".concat(t+1)})),datasets:t}},makeChart:function(){window.user=this.userList,this.countOf21Days=Array(21).fill(0);for(var e=0;e<this.userList.length;e++)for(var t=this.userList[e],r=0;r<t.grade.length;r++)0!==parseFloat(t.grade[r])&&this.countOf21Days[r]++;this.avgWpmOf21Days=Array(21).fill(0);for(var s=0;s<U();s++){for(var a=0,o=0;o<this.userList.length;o++){var n=this.userList[o];0!==parseFloat(n.grade[s])&&(a+=parseFloat(n.grade[s]))}this.avgWpmOf21Days[s]=(a/this.countOf21Days[s]).toFixed(1)}this.allUserDataSet=this.userList.map((function(e,t){return{label:e.nickName,data:e.grade,backgroundColor:O(),borderColor:O(),fill:!1,borderWidth:2}})),this.allUserDataCollection={labels:this.makeLabels(),datasets:this.allUserDataSet}},getData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,w.a.get("https://hexschool-keybr.herokuapp.com/api/users");case 4:r=t.sent,e.isLoading=!1,e.userList=r.data.sort((function(e,t){var r=e.grade.filter((function(e){return 0!==e})).length,s=t.grade.filter((function(e){return 0!==e})).length;return s-r})),console.log("user",e.userList),e.makeChart(),21,s={strings:["你今天...練英打了嗎？","keybr 😡😡😃😃"],typeSpeed:150},new C.a(".typing",s),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log("err",t.t0);case 17:return t.prev=17,e.isLoading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))()}}},O=function(){for(var e="0123456789ABCDEF",t="#",r=0;r<6;r++)t+=e[Math.floor(16*Math.random())];return t},U=function(){var e=x()().diff(x()("2020-03-30"),"days")+1;return e>=21&&(e=21),e},D=S,A=(r("23a3"),Object(d["a"])(D,m,v,!1,null,"0aef17f8",null)),z=A.exports;s["default"].use(p["a"]);var N=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],F=new p["a"]({routes:N}),M=F,T=r("2f62");s["default"].use(T["a"]);var I=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({vuetify:i,router:M,store:I,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),a=r.n(s);a.a},"9c0c":function(e,t,r){}});