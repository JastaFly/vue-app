<script setup>
import {computed} from "vue";


const props = defineProps({
  user: {
    type: String,
    required: true
  },
  currentStore: {
    type: Object,
    required: true
  }
})


let followTxt = computed(() => {
  let followTxt = `+ Follow ${props.user.username}`

  if(props.user.following) {
    followTxt = `- Unfollow ${props.user.username}`
  }

  return followTxt
})
console.log(111111111)
console.log(props.user)
</script>

<template>
  <button class="follow" :class="{'follow_white_bg': user.following}" @click="currentStore.follow(user.username)">{{followTxt}}</button>
</template>

<style scoped>

</style>