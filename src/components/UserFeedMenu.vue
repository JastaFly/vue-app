<script setup>
defineProps({
  user: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="tab">
    <router-link class="tab__item" :to="`/profiles/${user}/`" active-class="tab__item_active">My Articles</router-link>
    <router-link class="tab__item" :to="`/profiles/${user}/favorites`" active-class="tab__item_active">Favourite Articles</router-link>

  </div>
</template>

<style scoped>

</style>