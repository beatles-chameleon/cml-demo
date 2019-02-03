var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([3],{

/***/ "../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tip/c-tip.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTip = function CTip() {
  _classCallCheck(this, CTip);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "top" //bottom, left, right
    },
    closeUrl: {
      type: String,
      default: __webpack_require__("./node_modules/cml-ui/components/c-tip/images/close.png")
    },
    offsetLeft: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetRight: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number,
      default: 0
    }
  };
  this.data = {
    iconMap: {
      left: __webpack_require__("./node_modules/cml-ui/components/c-tip/images/left.png"),
      right: __webpack_require__("./node_modules/cml-ui/components/c-tip/images/right.png"),
      top: __webpack_require__("./node_modules/cml-ui/components/c-tip/images/top.png"),
      bottom: __webpack_require__("./node_modules/cml-ui/components/c-tip/images/bottom.png")
    }
  };
  this.computed = {
    angleImg: function angleImg() {
      return this.iconMap[this.direction];
    },
    tipStyle: function tipStyle() {
      var style = void 0;
      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-bottom: 16cpx;";
          } else {
            style = "flex-direction: column-reverse;";
          }
          break;
        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-left: 16cpx;";
          } else {
            style = "flex-direction: row;";
          }
          break;
        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-top: 16cpx;";
          } else {
            style = 'flex-direction: column;';
          }
          break;
        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-right: 16cpx;";
          } else {
            style = 'flex-direction: row-reverse;';
          }
          break;
      }
      return style;
    },
    angleStyle: function angleStyle() {
      var style = void 0;
      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; bottom: 0;width: 32cpx; height: 16cpx;";
            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }
            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 32cpx; height: 16cpx;";
          }
          break;
        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; left: 0;width: 16cpx; height: 32cpx;";
            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }
            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 32cpx;";
          }
          break;
        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; top: 0;width: 32cpx; height: 16cpx;";
            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }
            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 32cpx; height: 16cpx;";
          }
          break;
        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; right: 0;width: 16cpx; height: 32cpx;";
            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }
            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 32cpx;";
          }
          break;
      }
      return style;
    }
  };
  this.watch = {};
  this.methods = {
    closeTap: function closeTap() {
      this.$cmlEmit("close");
    }
  };
};

exports.default = new CTip();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../../npm/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tip/c-tip.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/c-tip.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../npm/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tip/c-tip.cml");
var __cml__script = __webpack_require__("../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tip/c-tip.cml");


/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/images/bottom.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bottom_4f4eed1.png";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/images/close.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/close_49a1751.png";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/images/left.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/left_0ac0eaf.png";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/images/right.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/right_c8f477d.png";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tip/images/top.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/top_a17a0e7.png";

/***/ })

},["./node_modules/cml-ui/components/c-tip/c-tip.cml"]);