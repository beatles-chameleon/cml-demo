var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cLoadingfunc = __webpack_require__("./node_modules/cml-tt-ui/components/c-loading/c-loadingfunc.interface");

var _cLoadingfunc2 = _interopRequireDefault(_cLoadingfunc);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-ui/components/c-loading/c-loading.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {},
  "interfaces": {
    "CLoadingInterface": {
      "tip": "String",
      "prefixCls": "String",
      "loading": "Boolean"
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "CLoading": ["CLoadingInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var CLoading = function () {
  function CLoading() {
    _classCallCheck(this, CLoading);

    this.props = {
      tip: {
        type: String,
        default: "loading..."
      },
      prefixCls: {
        type: String,
        default: "cml-loading"
      },
      loading: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      icon: __webpack_require__("./node_modules/cml-tt-ui/assets/images/loading.gif"),
      rectStyle: "",
      loadingWrapStyle: "",
      containerStyle: "position: absolute; visibility: hidden",
      //由于获取位置信息在weex端为异步。so先隐藏
      loadingStyle: "visibility: hidden"
    };
    this.watch = {
      loading: function loading(v) {
        var _this = this;

        setTimeout(function () {
          _cLoadingfunc2.default.move(_this); // 解决小程序端loading先出现在顶部问题

          _this.loadingStyle = v ? "visibility: visible" : "visibility: hidden";
        }, _cLoadingfunc2.default.scheduleTime);
      }
    };
    this.computed = {
      containerClassName: function containerClassName() {
        return this.prefixCls + "-container";
      },
      loadImgClassName: function loadImgClassName() {
        return this.prefixCls + "-default";
      },
      boxClassName: function boxClassName() {
        return !!this.loading ? this.prefixCls + "-box" : "";
      },
      targetClassName: function targetClassName() {
        return this.prefixCls + "-target";
      },
      loadTextClassName: function loadTextClassName() {
        return this.prefixCls + "-text";
      },
      targetMaskClassName: function targetMaskClassName() {
        return this.prefixCls + "-target-mask";
      },
      loadingClassName: function loadingClassName() {
        return "" + this.prefixCls;
      },
      loadingWrapClassName: function loadingWrapClassName() {
        return this.prefixCls + "-wrap";
      }
    };
  }

  _createClass(CLoading, [{
    key: "beforeDestory",
    value: function beforeDestory() {
      _cLoadingfunc2.default.isDestory = true;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      setTimeout(function () {
        _cmlTtApi2.default.getRect("mask", _this2).then(function (res) {
          if (res.width > 0 && res.height > 0) {
            _this2.rectStyle = "width:" + res.width + "cpx; height: " + res.height + "cpx;";
            _this2.loadingWrapStyle = _this2.rectStyle;
            _this2.containerStyle = _this2.rectStyle + "; visibility: visible";
          } else {
            _cLoadingfunc2.default.loadingWrapStyle(function (res) {
              _this2.loadingWrapStyle = res;
            });
            _this2.containerStyle = "position: absolute; visibility: visible; top: 0; left: 0";
          }

          if (_this2.loading) {
            // 解决小程序端loading先出现在顶部问题
            setTimeout(function () {
              _this2.loadingStyle = "visibility: visible";
            }, 0);
          }

          _cLoadingfunc2.default.move(_this2);
        });
      }, _cLoadingfunc2.default.scheduleTime);
    }
  }]);

  return CLoading;
}();

exports.default = __CML__WRAPPER__(new CLoading(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Failed to find 'chameleon-runtime/src/platform/qq/style/index.css'\n  in [\n    /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail/myscroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/home,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/classify,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/shop,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/my,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/common,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/topic,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip/com/c-tip-angle,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/view,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/text,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/image,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/radio,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/checkbox,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/row,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/layout,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api/sub-pages,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-panel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tabbar,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/page,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/collapse,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/demo-list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryHeader,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryCell,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/textareademo,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/header,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo\n  ]\n    at resolveModule.catch.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-import/lib/resolve-id.js:35:13)\n    at runLoaders (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js:194:71)");

/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-loading/c-loading.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-loading/c-loading.cml");


/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-loading/c-loadingfunc.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-loading/c-loadingfunc.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ })

},["./node_modules/cml-tt-ui/components/c-loading/c-loading.cml"]);