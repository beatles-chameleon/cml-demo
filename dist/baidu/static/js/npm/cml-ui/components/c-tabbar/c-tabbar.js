var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([76],{405:function(t,e,n){n(406),n(407)},406:function(t,e){},407:function(t,e,n){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function(){function t(){a(this,t),this.props={tabbar:{type:Object,default:{}},value:{type:String,dafault:""}},this.data={tapedIndex:0},this.computed={layoutClass:function(){return this.useFixedLayout?this.useFixedLayout&&this.top?"tab-bar-root-top":this.useFixedLayout&&!this.top?"tab-bar-root-bottom":void 0:""},useFixedLayout:function(){return this.tabbar.useFixedLayout},top:function(){return"top"===this.tabbar.position},tabLineStyle:function(){if(!this.tabbar.list.length)return"";var t=750/this.tabbar.list.length;return";width:"+t+"cpx;transform: translateX("+this.tapedIndex*t+"cpx);"+(this.tabbar.tabLineStyle||"background-color:#FC9153;height:2cpx;")},hasIcon:function(){var t=["icon"];return(this.tabbar.list||[]).every(function(e){return t.every(function(t){return Object.keys(e).includes(t)})})},activeIndex:function(){var t=this,e=this.tabbar.list.findIndex(function(e){return e.compName===t.value});if(e>=0)return e;throw new Error("未在tabbar 中配置的list中compName中找到对应的组件名")}},this.watch={value:function(){this.tapedIndex=this.activeIndex}},this.methods={onTabbarItemTap:function(t){this.tapedIndex=t;var e=this.tabbar.list[t].compName;this.$cmlEmit("onclick",{compName:e}),this.$cmlEmit("input",{value:e})}}}return i(t,[{key:"mounted",value:function(){if(this.tapedIndex=this.activeIndex,!this.tabbar.length)return"";var t=750/this.tabbar.length,e=this.activeIndex*t;this.tabLineStyle=";width:"+t+"cpx;transform: translateX("+e+"cpx);"}}]),t}();e.default=new u,e.default=o.default.createComponent(e.default).getOptions()}},[405]);