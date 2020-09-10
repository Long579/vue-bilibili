import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepalive: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: () => import('../views/userinfo.vue'),
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      istoken: true
    }
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/article.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if ((!localStorage.getItem('token') || !localStorage.getItem('id')) && to.meta.istoken === true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
  } else {
    next()
  }
})

export default router
