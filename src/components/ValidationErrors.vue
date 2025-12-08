<script setup>
defineProps({
  errors: {
    type: Object,
    required: true
  }
})
</script>

<template>
<ul class="errors">
  <li class="error" v-for="error in errors" :key="error">{{error[0]}}</li>
</ul>
</template>

<style scoped>
.errors {
  list-style: none;
}

.error {
  color: #B8695C;
  text-align: center;
}
</style>