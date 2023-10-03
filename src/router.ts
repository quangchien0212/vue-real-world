import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'

export type AppRouteNames =
  | 'global-feed'
  | 'article'

export const routes: RouteRecordRaw[] = [
  {
    name: 'global-feed',
    path: '/',
    component: HomePage,
  },
  {
    name: 'article',
    path: '/article/:slug',
    component: () => import('./pages/ArticlePage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
