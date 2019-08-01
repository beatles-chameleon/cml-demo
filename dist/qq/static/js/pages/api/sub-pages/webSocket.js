var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([45],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  data: {
    title: 'cml.initSocket',
    subtitle: '演示 websocket 链接，发送，接收和关闭',
    respones: [],
    isShowLoading: false,
    msgs: {},
    ws: null,
    cell: {
      title: 'WebSocket 演示',
      list: [{
        title: '初始化一个 socket 链接',
        btnText: '点击开启',
        extraData: {
          action: 'open'
        }
      }, {
        title: '发送数据',
        btnText: '点击发送',
        extraData: {
          action: 'send'
        }
      }, {
        title: '关闭 socket 链接',
        btnText: '点击关闭',
        extraData: {
          action: 'close'
        }
      }]
    }
  },

  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _e$detail$extraData$a = e.detail.extraData.action,
          action = _e$detail$extraData$a === undefined ? 'open' : _e$detail$extraData$a;

      this[action]();
    },
    showLoading: function showLoading() {
      this.isShowLoading = true;
    },
    hideLoading: function hideLoading() {
      this.isShowLoading = false;
    },
    flushMsg: function flushMsg() {
      this.msgs = {};
      this.flatten2Responses();
    },
    flatten2Responses: function flatten2Responses() {
      this.respones = Object.entries(this.msgs).map(function (msg) {
        return {
          name: msg[0],
          value: typeof msg[1] === 'string' ? msg[1] : false,
          child: _typeof(msg[1]) === 'object' ? msg[1] : false
        };
      });
    },
    appendMsg: function appendMsg(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (name in this.msgs) {
        if (typeof this.msgs[name] === 'string') {
          this.msgs[name] = [this.msgs[name]];
        }
        if (typeof value === 'string') {
          this.msgs[name].push(value);
        } else {
          var _msgs$name;

          (_msgs$name = this.msgs[name]).push.apply(_msgs$name, _toConsumableArray(value));
        }
      } else {
        this.msgs[name] = value;
      }
      this.flatten2Responses();
    },
    open: function open() {
      var _this = this;

      var ws = this.ws = _cmlTtApi2.default.initSocket('ws://echo.websocket.org');
      this.showLoading();
      this.flushMsg();
      this.appendMsg('建立链接', 'ws://echo.websocket.org');
      ws.onopen(function () {
        _this.hideLoading();
        _this.appendMsg('建立链接', '链接成功');
      });
      ws.onmessage(function (res) {
        _this.hideLoading();
        _this.appendMsg('接收透传信息', res.data);
      });
      ws.onerror(function (err) {
        _this.hideLoading();
        _this.appendMsg('链接错误', err.message);
      });
      ws.onclose(function () {
        _this.hideLoading();
        _this.appendMsg('链接关闭', '关闭成功');
        _this.ws = null;
      });
    },
    send: function send() {
      if (!this.ws) {
        return this.appendMsg('错误提示', '请先开启 socket 链接');
      }
      this.showLoading();
      this.appendMsg('发送信息', ['一段文本信息: Hi, this is cml', '一个数组: 1,2,3']);
      this.ws.send({
        text: 'Hi, this is cml',
        arr: ['1', '2', '3']
      });
    },
    close: function close() {
      if (!this.ws) {
        return this.appendMsg('错误提示', '请先开启 socket 链接');
      }
      this.ws.close();
    }
  }
};


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Failed to find 'chameleon-runtime/src/platform/qq/style/index.css'\n  in [\n    /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail/myscroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/home,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/classify,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/shop,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/my,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/common,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/topic,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip/com/c-tip-angle,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/view,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/text,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/image,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/radio,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/checkbox,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/row,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/layout,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api/sub-pages,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-panel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tabbar,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/page,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/collapse,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/demo-list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryHeader,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryCell,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/textareademo,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/header,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo\n  ]\n    at resolveModule.catch.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-import/lib/resolve-id.js:35:13)\n    at runLoaders (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js:194:71)");

/***/ }),

/***/ "./src/pages/api/sub-pages/webSocket.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml");


/***/ })

},["./src/pages/api/sub-pages/webSocket.cml"]);