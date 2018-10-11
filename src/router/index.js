import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: {
                        title: '主页'
                    }
                },
                {
                    path: 'sellerManage',
                    component: resolve => require(['../pages/Seller/SellerManage/SellerManage.vue'], resolve),
                    meta: {
                        title: '商户管理'
                    }
                },
                {
                    path: 'goodsManage',
                    component: resolve => require(['../pages/Seller/Goods/GoodsManage/GoodsManage.vue'], resolve),
                    meta: {
                        title: '商品管理'
                    }
                },
                {
                    path: 'addGoods',
                    component: resolve => require(['../pages/Seller/Goods/AddGoods/AddGoods.vue'], resolve),
                    meta: {
                        title: '添加商品'
                    }
                },
                {
                    path: 'jipinManage',
                    component: resolve => require(['../pages/Seller/JipinManage/JipinManage.vue'], resolve),
                    meta: {
                        title: '集品管理'
                    }
                },
                {
                    path: 'employeeManage',
                    component: resolve => require(['../pages/Seller/EmployeeManage/EmployeeManage.vue'], resolve),
                    meta: {
                        title: '员工管理'
                    }
                },
                {
                    path: 'directOrder',
                    component: resolve => require(['../pages/Order/DirectOrder/DirectOrder.vue'], resolve),
                    meta: {
                        title: '直购订单'
                    }
                },
                {
                    path: 'jipinOrder',
                    component: resolve => require(['../pages/Order/JipinOrder/JipinOrder.vue'], resolve),
                    meta: {
                        title: '集品订单'
                    }
                },
                {
                    path: 'account',
                    component: resolve => require(['../pages/Person/Account/Account.vue'], resolve),
                    meta: {
                        title: '账户管理'
                    }
                },
                {
                    path: 'psdChange',
                    component: resolve => require(['../pages/Person/PsdChange/PsdChange.vue'], resolve),
                    meta: {
                        title: '修改密码'
                    }
                },
                {
                    path: 'safety',
                    component: resolve => require(['../pages/Person/Safety/Safety.vue'], resolve),
                    meta: {
                        title: '账户管理'
                    }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: {
                        title: '自定义图标'
                    }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: {
                        title: 'tab选项卡'
                    }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: {
                        title: '基本表单'
                    }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: {
                        title: '富文本编辑器'
                    }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: {
                        title: 'markdown编辑器'
                    }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: {
                        title: '文件上传'
                    }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: {
                        title: 'schart图表'
                    }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: {
                        title: '拖拽列表'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: {
                        title: '权限测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: {
                        title: '403'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../pages/Login/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
