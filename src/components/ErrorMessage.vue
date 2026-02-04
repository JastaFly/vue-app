<script setup>
defineProps({
  error: {
    type: String,
    required: false,
    default: 'Чёт сломалось!'
  }
})
</script>

<template>
  <div>{{error}}</div>
</template>

<style scoped>

</style>