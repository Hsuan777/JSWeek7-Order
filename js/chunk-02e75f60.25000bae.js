(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02e75f60"],{"159b":function(t,a,e){var i=e("da84"),r=e("fdbc"),o=e("17c2"),s=e("9112");for(var n in r){var c=i[n],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,r=e("a640"),o=e("ae40"),s=r("forEach"),n=o("forEach");t.exports=s&&n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,a,e){var i=e("d039"),r=e("b622"),o=e("2d00"),s=r("species");t.exports=function(t){return o>=51||!i((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},4160:function(t,a,e){"use strict";var i=e("23e7"),r=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"65f0":function(t,a,e){var i=e("861d"),r=e("e8b5"),o=e("b622"),s=o("species");t.exports=function(t,a){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},8418:function(t,a,e){"use strict";var i=e("c04e"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var s=i(a);s in t?r.f(t,s,o(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),r=e("d039"),o=e("e8b5"),s=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),f=e("b622"),p=e("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=u("concat"),y=function(t){if(!s(t))return!1;var a=t[m];return void 0!==a?!!a:o(t)},C=!b||!g;i({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,i,r,o,s=n(this),u=d(s,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(o=-1===a?s:arguments[a],y(o)){if(r=c(o.length),f+r>v)throw TypeError(h);for(e=0;e<r;e++,f++)e in o&&l(u,f,o[e])}else{if(f>=v)throw TypeError(h);l(u,f++,o)}return u.length=f,u}})},a640:function(t,a,e){"use strict";var i=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&i((function(){e.call(null,a||function(){throw 1},1)}))}},ae40:function(t,a,e){var i=e("83ab"),r=e("d039"),o=e("5135"),s=Object.defineProperty,n={},c=function(t){throw t};t.exports=function(t,a){if(o(n,t))return n[t];a||(a={});var e=[][t],l=!!o(a,"ACCESSORS")&&a.ACCESSORS,d=o(a,0)?a[0]:c,u=o(a,1)?a[1]:void 0;return n[t]=!!e&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,d,u)}))}},b727:function(t,a,e){var i=e("0366"),r=e("44ad"),o=e("7b0b"),s=e("50c4"),n=e("65f0"),c=[].push,l=function(t){var a=1==t,e=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u;return function(p,m,v,h){for(var b,g,y=o(p),C=r(y),x=i(m,v,3),w=s(C.length),L=0,S=h||n,_=a?S(p,w):e?S(p,0):void 0;w>L;L++)if((f||L in C)&&(b=C[L],g=x(b,L,y),t))if(a)_[L]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return L;case 2:c.call(_,b)}else if(d)return!1;return u?-1:l||d?d:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},ce5a:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container"},[e("div",{staticClass:"d-flex align-items-center"},[e("h2",{staticClass:"font-weight-bold d-flex justify-content-between mr-3 my-5"},[t._v("檔案列表")]),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"d-flex justify-content-end mb-2"},[e("button",{staticClass:"btn btn-primary btn-lg px-3",attrs:{type:"button","data-toggle":"modal","data-target":"#addStorageModal"},on:{click:t.initData}},[t._v("新增檔案")])]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table border-bottom"},[t._m(0),t.hexAPI?e("tbody",{staticClass:"p-0"},t._l(t.hexAPI.data,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(a.id))]),e("td",{staticClass:"align-middle"},[e("img",{staticClass:"img-fluid",attrs:{src:a.path,alt:""}})]),e("td",{staticClass:"pr-0"},[e("button",{staticClass:"btn btn-outline-danger mr-0",attrs:{"data-target":"#deleteStorageModal"},on:{click:function(e){return t.copyData(a)}}},[t._v("刪除")])])])})),0):t._e()])]),e("div",{staticClass:"modal fade",attrs:{id:"addStorageModal",tabindex:"-1",role:"dialog","aria-labelledby":"addStorageModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header bg-dark"},[e("h5",{staticClass:"modal-title text-white font-weight-bold"},[t._v(t._s(t.modalTitle))]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"form-row justify-content-center"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("商品圖片")]),e("input",{ref:"updataFile",staticClass:"form-control",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.previewFile}})]),e("img",{ref:"previewImg",staticClass:"img-fluid",attrs:{alt:""}})])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addData}},[t._v("Save")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"deleteStorageModal",tabindex:"-1",role:"dialog","aria-labelledby":"addStorageModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("h3",[t._v("是否刪除這張圖片? 刪除後將無法復原 !")]),e("div",{staticClass:"d-flex justify-content-center"},[e("img",{staticClass:"img-fluid",attrs:{src:t.temporary.path,alt:""}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.deleteData}},[t._v("Delete")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-nowrap",attrs:{scope:"row"}},[t._v("檔案名稱")]),e("th",{attrs:{scope:"row",width:"150px"}},[t._v("縮圖")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"row"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger"},[e("h5",{staticClass:"modal-title text-white font-weight-bold"},[t._v("刪除檔案")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("99af"),e("4160"),e("159b"),e("1157")),s=e.n(o),n={data:function(){return{hexAPI:{data:[]},temporary:{},previewTemporary:{file:"",src:""},modalTitle:"",isLoading:!1}},props:["token"],methods:{getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this;a.isLoading=!0,a.axios.defaults.headers.common.Authorization="Bearer ".concat(a.token),a.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/storage?page=").concat(t)).then((function(t){a.hexAPI.data=t.data.data,a.isLoading=!1}))},previewFile:function(){var t=this;t.previewTemporary.file=t.$refs.updataFile.files[0];var a=new FileReader;a.addEventListener("load",(function(){t.previewTemporary.src=a.result,t.$set(t.$refs.previewImg,"src",t.previewTemporary.src)})),a.readAsDataURL(t.previewTemporary.file)},addData:function(){var t=this;if(t.previewTemporary.file){var a=new FormData;t.isLoading=!0,s()("#addStorageModal").modal("hide"),a.append("file",t.previewTemporary.file),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.post("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/storage"),a).then((function(){t.getData(),t.cleanData()}))}else alert("請選擇檔案~")},initData:function(){this.modalTitle="新增檔案"},copyData:function(t){var a=this;a.temporary=t,a.modalTitle="是否刪除此筆檔案 ? ",s()("#deleteStorageModal").modal("show")},deleteData:function(){var t=this;t.isLoading=!0,t.hexAPI.data.forEach((function(a){t.temporary.id===a.id&&(t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.delete("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/admin/storage/").concat(t.temporary.id)).then((function(){t.getData(),t.cleanData()})))}))},cleanData:function(){this.temporary={}}},created:function(){this.getData()}},c=n,l=e("2877"),d=Object(l["a"])(c,i,r,!1,null,null,null);a["default"]=d.exports},e8b5:function(t,a,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-02e75f60.25000bae.js.map