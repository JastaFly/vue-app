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
.tab {
  display: flex;
}

.tab__item {
  color: #b9bab9;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.tab__item_active {
  color: #5CB85C;
  border-bottom: 2px #5CB85C solid;
}
</style>