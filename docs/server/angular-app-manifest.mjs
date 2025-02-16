
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angularApp/home",
    "route": "/angularApp"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/home"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/about"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/contact"
  },
  {
    "renderMode": 2,
    "route": "/angularApp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5923, hash: '16a8e9a16c9e5ab1cf56490de7d499841326efbdb9ba73cfff93e91a38c18d3f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '5af268891607a7c2d1975ba5711a9706c3698dbbabe1835d99a70a7b1d9edf43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 21776, hash: '07d963cb88dbd98ed4d7ca1c3a17b1d647ac278370caa04fc5183f311eb1afba', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18481, hash: 'c468eeea74b90429ad89f9ae23872bf9c654007d1b639a7912326612061fd446', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18434, hash: 'c4187f4b777f50dfca5585e4a3839f3f03a7e29cd1086c2172aa9653c802a2c9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 23258, hash: '50031dd00e706a7714fc77471b1dc0a7d528b61552e1fe22bb5bbc3ae1b7be79', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-OYELQPQ7.css': {size: 305666, hash: 'fHi7RqgXqjI', text: () => import('./assets-chunks/styles-OYELQPQ7_css.mjs').then(m => m.default)}
  },
};
