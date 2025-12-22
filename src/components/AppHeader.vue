<script setup>


import { useAuthStore } from '@/stores/authStore'
import MainMenu from "@/views/MainMenu.vue";
import {storeToRefs} from "pinia";
import AccountMenu from "@/views/AccountMenu.vue";

const authStore = useAuthStore()
const {isLoggedIn} = storeToRefs(authStore)

</script>

<template>
<header>
  <a href="/" class="logo">conduit</a>
  <menu>


    <AccountMenu v-if="isLoggedIn"></AccountMenu>
    <MainMenu v-else></MainMenu>
  </menu>
</header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 200px;
  padding-right: 200px;
}



menu {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}
</style>