var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([55],{393:function(e,t,n){n(394),n(395)},394:function(e,t){},395:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),u=r(o),c=n(22),f=r(c),l=n(0),s=r(l),d=function(){function e(){a(this,e),this.data={rightbtn:{name:"编辑"},topics:[],articles:[],scrollerHeight:0}}return i(e,[{key:"created",value:function(){var e=f.default.data.result;this.topics=e.topics,this.articles=e.articles}},{key:"mounted",value:function(){var e=this;u.default.getSystemInfo().then(function(t){e.scrollerHeight=Number(t.viewportHeight)-114-90})}}]),e}();t.default=new d,t.default=s.default.createComponent(t.default).getOptions()}},[393]);