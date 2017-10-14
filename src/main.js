// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import auth from './auth/index'
import router from './router'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = auth.getAuthHeader();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
