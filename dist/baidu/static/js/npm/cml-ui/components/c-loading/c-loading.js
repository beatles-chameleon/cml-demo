var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([12],{203:function(t,e,i){i(204),i(205)},204:function(t,e){},205:function(t,e,i){function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(12),l=n(a),r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(206),s=n(u),f=i(0),c=n(f),d=function(){function t(){o(this,t),this.props={tip:{type:String,default:"loading..."},prefixCls:{type:String,default:"cml-loading"},loading:{type:Boolean,default:!1}},this.data={icon:i(207),rectStyle:"",loadingWrapStyle:"",containerStyle:"position: absolute; visibility: hidden",loadingStyle:"visibility: hidden"},this.watch={loading:function(t){var e=this;setTimeout(function(){s.default.move(e),e.loadingStyle=t?"visibility: visible":"visibility: hidden"},s.default.scheduleTime)}},this.computed={containerClassName:function(){return this.prefixCls+"-container"},loadImgClassName:function(){return this.prefixCls+"-default"},boxClassName:function(){return this.loading?this.prefixCls+"-box":""},targetClassName:function(){return this.prefixCls+"-target"},loadTextClassName:function(){return this.prefixCls+"-text"},targetMaskClassName:function(){return this.prefixCls+"-target-mask"},loadingClassName:function(){return""+this.prefixCls},loadingWrapClassName:function(){return this.prefixCls+"-wrap"}}}return r(t,[{key:"beforeDestory",value:function(){s.default.isDestory=!0}},{key:"mounted",value:function(){var t=this;setTimeout(function(){(0,l.default)("mask",t).then(function(e){e.width>0&&e.height>0?(t.rectStyle="width:"+e.width+"cpx; height: "+e.height+"cpx;",t.loadingWrapStyle=t.rectStyle,t.containerStyle=t.rectStyle+"; visibility: visible"):(s.default.loadingWrapStyle(function(e){t.loadingWrapStyle=e}),t.containerStyle="position: absolute; visibility: visible; top: 0; left: 0"),t.loading&&setTimeout(function(){t.loadingStyle="visibility: visible"},0),s.default.move(t)})},s.default.scheduleTime)}}]),t}();e.default=new d,e.default=c.default.createComponent(e.default).getOptions()},206:function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(1),l=function(){function t(){n(this,t),this.scheduleTime=50}return o(t,[{key:"move",value:function(t){}},{key:"loadingWrapStyle",value:function(t){t("position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 998;")}}]),t}();e.default=new l,(0,a.copyProtoProperty)(e.default)},207:function(t,e,i){t.exports=i.p+"static/img/loading_1f26c50.gif"}},[203]);