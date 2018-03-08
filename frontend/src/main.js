import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Upload from './components/Upload'
import Uploadlogtable from './components/Uploadlogtable'
import Downloadlogtable from './components/Downloadlogtable'
import Packagelist from './components/Packagelist'
import Adminlogin from './components/Adminlogin'
import Userlogin from './components/Userlogin'
import Logout from './components/Logout'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);

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
  },
  {
    path: '/packagelist',
    component: Packagelist
  },
  {
    path: '/adminloginpage',
    component: Adminlogin
  },
  {
    path: '/userloginpage',
    component: Userlogin
  },
  {
    path: '/logoutpage',
    component: Logout
  }
];


/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes // routes: routes 의 약어
})

const app = new Vue({
  el: '#app',
  router,
  data : {
    islogin: false
  }
});
