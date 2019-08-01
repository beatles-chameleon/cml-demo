var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([16],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/components/map/map.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _amapWx = __webpack_require__("./src/pages/demo/yanxuan/components/map/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/map/map.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "EventDetail": {
      "value": "String"
    }
  },
  "interfaces": {
    "MapInterface": {
      "name": "String",
      "onshow": {
        "input": ["EventDetail"],
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
    "Map": ["MapInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var markersData = [];

var Map = function () {
  function Map() {
    _classCallCheck(this, Map);

    this.props = {
      name: {
        type: String,
        default: '默认值'
      }
    };
    this.data = {
      markers: [],
      latitude: '',
      longitude: '',
      textData: {}
    };
    this.methods = {
      makertap: function makertap(e) {
        var id = e.markerId;
        var that = this;
        that.showMarkerInfo(markersData, id);
        that.changeMarkerColor(markersData, id);
      },
      showMarkerInfo: function showMarkerInfo(data, i) {
        this.textData = {
          name: data[i].name,
          desc: data[i].address
        };
      },
      changeMarkerColor: function changeMarkerColor(data, i) {
        var that = this;
        var markers = [];
        this.markers = markers;
      }
    };
  }

  _createClass(Map, [{
    key: "mounted",
    value: function mounted() {
      var me = this;
      this.$cmlEmit('onshow', {
        value: this.name
      });
      var myAmapFun = new _amapWx2.default.AMapWX({
        key: 'b7f499f3cc98e7170b361d77c2e12c17'
      });
      myAmapFun.getPoiAround({
        success: function success(data) {
          markersData = data.markers;
          me.markers = markersData;
          me.latitude = markersData[0].latitude;
          me.longitude = markersData[0].longitude;
          me.showMarkerInfo(markersData, 0);
        },
        fail: function fail(info) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(info.errMsg)
          });
        }
      });
    }
  }]);

  return Map;
}();

exports.default = __CML__WRAPPER__(new Map(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/components/map/map.wx.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/demo/yanxuan/components/map/amap-wx.js":
/***/ (function(module, exports) {

function AMapWX(a) {
  this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };
}AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({ type: "gcj02", success: function success(a) {
      var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);
    }, fail: function fail(c) {
      wx.getStorage({ key: "userLocation", success: function success(a) {
          a.data && b(a.data);
        } }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });
    } });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        function c(a) {
          var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;
        }var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }function e(e) {
    wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, d, e, f;if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });
            }f = { markers: c, poisData: b.pois }, a.success(f);
          }
        } else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });
  }var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.tips && a.success({ tips: b.data.tips });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });
      }
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.data && a.success({ paths: b.data.data.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "./src/pages/demo/yanxuan/components/map/map.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/components/map/map.wx.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/components/map/map.wx.cml");


/***/ })

},["./src/pages/demo/yanxuan/components/map/map.wx.cml"]);