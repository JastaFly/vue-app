<script setup>

import ValidationErrors from "@/components/ValidationErrors.vue";
import {useAuthStore} from "@/stores/authStore";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {useSettingsStore} from "@/stores/settingsStore";


const authStore = useAuthStore()
const settingsStore = useSettingsStore()
const {currentUser} = storeToRefs(authStore)
const {validationErrors, isSubmit} = storeToRefs(settingsStore)
const newPassword = ref('')

function updateUserData(event) {
  let newUserData = new FormData(event.target)


  authStore.updateCurrentUser({
    username: newUserData.get('username'),
    bio: newUserData.get('bio'),
    image: newUserData.get('ava'),
    password: newUserData.get('password')
  })

}


</script>

<template>
<div class="wrap">
  <h1>Your Settings</h1>
  <ValidationErrors :errors="validationErrors"></ValidationErrors>
  <form v-if="currentUser" action="" name="user-settings" class="form-w-100" @submit.prevent="updateUserData">
    <input type="text" placeholder="URL of profile picture" name="ava" :value="currentUser.image">
    <input type="text" placeholder="Username" name="username" :value="currentUser.username">
    <textarea name="bio" :value="currentUser.bio"></textarea>
    <input type="email" placeholder="Email" name="email" :value="currentUser.email">
    <input type="password" placeholder="New Password" name="password" :value="newPassword">
    <input type="submit" value="Update Settings" :disabled="isSubmit">
  </form>
  <hr>
  <button class="follow follow_red" @click="authStore.logout">Or click here to logout</button>
</div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.wrap {
  width: 50%;
  margin: 0 auto;
}
</style>