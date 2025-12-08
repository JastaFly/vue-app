<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import {ref} from "vue";
import ValidationErrors from "@/components/ValidationErrors.vue";

const authStore = useAuthStore()
const {isSubmit, validationErrors} = storeToRefs(authStore)

let username = ref('')
let email = ref('')
let pass = ref('')


function onSubmit() {
  console.log('Форма отправлена!')

  authStore.registration({
    email: email.value,
    username: username.value,
    password: pass.value

  })
}
</script>

<template>
  <h2>Sign up</h2>
  <a class="green-link" href="">Have an account?</a>
  <ValidationErrors :errors="validationErrors"></ValidationErrors>
  <form action="" @submit.prevent="onSubmit">
    <input name="username" type="text" placeholder="Username" v-model="username">
    <input name="email" type="email" placeholder="Email" v-model="email">
    <input name="password" type="password" placeholder="Password" v-model="pass">
    <input type="submit" value="Sing up" :disabled="isSubmit">
  </form>
</template>

<style scoped>

</style>