import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const feat: AppRouteModule = {
  path: '/feat',
  name: 'Featadmin',
  component: LAYOUT,
  redirect: '/feat/icon',
  meta: {
    orderNo: 19,
    icon: 'ion:git-compare-outline',
    title: t('routes.admin.feat.feat'),
  },

  children: [
    {
      path: 'ws',
      name: 'WebSocket',
      component: () => import('/@/views/admin/feat/ws/index.vue'),
      meta: {
        title: t('routes.admin.feat.ws'),
      },
    },
    {
      path: 'session-timeout',
      name: 'SessionTimeout',
      component: () => import('/@/views/admin/feat/session-timeout/index.vue'),
      meta: {
        title: t('routes.admin.feat.sessionTimeout'),
      },
    },

    {
      path: 'breadcrumb',
      name: 'Breadcrumbadmin',
      redirect: '/feat/breadcrumb/flat',
      component: getParentLayout('Breadcrumbadmin'),
      meta: {
        title: t('routes.admin.feat.breadcrumb'),
      },

      children: [
        {
          path: 'flat',
          name: 'BreadcrumbFlatadmin',
          component: () => import('/@/views/admin/feat/breadcrumb/FlatList.vue'),
          meta: {
            title: t('routes.admin.feat.breadcrumbFlat'),
          },
        },
        {
          path: 'flatDetail',
          name: 'BreadcrumbFlatDetailadmin',
          component: () => import('/@/views/admin/feat/breadcrumb/FlatListDetail.vue'),
          meta: {
            title: t('routes.admin.feat.breadcrumbFlatDetail'),
            hideMenu: true,
            hideTab: true,
            currentActiveMenu: '/feat/breadcrumb/flat',
          },
        },
        {
          path: 'children',
          name: 'BreadcrumbChildrenadmin',
          component: () => import('/@/views/admin/feat/breadcrumb/ChildrenList.vue'),
          meta: {
            title: t('routes.admin.feat.breadcrumbChildren'),
          },
          children: [
            {
              path: 'childrenDetail',
              name: 'BreadcrumbChildrenDetailadmin',
              component: () => import('/@/views/admin/feat/breadcrumb/ChildrenListDetail.vue'),
              meta: {
                currentActiveMenu: '/feat/breadcrumb/children',
                title: t('routes.admin.feat.breadcrumbChildrenDetail'),
                //hideTab: true,
                // hideMenu: true,
              },
            },
          ],
        },
      ],
    },

    {
      path: 'context-menu',
      name: 'ContextMenuadmin',
      component: () => import('/@/views/admin/feat/context-menu/index.vue'),
      meta: {
        title: t('routes.admin.feat.contextMenu'),
      },
    },


    {
      path: 'copy',
      name: 'Copyadmin',
      component: () => import('/@/views/admin/feat/copy/index.vue'),
      meta: {
        title: t('routes.admin.feat.copy'),
      },
    },

    {
      path: 'watermark',
      name: 'Watermarkadmin',
      component: () => import('/@/views/admin/feat/watermark/index.vue'),
      meta: {
        title: t('routes.admin.feat.watermark'),
      },
    },

    {
      path: 'full-screen',
      name: 'FullScreenadmin',
      component: () => import('/@/views/admin/feat/full-screen/index.vue'),
      meta: {
        title: t('routes.admin.feat.fullScreen'),
      },
    },


    {
      path: '/error-log',
      name: 'ErrorLog',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.admin.feat.errorLog'),
      },
    },
    {
      path: 'excel',
      name: 'Excel',
      redirect: '/feat/excel/customExport',
      component: getParentLayout('Excel'),
      meta: {
        // icon: 'mdi:microsoft-excel',
        title: t('routes.admin.excel.excel'),
      },

      children: [
        {
          path: 'customExport',
          name: 'CustomExport',
          component: () => import('/@/views/admin/excel/CustomExport.vue'),
          meta: {
            title: t('routes.admin.excel.customExport'),
          },
        },
        {
          path: 'jsonExport',
          name: 'JsonExport',
          component: () => import('/@/views/admin/excel/JsonExport.vue'),
          meta: {
            title: t('routes.admin.excel.jsonExport'),
          },
        },
        {
          path: 'arrayExport',
          name: 'ArrayExport',
          component: () => import('/@/views/admin/excel/ArrayExport.vue'),
          meta: {
            title: t('routes.admin.excel.arrayExport'),
          },
        },
        {
          path: 'importExcel',
          name: 'ImportExcel',
          component: () => import('/@/views/admin/excel/ImportExcel.vue'),
          meta: {
            title: t('routes.admin.excel.importExcel'),
          },
        },
      ],
    },
    {
      path: 'testTab/:id',
      name: 'TestTab',
      component: () => import('/@/views/admin/feat/tab-params/index.vue'),
      meta: {
        title: t('routes.admin.feat.tab'),
        carryParam: true,
        hidePathForChildren: true,
      },
      children: [
        {
          path: 'testTab/id1',
          name: 'TestTab1',
          component: () => import('/@/views/admin/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.admin.feat.tab1'),
            carryParam: true,
            ignoreRoute: true,
          },
        },
        {
          path: 'testTab/id2',
          name: 'TestTab2',
          component: () => import('/@/views/admin/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.admin.feat.tab2'),
            carryParam: true,
            ignoreRoute: true,
          },
        },
      ],
    },
    {
      path: 'testParam/:id',
      name: 'TestParam',
      component: getParentLayout('TestParam'),
      meta: {
        title: t('routes.admin.feat.menu'),
        ignoreKeepAlive: true,
      },
      children: [
        {
          path: 'sub1',
          name: 'TestParam_1',
          component: () => import('/@/views/admin/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.admin.feat.menu1'),
            ignoreKeepAlive: true,
          },
        },
        {
          path: 'sub2',
          name: 'TestParam_2',
          component: () => import('/@/views/admin/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.admin.feat.menu2'),
            ignoreKeepAlive: true,
          },
        },
      ],
    },
  ],
};

export default feat;
