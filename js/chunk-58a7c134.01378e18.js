(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a7c134"],{"14c3":function(t,a,e){var n=e("c6b6"),r=e("9263");t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var i=e.call(t,a);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,a)}},5319:function(t,a,e){"use strict";var n=e("d784"),r=e("825a"),i=e("7b0b"),o=e("50c4"),s=e("a691"),c=e("1d80"),l=e("8aa5"),u=e("14c3"),d=Math.max,v=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,a,e,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(e,n){var r=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):a.call(String(r),e,n)},function(t,n){if(!x&&b||"string"===typeof n&&-1===n.indexOf(m)){var i=e(a,t,this,n);if(i.done)return i.value}var c=r(t),p=String(this),f="function"===typeof n;f||(n=String(n));var h=c.global;if(h){var C=c.unicode;c.lastIndex=0}var k=[];while(1){var _=u(c,p);if(null===_)break;if(k.push(_),!h)break;var y=String(_[0]);""===y&&(c.lastIndex=l(p,o(c.lastIndex),C))}for(var S="",$=0,R=0;R<k.length;R++){_=k[R];for(var A=String(_[0]),I=d(v(s(_.index),p.length),0),T=[],w=1;w<_.length;w++)T.push(g(_[w]));var P=_.groups;if(f){var U=[A].concat(T,I,p);void 0!==P&&U.push(P);var N=String(n.apply(void 0,U))}else N=E(A,p,I,T,P,n);I>=$&&(S+=p.slice($,I)+N,$=I+A.length)}return S+p.slice($)}];function E(t,e,n,r,o,s){var c=n+t.length,l=r.length,u=h;return void 0!==o&&(o=i(o),u=f),a.call(s,u,(function(a,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return a;if(u>l){var d=p(u/10);return 0===d?a:d<=l?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):a}s=r[u-1]}return void 0===s?"":s}))}}))},"5c3a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary font-weight-bold",attrs:{id:"nav"}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand text-primary",attrs:{to:"/"}},[e("h1",{staticClass:"h2 d-flex align-items-center"},[e("span",[t._v("Suitcase")]),e("span",{staticClass:"material-icons"},[t._v("construction")])])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v("產品管理")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/order"}},[t._v("訂單管理")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[t._v("優惠券管理")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/storages"}},[t._v("檔案管理")])],1),t._m(1)])])],1)]),t.checkSucces?e("router-view",{attrs:{token:t.token.api_token}}):t._e(),e("div",{staticClass:"modal fade",attrs:{id:"signoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"d-flex justify-content-around"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.signout}},[t._v("登出")]),e("button",{staticClass:"btn btn-outline-secondary text-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"","data-toggle":"modal","data-target":"#signoutModal"}},[t._v("Signout")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-primary"},[e("h5",{staticClass:"modal-title font-weight-bold"},[t._v("是否登出 ?")]),e("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("ac1f"),e("5319"),{data:function(){return{token:{api_token:""},checkSucces:!1}},methods:{signout:function(t){t.preventDefault(),document.cookie="hexToken=; expires=; path=/",this.$router.push("/")},checkToken:function(){var t=this;t.token.api_token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),""===t.token.api_token?t.$router.push("/"):(t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.post("".concat("https://course-ec-api.hexschool.io/api/","auth/check"),t.token).then((function(a){t.checkSucces=!0})).catch((function(){return t.$router.push("/")})))}},created:function(){this.checkToken()}}),o=i,s=e("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);a["default"]=c.exports},6547:function(t,a,e){var n=e("a691"),r=e("1d80"),i=function(t){return function(a,e){var i,o,s=String(r(a)),c=n(e),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):i:t?s.slice(c,c+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,a,e){"use strict";var n=e("6547").charAt;t.exports=function(t,a,e){return a+(e?n(t,a).length:1)}},9263:function(t,a,e){"use strict";var n=e("ad6d"),r=e("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,a=/b*/g;return i.call(t,"a"),i.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var a,e,r,s,d=this,v=l&&d.sticky,p=n.call(d),f=d.source,h=0,g=t;return v&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",g=" "+g,h++),e=new RegExp("^(?:"+f+")",p)),u&&(e=new RegExp("^"+f+"$(?!\\s)",p)),c&&(a=d.lastIndex),r=i.call(v?e:d,g),v?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:a),u&&r&&r.length>1&&o.call(r[0],e,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},"9f7f":function(t,a,e){"use strict";var n=e("d039");function r(t,a){return RegExp(t,a)}a.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,a,e){"use strict";var n=e("23e7"),r=e("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,a,e){"use strict";var n=e("825a");t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},d784:function(t,a,e){"use strict";e("ac1f");var n=e("6eeb"),r=e("d039"),i=e("b622"),o=e("9263"),s=e("9112"),c=i("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,a,e,d){var f=i(t),h=!r((function(){var a={};return a[f]=function(){return 7},7!=""[t](a)})),g=h&&!r((function(){var a=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[c]=function(){return e},e.flags="",e[f]=/./[f]),e.exec=function(){return a=!0,null},e[f](""),!a}));if(!h||!g||"replace"===t&&(!l||!u||v)||"split"===t&&!p){var x=/./[f],b=e(f,""[t],(function(t,a,e,n,r){return a.exec===o?h&&!r?{done:!0,value:x.call(a,e,n)}:{done:!0,value:t.call(e,a,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),m=b[0],E=b[1];n(String.prototype,t,m),n(RegExp.prototype,f,2==a?function(t,a){return E.call(t,this,a)}:function(t){return E.call(t,this)})}d&&s(RegExp.prototype[f],"sham",!0)}}}]);
//# sourceMappingURL=chunk-58a7c134.01378e18.js.map