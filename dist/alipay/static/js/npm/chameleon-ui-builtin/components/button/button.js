var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([21],{435:function(t,e,i){i(436),i(437)},436:function(t,e){},437:function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=i(438),a=i(0),r=function(t){return t&&t.__esModule?t:{default:t}}(a),l=function t(){n(this,t),this.props={text:{type:String,default:""},size:{type:String,default:"auto"},width:{type:Number,default:-1},type:{type:String,default:"blue"},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:""},textStyle:{type:String,default:""},textStyleDisabled:{type:String,default:""},disabledStyle:{type:String,default:""},btnHoverStyle:{type:String,default:""},textHoverStyle:{type:String,default:""},openType:{type:String,default:""},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:"当前标题"},sendMessagePath:{type:String,default:"当前分享路径"},sendMessageImg:{type:String,default:"截图"},showMessageCard:{type:Boolean,default:!1},appParameter:{type:String,default:""}},this.data={hover:!1},this.computed={hasWidth:function(){return-1!==this.width},btnClasses:function(){return(0,s.transCls)("cml-btn",this)},textClasses:function(){return(0,s.transCls)("btn-text",this)},mrBtnStyle:function(){var t=this.disabled,e=this.btnStyle,i=this.disabledStyle,n=this.hover,s=this.btnHoverStyle,a=this.hasWidth,r=this.width,l=t?e+";"+i:n?e+";"+s:e;return a&&(l="width:"+r+"cpx;"+l),l},mrTextStyle:function(){var t=this.disabled,e=this.textStyle,i=this.textStyleDisabled,n=this.hover,s=this.textHoverStyle;return t?e+";"+i:n?e+";"+s:e}},this.methods={onclick:function(t){var e=this.type,i=this.disabled;i||this.$cmlEmit("onclick",{type:e,disabled:i})},touchstart:function(t){this.hover=!0},touchend:function(t){this.hover=!1},getuserinfo:function(t){this.$cmlEmit("getuserinfo",t.detail)},contact:function(t){this.$cmlEmit("contact")},getphonenumber:function(t){this.$cmlEmit("getphonenumber",{errMsg:t.detail.errMsg,encryptedData:t.detail.encryptedData||"",iv:t.detail.iv||""})},error:function(t){this.$cmlEmit("error",{errMsg:t.detail.errMsg})},opensetting:function(t){this.$cmlEmit("opensetting")}}};e.default=new l,e.default=r.default.createComponent(e.default).getOptions()},438:function(t,e){function i(t,e){var i=e.type,n=e.disabled,s=e.size,a=e.hover,r=e.hasWidth,l=[t];return a&&l.push(t+"-active"),~"red|orange|white|green".indexOf(i)&&(l.push(t+"-"+i),a&&l.push(t+"-"+i+"-active"),n&&l.push(t+"-"+i+"-disable")),~"full|big|medium|small|stretch|auto".indexOf(s)&&!r&&l.push(t+"-"+s),n&&l.push(t+"-disable"),l.join(" ")}Object.defineProperty(e,"__esModule",{value:!0}),e.transCls=i}},[435]);