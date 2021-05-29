import Vue from 'vue'
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/AddOrder',
        component: () => import('./pages/AddOrder')
    },
    {
        path: '/FormWorker',
        component: () => import('./pages/AddOrder')
    },
    {
        path: '/Customers',
        component: () => import('./pages/Customers')
    },
    {
        path: '/Orders',
        component: () => import('./pages/Orders')
    },
    {
        path: '/Profile',
        component: () => import('./pages/Profile')
    },
    {
        path: '/Worker',
        component: () => import('./pages/Worker')
    },
    {
        path: '/EditOrder/:orderId',
        component: () => import('./components/EditOrder')
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
