import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import ClassicCalc from '@/pages/ClassicCalc.vue';
import EngineeringCalc from "@/pages/EngineeringCalc.vue";
import { MultiCalcI } from '@/interface/MultiCalcI';

const routes = [
    {
        path: MultiCalcI.PagePath.main, 
        component: Main
    },
    {
        path: MultiCalcI.PagePath.classic, 
        component: ClassicCalc
    },
    {
        path: MultiCalcI.PagePath.engineering, 
        component: EngineeringCalc
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
