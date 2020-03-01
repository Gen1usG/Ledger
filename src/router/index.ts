import Vue from 'vue';
import VueRouter from 'vue-router';
import Label from "@/views/Label.vue";
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from '@/views/NotFound.vue';
import LabelEdit from '@/views/LabelEdit.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/label'
    },
    {
        path: '/label',
        name: 'Label',
        component: Label
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path:'/label/edit/:id',
        name:'labelEdit',
        component: LabelEdit,
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];

const router = new VueRouter({
    routes
});

export default router;
