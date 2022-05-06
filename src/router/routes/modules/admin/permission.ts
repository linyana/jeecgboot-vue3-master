import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';
import { t } from '/@/hooks/web/useI18n';

const permission: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/front/page',
  meta: {
    orderNo: 15,
    icon: 'ion:key-outline',
    title: t('routes.admin.permission.permission'),
  },

  children: [
    {
      path: 'front',
      name: 'PermissionFrontadmin',
      component: getParentLayout('PermissionFrontadmin'),
      meta: {
        title: t('routes.admin.permission.front'),
      },
      children: [
        {
          path: 'page',
          name: 'FrontPageAuth',
          component: () => import('/@/views/admin/permission/front/index.vue'),
          meta: {
            title: t('routes.admin.permission.frontPage'),
          },
        },
        {
          path: 'btn',
          name: 'FrontBtnAuth',
          component: () => import('/@/views/admin/permission/front/Btn.vue'),
          meta: {
            title: t('routes.admin.permission.frontBtn'),
          },
        },
        {
          path: 'auth-pageA',
          name: 'FrontAuthPageA',
          component: () => import('/@/views/admin/permission/front/AuthPageA.vue'),
          meta: {
            title: t('routes.admin.permission.frontTestA'),
            roles: [RoleEnum.SUPER],
          },
        },
        {
          path: 'auth-pageB',
          name: 'FrontAuthPageB',
          component: () => import('/@/views/admin/permission/front/AuthPageB.vue'),
          meta: {
            title: t('routes.admin.permission.frontTestB'),
            roles: [RoleEnum.TEST],
          },
        },
      ],
    },
    {
      path: 'back',
      name: 'PermissionBackadmin',
      component: getParentLayout('PermissionBackadmin'),
      meta: {
        title: t('routes.admin.permission.back'),
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: () => import('/@/views/admin/permission/back/index.vue'),
          meta: {
            title: t('routes.admin.permission.backPage'),
          },
        },
        {
          path: 'btn',
          name: 'BackAuthBtn',
          component: () => import('/@/views/admin/permission/back/Btn.vue'),
          meta: {
            title: t('routes.admin.permission.backBtn'),
          },
        },
      ],
    },
  ],
};

export default permission;
