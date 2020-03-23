import Vue from 'vue'
import Router from 'vue-router'

import DefaultLayout from 'Layouts/DefaultLayout'

// Views
const MainView = () => import('Views/MainView')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          component: MainView,
          name: 'main',
        },
      ],
    },
  ],
})
