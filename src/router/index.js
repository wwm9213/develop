import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/layout'),
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
    }, {
      path: '/shop',
      name: 'Shop',
      component: () => import('@/views/shop'),

    }, {
      path: '/find',
      name: 'Find',
      component: () => import('@/views/find'),

    }, {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/admin'),

    }, {
      path: '/index',
      redirect: '/home',
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    redirect: '/index',
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (!window.localStorage.getItem('userInfo')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
});


export default router
