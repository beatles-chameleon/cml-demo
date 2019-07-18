
//设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-demo/dist';
//设置api请求前缀
const apiPrefix = 'https://cmljs.org';
const path = require('path');
cml.config.merge({
  cmlNpm: [
  ],
  builtinNpmName: 'cml-tt-ui-builtin',
  extPlatform: {
    tt: 'cml-tt-plugin',
  },
  babelPath: [
    path.join(__dirname,'node_modules/cml-tt-ui-builtin'),
    path.join(__dirname,'node_modules/cml-tt-runtime'),
    path.join(__dirname,'node_modules/cml-tt-api'),
    path.join(__dirname,'node_modules/cml-tt-ui'),
    path.join(__dirname,'node_modules/cml-tt-store'),
    path.join(__dirname,'node_modules/cml-tt-mixins'),
  ],
  baseStyle:{
    wx: true,
    web: true,
    weex: true,
    alipay: true,
    baidu: true,
    qq: true,
    tt:true,
  },
  platforms: ['tt'],
  devPort: 5556,
  templateType: 'html',
  // platforms: ["web","weex"],
  cmlComponents: [
  ],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: 'https://cmljs.org/h5/commentinfo'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix,
      publicPath: `${publicPath}/wx/`,
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

