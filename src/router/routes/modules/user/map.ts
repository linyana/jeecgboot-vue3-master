import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/map',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
  },
  children: [
    {
      path: 'index',
      name: 'Map',
      component: () => import('../../../../views/user/pages/Map.vue'),
      meta: {
        title: t('index'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default dashboard;
