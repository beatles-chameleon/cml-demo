var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([13],{412:function(e,t,a){a(413),a(414)},413:function(e,t){},414:function(e,t,a){function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(2),r=n(o),i=a(415),g=n(i),f=a(0),l=n(f),m=function(){function e(){s(this,e),this.data={bannerImg:[],descriptionInfo:[],money:0,appTag:"",scrollHeight:-1},this.methods={goto:function(){},change:function(){console.log("change")},forbinding:function(e){}}}return c(e,[{key:"created",value:function(){var e=g.default.data,t=e.carouselList,a=e.description,n=e.money,s=e.tag;this.bannerImg=t,this.descriptionInfo=a,this.money=n,this.appTag=s}},{key:"mounted",value:function(){var e=this;r.default.getSystemInfo().then(function(t){"weex"==t.env?e.scrollHeight=Number(t.viewportHeight)-80-88:e.scrollHeight=Number(t.viewportHeight)-80})}}]),e}();t.default=new m,t.default=l.default.createPage(t.default).getOptions()},415:function(e,t){e.exports={code:0,data:{carouselList:[{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5240f52c0f410054fe9c20abc54aa7b9.jpg"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5142255cef97dafd012bb73423eff4d4.png"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e72c98273b50c0959d34662c2fad4e8.jpg"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/44334a3a100aa6fa974c17e352969a6f.jpg"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bf216b5af1dc8cdb5a70e87b8271028c.png"}],description:[{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/17e5327561f5b9df04f7d000a8c71bb2.jpg",tag1:"贡缎细糯",tag2:"如绸光泽"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/459cfd6a33991746fc2cf452642c7c68.jpg",tag1:"高支纯棉",tag2:"新贵臻密"},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/964045a4796d70488adfef26a3093e35.jpg",tag1:"同色边框",tag2:"精致恰好"}],money:"￥469",tag:"App特惠￥455.00"}}}},[412]);