import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.admin.charts.charts'),
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('routes.admin.charts.baiduMap'),
      },
      component: () => import('/@/views/admin/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.admin.charts.aMap'),
      },
      component: () => import('/@/views/admin/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: t('routes.admin.charts.googleMap'),
      },
      component: () => import('/@/views/admin/charts/map/Google.vue'),
    },
    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('/@/views/admin/charts/Map.vue'),
          meta: {
            title: t('routes.admin.charts.map'),
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/admin/charts/Line.vue'),
          meta: {
            title: t('routes.admin.charts.line'),
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('/@/views/admin/charts/Pie.vue'),
          meta: {
            title: t('routes.admin.charts.pie'),
          },
        },
      ],
    },
  ],
};

export default charts;
