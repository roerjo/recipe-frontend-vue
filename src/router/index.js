import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

import Index from '@/pages/recipes/Index'
import Create from '@/pages/recipes/Create'
import Delete from '@/pages/recipes/Delete'
import Update from '@/pages/recipes/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'Index',
      component: Index,
      children: [
        {
            path: 'create',
            name: 'Create',
            component: Create
        },
        {
            path: 'delete/:id',
            name: 'Delete',
            component: Delete
        },
        {
            path: 'update/:id',
            name: 'Update',
            component: Update
        }
      ]
    }
  ]
})
