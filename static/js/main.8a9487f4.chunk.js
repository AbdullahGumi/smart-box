(this["webpackJsonpsmart-box"]=this["webpackJsonpsmart-box"]||[]).push([[0],{103:function(e,t,n){e.exports=n(387)},108:function(e,t,n){},324:function(e,t,n){},380:function(e,t,n){},381:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n.n(o),i=(n(108),n(97)),l=n.n(i),u=n(102),s=n(11),p="SET_FILE_PROPERTIES",f=function(e){return{type:p,payload:e}},m="SET_FACE_BOUNDARY",d="SET_APPAREL_BOUNDARY",b="TOGGLE_BOX",E="SET_FACE_INFO",g="SET_APPARELS_INFO",h="SET_APPARELS_LABEL",y="SET_BOUNDING_BOX",v="SET_WITH_SPINNER",B=function(){return{type:b}},I=function(e){return{type:m,payload:e}},_=function(e){return{type:d,payload:e}},O=function(e){return{type:E,payload:e}},w=function(e){return{type:y,payload:e}},x=function(e){return{type:g,payload:e}},A=function(e){return{type:v,payload:e}},N=(n(324),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"SMART BOX"))}),P=n(100),j=n.n(P),S=n(53),F=n.n(S),R=(n(380),new F.a.App({apiKey:"3433c425ee5242de9459ae5f670f07f7"})),T=Object(s.b)((function(e){return{fileProperties:e.image.fileProperties}}),(function(e){return{setFaceBoundary:function(t){return e(I(t))},setApparelBoundary:function(t){return e(_(t))},setFaceInfo:function(t){return e(O(t))},setApparelsInfo:function(t){return e(x(t))},setBoundingBox:function(t){return e(w(t))},setWithSpinner:function(t){return e(A(t))}}}))((function(e){var t=e.setFaceBoundary,n=e.setApparelBoundary,a=e.fileProperties,o=e.setFaceInfo,c=e.setBoundingBox,i=e.setApparelsInfo,l=e.setWithSpinner;return r.a.createElement("div",{className:"models-button"},r.a.createElement("button",{onClick:function(){l(!0),R.models.predict(F.a.FACE_DETECT_MODEL,{base64:a}).then((function(e){t(function(e){var t=e.outputs[0].data.regions.length;o(t);var n=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}));c(n);var a=document.getElementById("inputImage"),r=a.clientWidth,i=a.clientHeight;return n.map((function(e){return{leftCol:e.left_col*r,topRow:e.top_row*i,rightCol:r-e.right_col*r,bottomRow:i-e.bottom_row*i}}))}(e)),l(!1)}),(function(e){console.log("There was an error",e)})),i({}),n({})}},"Detect Face"),r.a.createElement("button",{onClick:function(){l(!0),R.models.predict("72c523807f93e18b431676fb9a58e6ad",{base64:a}).then((function(e){n(function(e){var t=e.outputs[0].data.regions.map((function(e){return e.data.concepts}));i(t);var n=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}));c(n);var a=document.getElementById("inputImage"),r=a.naturalWidth,o=a.naturalHeight;return n.map((function(e){return{leftCol:e.left_col*r,topRow:e.top_row*o,rightCol:r-e.right_col*r,bottomRow:o-e.bottom_row*o}}))}(e)),l(!1)}),(function(e){console.log("There was an error",e)})),t({}),o({})}},"Detect Apparels"))})),C=(n(381),Object(s.b)((function(e){var t=e.box;return{boundingBox:t.boundingBox,faceInfo:t.faceInfo}}))((function(e){var t=e.boundingBox,n=e.faceInfo,a=document.getElementById("inputImage"),o=a.clientWidth,c=a.clientHeight;return t.map((function(e){return r.a.createElement("div",{className:"bounding-box",key:e.top_row,style:{top:e.top_row*c,left:e.left_col*o,bottom:c-e.bottom_row*c,right:o-e.right_col*o}},r.a.createElement("div",{className:"transparent"}),n>0?r.a.createElement("label",{className:"box-label",key:e.top_row,style:{bottom:c-(c-e.bottom_row*c+e.top_row*c)}},"face"):null)}))}))),D=(n(382),Object(s.b)((function(e){var t=e.image.fileProperties,n=e.box;return{fileProperties:t,faceBoundary:n.faceBoundary,apparelBoundary:n.apparelBoundary}}))((function(e){var t=e.fileProperties,n=e.faceBoundary,a=e.apparelBoundary;return r.a.createElement("div",{className:"image-div"},r.a.createElement("img",{id:"inputImage",width:"500px",height:"500px",key:"".concat(t),src:"data:image/png;base64, ".concat(t),alt:"sample"}),n.length>0&&r.a.createElement(C,null),a.length>0&&r.a.createElement(C,null))}))),L=(n(383),Object(s.b)((function(e){var t=e.box;return{faceInfo:t.faceInfo,apparelsInfo:t.apparelsInfo,withSpinner:t.withSpinner}}),(function(e){return{toggleBox:function(){return e(B())},setFileProperties:function(t){return e(f(t))},setFaceBoundary:function(t){return e(I(t))},setApparelBoundary:function(t){return e(_(t))},setFaceInfo:function(t){return e(O(t))},setBoundingBox:function(t){return e(w(t))},setApparelsInfo:function(t){return e(x(t))},setWithSpinner:function(t){return e(A(t))}}}))((function(e){var t=e.faceInfo,n=e.apparelsInfo,a=e.toggleBox,o=e.setFaceBoundary,c=e.setApparelBoundary,i=e.setFaceInfo,l=e.setFileProperties,u=e.setBoundingBox,s=e.setApparelsInfo,p=e.setWithSpinner,f=e.withSpinner;return r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"close-frame"},r.a.createElement("button",{onClick:function(){p(!1),l(),a(),o({}),c({}),i({}),u({}),s({})}},"X")),r.a.createElement("div",{className:"image-frame"},r.a.createElement(D,null)),r.a.createElement("div",{className:"info-frame"},!t>0&!n.length>0&!1===f?r.a.createElement("h4",null,"Select one of the models below to start."):null,t>1?r.a.createElement("span",null,"i have detected ",t," faces"):1===t&&r.a.createElement("span",null,"i have detected ",t," face"),!0===f?r.a.createElement("div",{className:"spinner"},r.a.createElement(j.a,{type:"ThreeDots",color:"#778899",secondaryColor:"#778899"})):n.length>0&&r.a.createElement("div",{className:"apparels-info"},r.a.createElement("h4",null,"Name",r.a.createElement("span",{className:"apparels-name"},n.map((function(e){return r.a.createElement("p",{key:e[0].value},e[0].name,":")})))),r.a.createElement("h4",null,"Probabilty",r.a.createElement("span",{className:"apparels-value"},n.map((function(e){return r.a.createElement("p",{key:e[0].value},Math.floor(100*e[0].value)," %")}))))),r.a.createElement(T,null)))}))),k=(n(384),{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}),W=Object(s.b)((function(e){return{fileProperties:e.image.fileProperties,isBoxVisible:e.box.isBoxVisible}}),(function(e){return{setFileProperties:function(t){return e(f(t))},toggleBox:function(){return e(B())}}}))((function(e){e.fileProperties;var t=e.toggleBox,n=e.setFileProperties,a=e.isBoxVisible;return r.a.createElement("div",{className:"main"},r.a.createElement(N,null),a?r.a.createElement(L,null):r.a.createElement(u.a,{onDrop:function(e){fetch(e.map((function(e){return URL.createObjectURL(e)}))).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result.split(",").pop();n(e)}})),t()},accept:"image/*"},(function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive,o=e.isDragAccept,c=e.isDragReject,i=o?"accept":c?"reject":"";return r.a.createElement("div",t({className:"dropzone ".concat(i)}),r.a.createElement("input",n()),r.a.createElement("h2",null,"I CAN DETECT FACES & APPARELS IN AN IMAGE. GIVE ME A TRY"),r.a.createElement("span",null,a?"\ud83d\udcc2":"\ud83d\udcc1"),r.a.createElement("p",null,"Drag and drop an image, or click to start "))})),r.a.createElement(l.a,{className:"particles",params:k}))})),V=n(22),U=(n(385),n(101)),G=n(8),M={fileProperties:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(G.a)(Object(G.a)({},e),{},{fileProperties:t.payload});default:return e}},X={isBoxVisible:!1,faceBoundary:{},apparelBoundary:{},faceInfo:{},apparelsInfo:{},apparelsLabel:[],boundingBox:{},withSpinner:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(G.a)(Object(G.a)({},e),{},{isBoxVisible:!e.isBoxVisible});case m:return Object(G.a)(Object(G.a)({},e),{},{faceBoundary:t.payload});case d:return Object(G.a)(Object(G.a)({},e),{},{apparelBoundary:t.payload});case E:return Object(G.a)(Object(G.a)({},e),{},{faceInfo:t.payload});case g:return Object(G.a)(Object(G.a)({},e),{},{apparelsInfo:t.payload});case h:return Object(G.a)(Object(G.a)({},e),{},{apparelsLabel:t.payload});case y:return Object(G.a)(Object(G.a)({},e),{},{boundingBox:t.payload});case v:return Object(G.a)(Object(G.a)({},e),{},{withSpinner:t.payload});default:return e}},J=Object(V.c)({image:H,box:Y}),z=[U.a];var K=Object(V.d)(J,V.a.apply(void 0,z));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(386);c.a.render(r.a.createElement(s.a,{store:K},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.8a9487f4.chunk.js.map