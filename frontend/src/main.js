// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import에서 .vue 생략
import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import routes from './router'
import Upload from './components/Upload'
import Table from './components/table'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(BootstrapVue);

/* eslint-disable no-new */
const router = new VueRouter({
  routes // routes: routes 의 약어
})

const app = new Vue({
  router
}).$mount('#app')
