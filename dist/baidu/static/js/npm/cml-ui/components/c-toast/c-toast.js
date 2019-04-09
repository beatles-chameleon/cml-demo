var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([8],{

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-toast/c-toast.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CToast = function CToast() {
  _classCallCheck(this, CToast);

  this.props = {
    type: {
      type: String,
      default: "loading"
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3000
    },
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    needIcon: {
      type: Boolean,
      default: true
    }
  };
  this.data = {
    transitionStyle: "",
    IconMap: {
      loading: __webpack_require__("./node_modules/cml-ui/components/c-toast/images/loading.gif"),
      success: __webpack_require__("./node_modules/cml-ui/components/c-toast/images/succ.png"),
      warn: __webpack_require__("./node_modules/cml-ui/components/c-toast/images/warn.png")
    }
  };
  this.computed = {
    typeImg: function typeImg() {
      return this.IconMap[this.type];
    },
    maskClass: function maskClass() {
      return this.mask ? "has-mask" : "no-mask";
    }
  };
  this.watch = {
    show: function show(n, o) {
      var _this = this;

      if (n) {
        setTimeout(function () {
          _this.$cmlEmit("show", { value: false });
        }, this.duration);
      }
    }
  };
};

exports.default = new CToast();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-toast/c-toast.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-toast/c-toast.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-toast/c-toast.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-toast/c-toast.cml");


/***/ }),

/***/ "./node_modules/cml-ui/components/c-toast/images/loading.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-toast/images/succ.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/succ_1ecca56.png";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-toast/images/warn.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_da3ad45.png";

/***/ })

},["./node_modules/cml-ui/components/c-toast/c-toast.cml"]);