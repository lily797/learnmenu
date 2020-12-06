import Vue from 'pte-ui/main' // vue插件
import iSun, { App } from 'pte-ui' // 自定义vue组件
import router from 'pte-ui/router' // 路由
import i18n from 'pte-ui/i18ns' // 国际化

import store from 'pte-ui/store/index' // vuex

Vue.use(iSun)
Vue.config.devtools = true;
Vue.config.productionTip = false // 生产环境关掉提示
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: function (createElement) {
    if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
      window.addEventListener('hashchange', () => {
        var currentPath = window.location.hash.slice(1)
        if (this.$route.path !== currentPath) {
          this.$router.push(currentPath)
        }
      }, false)
    }
    return createElement(App);
  }
})
