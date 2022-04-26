import { createRouter, createWebHistory } from 'vue-router'
import authenticated from '../middleware/authenticated'
import auth from '../middleware/auth'
import pipeline from '../middleware/pipeline'
const routes = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/user-login.vue'),
    meta:{
      title: 'Login',
      middleware: [authenticated]
    }
  },
  {
    path: '/auth/register',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/user-register.vue'),
    meta:{
      middleware: [auth]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
const DEFAULT_TITLE = "Test"
router.afterEach((to)=>{
    document.title = to.meta.title || DEFAULT_TITLE;
});
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const context = { to, from, next, router }
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
    return middleware[0]({ ...context, next: pipeline(context, middleware) })
  }

  return next()
})
export default router
