import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import auth from '@/auth/index'

import Index from '@/pages/recipes/Index'
import Details from '@/pages/recipes/Details'
import Create from '@/pages/recipes/Create'
import Delete from '@/pages/recipes/Delete'
import Update from '@/pages/recipes/Update'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
          if(auth.checkAuth())
              next('/recipe')
          else
              next()
      }
    },
    {
      path: '/recipe',
      name: 'index',
      component: Index,
      children: [
        {
            path: 'delete/:id',
            name: 'delete',
            component: Delete
        },
        {
            path: 'update/:id',
            name: 'update',
            component: Update
        }
      ],
      beforeEnter: (to, from, next) => {
          if(auth.checkAuth())
              next()
          else
              next('/')
      }
    },
    {
        path: '/recipe/:id',
        name: 'details',
        component: Details,
        props: true,
        beforeEnter: (to, from, next) => {
          if(auth.checkAuth())
              next()
          else
              next('/')
        }
    },
    {
        path: '/create',
        name: 'create',
        component: Create,
        beforeEnter: (to, from, next) => {
          if(auth.checkAuth())
              next()
          else
              next('/')
        }
    }
        
    
]

const router = new Router({
    routes
})

export default router
