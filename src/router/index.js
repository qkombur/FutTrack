import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Fixture from '@/pages/Fixture'
import Competitions from '@/pages/Competitions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
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
