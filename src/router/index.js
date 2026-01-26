import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import GlobalFeed from "@/views/GlobalFeed.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: GlobalFeed }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})