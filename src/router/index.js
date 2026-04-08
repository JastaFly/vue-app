import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import GlobalFeed from "@/views/GlobalFeed.vue";
import YourFeed from "@/views/YourFeed.vue";
import TagFeed from "@/views/TagFeed.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import CreateArticle from "@/views/CreateArticle.vue";
import EditArticle from "@/views/EditArticle.vue";
import UserSettings from "@/views/UserSettings.vue";

const routes = [
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: GlobalFeed },
    { path: '/feed', component: YourFeed },
    { path: '/tags/:slug', component: TagFeed, name: 'tag' },
    { path: '/articles/:slug', component: ArticlePage, name: 'article' },
    { path: '/articles/new', component: CreateArticle, name: 'createArticle' },
    { path: '/articles/:slug/edit', component: EditArticle, name: 'editArticle' },
    { path: '/settings', component: UserSettings, name: 'settings' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})