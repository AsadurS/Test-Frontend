import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/auth/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/user-login.vue'),
    meta:{
      title: 'Login'
    }
  },
  {
    path: '/auth/register',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/user-register.vue'),
    meta:{
      title: 'Register'
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
export default router
