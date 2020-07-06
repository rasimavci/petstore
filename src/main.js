/* eslint-disable camelcase */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars

// The service worker is a web API that helps you cache your assets and other files so that 
// when the user is offline or on slow network, he/she can still see results on the screen,
import './registerServiceWorker'
import SvgIcon from './components/SvgIcon'
import Container from './components/Container'


const BASE_API_URL = process.env.VUE_APP_API_URL

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = BASE_API_URL
Vue.axios.defaults.proxyHeaders = false
Vue.axios.defaults.credentials = false
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'

Vue.config.productionTip = false
Vue.config.performance = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
    value = value.substring(0, (limit - 3)) + '...'
  }

  return value
})
Vue.component('svg-icon', SvgIcon)
Vue.component('container', Container)

Vue.axios.interceptors.response.use(undefined, (err) => {
  return new Promise((resolve, reject) => {
    throw err
  })
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
