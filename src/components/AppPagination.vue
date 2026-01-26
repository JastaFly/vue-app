<script setup>
import {range} from "@/helpers/utils";
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number
  },
  url: {
    type: String,
    required: true
  }
})
const pages = computed(() => {
  const pageCount = Math.ceil(props.total / props.limit)

  return range(1, pageCount)
})

console.log(props.currentPage)
</script>

<template>
<div class="pagination">
  <router-link :to="`${url }?page=${page}`"
     class="pagination__item"
     :class="{pagination__item_active: currentPage == page}"
     v-for="page in pages" :key="page">
    {{page}}
  </router-link>
</div>
</template>

<style scoped>
.pagination__item {
  color: #5CB85C;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #b9bab9;
  text-decoration: none;
}

.pagination__item_active {
  background-color: #5CB85C;
  color: white;
}

.pagination__item:hover {
  background-color: #F3F3F3;
}
</style>