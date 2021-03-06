// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'es6-promise/auto'
import { polyfill } from 'es6-promise'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
polyfill()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
