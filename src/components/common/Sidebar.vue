<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="'iconfont '+item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    <i :class="'iconfont '+threeItem.icon"></i>
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                <i :class="'iconfont '+subItem.icon"></i>
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="'iconfont '+item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'icon-icon-5',
                    index: 'dashboard',
                    title: '主页'
                },
                {
                    icon: 'icon-icon-4',
                    index: '0',
                    title: '商户',
                    subs: [
                        {
                            icon: 'icon-icon-82',
                            index: 'sellerManage',
                            title: '商户管理'
                        },
                        {
                            icon: 'icon-icon-160',
                            index: 'goodsManage',
                            title: '商品管理'
                        },
                        {
                            icon: 'icon-icon-96',
                            index: 'jipinManage',
                            title: '集品管理'
                        },
                        {
                            icon: 'icon-icon-131',
                            index: 'employeeManage',
                            title: '员工管理'
                        },
                    ]
                },
                {
                    icon: 'icon-icon-38',
                    index: '1',
                    title: '订单',
                    subs: [
                        {
                            icon: 'icon-icon-9',
                            index: 'directOrder',
                            title: '直购订单'
                        },
                        {
                            icon: 'icon-icon-103',
                            index: 'jipinOrder',
                            title: '集品订单'
                        }
                    ]
                },
                {
                    icon: 'icon-icon-12',
                    index: '2',
                    title: '个人',
                    subs: [
                        {
                            icon: 'icon-icon-157',
                            index: 'account',
                            title: '账户设置'
                        },
                        {
                            icon: 'icon-icon-84',
                            index: 'psdChange',
                            title: '修改密码'
                        },
                        {
                            icon: 'icon-icon-119',
                            index: 'safety',
                            title: '安全设置'
                        }
                    ]
                },
                // {

                //     index: 'table',
                //     title: '基础表格'
                // },
                // {

                //     index: 'tabs',
                //     title: 'tab选项卡'
                // },
                // {

                //     index: '3',
                //     title: '表单相关',
                //     subs: [
                //         {
                //             index: 'form',
                //             title: '基本表单'
                //         },
                //         {
                //             index: '3-2',
                //             title: '三级菜单',
                //             subs: [
                //                 {
                //                     index: 'editor',
                //                     title: '富文本编辑器'
                //                 },
                //                 {
                //                     index: 'markdown',
                //                     title: 'markdown编辑器'
                //                 },
                //             ]
                //         },
                //         {
                //             index: 'upload',
                //             title: '文件上传'
                //         }
                //     ]
                // },
                // {

                //     index: 'icon',
                //     title: '自定义图标'
                // },
                // {

                //     index: 'charts',
                //     title: 'schart图表'
                // },
                // {

                //     index: 'drag',
                //     title: '拖拽列表'
                // },
                // {

                //     index: '6',
                //     title: '错误处理',
                //     subs: [
                //         {
                //             index: 'permission',
                //             title: '权限测试'
                //         },
                //         {
                //             index: '404',
                //             title: '404页面'
                //         }
                //     ]
                // }
            ]
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    }
}
</script>

<style scoped>
.iconfont {
  margin-right: 10px;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
