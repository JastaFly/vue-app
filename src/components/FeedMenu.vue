<script setup>
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from "pinia";
const props = defineProps({
  tag: {
    type: String,
    required: false
  }
})

const authStore = useAuthStore()
const {isLoggedIn} = storeToRefs(authStore)
</script>

<template>
  <div class="tab">
    <router-link class="tab__item" to="/" active-class="tab__item_active">Global Feed</router-link>
    <router-link v-if="isLoggedIn" class="tab__item" to="/feed/" active-class="tab__item_active">Your feed</router-link>
    <router-link v-if="props.tag" class="tab__item" :to="`/tags/${tag}/`" active-class="tab__item_active">
      {{`#${tag}`}}
    </router-link>
  </div>
</template>

<style scoped>

</style>