(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0fc9cce5"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div"),n("router-view")],1)},s=[],o=(n("5c0b"),n("2877")),c={},i=Object(o["a"])(c,r,s,!1,null,null,null),u=i.exports,f=(n("d3b7"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"aaa",staticClass:"home"},[e._v(" 關注： "),n("model-select",{attrs:{options:e.options,placeholder:"搜尋名稱、FB帳號"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}}),n("line-chart",{ref:"lineChart",attrs:{"chart-data":e.datacollection,options:e.chartOptions}})],1)},d=[],b=(n("99af"),n("4de4"),n("a630"),n("d81d"),n("a434"),n("3ca3"),n("96cf"),n("1da1")),j=n("1fca"),m=j["b"].reactiveProp,p={extends:j["a"],mixins:[m],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},h=n("bc3a"),v=n.n(h),g=n("5a0c"),y=n.n(g),k=n("b410"),w={name:"Home",components:{ModelSelect:k["ModelSelect"],LineChart:p},data:function(){return{datacollection:{},chartOptions:O,userList:null,item:{value:"",text:""},options:[{value:"0",text:"所有人"}],mydataset:null}},mounted:function(){this.getData()},watch:{item:function(e){console.log("新item",e);var t=this.userList.filter((function(t){return"0"===e.value||t.nickName===e.value.nickName&&t.grade.filter((function(e){return"0.0"!==e})).length===e.value.grade.filter((function(e){return"0.0"!==e})).length}));this.mydataset=t.map((function(e,t){return{label:e.nickName,data:e.grade.filter((function(e){return"0.0"!==e})),backgroundColor:x(),borderColor:x(),fill:!1}})),this.datacollection={labels:Array.from(Array(z()),(function(e,t){return"Day ".concat(t+1," (").concat(y()("2020-03-30").add(t,"day").format("MM/DD"),")")})),datasets:this.mydataset}}},methods:{makeChart:function(){window.user=this.userList,this.mydataset=this.userList.map((function(e,t){return{label:e.nickName,data:e.grade.filter((function(e){return"0.0"!==e})),backgroundColor:x(),borderColor:x(),fill:!1}})),this.datacollection={labels:Array.from(Array(z()),(function(e,t){return"Day ".concat(t+1," (").concat(y()("2020-03-30").add(t,"day").format("MM/DD"),")")})),datasets:this.mydataset}},getData:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("https://hexschool-keybr.herokuapp.com/api/users");case 3:n=t.sent,e.userList=n.data,console.log("user",e.userList),e.options=e.userList.map((function(e,t){return{value:e,text:"".concat(e.nickName," (").concat(e.grade.filter((function(e){return"0.0"!==e})).length,")天記錄 ").concat(e.fbLink?e.fbLink:"").concat(e.keybrLink?e.keybrLink:""," ")}})),e.options.splice(0,0,{value:"0",text:"所有人"}),e.item=e.options[0],e.makeChart(),21,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log("err",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},x=function(){for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t},z=function(){var e=new Date("2020-03-30").getTime(),t=(new Date).getTime(),n=(t-e)/1e3/86400,a=Math.floor(n+2);return a>=21&&(a=21),console.log("顯示",a,"天"),a},O={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!1}}]}},L=w,C=Object(o["a"])(L,l,d,!1,null,null,null),D=C.exports;a["a"].use(f["a"]);var M=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=new f["a"]({routes:M}),A=_,P=n("2f62");a["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("41e9");a["a"].config.productionTip=!1,new a["a"]({router:A,store:S,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){}});