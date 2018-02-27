import Vue from 'vue'
import VueRouter from 'vue-router'
import Upload from '../components/Upload'
import Table from '../components/Table'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/upload',
    component: Upload
  },
  {
    path: '/table',
    component: Table
  }
  ]
})
