
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 851, hash: '73455fe74830347092b26935695fa34eff90b8f76139ad0fc968f502d44f1033', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '962fa5544bdc0a08725a00562e597eb304725f2920779bc83acc79450a2f7c0e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16338, hash: '80b5560f94f86c289aa7a0c293662e512ac2cff5e6193c1f289c272014e8fe2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VJCOZCD.css': {size: 824, hash: 'g3PpPAqstqM', text: () => import('./assets-chunks/styles-4VJCOZCD_css.mjs').then(m => m.default)}
  },
};
