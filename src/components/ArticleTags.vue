<script setup>
defineProps({
  tags: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="tags">
    <span class="tags__item" v-for="tag in tags" :key="tag">{{tag}}</span>
  </div>
</template>

<style scoped>
.tags__item {
  color: #b9bab9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #b9bab9;
  border-radius: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 7px;
  padding-left: 7px;
  font-size: 14px;
  margin-right: 5px;
}
</style>