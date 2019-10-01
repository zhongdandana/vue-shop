import Vue from 'vue'
import vueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(vueRouter)
const routes = [{
    path: '/msite',
    component: Msite,
    meta: {
        showFooter: true
    }
}, {
    path: '/order',
    component: Order,
    meta: {
        showFooter: true
    }
}, {
    path: '/profile',
    component: Profile,
    meta: {
        showFooter: true
    }
}, {
    path: '/search',
    component: Search,
    meta: {
        showFooter: true
    }
}, {
    path: '/',
    redirect: '/msite'
}, {
    path: '/login',
    component: Login

}]
const router = new vueRouter({
    routes,
    mode: 'history'
})
export default router