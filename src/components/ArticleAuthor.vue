<script setup>
import {computed} from "vue";


const props = defineProps({
  author: {
    type: Object,
    required: true
  },
  sourceDate: {
    type: String,
    required: true
  },
  viewMode: {
    type: String,
    required: false
  }
})

const date = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(new Date(props.sourceDate))
})

let viewModeCssClass = ''

if(props.viewMode === 'dark-bg') {
  viewModeCssClass = 'author__name_white'
}
</script>

<template>
  <div class="author">
    <img :src="author.image" :alt="author.username" class="author__img">
    <div class="author__wrap">
      <p href="" :class="`author__name ${viewModeCssClass}`">{{author.username}}</p>
      <p class="author__date">{{date }}</p>
    </div>

  </div>
</template>

<style scoped>
.author {
  display: flex;
  align-items: center;
}

.author__name {
  color: #5CB85C;
  margin-bottom: 0;
  margin-top: 0;
}

.author__name_white {
  color: white;
}

.author__img {
  margin-right: 15px;
}

.author__date {
  color: #b9bab9;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 12px;
}
</style>