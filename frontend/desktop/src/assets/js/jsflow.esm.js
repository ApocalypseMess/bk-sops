import{jsPlumb as e}from"jsplumb";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),i.forEach(function(n){t(e,n,o[n])})}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,i=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(o=(a=r.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,s=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e,t,n,o,i,s,a,r,c,d){"boolean"!=typeof a&&(c=r,r=a,a=!1);var l,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=l):t&&(l=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),l)if(f.functional){var u=f.render;f.render=function(e,t){return l.call(t),u(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return n},s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a=document.head||document.getElementsByTagName("head")[0],r={};var c=function(e){return function(e,t){return function(e,t){var n=s?t.media||"default":e,o=r[n]||(r[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var c=o.ids.size-1,d=document.createTextNode(i),l=o.element.childNodes;l[c]&&o.element.removeChild(l[c]),l.length?o.element.insertBefore(d,l[c]):o.element.appendChild(d)}}}(e,t)}},d=i({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"palette-panel"},[this._t("palette",[this._m(0)])],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"palette-group"},[t("li",[t("div",{staticClass:"palette-default-item startpoint",attrs:{"data-type":"startpoint"}})]),t("li",[t("div",{staticClass:"palette-default-item endpoint",attrs:{"data-type":"endpoint"}})]),t("li",[t("div",{staticClass:"palette-default-item tasknode",attrs:{"data-type":"tasknode"}})]),t("li",[t("div",{staticClass:"palette-default-item gateway",attrs:{"data-type":"gateway"}})])])}]},function(e){e&&e("data-v-09b6e314_0",{source:".palette-group{margin:0;padding:0;background:#fcfcfc;text-align:center;list-style:none}.palette-group>li{padding:14px 0}.palette-default-item{display:inline-block;width:40px;height:40px;font-size:12px;color:#888;border:1px solid #999;border-radius:2px;cursor:pointer;user-select:none}.palette-default-item:hover{box-shadow:0 0 8px rgba(50,50,50,.3)}.startpoint{border-radius:50%;border:4px solid #6a6c8a}.endpoint{border-radius:50%;background:#6a6c8a}.tasknode{height:30px;border:2px solid #33d0c6}.gateway{width:30px;height:30px;background:#7c68fc;transform:rotate(-45deg)}",map:void 0,media:void 0})},{name:"PalettePanel",props:["selector"],data:function(){return{}}},void 0,!1,void 0,c,void 0),l=i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tool-panel"},e._l(e.tools,function(t,o){return n("div",{key:o,class:["tool-item",t.cls,{actived:"frameSelect"===t.type&&e.isFrameSelecting}],on:{click:function(n){return e.onToolClick(t)}}},[e._v("\n        "+e._s(t.name)+"\n    ")])}),0)},staticRenderFns:[]},function(e){e&&e("data-v-2c518942_0",{source:".tool-item{display:inline-block;margin-right:10px;user-select:none;cursor:pointer}.tool-item:last-child{margin-right:0}.tool-item.actived{color:#3a84ff}",map:void 0,media:void 0})},{name:"ToolPanel",props:["tools","isFrameSelecting"],data:function(){return{}},methods:{onToolClick:function(e){this.$emit("onToolClick",e)}}},void 0,!1,void 0,c,void 0),f=i({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bk-flow-location",on:{mousedown:this.onMouseDown,mouseup:this.onMouseUp}},["startpoint"===this.node.type?t("div",{staticClass:"circle-node startpoint"}):"endpoint"===this.node.type?t("div",{staticClass:"circle-node endpoint"}):"tasknode"===this.node.type?t("div",{staticClass:"tasknode"}):"gateway"===this.node.type?t("div",{staticClass:"gateway"}):t("div",{staticClass:"node-default"})])},staticRenderFns:[]},function(e){e&&e("data-v-0604134d_0",{source:".bk-flow-location .circle-node{width:30px;height:30px;border-radius:50%;text-align:center}.bk-flow-location .startpoint{border:4px solid #6a6c8a}.bk-flow-location .endpoint{background:#6a6c8a}.bk-flow-location .tasknode{width:80px;height:50px;border:2px solid #33d0c6}.bk-flow-location .gateway{width:30px;height:30px;background:#7c68fc;transform:rotate(-45deg)}.bk-flow-location .node-default{width:120px;height:80px;line-height:80px;border:1px solid #ccc;border-radius:2px;text-align:center}.bk-flow-location .node-default.selected{border:1px solid #3a84ff}",map:void 0,media:void 0})},{name:"NodeTemplate",props:{node:{type:Object,default:function(){return{}}}},data:function(){return{moveFlag:{x:0,y:0,moved:!1}}},methods:{onMouseDown:function(e){this.moveFlag={x:e.pageX,y:e.pageY,moved:!1},this.$el.addEventListener("mousemove",this.mouseMoveHandler)},onMouseUp:function(e){var t=e.pageX,n=e.pageY;this.moveFlag.x=t,this.moveFlag.y=n,this.moveFlag.moved?(console.log("drag event"),this.moveFlag.moved=!1):console.log("click event"),this.$el.removeEventListener("mousemove",this.mouseMoveHandler)},mouseMoveHandler:function(e){var t=e.pageX,n=e.pageY;(Math.abs(t-this.moveFlag.x)>2||Math.abs(n-this.moveFlag.y)>2)&&(this.moveFlag.moved=!0)}}},void 0,!1,void 0,c,void 0);function u(e){return"touches"in e?e.touches[0]:e}var h={grid:[5,5]},p={connector:["Bezier",{curviness:30}],paintStyle:{strokeWidth:2,stroke:"#567567",outlineStroke:"tranparent",outlineWidth:6},hoverPaintStyle:{fill:"transparent",stroke:"#3a84ff"}},v={endpoint:"Dot",connector:["Flowchart",{stub:[1,6],alwaysRespectStub:!0,gap:8,cornerRadius:2}],connectorOverlays:[["PlainArrow",{width:8,length:6,location:1,id:"arrow"}]],paintStyle:{fill:"#3a84ff",radius:5},anchor:["Left","Right","Top","Bottom"],isSource:!0,isTarget:!0};function m(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="",n=0;n<7;n++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e+t}var g={showPalette:{type:Boolean,default:!0},showTool:{type:Boolean,default:!0},tools:{type:Array,default:function(){return[{type:"zoomIn",name:"放大",cls:"tool-item"},{type:"zoomOut",name:"缩小",cls:"tool-item"},{type:"resetPosition",name:"重置",cls:"tool-item"}]}},editable:{type:Boolean,default:!0},selector:{type:String,default:"palette-default-item"},data:{type:Object,default:function(){return{nodes:[],lines:[]}}},nodeOptions:{type:Object,default:function(){return n({},h)}},connectorOptions:{type:Object,default:function(){return n({},p)}},endpointOptions:{type:Object,default:function(){return n({},v)}}},y={mousedown:"ontouchstart"in document.documentElement?"touchstart":"mousedown",mousemove:"ontouchmove"in document.documentElement?"touchmove":"mousemove",mouseup:"ontouchend"in document.documentElement?"touchend":"mouseup"},w=i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["jsflow",{editable:e.editable}]},[n("div",{staticClass:"canvas-area"},[e.showTool?n("div",{staticClass:"tool-panel-wrap"},[e._t("toolPanel",[n("tool-panel",{attrs:{tools:e.tools,"is-frame-selecting":e.isFrameSelecting},on:{onToolClick:e.onToolClick}})])],2):e._e(),e.showPalette?n("div",{ref:"palettePanel",staticClass:"palette-panel-wrap"},[e._t("palettePanel",[n("palette-panel",{attrs:{selector:e.selector}})])],2):e._e(),n("div",{ref:"canvasFlowWrap",staticClass:"canvas-flow-wrap",style:e.canvasWrapStyle,on:e._d({},[e.mousedown,e.onCanvasMouseDown,e.mouseup,e.onCanvasMouseUp])},[n("div",{ref:"canvasFlow",staticClass:"canvas-flow",style:e.canvasStyle,attrs:{id:"canvas-flow"}},e._l(e.nodes,function(t){return n("div",{key:t.id,staticClass:"jsflow-node canvas-node",attrs:{id:t.id},on:{mouseover:function(n){return e.toggleHighLight(t,!0)},mouseout:function(n){return e.toggleHighLight(t,!1)}}},[e._t("nodeTemplate",[n("node-template",{attrs:{node:t}})],{node:t})],2)}),0),e.isFrameSelecting?n("div",{staticClass:"canvas-frame-selector",style:e.frameSelectorStyle}):e._e()]),e.showAddingNode?n("div",{staticClass:"jsflow-node adding-node",style:e.setNodeInitialPos(e.addingNodeConfig)},[e._t("nodeTemplate",[n("node-template",{attrs:{node:e.addingNodeConfig}})],{node:e.addingNodeConfig})],2):e._e()])])},staticRenderFns:[]},function(e){e&&e("data-v-1aa5aca5_0",{source:".jsflow{height:100%;border:1px solid #ccc}.jsflow .canvas-area{position:relative;height:100%}.jsflow .tool-panel-wrap{position:absolute;top:20px;left:70px;padding:10px 20px;background:#c4c6cc;opacity:.65;border-radius:4px;z-index:4}.jsflow .palette-panel-wrap{float:left;width:60px;height:100%;border-right:1px solid #ccc}.jsflow .canvas-flow-wrap{position:relative;height:100%;overflow:hidden}.jsflow .canvas-flow{position:relative;min-width:100%;min-height:100%}.jsflow .canvas-frame-selector{position:absolute;border:1px solid #3a84ff;background:rgba(58,132,255,.15)}.jsflow .jsflow-node{position:absolute;user-select:none}.jsflow .jtk-endpoint{z-index:1;cursor:pointer}.jsflow .adding-node{opacity:.8}.jsflow .jtk-endpoint.jtk-dragging{z-index:0}.jsflow .jtk-connector{cursor:pointer}",map:void 0,media:void 0})},{name:"JsFlow",components:{PalettePanel:d,ToolPanel:l,NodeTemplate:f},model:{prop:"data",event:"change"},props:g,data:function(){var e=this.data;return n({nodes:e.nodes,lines:e.lines,canvasGrabbing:!1,isFrameSelecting:!1,mouseDownPos:{},canvasPos:{x:0,y:0},canvasOffset:{x:0,y:0},frameSelectorPos:{x:0,y:0},frameSelectorRect:{width:0,height:0},selectedNodes:[],showAddingNode:!1,addingNodeConfig:{},addingNodeRect:{},canvasRect:{},paletteRect:{},zoom:1},y)},computed:{canvasWrapStyle:function(){return{cursor:this.isFrameSelecting?"crosshair":this.canvasGrabbing?"-webkit-grabbing":"-webkit-grab"}},canvasStyle:function(){return{left:"".concat(this.canvasOffset.x,"px"),top:"".concat(this.canvasOffset.y,"px")}},frameSelectorStyle:function(){return{left:"".concat(this.frameSelectorPos.x,"px"),top:"".concat(this.frameSelectorPos.y,"px"),width:"".concat(this.frameSelectorRect.width,"px"),height:"".concat(this.frameSelectorRect.height,"px")}}},watch:{"data.nodes":{handler:function(e){this.nodes=e},deep:!0},editable:function(e){var t=this.$el.querySelectorAll(".canvas-node");this.toggleNodeDraggable(t,e)}},mounted:function(){this.initCanvas(),this.registerEvent(),this.renderData(),this.$refs.palettePanel&&(this.paletteRect=this.$refs.palettePanel.getBoundingClientRect(),this.registerPaletteEvent())},beforeDestroy:function(){this.$refs.palettePanel&&this.$refs.palettePanel.removeEventListener(this.mousedown,this.nodeCreateHandler),this.$el.removeEventListener(this.mousemove,this.nodeMovingHandler),document.removeEventListener(this.mouseup,this.nodeMoveEndHandler)},methods:{initCanvas:function(){var t={},o=n({},this.endpointOptions,this.connectorOptions);for(var i in o){var s=i[0].toUpperCase();t["".concat(s).concat(i.slice(1))]=o[i]}this.instance=e.getInstance(n({container:"canvas-flow"},t))},registerEvent:function(){var e=this;this.instance.bind("beforeDrag",function(t){return!!e.editable&&("function"!=typeof e.$listeners.onBeforeDrag||e.$listeners.onBeforeDrag(t))}),this.instance.bind("beforeDrop",function(t){return!!e.editable&&("function"!=typeof e.$listeners.onBeforeDrop||e.$listeners.onBeforeDrop(t))}),this.instance.bind("connectionDrag",function(t){"function"==typeof e.$listeners.connectionDrag&&e.$emit("connectionDrag",t)}),this.instance.bind("connection",function(t){"function"==typeof e.$listeners.onConnection&&e.$emit("onConnection",t)}),this.instance.bind("connectionDragStop",function(t,n){if(!t.target||!t.target.classList.contains("jsflow-node")){var o=e.getNodeWithEndpoint(n.target);if(o){var i=e.nodes.find(function(e){return o.id===e.id});if("function"==typeof e.$listeners.onConnectionDragStop){var s={id:t.source.id,arrow:t.endpoints[0].anchor.type};e.$emit("onConnectionDragStop",s,i.id,n)}}}}),this.instance.bind("beforeDetach",function(t){return"function"!=typeof e.$listeners.onBeforeDetach||e.$listeners.onBeforeDetach(t)}),this.instance.bind("connectionDetached",function(t,n){var o=e.lines.filter(function(e){return e.source.id!==t.sourceId&&e.target.id!==t.targetId});e.lines=o,"function"==typeof e.$listeners.onConnectionDetached&&e.$emit("onConnectionDetached",t)}),this.instance.bind("connectionMoved",function(t,n){"function"==typeof e.$listeners.onConnectionMoved&&e.$emit("onConnectionMoved",lines)}),this.instance.bind("click",function(t,n){"function"==typeof e.$listeners.onConnectionClick&&e.$emit("onConnectionClick",t,n)}),this.instance.bind("dblclick",function(t,n){"function"==typeof e.$listeners.onConnectionDbClick&&e.$emit("onConnectionDbClick",t,n)}),this.instance.bind("endpointClick",function(t,n){"function"==typeof e.$listeners.onEndpointClick&&e.$emit("onEndpointClick",t,n)}),this.instance.bind("endpointDblClick",function(t,n){"function"==typeof e.$listeners.onEndpointDbClick&&e.$emit("onEndpointDbClick",t,n)})},renderData:function(){var e=this;this.instance.batch(function(){e.nodes.forEach(function(t){e.initNode(t)}),e.lines.forEach(function(t){e.createConnector(t,e.connectorOptions)})})},updateCanvas:function(e){this.removeAllConnector(),this.lines=e.lines,this.nodes=e.nodes,this.renderData()},createNode:function(e){var t=this;("function"!=typeof this.$listeners.onCreateNodeBefore||this.$listeners.onCreateNodeBefore(e))&&(this.nodes.push(e),this.$nextTick(function(){t.initNode(e)}))},initNode:function(e){var t=document.getElementById(e.id);t.style.left="".concat(e.x,"px"),t.style.top="".concat(e.y,"px"),this.setNodeDraggable(e,this.nodeOptions),this.setNodeEndPoint(e,this.endpointOptions),"function"==typeof this.$listeners.onCreateNodeAfter&&this.$emit("onCreateNodeAfter",e)},removeNode:function(e){var t=this.nodes.findIndex(function(t){return t.id===e.id});this.nodes.splice(t,1),this.instance.remove(e.id)},setNodeEndPoint:function(e,t){var o=this;(e.endpoints||["Top","Right","Bottom","Left"]).forEach(function(i){o.instance.addEndpoint(e.id,n({anchor:i,uuid:i+e.id},t))})},setNodeDraggable:function(e,t){if(this.editable){var i=this;this.instance.draggable(e.id,n({grid:[20,20],drag:function(t){var n=i.nodes.find(function(t){return e.id===t.id}),o=Object.assign({},n);i.$emit("onNodeMoving",o,t)},stop:function(t){var n=-1,s=o(t.pos,2),a=s[0],r=s[1],c=i.nodes.find(function(t,o){if(t.id===e.id)return n=o,!0}),d=Object.assign({},c,{x:a,y:r});i.nodes.splice(n,1,d),i.$emit("onNodeMoveStop",d,t)}},t))}},setNodePosition:function(e){var t=document.getElementById(e.id);t.style.left="".concat(e.x,"px"),t.style.top="".concat(e.y,"px"),this.instance.revalidate(t)},toggleNodeDraggable:function(e,t){this.instance.setDraggable(e,t)},setNodeInitialPos:function(e){return{left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),visibility:e.visible?"initial":"hidden"}},createConnector:function(e,t){var o=e.options||{};return this.instance.connect({source:e.source.id,target:e.target.id,uuids:[e.source.arrow+e.source.id,e.target.arrow+e.target.id]},n({},t,o))},setConnector:function(e,t,n){var o=this;this.instance.getAllConnections().filter(function(n){return n.sourceId===e&&n.targetId===t}).forEach(function(e){e.setConnector(n),o.endpointOptions&&o.endpointOptions.connectorOverlays&&o.endpointOptions.connectorOverlays.forEach(function(t){e.addOverlay(t)})})},removeConnector:function(e){var t=this;this.instance.getConnections({source:e.source.id,target:e.target.id}).forEach(function(e){t.instance.deleteConnection(e)})},removeAllConnector:function(){this.instance.deleteEveryConnection(),this.lines=[]},getConnectorsByNodeId:function(e){return this.instance.getAllConnections().filter(function(t){return t.sourceId===e||t.targetId===e})},getNodeWithEndpoint:function(e){var t=e.parentNode;return!(!t||"HTML"===t.nodeName)&&(t.classList.contains("jsflow-node")?t:this.getNodeWithEndpoint(t))},addLineOverlay:function(e,t){var n=this;this.instance.getConnections({source:e.source.id,target:e.target.id}).forEach(function(e){e.addOverlay([t.type,{label:t.name,location:t.location,cssClass:t.cls,id:t.id,events:{click:function(e,t){n.$emit("onOverlayClick",e,t)}}}])})},removeLineOverlay:function(e,t){this.instance.getConnections({source:e.source.id,target:e.target.id}).forEach(function(e){e.removeOverlay(t)})},onCanvasMouseDown:function(e){e=u(e),this.isFrameSelecting?this.frameSelectHandler(e):(this.canvasGrabbing=!0,this.mouseDownPos={x:e.pageX,y:e.pageY},this.$refs.canvasFlowWrap.addEventListener(this.mousemove,this.canvasFlowMoveHandler,!1))},canvasFlowMoveHandler:function(e){e=u(e),this.canvasOffset={x:this.canvasPos.x+e.pageX-this.mouseDownPos.x,y:this.canvasPos.y+e.pageY-this.mouseDownPos.y}},onCanvasMouseUp:function(e){this.isFrameSelecting?this.frameSelectEndHandler(e):(this.canvasGrabbing=!1,this.$refs.canvasFlowWrap.removeEventListener(this.mousemove,this.canvasFlowMoveHandler),this.canvasPos={x:this.canvasOffset.x,y:this.canvasOffset.y})},registerPaletteEvent:function(){this.$refs.palettePanel.addEventListener(this.mousedown,this.nodeCreateHandler,!1)},nodeCreateHandler:function(e){var t=this,o=function e(t,n){return 1===t.nodeType&&t.classList.contains(n)?t:"HTML"!==t.parentNode.nodeName?e(t.parentNode,n):null}(e.target,this.selector);if(o){var i=o.dataset.type?o.dataset.type:"",s={};for(var a in o.dataset){var r=a.match(/(config)(\w*)/);if(r&&""!==r[2]){var c=r[2],d=c[0].toLowerCase()+c.slice(1);s[d]=o.dataset[a]}}this.showAddingNode=!0,this.addingNodeConfig.id=m("node"),this.addingNodeConfig.type=i,this.$nextTick(function(){var o=t.$el.querySelector(".adding-node");t.addingNodeRect=o.getBoundingClientRect();var a=t.getAddingNodePos(e);t.addingNodeConfig=n({id:m("node"),type:i,x:a.x,y:a.y,adding:!0,visible:!1},s),t.$el.addEventListener(t.mousemove,t.nodeMovingHandler,!1),document.addEventListener(t.mouseup,t.nodeMoveEndHandler,!1)})}},nodeMovingHandler:function(e){var t=this.getAddingNodePos(e);this.$set(this.addingNodeConfig,"x",t.x),this.$set(this.addingNodeConfig,"y",t.y),this.$set(this.addingNodeConfig,"visible",!0)},nodeMoveEndHandler:function(e){if(this.$el.removeEventListener(this.mousemove,this.nodeMovingHandler),document.removeEventListener(this.mouseup,this.nodeMoveEndHandler),this.showAddingNode=!1,e.pageX>this.paletteRect.left+this.paletteRect.width){var t=this.addingNodeConfig.x-this.paletteRect.width-this.canvasOffset.x,n=this.addingNodeConfig.y-this.canvasOffset.y;this.$set(this.addingNodeConfig,"x",t),this.$set(this.addingNodeConfig,"y",n),delete this.addingNodeConfig.adding,delete this.addingNodeConfig.visible,this.createNode(this.addingNodeConfig)}this.addingNodeConfig={},this.addingNodeRect={}},getAddingNodePos:function(e){return{x:e.pageX-this.paletteRect.left-this.addingNodeRect.width/2,y:e.pageY-this.paletteRect.top-this.addingNodeRect.height/2}},toggleHighLight:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.editable){this.instance.getEndpoints(e.id);var o=document.getElementById(e.id);this.instance.selectEndpoints({source:o}).each(function(e){var o=n?t.endpointOptions.hoverPaintStyle:t.endpointOptions.paintStyle;o&&e.setStyle(o)})}},onToolClick:function(e){"function"==typeof this[e.type]&&this[e.type](),this.$emit("onToolClick",e)},setZoom:function(e){this.instance.setContainer("canvas-flow");this.$refs.canvasFlow.style.transform="matrix("+e+",0,0,"+e+",0,0)",this.$refs.canvasFlow.style.transformOrigin="0 0",this.$refs.canvasFlow.zoom=e,this.zoom=e,this.instance.setZoom(e)},zoomIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.1;this.setZoom(this.zoom*e)},zoomOut:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.9;this.setZoom(this.zoom*e)},resetPosition:function(){this.setZoom(1),this.setCanvasPosition(0,0)},setCanvasPosition:function(e,t){this.canvasOffset={x:e,y:t},this.canvasPos={x:e,y:t}},frameSelect:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isFrameSelecting=e},onOpenFrameSelect:function(){this.frameSelect()},onCloseFrameSelect:function(){this.frameSelect(!1)},frameSelectHandler:function(e){this.canvasRect=this.$refs.canvasFlowWrap.getBoundingClientRect(),this.mouseDownPos={x:e.clientX-this.canvasRect.left,y:e.clientY-this.canvasRect.top},this.$refs.canvasFlowWrap.addEventListener(this.mousemove,this.frameSelectMovingHandler,!1)},frameSelectMovingHandler:function(e){var t=e.clientX-this.mouseDownPos.x-this.canvasRect.left,n=e.clientY-this.mouseDownPos.y-this.canvasRect.top;this.frameSelectorRect={width:Math.abs(t),height:Math.abs(n)},this.frameSelectorPos={x:t>0?this.mouseDownPos.x:this.mouseDownPos.x+t,y:n>0?this.mouseDownPos.y:this.mouseDownPos.y+n}},frameSelectEndHandler:function(e){this.$refs.canvasFlowWrap.removeEventListener(this.mousemove,this.frameSelectMovingHandler),this.$refs.canvasFlowWrap.removeEventListener(this.mouseup,this.frameSelectEndHandler),document.addEventListener(this.mousedown,this.cancelFrameSelectorHandler,{capture:!1,once:!0});var t=this.getSelectedNodes(),n=t.map(function(e){return e.id}),o=this.mouseDownPos,i=o.x,s=o.y;this.isFrameSelecting=!1,this.frameSelectorPos={x:0,y:0},this.frameSelectorRect={width:0,height:0},this.selectedNodes=t,this.clearNodesDragSelection(),this.addNodesToDragSelection(n),this.$emit("onFrameSelectEnd",t.slice(0),i,s)},getSelectedNodes:function(){var e=this,t=this.frameSelectorPos,n=t.x,o=t.y,i=this.frameSelectorRect,s=i.width,a=i.height;return this.nodes.filter(function(t){var i=document.querySelector("#".concat(t.id)).getBoundingClientRect(),r=i.left-e.canvasRect.left,c=i.top-e.canvasRect.top;if(n<r&&n+s>r&&o<c&&o+a>c)return!0})},cancelFrameSelectorHandler:function(e){this.selectedNodes=[],this.clearNodesDragSelection(),this.$emit("onCloseFrameSelect")},addNodesToDragSelection:function(e){e.forEach(function(e){var t=document.querySelector("#".concat(e));t&&t.classList.add("selected")}),this.instance.addToDragSelection(e)},clearNodesDragSelection:function(){document.querySelectorAll(".jsflow-node.selected").forEach(function(e){e.classList.remove("selected")}),this.instance.clearDragSelection()}}},void 0,!1,void 0,c,void 0);"undefined"!=typeof window&&"Vue"in window&&window.Vue.component("js-flow",w);export default w;
