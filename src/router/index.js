import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /* 原本對照，這裡的 .vue檔案內容會經由 APP.vue的 router-view顯示 */
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/layout/Home.vue')
  // },
  // {
  //   path: '/products',
  //   name: 'Products',
  //   component: () => import('../views/layout/Products.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/layout/Login.vue')
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/layout/Home.vue')
  // },
  /* 前後台分開 */
  {
    path: '/',
    component: () => import('../views/layout/Layout.vue'), // APP.vue的 router-view顯示 Layout.vue的內容
    // component: () => import('../views/layout/Home.vue'),
    children: [
      // 當回到首頁時，Home.vue的內容也會經由 router-view顯示
      {
        path: '/',
        component: () => import('../views/layout/Home.vue')
      },
      {
        path: 'products',
        component: () => import('../views/layout/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/layout/Product.vue')
      },
      {
        path: 'payment',
        component: () => import('../views/layout/Payment.vue')
      },
      {
        path: 'login',
        component: () => import('../views/layout/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'), // APP.vue的 router-view顯示 Dashboard.vue的內容
    children: [
      {
        path: '/',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
