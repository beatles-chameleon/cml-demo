var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([68],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/animation.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animation = _cmlTtApi2.default.createAnimation();
var textAnimation = _cmlTtApi2.default.createAnimation();

var Animation = function Animation() {
  _classCallCheck(this, Animation);

  this.data = {
    animationData: animation,
    animationTextData: textAnimation,
    current_rotate: 0,
    current_scale: 1,
    current_translate: 50,
    current_transform: [45, 1],
    current_color: '#F0AD4E',
    current_opacity: 1,
    current_width: 250,
    current_height: 250
  };
  this.methods = {
    rotate: function rotate() {
      var animationCreation = animation;
      while (this.current_rotate !== 360) {
        this.current_rotate += 90;
        animationCreation = animationCreation.rotate(this.current_rotate).step({
          duration: 500,
          timingFunction: 'ease-in-out',
          delay: 0
        });
      }
      this.animationData = animationCreation.export();
      this.current_rotate = 0;
    },
    scale: function scale() {
      this.current_scale = this.current_scale === 2 ? 1 : 2;
      this.animationData = animation.scale(this.current_scale).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    translate: function translate() {
      this.current_translate = this.current_translate === 50 ? -50 : 50;
      this.animationData = animation.translate(this.current_translate, this.current_translate).step({
        duration: 500,
        timingFunction: 'ease-in',
        delay: 0
      }).export();
    },
    transform: function transform() {
      this.current_transform = this.current_transform[0] === 0 ? [45, 1.2] : [0, 1];
      this.animationData = animation.rotate(this.current_transform[0]).scale(this.current_transform[1]).step({
        duration: 500,
        timingFunction: 'ease-out',
        delay: 0
      }).rotate("-90deg").scale(1.2).step({
        duration: 500,
        timingFunction: 'ease-out',
        delay: 0
      }).export();
    },
    backgroundColor: function backgroundColor() {
      this.current_color = this.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
      this.animationData = animation.backgroundColor(this.current_color).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    opacity: function opacity() {
      this.current_opacity = this.current_opacity === 1 ? 0.1 : 1;
      this.animationData = animation.opacity(this.current_opacity).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    width: function width() {
      this.current_width = this.current_width === 250 ? 125 : 250;
      this.animationData = animation.width(this.current_width).step({
        timingFunction: 'linear',
        delay: 0,
        duration: 500
      }).export();
    },
    height: function height() {
      this.current_height = this.current_height === 250 ? 125 : 250;

      this.animationData = animation.height(this.current_height).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    composite: function composite() {
      this.current_transform = this.current_transform[0] === 0 ? [45, 1.5] : [0, 1];
      this.current_color = this.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
      this.current_opacity = this.current_opacity === 1 ? 0.1 : 1;
      this.current_translate = this.current_translate === 50 ? -50 : 50;
      this.current_width = this.current_width === 250 ? 125 : 250;
      this.current_height = this.current_height === 250 ? 125 : 250;

      this.animationData = animation.width(this.current_width).height(this.current_height).rotate(this.current_transform[0]).scale(this.current_transform[1]).opacity(this.current_opacity).backgroundColor(this.current_color).translate(this.current_translate, this.current_translate).step({
        duration: 1000,
        timingFunction: 'ease-out',
        delay: 0
      }).export();
    }
  };
};

exports.default = new Animation();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/animation.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/api/sub-pages/animation.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/animation.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/animation.cml");


/***/ })

},["./src/pages/api/sub-pages/animation.cml"]);