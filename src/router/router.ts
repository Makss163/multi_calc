import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import ClassicCalc from '@/pages/ClassicCalc.vue';

const routes = [
    {
        path: '/', 
        component: Main
    },
    {
        path: '/classic', 
        component: ClassicCalc
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
