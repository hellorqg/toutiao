import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import logintt from '../views/login/login.vue'
import home2 from '../views/home/home2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: logintt
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: home2
    },
    {
      path: 'comment',
      component: () => import('../views/comment')
    },
    {
      path: 'material',
      component: () => import('../views/material/index.vue')
    },
    {
      path: 'articles',
      component: () => import('../views/articles')
    },
    {
      path: 'publish',
      component: () => import('../views/articles/createArticle.vue')
    },
    { // 修改文章
      path: 'publish/:articleID',
      component: () => import('../views/articles/createArticle.vue')
    }]
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
