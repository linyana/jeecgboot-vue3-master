import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: t('routes.admin.comp.comp'),
  },

  children: [
    {
      path: 'jeecg',
      name: 'Jeecgadmin',
      redirect: '/comp/jeecg/basic',
      component: getParentLayout('Jeecgadmin'),
      meta: {
        title: t('routes.admin.comp.jeecg'),
      },
      children:[
        {
          path: 'basic',
          name: 'JAreaLinkage',
          component: () => import('/@/views/admin/jeecg/JeecgComponents.vue'),
          meta: {
            title: t('routes.admin.jeecg.JAreaLinkage'),
          },
        },
        {
          path: 'oneToMore',
          name: 'oneToMoreadmin',
          component: () => import('/@/views/admin/vextable/index.vue'),
          meta: {
            title: t('routes.admin.comp.oneToMore'),
          },
        },
      ]
    },
    {
      path: 'basic',
      name: 'Basicadmin',
      component: getParentLayout('Basicadmin'),
      meta: {
        title: t('routes.admin.comp.basic'),
      },
      children:[
        {
          path: 'button',
          name: 'Buttonadmin',
          component: () => import('/@/views/admin/comp/button/index.vue'),
          meta: {
            title: t('routes.admin.basic.button'),
          },
        },
        {
          path: 'icon',
          name: 'Iconadmin',
          component: () => import('/@/views/admin/feat/icon/index.vue'),
          meta: {
            title: t('routes.admin.feat.icon'),
          },
        },
        {
          path: 'msg',
          name: 'Msgadmin',
          component: () => import('/@/views/admin/feat/msg/index.vue'),
          meta: {
            title: t('routes.admin.feat.msg'),
          },
        },
        {
          path: 'tabs',
          name: 'Tabsadmin',
          component: () => import('/@/views/admin/feat/tabs/index.vue'),
          meta: {
            title: t('routes.admin.feat.tabs'),
            hideChildrenInMenu: true,
          },
          children: [
            {
              path: 'detail/:id',
              name: 'TabDetail',
              component: () => import('/@/views/admin/feat/tabs/TabDetail.vue'),
              meta: {
                currentActiveMenu: '/comp/basic/tabs',
                title: t('routes.admin.feat.tabDetail'),
                hideMenu: true,
                dynamicLevel: 3,
                realPath: '/comp/basic/tabs/detail',
              },
            },
          ],
        },
      ]
    },


    {
      path: 'form',
      name: 'Formadmin',
      redirect: '/comp/form/basic',
      component: getParentLayout('Formadmin'),
      meta: {
        // icon: 'mdi:form-select',
        title: t('routes.admin.form.form'),
      },
      children: [
        {
          path: 'basic',
          name: 'FormBasicadmin',
          component: () => import('/@/views/admin/form/index.vue'),
          meta: {
            title: t('routes.admin.form.basic'),
          },
        },
        {
          path: 'useForm',
          name: 'UseFormadmin',
          component: () => import('/@/views/admin/form/UseForm.vue'),
          meta: {
            title: t('routes.admin.form.useForm'),
          },
        },
        {
          path: 'refForm',
          name: 'RefFormadmin',
          component: () => import('/@/views/admin/form/RefForm.vue'),
          meta: {
            title: t('routes.admin.form.refForm'),
          },
        },
        {
          path: 'advancedForm',
          name: 'AdvancedFormadmin',
          component: () => import('/@/views/admin/form/AdvancedForm.vue'),
          meta: {
            title: t('routes.admin.form.advancedForm'),
          },
        },
        {
          path: 'ruleForm',
          name: 'RuleFormadmin',
          component: () => import('/@/views/admin/form/RuleForm.vue'),
          meta: {
            title: t('routes.admin.form.ruleForm'),
          },
        },
        {
          path: 'dynamicForm',
          name: 'DynamicFormadmin',
          component: () => import('/@/views/admin/form/DynamicForm.vue'),
          meta: {
            title: t('routes.admin.form.dynamicForm'),
          },
        },
        {
          path: 'customerForm',
          name: 'CustomerFormadmin',
          component: () => import('/@/views/admin/form/CustomerForm.vue'),
          meta: {
            title: t('routes.admin.form.customerForm'),
          },
        },
        {
          path: 'appendForm',
          name: 'appendFormadmin',
          component: () => import('/@/views/admin/form/AppendForm.vue'),
          meta: {
            title: t('routes.admin.form.appendForm'),
          },
        },
      ],
    },
    {
      path: 'table',
      name: 'Tableadmin',
      redirect: '/comp/table/basic',
      component: getParentLayout('Tableadmin'),
      meta: {
        // icon: 'carbon:table-split',
        title: t('routes.admin.table.table'),
      },

      children: [
        {
          path: 'basic',
          name: 'TableBasicadmin',
          component: () => import('/@/views/admin/table/Basic.vue'),
          meta: {
            title: t('routes.admin.table.basic'),
          },
        },
        {
          path: 'treeTable',
          name: 'TreeTableadmin',
          component: () => import('/@/views/admin/table/TreeTable.vue'),
          meta: {
            title: t('routes.admin.table.treeTable'),
          },
        },
        {
          path: 'fetchTable',
          name: 'FetchTableadmin',
          component: () => import('/@/views/admin/table/FetchTable.vue'),
          meta: {
            title: t('routes.admin.table.fetchTable'),
          },
        },
        {
          path: 'fixedColumn',
          name: 'FixedColumnadmin',
          component: () => import('/@/views/admin/table/FixedColumn.vue'),
          meta: {
            title: t('routes.admin.table.fixedColumn'),
          },
        },
        {
          path: 'customerCell',
          name: 'CustomerCelladmin',
          component: () => import('/@/views/admin/table/CustomerCell.vue'),
          meta: {
            title: t('routes.admin.table.customerCell'),
          },
        },
        {
          path: 'formTable',
          name: 'FormTableadmin',
          component: () => import('/@/views/admin/table/FormTable.vue'),
          meta: {
            title: t('routes.admin.table.formTable'),
          },
        },
        {
          path: 'useTable',
          name: 'UseTableadmin',
          component: () => import('/@/views/admin/table/UseTable.vue'),
          meta: {
            title: t('routes.admin.table.useTable'),
          },
        },
        {
          path: 'refTable',
          name: 'RefTableadmin',
          component: () => import('/@/views/admin/table/RefTable.vue'),
          meta: {
            title: t('routes.admin.table.refTable'),
          },
        },
        {
          path: 'multipleHeader',
          name: 'MultipleHeaderadmin',
          component: () => import('/@/views/admin/table/MultipleHeader.vue'),
          meta: {
            title: t('routes.admin.table.multipleHeader'),
          },
        },
        {
          path: 'mergeHeader',
          name: 'MergeHeaderadmin',
          component: () => import('/@/views/admin/table/MergeHeader.vue'),
          meta: {
            title: t('routes.admin.table.mergeHeader'),
          },
        },
        {
          path: 'nestedTable',
          name: 'nestedTableadmin',
          component: () => import('/@/views/admin/table/NestedTable.vue'),
          meta: {
            title: t('routes.admin.table.nestedTable'),
          },
        },
        {
          path: 'expandTable',
          name: 'ExpandTableadmin',
          component: () => import('/@/views/admin/table/ExpandTable.vue'),
          meta: {
            title: t('routes.admin.table.expandTable'),
          },
        },
        {
          path: 'fixedHeight',
          name: 'FixedHeightadmin',
          component: () => import('/@/views/admin/table/FixedHeight.vue'),
          meta: {
            title: t('routes.admin.table.fixedHeight'),
          },
        },
        {
          path: 'footerTable',
          name: 'FooterTableadmin',
          component: () => import('/@/views/admin/table/FooterTable.vue'),
          meta: {
            title: t('routes.admin.table.footerTable'),
          },
        },
        {
          path: 'editCellTable',
          name: 'EditCellTableadmin',
          component: () => import('/@/views/admin/table/EditCellTable.vue'),
          meta: {
            title: t('routes.admin.table.editCellTable'),
          },
        },
        {
          path: 'editRowTable',
          name: 'EditRowTableadmin',
          component: () => import('/@/views/admin/table/EditRowTable.vue'),
          meta: {
            title: t('routes.admin.table.editRowTable'),
          },
        },
        {
          path: 'authColumn',
          name: 'AuthColumnadmin',
          component: () => import('/@/views/admin/table/AuthColumn.vue'),
          meta: {
            title: t('routes.admin.table.authColumn'),
          },
        },
      ],
    },
    {
      path: 'modal',
      name: 'Modaladmin',
      redirect: '/comp/modal/basic',
      component: getParentLayout('Modaladmin'),
      meta: {
        title: t('routes.admin.comp.modal'),
      },
      children:[
        {
          path: 'basic',
          name: 'ModalBasicadmin',
          component: () => import('/@/views/admin/comp/modal/index.vue'),
          meta: {
            title: t('routes.admin.comp.modal.basic'),
          },
        },
        {
          path: 'drawer',
          name: 'Draweradmin',
          component: () => import('/@/views/admin/comp/drawer/index.vue'),
          meta: {
            title: t('routes.admin.comp.modal.drawer'),
          },
        },
      ]
    },

    {
      path: 'third',
      name: 'Thirdadmin',
      redirect: '/comp/third/basic',
      component: getParentLayout('Modaladmin'),
      meta: {
        title: t('routes.admin.comp.third'),
      },
      children:[
        {
          path: 'basic',
          name: 'Cropperadmin',
          component: () => import('/@/views/admin/comp/cropper/index.vue'),
          meta: {
            title: t('routes.admin.comp.cropperImage'),
          },
        },
        {
          path: 'qrcode',
          name: 'QrCodeadmin',
          component: () => import('/@/views/admin/comp/qrcode/index.vue'),
          meta: {
            title: t('routes.admin.comp.qrcode'),
          },
        },
        {
          path: 'strength-meter',
          name: 'StrengthMeteradmin',
          component: () => import('/@/views/admin/comp/strength-meter/index.vue'),
          meta: {
            title: t('routes.admin.comp.strength'),
          },
        },
        {
          path: 'upload',
          name: 'Uploadadmin',
          component: () => import('/@/views/admin/comp/upload/index.vue'),
          meta: {
            title: t('routes.admin.comp.upload'),
          },
        },
        {
          path: 'loading',
          name: 'Loadingadmin',
          component: () => import('/@/views/admin/comp/loading/index.vue'),
          meta: {
            title: t('routes.admin.comp.loading'),
          },
        },
        {
          path: 'timestamp',
          name: 'Timeadmin',
          component: () => import('/@/views/admin/comp/time/index.vue'),
          meta: {
            title: t('routes.admin.comp.time'),
          },
        },
        {
          path: 'countTo',
          name: 'CountTo',
          component: () => import('/@/views/admin/comp/count-to/index.vue'),
          meta: {
            title: t('routes.admin.comp.countTo'),
          },
        },
        {
          path: 'transition',
          name: 'transitionadmin',
          component: () => import('/@/views/admin/comp/transition/index.vue'),
          meta: {
            title: t('routes.admin.comp.transition'),
          },
        },
        {
          path: 'print',
          name: 'Print',
          component: () => import('/@/views/admin/feat/print/index.vue'),
          meta: {
            title: t('routes.admin.feat.print'),
          },
        },
        {
          path: 'img-preview',
          name: 'ImgPreview',
          component: () => import('/@/views/admin/feat/img-preview/index.vue'),
          meta: {
            title: t('routes.admin.feat.imgPreview'),
          },
        },
        {
          path: 'download',
          name: 'DownLoadadmin',
          component: () => import('/@/views/admin/feat/download/index.vue'),
          meta: {
            title: t('routes.admin.feat.download'),
          },
        },
        {
          path: 'click-out-side',
          name: 'ClickOutSideadmin',
          component: () => import('/@/views/admin/feat/click-out-side/index.vue'),
          meta: {
            title: t('routes.admin.feat.clickOutSide'),
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
          path: 'fullCalendar',
          name: 'fullCalendaradmin',
          component: () => import('/@/views/admin/fullcalendar/index.vue'),
          meta: {
            title: t('routes.admin.feat.fullCalendar'),
          },
        },
        {
          path: 'codemirror',
          name: 'codemirroradmin',
          component: () => import('/@/views/admin/codemirror/index.vue'),
          meta: {
            title: t('routes.admin.feat.codemirror'),
          },
        },
        {
          path: 'ripple',
          name: 'Rippleadmin',
          component: () => import('/@/views/admin/feat/ripple/index.vue'),
          meta: {
            title: t('routes.admin.feat.ripple'),
          },
        },
      ]
    },
    {
      path: 'tree',
      name: 'Treeadmin',
      redirect: '/comp/tree/basic',
      component: getParentLayout('Treeadmin'),
      meta: {
        // icon: 'clarity:tree-view-line',
        title: t('routes.admin.comp.tree'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTreeadmin',
          component: () => import('/@/views/admin/tree/index.vue'),
          meta: {
            title: t('routes.admin.comp.treeBasic'),
          },
        },
        {
          path: 'editTree',
          name: 'EditTreeadmin',
          component: () => import('/@/views/admin/tree/EditTree.vue'),
          meta: {
            title: t('routes.admin.comp.editTree'),
          },
        },
        {
          path: 'actionTree',
          name: 'ActionTreeadmin',
          component: () => import('/@/views/admin/tree/ActionTree.vue'),
          meta: {
            title: t('routes.admin.comp.actionTree'),
          },
        },
      ],
    },
    {
      path: 'editor',
      name: 'Editoradmin',
      redirect: '/comp/editor/markdown',
      component: getParentLayout('Editoradmin'),
      meta: {
        // icon: 'carbon:table-split',
        title: t('routes.admin.editor.editor'),
      },
      children: [
        {
          path: 'json',
          component: () => import('/@/views/admin/editor/json/index.vue'),
          name: 'JsonEditoradmin',
          meta: {
            title: t('routes.admin.editor.jsonEditor'),
          },
        },
        {
          path: 'markdown',
          component: getParentLayout('Markdownadmin'),
          name: 'Markdownadmin',
          meta: {
            title: t('routes.admin.editor.markdown'),
          },
          redirect: '/comp/editor/markdown/index',
          children: [
            {
              path: 'index',
              name: 'MarkDownBasicadmin',
              component: () => import('/@/views/admin/editor/markdown/index.vue'),
              meta: {
                title: t('routes.admin.editor.tinymceBasic'),
              },
            },
            {
              path: 'editor',
              name: 'MarkDownFormadmin',
              component: () => import('/@/views/admin/editor/markdown/Editor.vue'),
              meta: {
                title: t('routes.admin.editor.tinymceForm'),
              },
            },
          ],
        },

        {
          path: 'tinymce',
          component: getParentLayout('Tinymceadmin'),
          name: 'Tinymceadmin',
          meta: {
            title: t('routes.admin.editor.tinymce'),
          },
          redirect: '/comp/editor/tinymce/index',
          children: [
            {
              path: 'index',
              name: 'TinymceBasicadmin',
              component: () => import('/@/views/admin/editor/tinymce/index.vue'),
              meta: {
                title: t('routes.admin.editor.tinymceBasic'),
              },
            },
            {
              path: 'editor',
              name: 'TinymceFormadmin',
              component: () => import('/@/views/admin/editor/tinymce/Editor.vue'),
              meta: {
                title: t('routes.admin.editor.tinymceForm'),
              },
            },
          ],
        },
      ],
    },
    {
      path: 'scroll',
      name: 'Scrolladmin',
      redirect: '/comp/scroll/basic',
      component: getParentLayout('Scrolladmin'),
      meta: {
        title: t('routes.admin.comp.scroll'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrolladmin',
          component: () => import('/@/views/admin/comp/scroll/index.vue'),
          meta: {
            title: t('routes.admin.comp.scrollBasic'),
          },
        },
        {
          path: 'action',
          name: 'ActionScrolladmin',
          component: () => import('/@/views/admin/comp/scroll/Action.vue'),
          meta: {
            title: t('routes.admin.comp.scrollAction'),
          },
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrolladmin',
          component: () => import('/@/views/admin/comp/scroll/VirtualScroll.vue'),
          meta: {
            title: t('routes.admin.comp.virtualScroll'),
          },
        },
      ],
    },

    {
      path: 'desc',
      name: 'Descadmin',
      component: () => import('/@/views/admin/comp/desc/index.vue'),
      meta: {
        title: t('routes.admin.comp.desc'),
      },
    },

    {
      path: 'lazy',
      name: 'Lazyadmin',
      component: getParentLayout('Lazyadmin'),
      redirect: '/comp/lazy/basic',
      meta: {
        title: t('routes.admin.comp.lazy'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicLazyadmin',
          component: () => import('/@/views/admin/comp/lazy/index.vue'),
          meta: {
            title: t('routes.admin.comp.lazyBasic'),
          },
        },
        {
          path: 'transition',
          name: 'BasicTransitionadmin',
          component: () => import('/@/views/admin/comp/lazy/Transition.vue'),
          meta: {
            title: t('routes.admin.comp.lazyTransition'),
          },
        },
      ],
    },
    {
      path: 'verify',
      name: 'Verifyadmin',
      component: getParentLayout('Verifyadmin'),
      redirect: '/comp/verify/drag',
      meta: {
        title: t('routes.admin.comp.verify'),
      },
      children: [
        {
          path: 'drag',
          name: 'VerifyDragadmin',
          component: () => import('/@/views/admin/comp/verify/index.vue'),
          meta: {
            title: t('routes.admin.comp.verifyDrag'),
          },
        },
        {
          path: 'rotate',
          name: 'VerifyRotateadmin',
          component: () => import('/@/views/admin/comp/verify/Rotate.vue'),
          meta: {
            title: t('routes.admin.comp.verifyRotate'),
          },
        },
      ],
    }
  ],
};

export default comp;
