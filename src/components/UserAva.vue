<script setup>
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from "pinia";

const authStore = useAuthStore()
const {currentUser} = storeToRefs(authStore)
</script>

<template>
  <router-link class="link" :to="`/profiles/${currentUser.username}`" active-class="link__active">
    <img class="link__icon ava" :src="currentUser.image" alt="Аватарка">
    <span class="link__text">{{currentUser.username}}</span>
  </router-link>
</template>

<style scoped>

</style>