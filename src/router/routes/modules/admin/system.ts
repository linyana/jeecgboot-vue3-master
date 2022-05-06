import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.admin.system.moduleName'),
  },
  children: [
    {
      path: 'test',
      name: 'TestManagement',
      meta: {
        title: t('routes.admin.system.test'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/test/index.vue'),
    },
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.admin.system.account'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/system/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: t('routes.admin.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/admin/system/account/AccountDetail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.admin.system.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/role/index.vue'),
    },
    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.admin.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/menu/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.admin.system.dept'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/dept/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.admin.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/password/index.vue'),
    },
  ],
};

export default system;
