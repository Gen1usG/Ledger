import Vue from 'vue'
import VueRouter from 'vue-router'
import Label from "@/views/Label.vue";
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/label'
    },
    {
        path:'/label',
        name:'Label',
        component:Label
    },
    {
        path:'/money',
        name:'Money',
        component: Money
    },
    {
        path:'/statistics',
        name:'Statistics',
        component: Statistics
    }
];

const router = new VueRouter({
  routes
});

export default router
