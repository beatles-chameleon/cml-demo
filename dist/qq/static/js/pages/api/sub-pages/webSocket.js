var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([64],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml":
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

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/api/sub-pages/webSocket.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/webSocket.cml");


/***/ })

},["./src/pages/api/sub-pages/webSocket.cml"]);