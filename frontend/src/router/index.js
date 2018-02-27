import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/IndexPage'
import Show from '../components/ShowPage'
import Upload from '../components/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    name: 'upload',
    component: Upload
  },
  {
    path: '/:id',
    name: 'show',
    component: Show
  }
  ]
})
