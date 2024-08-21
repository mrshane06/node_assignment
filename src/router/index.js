import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
  },
  {
    path: '/admin/add-product',
    name: 'add-product',
    component: () => import(/* webpackChunkName: "add-product" */ '../views/AddProductView.vue')
  },
  {
    path: '/admin/update-product',
    name: 'update-product',
    component: () => import(/* webpackChunkName: "update-product" */ '../views/UpdateProductView.vue')
  },
  {
    path: '/admin/delete-product',
    name: 'delete-product',
    component: () => import(/* webpackChunkName: "delete-product" */ '../views/DeleteProductView.vue')
  },
  {
    path: '/admin/view-users',
    name: 'view-users',
    component: () => import(/* webpackChunkName: "view-users" */ '../views/ViewUsersView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
