import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        component: () => import('../components/Home.vue'),
        path: '/Home'
    },
    {
      name: 'index',
      path: '/',
      redirect: '/Home'
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router