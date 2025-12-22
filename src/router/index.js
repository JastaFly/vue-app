import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import Home from "@/views/HomePage.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: Home }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})