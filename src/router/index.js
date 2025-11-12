import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})