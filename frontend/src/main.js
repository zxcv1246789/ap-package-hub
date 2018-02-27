// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import에서 .vue 생략
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Upload from './components/Upload'
import Table from './components/table'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(BootstrapVue);

//전역 컴포넌트 등록
Vue.component('app-upload', Upload);
Vue.component('upload-table', Table);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
