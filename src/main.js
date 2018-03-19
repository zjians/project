// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import baseUrl from './config/env'
import { sync } from 'vuex-router-sync'
sync(store, router)
/* 配置axios */
Vue.prototype.$http = axios
axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true
Vue.config.productionTip = false

/* 设置每页的title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 拦截所有40x的错误
axios.interceptors.response.use(function (res) {
  console.dir(res)
  const code = res.data && res.data.code
  if (code === 'SESSION_TIMEOUT') { // 会话超时
    router.push({path: '/login'})
  } else if (code === 'SUCCESS') {
    return res.data.data
  } else {
    return false
  }
}, function (err) {
  console.dir(err)
  if (err.response) {
    const status = err.response.status
    if (status === 401) {
      router.push({path: '/login'})
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
