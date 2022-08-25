import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@pages/1A2B.vue'),
    },
    {
        path: '/1a2b',
        name: '1A2B',
        meta: {
            title: '1A2B',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@pages/1A2B.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
