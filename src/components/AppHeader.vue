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

}



menu {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}
</style>