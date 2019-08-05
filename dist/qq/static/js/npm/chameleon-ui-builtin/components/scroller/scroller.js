var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([90],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getRect/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/cpx2px/index.js");

var _index8 = _interopRequireDefault(_index7);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/scroller/scroller.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "scrollEventDetail": {
      "deltaX": "Number",
      "deltaY": "Number",
      "scrollHeight": "Number",
      "scrollLeft": "Number",
      "scrollTop": "Number",
      "scrollWidth": "Number"
    },
    "scrolltobottomEventDetail": {
      "direction": "String"
    }
  },
  "interfaces": {
    "ScrollerInterface": {
      "cstyle": "String",
      "bottomOffset": "Number",
      "scrollDirection": "String",
      "bounce": "Boolean",
      "height": "Number",
      "width": "Number",
      "scrollTop": "Number",
      "scrollLeft": "Number",
      "onscroll": {
        "input": ["scrollEventDetail"],
        "output": "Undefined"
      },
      "customscroll": {
        "input": ["scrollEventDetail"],
        "output": "Undefined"
      },
      "scrolltobottom": {
        "input": ["scrolltobottomEventDetail"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "Scroller": ["ScrollerInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-loader/src/runtime/check.js");

var Scroller = function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    this.props = {
      cstyle: {
        type: String,
        default: ''
      },
      bottomOffset: {
        // 距底部/右边多远时（单位px），触发 scrolltolower 事件
        type: Number,
        default: 0
      },
      scrollDirection: {
        // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
        type: String,
        default: 'vertical'
      },
      bounce: {
        type: Boolean,
        default: true
      },
      height: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 0
      },
      scrollTop: {
        type: Number,
        default: 0
      },
      scrollLeft: {
        type: Number,
        default: 0
      }
    };
    this.data = {
      cmtStyle: '',
      scrollTopPx: 0,
      scrollLeftPx: 0
    };
    this.computed = {
      wrapperStyle: function wrapperStyle() {
        if (this.scrollDirection === 'vertical') {
          if (this.height >= 0) {
            return this.cstyle + ";height:" + this.height + "rpx;";
          }
        } else {
          if (this.width >= 0) {
            return this.cstyle + ";width:" + this.width + "rpx;white-space:nowrap;";
          }
        } // 没有传递的情况


        return this.cmtStyle + this.cstyle;
      }
    };
    this.watch = {
      scrollTop: function scrollTop(v) {
        this.scrollTopPx = (0, _index8.default)(v);
      },
      scrollLeft: function scrollLeft(v) {
        this.scrollLeftPx = (0, _index8.default)(v);
      }
    };
    this.methods = {
      onScroll: function onScroll(e) {
        var detail = e.detail;
        detail.deltaX = detail.deltaX || 0;
        detail.deltaY = detail.deltaY || 0;
        Object.keys(detail).forEach(function (key) {
          detail[key] = (0, _index6.default)(detail[key]);
        });
        this.$cmlEmit('onscroll', detail);
        this.$cmlEmit('customscroll', detail);
      },
      onBottom: function onBottom(e) {
        this.$cmlEmit('scrolltobottom', e.detail);
      }
    };
  }

  _createClass(Scroller, [{
    key: "mounted",
    value: function mounted() {
      var _this = this;

      setTimeout(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var rectData, windowRect, height, width;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.scrollDirection === 'vertical' && !_this.height)) {
                  _context.next = 3;
                  break;
                }

                console.error('纵向滚动必须传递高度属性');
                return _context.abrupt("return");

              case 3:
                if (!(_this.scrollDirection !== 'vertical' && !_this.width)) {
                  _context.next = 6;
                  break;
                }

                console.error('横向滚动必须传递宽度属性');
                return _context.abrupt("return");

              case 6:
                if (!(_this.height === -1 || _this.width === -1)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 9;
                return (0, _index4.default)('c-scroller', _this);

              case 9:
                rectData = _context.sent;
                _context.next = 12;
                return (0, _index2.default)();

              case 12:
                windowRect = _context.sent;


                if (_this.scrollDirection === 'vertical') {
                  height = windowRect.viewportHeight - rectData.top;

                  _this.cmtStyle = "height:" + height + "cpx;";
                } else {
                  width = windowRect.viewportWidth - rectData.left;

                  _this.cmtStyle = "width:" + width + "cpx;white-space:nowrap;";
                }

              case 14:

                _this.scrollLeftPx = (0, _index8.default)(_this.scrollLeft);
                _this.scrollTopPx = (0, _index8.default)(_this.scrollTop);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 200);
    }
  }]);

  return Scroller;
}();

exports.default = __CML__WRAPPER__(new Scroller(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/scroller/scroller.qq.cml"]);