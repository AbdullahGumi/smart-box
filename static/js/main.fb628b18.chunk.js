(this["webpackJsonpsmart-box"]=this["webpackJsonpsmart-box"]||[]).push([[0],{151:function(e,t,n){e.exports=n(447)},158:function(e,t,n){},377:function(e,t,n){},435:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},447:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(69),i=n.n(o),c=(n(158),n(138)),l=n.n(c),u=n(147),s=n(28),p="SET_FILE_PROPERTIES",f=function(e){return{type:p,payload:e}},d="SET_FACE_BOUNDARY",m="SET_APPAREL_BOUNDARY",b="TOGGLE_BOX",g="SET_FACE_INFO",h="SET_APPARELS_INFO",E="SET_APPARELS_LABEL",y="SET_BOUNDING_BOX",x="SET_WITH_SPINNER",B=function(){return{type:b}},v=function(e){return{type:d,payload:e}},w=function(e){return{type:m,payload:e}},I=function(e){return{type:g,payload:e}},_=function(e){return{type:y,payload:e}},O=function(e){return{type:h,payload:e}},j=function(e){return{type:x,payload:e}},A=(n(377),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"SMART BOX"))}),F=n(141),P=n.n(F),S=n(470),R=n(468),D=n(471),N=n(467),T=n(94),k=n.n(T),C=(n(435),new k.a.App({apiKey:"3433c425ee5242de9459ae5f670f07f7"})),L=Object(s.b)((function(e){return{fileProperties:e.image.fileProperties}}),(function(e){return{setFaceBoundary:function(t){return e(v(t))},setApparelBoundary:function(t){return e(w(t))},setFaceInfo:function(t){return e(I(t))},setApparelsInfo:function(t){return e(O(t))},setBoundingBox:function(t){return e(_(t))},setWithSpinner:function(t){return e(j(t))}}}))((function(e){var t=e.setFaceBoundary,n=e.setApparelBoundary,a=e.fileProperties,o=e.setFaceInfo,i=e.setBoundingBox,c=e.setApparelsInfo,l=e.setWithSpinner;return r.a.createElement(S.a,{className:"models-Button"},r.a.createElement(N.a,{sx:{fontFamily:"Finlandica",color:"white"},onClick:function(){l(!0),C.models.predict(k.a.FACE_DETECT_MODEL,{base64:a}).then((function(e){t(function(e){var t=e.outputs[0].data.regions.length;o(t);var n=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}));i(n);var a=document.getElementById("inputImage"),r=a.clientWidth,c=a.clientHeight;return n.map((function(e){return{leftCol:e.left_col*r,topRow:e.top_row*c,rightCol:r-e.right_col*r,bottomRow:c-e.bottom_row*c}}))}(e)),l(!1)}),(function(e){console.log("There was an error",e)})),c({}),n({})}},"Detect Face"),r.a.createElement(N.a,{sx:{fontFamily:"Finlandica",color:"white"},onClick:function(){l(!0),C.models.predict("72c523807f93e18b431676fb9a58e6ad",{base64:a}).then((function(e){n(function(e){var t=e.outputs[0].data.regions.map((function(e){return e.data.concepts}));c(t);var n=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}));i(n);var a=document.getElementById("inputImage"),r=a.naturalWidth,o=a.naturalHeight;return n.map((function(e){return{leftCol:e.left_col*r,topRow:e.top_row*o,rightCol:r-e.right_col*r,bottomRow:o-e.bottom_row*o}}))}(e)),l(!1)}),(function(e){console.log("There was an error",e)})),t({}),o({})}},"Detect Apparels"))})),W=(n(442),Object(s.b)((function(e){var t=e.box;return{boundingBox:t.boundingBox,faceInfo:t.faceInfo}}))((function(e){var t=e.boundingBox,n=e.faceInfo,a=document.getElementById("inputImage"),o=a.clientWidth,i=a.clientHeight;return t.map((function(e){return r.a.createElement("div",{className:"bounding-box",key:e.top_row,style:{top:e.top_row*i,left:e.left_col*o,bottom:i-e.bottom_row*i,right:o-e.right_col*o}},r.a.createElement("div",{className:"transparent"}),n>0?r.a.createElement("label",{className:"box-label",key:e.top_row,style:{bottom:i-(i-e.bottom_row*i+e.top_row*i)}},"face"):null)}))}))),U=(n(443),Object(s.b)((function(e){var t=e.image.fileProperties,n=e.box;return{fileProperties:t,faceBoundary:n.faceBoundary,apparelBoundary:n.apparelBoundary}}))((function(e){var t=e.fileProperties,n=e.faceBoundary,a=e.apparelBoundary,o=e.closeFrame;return r.a.createElement(S.a,{sx:{position:"relative",width:"fit-content",height:"fit-content"}},r.a.createElement(S.a,{id:"inputImage",component:"img",sx:{borderRadius:"10px",height:"500px",width:"500px"},key:"".concat(t),src:"data:image/png;base64, ".concat(t),alt:"sample"}),n.length>0&&r.a.createElement(W,null),a.length>0&&r.a.createElement(W,null),r.a.createElement(S.a,{onClick:o,sx:{position:"absolute",top:0,borderRadius:"5px",background:"red",opacity:".8",width:"fit-content",height:"fit-content",p:.4,color:"white",":hover":{cursor:"pointer"}}},"CLOSE"))}))),V=Object(s.b)((function(e){var t=e.box;return{faceInfo:t.faceInfo,apparelsInfo:t.apparelsInfo,withSpinner:t.withSpinner}}),(function(e){return{toggleBox:function(){return e(B())},setFileProperties:function(t){return e(f(t))},setFaceBoundary:function(t){return e(v(t))},setApparelBoundary:function(t){return e(w(t))},setFaceInfo:function(t){return e(I(t))},setBoundingBox:function(t){return e(_(t))},setApparelsInfo:function(t){return e(O(t))},setWithSpinner:function(t){return e(j(t))}}}))((function(e){var t=e.faceInfo,n=e.apparelsInfo,a=e.toggleBox,o=e.setFaceBoundary,i=e.setApparelBoundary,c=e.setFaceInfo,l=e.setFileProperties,u=e.setBoundingBox,s=e.setApparelsInfo,p=e.setWithSpinner,f=e.withSpinner;return r.a.createElement(S.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{md:"80%",xs:"100%"},bgcolor:"background.paper",border:"2px solid #000",borderRadius:"10px",height:{md:"80%",xs:"100%"},boxShadow:24,p:1}},r.a.createElement(S.a,{sx:{display:"flex",height:"100%",flexDirection:{md:"row",xs:"column"},justifyContent:"space-between"}},r.a.createElement(U,{closeFrame:function(){p(!1),l(),a(),o({}),i({}),c({}),u({}),s({})}}),r.a.createElement(S.a,{sx:{display:"flex",overflowY:"auto",flexDirection:"column",borderRadius:"10px",background:"#879FD1",justifyContent:t>0||n.length>0?"space-between":"flex-end",alignItems:"center",width:{md:"30%",xs:"100%"},height:{md:"100%",xs:"30%"}}},t>1?r.a.createElement("span",{style:{paddingTop:"1rem"}},"I Have Detected ",t," Faces"):1===t&&r.a.createElement("span",null,"i have detected ",t," face"),f?r.a.createElement("div",{className:"spinner"},r.a.createElement(P.a,{type:"ThreeDots",color:"#778899",secondaryColor:"#778899"})):n.length>0&&r.a.createElement(R.a,{container:!0,sx:{p:3}},r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(D.a,{sx:{fontWeight:500,fontSize:"18px"}},"Name")),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement("span",null,n.map((function(e){return r.a.createElement("p",{key:e[0].value},e[0].name,":")})))))),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(D.a,{sx:{fontWeight:500,fontSize:"18px"}},"Probabilty")),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement("span",{className:"apparels-value"},n.map((function(e){return r.a.createElement("p",{key:e[0].value},Math.floor(100*e[0].value)," %")}))))))),r.a.createElement(L,null))))})),H=(n(444),{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}),G=Object(s.b)((function(e){return{fileProperties:e.image.fileProperties,isBoxVisible:e.box.isBoxVisible}}),(function(e){return{setFileProperties:function(t){return e(f(t))},toggleBox:function(){return e(B())}}}))((function(e){var t=e.toggleBox,n=e.setFileProperties,a=e.isBoxVisible;return r.a.createElement("div",{className:"main"},r.a.createElement(A,null),a?r.a.createElement(V,null):r.a.createElement(u.a,{onDrop:function(e){fetch(e.map((function(e){return URL.createObjectURL(e)}))).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result.split(",").pop();n(e)}})),t()},accept:"image/*"},(function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive,o=e.isDragAccept,i=e.isDragReject,c=o?"accept":i?"reject":"";return r.a.createElement("div",t({className:"dropzone ".concat(c)}),r.a.createElement("input",n()),r.a.createElement("h2",null,"I Can Detect Faces & Apparels In An Image. Give Me A Try"),r.a.createElement("span",null,a?"\ud83d\udcc2":"\ud83d\udcc1"),r.a.createElement("p",null,"Drag and drop an image, or click to start "))})),r.a.createElement(l.a,{className:"particles",params:H}))})),M=n(49),z=(n(445),n(145)),X=n(15),Y={fileProperties:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(X.a)(Object(X.a)({},e),{},{fileProperties:t.payload});default:return e}},K={isBoxVisible:!1,faceBoundary:{},apparelBoundary:{},faceInfo:{},apparelsInfo:{},apparelsLabel:[],boundingBox:{},withSpinner:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(X.a)(Object(X.a)({},e),{},{isBoxVisible:!e.isBoxVisible});case d:return Object(X.a)(Object(X.a)({},e),{},{faceBoundary:t.payload});case m:return Object(X.a)(Object(X.a)({},e),{},{apparelBoundary:t.payload});case g:return Object(X.a)(Object(X.a)({},e),{},{faceInfo:t.payload});case h:return Object(X.a)(Object(X.a)({},e),{},{apparelsInfo:t.payload});case E:return Object(X.a)(Object(X.a)({},e),{},{apparelsLabel:t.payload});case y:return Object(X.a)(Object(X.a)({},e),{},{boundingBox:t.payload});case x:return Object(X.a)(Object(X.a)({},e),{},{withSpinner:t.payload});default:return e}},q=Object(M.c)({image:J,box:$}),Q=[z.a];var Z=Object(M.d)(q,M.a.apply(void 0,Q));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(446);i.a.render(r.a.createElement(s.a,{store:Z},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[151,1,2]]]);
//# sourceMappingURL=main.fb628b18.chunk.js.map