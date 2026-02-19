<script setup>
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from "pinia";

const authStore = useAuthStore()
const {currentUser} = storeToRefs(authStore)
</script>

<template>
  <a class="link" to="/registration" active-class="link__active">
    <img class="link__icon link__icon_ava" src="/img/anime_tan.jpg" alt="Аватарка">
    <span class="link__text">{{currentUser.username}}</span>
  </a>
</template>

<style scoped>
.link__icon_ava {
  width: 40px;
  height: 40px;
  border-radius: 200px;
}
</style>