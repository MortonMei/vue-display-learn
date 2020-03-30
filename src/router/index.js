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
            path: 'ERtable',
            name: 'ERtable',
            component: () => import('@/views/ecoindicator/ER/table'),
            meta: { title: '汇率统计表', icon: 'table' }
          },
          {
            path: 'ERline',
            name: 'ERline',
            component: () => import('@/views/ecoindicator/ER/line'),
            meta: { title: '汇率变化', icon: 'table' }
          }]
      },
      {
        path: 'GDP',
        name: 'GDP',
        component: () => import('@/views/ecoindicator/GDP/index'),
        meta: { title: 'GDP', icon: 'table' },
        children: [
          {
            path: 'GDPtable',
            name: 'GDPtable',
            component: () => import('@/views/ecoindicator/GDP/table'),
            meta: { title: 'GDP变化表', icon: 'table' }
          },
          {
            path: 'GDPline',
            name: 'GDPline',
            component: () => import('@/views/ecoindicator/GDP/line'),
            meta: { title: 'GDP变化统计', icon: 'table' }
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
            path: 'PMItable',
            name: 'PMItable',
            component: () => import('@/views/ecoindicator/PMI/table'),
            meta: { title: 'PMI指数变化表', icon: 'table' }
          },
          {
            path: 'PMIline',
            name: 'PMIline',
            component: () => import('@/views/ecoindicator/PMI/line'),
            meta: { title: 'PMI指数变化统计', icon: 'table' }
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
            meta: { title: 'PPI指数变化表', icon: 'table' }
          },
          {
            path: 'line',
            name: 'PPIline',
            component: () => import('@/views/ecoindicator/PPI/line'),
            meta: { title: 'PPI指数变化统计', icon: 'table' }
          }
        ]
      }
    ]
  },
  {
    path: '/materialprice',
    component: Layout,
    redirect: '/materialprice/AL',
    name: 'Materialprice',
    meta:
    {
      title: '物料价格',
      icon: 'example'
    },
    children: [
      {
        path: 'AL',
        name: 'AL',
        component: () => import('@/views/materialprice/AL/index'),
        meta: { title: 'AL', icon: 'table' },
        children: [
          {
            path: 'ALtable',
            name: 'ALtable',
            component: () => import('@/views/materialprice/AL/table'),
            meta: { title: '铝箔价格变化表', icon: 'table' }
          },
          {
            path: 'ALprice',
            name: 'ALprice',
            component: () => import('@/views/materialprice/AL/price'),
            meta: { title: '铝箔价格变化', icon: 'table' }
          },
          {
            path: 'ALstock',
            name: 'ALstock',
            component: () => import('@/views/materialprice/AL/stock'),
            meta: { title: '铝箔库存变化', icon: 'table' }
          }]
      },
      {
        path: 'ICIS',
        name: 'ICIS',
        component: () => import('@/views/materialprice/ICIS/index'),
        meta: { title: 'ICIS', icon: 'table' },
        children: [
          {
            path: 'ICIStable',
            name: 'ICIStable',
            component: () => import('@/views/materialprice/ICIS/table'),
            meta: { title: 'ICIS表格统计', icon: 'table' }
          },
          {
            path: 'ICISline',
            name: 'ICISline',
            component: () => import('@/views/materialprice/ICIS/line'),
            meta: { title: 'ICIS价格变化', icon: 'table' }
          }
        ]
      },
      {
        path: 'LLDPE',
        name: 'LLDPE',
        component: () => import('@/views/materialprice/LLDPE/index'),
        meta: { title: 'LLDPE', icon: 'table' },
        children: [
          {
            path: 'LLDPEtable',
            name: 'LLDPEtable',
            component: () => import('@/views/materialprice/LLDPE/table'),
            meta: { title: 'LLDPE变化表', icon: 'table' }
          },
          {
            path: 'line',
            name: 'PMIline',
            component: () => import('@/views/materialprice/LLDPE/line'),
            meta: { title: 'LLDPE变化统计', icon: 'table' }
          }
        ]
      },
      {
        path: 'PE',
        name: 'PE',
        component: () => import('@/views/materialprice/PE/index'),
        meta: { title: 'PE', icon: 'example' },
        children: [
          {
            path: 'PEtable',
            name: 'PEtable',
            component: () => import('@/views/materialprice/PE/table'),
            meta: { title: 'PE价格变化表', icon: 'table' }
          },
          {
            path: 'PEline',
            name: 'PEline',
            component: () => import('@/views/materialprice/PE/line'),
            meta: { title: 'PE变化统计', icon: 'table' }
          }
        ]
      },
      {
        path: 'PPO',
        name: 'PPO',
        component: () => import('@/views/materialprice/PPO/index'),
        meta: { title: 'PPO', icon: 'example' },
        children: [
          {
            path: 'PPOtable',
            name: 'PPOtable',
            component: () => import('@/views/materialprice/PPO/table'),
            meta: { title: 'PP0数据变化表', icon: 'table' }
          },
          {
            path: 'PPOline',
            name: 'PPOline',
            component: () => import('@/views/materialprice/PPO/line'),
            meta: { title: 'PP0变化统计', icon: 'table' }
          }
        ]
      },
      {
        path: 'PPZ',
        name: 'PPZ',
        component: () => import('@/views/materialprice/PPZ/index'),
        meta: { title: 'PPZ', icon: 'example' },
        children: [
          {
            path: 'PPZtable',
            name: 'PPZtable',
            component: () => import('@/views/materialprice/PPZ/table'),
            meta: { title: 'PPZ价格变化表', icon: 'table' }
          },
          {
            path: 'PPZline',
            name: 'PPZline',
            component: () => import('@/views/materialprice/PPZ/line'),
            meta: { title: 'PPZ变化统计', icon: 'table' }
          }
        ]
      },
      {
        path: 'PTA',
        name: 'PTA',
        component: () => import('@/views/materialprice/PTA/index'),
        meta: { title: 'PTA', icon: 'example' },
        children: [
          {
            path: 'PTAtable',
            name: 'PTAtable',
            component: () => import('@/views/materialprice/PTA/table'),
            meta: { title: 'PTA价格变化表', icon: 'table' }
          },
          {
            path: 'PTAline',
            name: 'PTAline',
            component: () => import('@/views/materialprice/PTA/line'),
            meta: { title: 'PTA变化统计', icon: 'table' }
          }
        ]
      }
    ]
  },

  {
    path: '/productprice',
    component: Layout,
    redirect: '/productprice/CPP',
    name: 'Productprice',
    meta:
    {
      title: '成品价格',
      icon: 'example'
    },
    children: [
      {
        path: 'CPP',
        name: 'CPP',
        component: () => import('@/views/productprice/CPP/index'),
        meta: { title: 'CPP', icon: 'table' },
        children: [
          {
            path: 'CPPtable',
            name: 'CPPtable',
            component: () => import('@/views/productprice/CPP/table'),
            meta: { title: 'CPP价格变化表', icon: 'table' }
          },
          {
            path: 'CPPcomplex',
            name: 'CPPcomplex',
            component: () => import('@/views/productprice/CPP/complex'),
            meta: { title: 'CPP复合膜', icon: 'table' }
          },
          {
            path: 'CPPaluminizer',
            name: 'CPPaluminizer',
            component: () => import('@/views/productprice/CPP/aluminizer'),
            meta: { title: 'CPP镀铝基材', icon: 'table' }
          },
          {
            path: 'CPPrcpp',
            name: 'CPPrcpp',
            component: () => import('@/views/productprice/CPP/rcpp'),
            meta: { title: 'CPP蒸煮膜', icon: 'table' }
          }]
      },
      {
        path: 'BOPET',
        name: 'BOPET',
        component: () => import('@/views/productprice/BOPET/index'),
        meta: { title: 'BOPET', icon: 'table' },
        children: [
          {
            path: 'BOPETtable',
            name: 'BOPETtable',
            component: () => import('@/views/productprice/BOPET/table'),
            meta: { title: 'BOPETtable', icon: 'table' }
          },
          {
            path: 'BOPETline',
            name: 'BOPETline',
            component: () => import('@/views/productprice/BOPET/line'),
            meta: { title: 'BOPETline', icon: 'table' }
          }
        ]
      },
      {
        path: 'BOPP',
        name: 'BOPP',
        component: () => import('@/views/productprice/BOPP/index'),
        meta: { title: 'BOPP', icon: 'table' },
        children: [
          {
            path: 'BOPPtable',
            name: 'BOPPtable',
            component: () => import('@/views/productprice/BOPP/table'),
            meta: { title: 'BOPPtable', icon: 'table' }
          },
          {
            path: 'BOPPline',
            name: 'BOPPline',
            component: () => import('@/views/productprice/BOPP/line'),
            meta: { title: 'BOPPline', icon: 'table' }
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
