import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Upload from './components/Upload'
import Uploadlogtable from './components/Uploadlogtable'
import Downloadlogtable from './components/Downloadlogtable'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  {
    path: '/upload',
    component: Upload
  },
  {
    path: '/uploadlogtable',
    component: Uploadlogtable
  },
  {
    path: '/downloadlogtable',
    component: Downloadlogtable
  }
];


/* eslint-disable no-new */
const router = new VueRouter({
  routes // routes: routes 의 약어
})

const app = new Vue({
  el: '#app',
  router
});
