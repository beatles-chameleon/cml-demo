var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([1],{290:function(t,e,o){o(291),o(292)},291:function(t,e){},292:function(t,e,o){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var f=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(f),h=function t(){i(this,t),this.props={show:{type:Boolean,default:!1},direction:{type:String,default:"top"},closeUrl:{type:String,default:o(293)},offsetLeft:{type:Number,default:0},offsetTop:{type:Number,default:0},offsetRight:{type:Number,default:0},offsetBottom:{type:Number,default:0}},this.data={iconMap:{left:o(294),right:o(295),top:o(296),bottom:o(297)}},this.computed={angleImg:function(){return this.iconMap[this.direction]},tipStyle:function(){var t=void 0;switch(this.direction){case"top":t=this.offsetLeft||this.offsetRight?"padding-bottom: 16cpx;":"flex-direction: column-reverse;";break;case"right":t=this.offsetTop||this.offsetBottom?"padding-left: 16cpx;":"flex-direction: row;";break;case"bottom":t=this.offsetLeft||this.offsetRight?"padding-top: 16cpx;":"flex-direction: column;";break;case"left":t=this.offsetTop||this.offsetBottom?"padding-right: 16cpx;":"flex-direction: row-reverse;"}return t},angleStyle:function(){var t=void 0;switch(this.direction){case"top":this.offsetLeft||this.offsetRight?(t="position: absolute; bottom: 0;width: 32cpx; height: 16cpx;",this.offsetLeft&&(t=t+"left:"+this.offsetLeft+"cpx;"),this.offsetRight&&(t=t+"right:"+this.offsetRight+"cpx;")):t="width: 32cpx; height: 16cpx;";break;case"right":this.offsetTop||this.offsetBottom?(t="position: absolute; left: 0;width: 16cpx; height: 32cpx;",this.offsetTop&&(t=t+"top:"+this.offsetTop+"cpx;"),this.offsetBottom&&(t=t+"bottom:"+this.offsetBottom+"cpx;")):t="width: 16cpx; height: 32cpx;";break;case"bottom":this.offsetLeft||this.offsetRight?(t="position: absolute; top: 0;width: 32cpx; height: 16cpx;",this.offsetLeft&&(t=t+"left:"+this.offsetLeft+"cpx;"),this.offsetRight&&(t=t+"right:"+this.offsetRight+"cpx;")):t="width: 32cpx; height: 16cpx;";break;case"left":this.offsetTop||this.offsetBottom?(t="position: absolute; right: 0;width: 16cpx; height: 32cpx;",this.offsetTop&&(t=t+"top:"+this.offsetTop+"cpx;"),this.offsetBottom&&(t=t+"bottom:"+this.offsetBottom+"cpx;")):t="width: 16cpx; height: 32cpx;"}return t}},this.watch={},this.methods={closeTap:function(){this.$cmlEmit("close")}}};e.default=new h,e.default=s.default.createComponent(e.default).getOptions()},293:function(t,e,o){t.exports=o.p+"static/img/close_49a1751.png"},294:function(t,e,o){t.exports=o.p+"static/img/left_0ac0eaf.png"},295:function(t,e,o){t.exports=o.p+"static/img/right_c8f477d.png"},296:function(t,e,o){t.exports=o.p+"static/img/top_a17a0e7.png"},297:function(t,e,o){t.exports=o.p+"static/img/bottom_4f4eed1.png"}},[290]);