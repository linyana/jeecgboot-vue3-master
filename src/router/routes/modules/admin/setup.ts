import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const setup: AppRouteModule = {
  path: '/setup',
  name: 'Setupadmin',
  component: LAYOUT,
  redirect: '/setup/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.admin.setup.page'),
  },
  children: [
    {
      path: 'index',
      name: 'SetupadminPage',
      component: () => import('/@/views/admin/setup/index.vue'),
      meta: {
        title: t('routes.admin.setup.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default setup;
