import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '@/components/HomePage.vue'

const routes = [
    { path: '/', component: HomePage }
]

export const  router = createRouter({
    history: createMemoryHistory(),
    routes,
})