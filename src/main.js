// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/Home'
import router from './router'
import plugins from './plugins'
import store from './store'
import Global from'./Global'
Vue.prototype.Global = Global
import tool from  './utils/tool'
import { AlertPlugin } from 'vux'
import axios from 'axios'
import focus from './directive'
import { yUrl } from "./data";
Vue.use(AlertPlugin);
Vue.use(VueRouter)
Vue.use(plugins)
Vue.use(tool);
import $ from 'jquery'
Vue.prototype.$http = axios

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
