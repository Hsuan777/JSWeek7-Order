(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f4d16d"],{"159b":function(t,a,e){var r=e("da84"),o=e("fdbc"),i=e("17c2"),s=e("9112");for(var n in o){var c=r[n],d=c&&c.prototype;if(d&&d.forEach!==i)try{s(d,"forEach",i)}catch(l){d.forEach=i}}},"17c2":function(t,a,e){"use strict";var r=e("b727").forEach,o=e("a640"),i=e("ae40"),s=o("forEach"),n=i("forEach");t.exports=s&&n?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,a,e){var r=e("d039"),o=e("b622"),i=e("2d00"),s=o("species");t.exports=function(t){return i>=51||!r((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},4160:function(t,a,e){"use strict";var r=e("23e7"),o=e("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,a,e){var r=e("861d"),o=e("e8b5"),i=e("b622"),s=i("species");t.exports=function(t,a){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},8418:function(t,a,e){"use strict";var r=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var s=r(a);s in t?o.f(t,s,i(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var r=e("23e7"),o=e("d039"),i=e("e8b5"),s=e("861d"),n=e("7b0b"),c=e("50c4"),d=e("8418"),l=e("65f0"),u=e("1dde"),f=e("b622"),p=e("2d00"),m=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=u("concat"),g=function(t){if(!s(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},C=!b||!y;r({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,r,o,i,s=n(this),u=l(s,0),f=0;for(a=-1,r=arguments.length;a<r;a++)if(i=-1===a?s:arguments[a],g(i)){if(o=c(i.length),f+o>h)throw TypeError(v);for(e=0;e<o;e++,f++)e in i&&d(u,f,i[e])}else{if(f>=h)throw TypeError(v);d(u,f++,i)}return u.length=f,u}})},a640:function(t,a,e){"use strict";var r=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&r((function(){e.call(null,a||function(){throw 1},1)}))}},a79b:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container"},[e("div",{staticClass:"d-flex align-items-center"},[e("h2",{staticClass:"font-weight-bold d-flex justify-content-between mr-3 my-5"},[t._v("訂單")]),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table border-bottom"},[t._m(0),e("tbody",{staticClass:"p-0"},t._l(t.hexAPI.data,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(a.created.datetime))]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.products[0].product.title))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.amount))]),e("td",{staticClass:"align-middle"},[a.paid?e("span",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-danger"},[t._v("未付款")])]),e("td",{staticClass:"pr-0"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.copyData(a)}}},[t._v("編輯")])])])])})),0)])]),e("div",{staticClass:"modal fade",attrs:{id:"editOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"editOrderModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header bg-dark"},[e("h5",{staticClass:"modal-title text-white font-weight-bold"},[t._v(t._s(t.modalTitle))]),t._m(1)]),t.temporary.user?e("div",{staticClass:"modal-body"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("訂購人")]),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:t.temporary.user.name,disabled:""}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("訂購人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.temporary.user.address,expression:"temporary.user.address"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.temporary.user.address},on:{input:function(a){a.target.composing||t.$set(t.temporary.user,"address",a.target.value)}}})]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.temporary.paid,expression:"temporary.paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isUp"},domProps:{checked:Array.isArray(t.temporary.paid)?t._i(t.temporary.paid,null)>-1:t.temporary.paid},on:{change:[function(a){var e=t.temporary.paid,r=a.target,o=!!r.checked;if(Array.isArray(e)){var i=null,s=t._i(e,i);r.checked?s<0&&t.$set(t.temporary,"paid",e.concat([i])):s>-1&&t.$set(t.temporary,"paid",e.slice(0,s).concat(e.slice(s+1)))}else t.$set(t.temporary,"paid",o)},function(a){return t.isPaid(t.temporary.paid)}]}}),e("label",{staticClass:"form-check-label",attrs:{for:"isUp"}},[t._v("付款狀態")])])])])])]):t._e(),t._m(2)])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-nowrap",attrs:{scope:"row"}},[t._v("訂單時間")]),e("th",{attrs:{scope:"row",width:"300px"}},[t._v("訂購產品")]),e("th",{staticClass:"text-nowrap text-right",attrs:{scope:"row"}},[t._v("訂單金額")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"row"}},[t._v("出貨狀態")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"row"}},[t._v("編輯訂單")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],i=(e("99af"),e("4160"),e("b0c0"),e("159b"),e("1157")),s=e.n(i),n={data:function(){return{hexAPI:{data:[]},temporary:{},modalTitle:"",isLoading:!1}},props:["token"],methods:{getData:function(){var t=this;t.isLoading=!0,t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/ec/orders")).then((function(a){t.hexAPI.data=a.data.data,t.isLoading=!1}))},copyData:function(t){var a=this;a.isLoading=!0,a.axios.defaults.headers.common.Authorization="Bearer ".concat(a.token),a.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/ec/orders/").concat(t.id)).then((function(t){a.temporary=Object.assign({},t.data.data),console.log(a.temporary),a.modalTitle=a.temporary.user.name,a.isLoading=!1,s()("#editOrderModal").modal("show")}))},isPaid:function(t){var a=this;a.isLoading=!0;var e="";e=t?"paid":"unpaid",a.temporary.id&&a.hexAPI.data.forEach((function(t){a.temporary.id===t.id&&(a.axios.defaults.headers.common.Authorization="Bearer ".concat(a.token),a.axios.patch("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/ec/orders/").concat(a.temporary.id,"/").concat(e),a.temporary.id).then((function(){s()("#editOrderModal").modal("hide"),a.getData(),a.cleanData()})))}))},cleanData:function(){this.temporary={}}},created:function(){this.getData()}},c=n,d=e("2877"),l=Object(d["a"])(c,r,o,!1,null,null,null);a["default"]=l.exports},ae40:function(t,a,e){var r=e("83ab"),o=e("d039"),i=e("5135"),s=Object.defineProperty,n={},c=function(t){throw t};t.exports=function(t,a){if(i(n,t))return n[t];a||(a={});var e=[][t],d=!!i(a,"ACCESSORS")&&a.ACCESSORS,l=i(a,0)?a[0]:c,u=i(a,1)?a[1]:void 0;return n[t]=!!e&&!o((function(){if(d&&!r)return!0;var t={length:-1};d?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,l,u)}))}},b0c0:function(t,a,e){var r=e("83ab"),o=e("9bf2").f,i=Function.prototype,s=i.toString,n=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(t){return""}}})},b727:function(t,a,e){var r=e("0366"),o=e("44ad"),i=e("7b0b"),s=e("50c4"),n=e("65f0"),c=[].push,d=function(t){var a=1==t,e=2==t,d=3==t,l=4==t,u=6==t,f=5==t||u;return function(p,m,h,v){for(var b,y,g=i(p),C=o(g),x=r(m,h,3),_=s(C.length),L=0,w=v||n,S=a?w(p,_):e?w(p,0):void 0;_>L;L++)if((f||L in C)&&(b=C[L],y=x(b,L,g),t))if(a)S[L]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return L;case 2:c.call(S,b)}else if(l)return!1;return u?-1:d||l?l:S}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},e8b5:function(t,a,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-07f4d16d.4bb9fdaa.js.map