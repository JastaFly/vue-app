<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import {ref} from "vue";
import ValidationErrors from "@/components/ValidationErrors.vue";

const authStore = useAuthStore()
const {isSubmit, validationErrors} = storeToRefs(authStore)


let email = ref('')
let pass = ref('')


function onSubmit() {
  console.log('Форма отправлена!')

  authStore.login({
    email: email.value,
    password: pass.value

  })
}
</script>

<template>
  <h2>Login</h2>
  <a class="green-link" href="">Have an account?</a>
  <ValidationErrors :errors="validationErrors"></ValidationErrors>
  <form action="" @submit.prevent="onSubmit">
    <input name="email" type="email" placeholder="Email" v-model="email">
    <input name="pass" type="password" placeholder="Password" v-model="pass">
    <input type="submit" value="Login"  :disabled="isSubmit">
  </form>
</template>

<style scoped>

</style>