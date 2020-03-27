import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/ecoindicator',
    component: Layout,
    redirect: '/ecoindicator/ER',
    name: 'Ecoindicator',
    meta:
    {
      title: '工业/经济指标',
      icon: 'example'
    },
    children: [
      {
        path: 'ER',
        name: 'ER',
        component: () => import('@/views/ecoindicator/ER/index'),
        meta: { title: 'ER', icon: 'table' },
        children: [
          {
            path: 'table',
            name: 'table',
            component: () => import('@/views/ecoindicator/ER/table'),
            meta: { title: 'ERtable', icon: 'table' }
          },
          {
            path: 'line',
            name: 'line',
            component: () => import('@/views/ecoindicator/ER/line'),
            meta: { title: 'ERline', icon: 'table' }
          }]
      },
      {
        path: 'GDP',
        name: 'GDP',
        component: () => import('@/views/ecoindicator/GDP/index'),
        meta: { title: 'GDP', icon: 'table' },
        children: [
          {
            path: 'table',
            name: 'GDPtable',
            component: () => import('@/views/ecoindicator/GDP/table'),
            meta: { title: 'GDPtable', icon: 'table' }
          },
          {
            path: 'line',
            name: 'GDPline',
            component: () => import('@/views/ecoindicator/GDP/line'),
            meta: { title: 'GDPline', icon: 'table' }
          }
        ]
      },
      {
        path: 'PMI',
        name: 'PMI',
        component: () => import('@/views/ecoindicator/PMI/index'),
        meta: { title: 'PMI', icon: 'table' },
        children: [
          {
            path: 'table',
            name: 'PMItable',
            component: () => import('@/views/ecoindicator/PMI/table'),
            meta: { title: 'PMItable', icon: 'table' }
          },
          {
            path: 'line',
            name: 'PMIline',
            component: () => import('@/views/ecoindicator/PMI/line'),
            meta: { title: 'PMIline', icon: 'table' }
          }
        ]
      },
      {
        path: 'PPI',
        name: 'PPI',
        component: () => import('@/views/ecoindicator/PPI/index'),
        meta: { title: 'PPI', icon: 'table' },
        children: [
          {
            path: 'table',
            name: 'PPItable',
            component: () => import('@/views/ecoindicator/PPI/table'),
            meta: { title: 'PPItable', icon: 'table' }
          },
          {
            path: 'line',
            name: 'PPIline',
            component: () => import('@/views/ecoindicator/PPI/line'),
            meta: { title: 'PPIline', icon: 'table' }
          }
        ]
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
