import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import GlobalFeed from "@/views/GlobalFeed.vue";
import YourFeed from "@/views/YourFeed.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: GlobalFeed },
    { path: '/feed', component: YourFeed }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})