var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([54],{404:function(e,t,n){n(405),n(406)},405:function(e,t){},406:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=r(i),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(25),l=r(c),f=n(0),s=r(f),d=function(){function e(){a(this,e),this.data={rightbtn:{name:"编辑"},topics:[],articles:[],scrollerHeight:0}}return o(e,[{key:"created",value:function(){var e=l.default.data.result;this.topics=e.topics,this.articles=e.articles}},{key:"mounted",value:function(){var e=this;(0,u.default)().then(function(t){e.scrollerHeight=Number(t.viewportHeight)-114-90})}}]),e}();t.default=new d,t.default=s.default.createComponent(t.default).getOptions()}},[404]);