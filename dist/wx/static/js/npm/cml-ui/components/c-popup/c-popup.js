var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([11],{271:function(t,e,n){n(272),n(273)},272:function(t,e){},273:function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(274),a=i(o),s=n(0),u=i(s),c=a.default,l=function t(){r(this,t),this.props={mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},center:{type:Boolean,default:!0},position:{type:String,default:""}},this.data={animationData:c()},this.computed={maskClass:function(){return this.mask?"has-mask":"no-mask"},containerStyle:function(){var t="";return this.center&&(t+="align-items:center;justify-content:center;"),t},contentStyle:function(){var t="position: absolute;left:0;right:0;top:0;bottom:0;";switch(this.position){case"top":t=t.replace("bottom:0;","display:flex;flex-direction:column;");break;case"right":t=t.replace("left:0;","display:flex;flex-direction:row;");break;case"bottom":t=t.replace("top:0;","display:flex;flex-direction:column;");break;case"left":t=t.replace("right:0;","display:flex;flex-direction:row;");break;default:t="position:relative;"}return t}},this.watch={},this.methods={closeevent:function(){this.$cmlEmit("close")},contentTap:function(){},showMask:function(){this.animationData=c().opacity(.4).backgroundColor("#25262d").step({duration:300,timingFunction:"linear",delay:0}).export()},hideMask:function(){this.animationData=c().opacity(0).step({duration:300,timingFunction:"linear",delay:0}).export()}}};e.default=new l,e.default=u.default.createComponent(e.default).getOptions()},274:function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=i(r),a=n(275),s=i(a);o.default.initAnimation(),e.default=function(t){return new s.default(t)}},275:function(t,e,n){function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a=o.default.exportMiddleWare,s=o.default.checkNumber,u=o.default.checkString,c=0,l=[{key:"width",type:"number"},{key:"height",type:"number"},{key:"opacity",type:"number"},{key:"backgroundColor",type:"string"},{key:"translate",type:"number"},{key:"translateX",type:"number"},{key:"translateY",type:"number"},{key:"scale",type:"number"},{key:"scaleX",type:"number"},{key:"scaleY",type:"number"},{key:"rotate",type:""},{key:"rotateX",type:""},{key:"rotateY",type:""},{key:"transform",type:"string"}],f={enhanceAnimationPrototype:function(t,e){(Array.isArray(e)?e:Object.keys(e)).forEach(function(e){t[e.key]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return"number"===e.type?s(n[0]):"string"===e.type&&u(n[0]),this.styles[e.key]=n,this}},this)}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[];this.id=c,c+=1,this.descriptions=t,this.styles={},this.useExport="0",this.enqueue=function(t){e.push(t)},this.export=function(){this.useExport="1";var t=a({id:this.id,useExport:this.useExport,updateQueue:[].concat(i(e))});return e=[],this.useExport="0",t}};p.prototype={clear:function(){return this.styles={},this.descriptions={},this},styles:function(t){return this.styles=Object.assign({},this.styles,t),this},step:function(t){return this.enqueue({styles:this.styles,descriptions:Object.assign({cb:function(){return!1},duration:400},this.descriptions,t)}),this.clear(),this}},f.enhanceAnimationPrototype(p.prototype,l),e.default=p}},[271]);