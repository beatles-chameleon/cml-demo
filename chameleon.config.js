
//设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-demo/dist';
//设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
  cmlNpm: [
    
  ],
  devPort: 5556,
  templateType: 'html',
  cmlComponents: [
  ],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: 'https://api.chameleon.com/h5/commentinfo'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
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

