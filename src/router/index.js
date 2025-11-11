import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})