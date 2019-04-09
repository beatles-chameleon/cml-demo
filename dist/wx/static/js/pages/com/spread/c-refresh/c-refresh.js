var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([30],{

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-refresh/c-refresh.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Refresh = function () {
  function Refresh() {
    _classCallCheck(this, Refresh);

    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      panels: [],
      rows: [],
      sumPage: 4,
      page: 0,
      loadingTextStyle: ''
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      getPanels: function getPanels(direction) {
        if (this.page >= this.sumPage) return;
        var rows = this.randomfn();
        this.panels = direction == 1 ? [].concat(_toConsumableArray(this.panels), _toConsumableArray(rows)) : [].concat(_toConsumableArray(rows), _toConsumableArray(this.panels));
        this.page++;
      },
      onrefreshUp: function onrefreshUp(e) {
        var _this = this;

        this.topRefreshing = e.detail.value;
        setTimeout(function () {
          _this.getPanels(-1);
          _this.topRefreshing = false;
        }, 2000);
      },
      onrefreshDown: function onrefreshDown(e) {
        var _this2 = this;

        this.bottomRefreshing = e.detail.value;
        setTimeout(function () {
          _this2.getPanels(1);
          _this2.bottomRefreshing = false;
        }, 2000);
      },
      change: function change(e) {
        var target = e.currentTarget;
        var dataset = target.dataset;
        var i = dataset.idx;

        var item = this.panels[i];
        if (item) {
          item.height = item.height === 200 ? 400 : 200;
          item.width = item.width === 330 ? 730 : 330;
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity;
        }
      },
      randomfn: function randomfn() {
        var ary = [];
        for (var i = 1; i <= 10; i++) {
          var item = { label: this.page * 10 + i, height: 200, width: 730, bgc: '#69BE96', opacity: 1 };
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity;

          ary.push(item);
        }
        return ary;
      },
      onScroll: function onScroll(e) {
        var scrollTop = e.detail.scrollTop;
        if (scrollTop <= 0) {
          this.topRefreshing = true;
        }
      },
      onBottom: function onBottom(e) {
        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        this.bottomRefreshing = true;
      }
    };
  }

  _createClass(Refresh, [{
    key: 'created',
    value: function created(res) {
      this.getPanels();
      this.loadingTextStyle = 'color:#999;font-size:36cpx;margin:30cpx 0;';
    }
  }]);

  return Refresh;
}();

exports.default = new Refresh();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-refresh/c-refresh.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/com/spread/c-refresh/c-refresh.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-refresh/c-refresh.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-refresh/c-refresh.cml");


/***/ })

},["./src/pages/com/spread/c-refresh/c-refresh.cml"]);