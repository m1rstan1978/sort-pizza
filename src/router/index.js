import Main from '@/pages/Main'
import Bascet from '@/pages/Bascet'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        component:Main
    },
    {
        path:'/bascet',
        component:Bascet
    },
]


const router = createRouter( {
    routes,
    history:createWebHistory( process.env.BASE_URL )
} )
export default router
