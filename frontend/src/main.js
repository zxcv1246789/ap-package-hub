// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import에서 .vue 생략
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Upload from './components/Upload'
import BootstrapVue from 'bootstrap-vue'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(BootstrapVue);

//전역 컴포넌트 등록
Vue.component('app-upload', Upload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
