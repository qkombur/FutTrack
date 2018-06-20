import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Fixture from '@/pages/Fixture'
import Competitions from '@/pages/Competitions'
import Error404 from '@/pages/Error404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '*',
      name: '404',
      component: Error404
    },
    {
      path: '/competitions/:competition',
      name: 'Fixture',
      component: Fixture
    },
    {
      path: '/competitions',
      name: 'Competitions',
      component: Competitions
    }
  ]
})
