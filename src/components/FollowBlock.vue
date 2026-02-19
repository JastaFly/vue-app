<script setup>
import ArticleAuthor from "@/components/ArticleAuthor.vue";
import {useAuthStore} from "@/stores/authStore";
import {storeToRefs} from "pinia";
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
  favoritesCount: {
    type: Number,
    required: true
  },
  viewMode: {
    type: String,
    required: false
  }
})

const authStore = useAuthStore()
const {currentUser} = storeToRefs(authStore)
const isCurrentUserAuthor = computed(() => {
  if(!currentUser.value || !props.author) {
    return false
  }

  return currentUser.value.username === props.author.username
})
const articleDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(new Date(props.sourceDate))

let viewModeCssClass = ''

if(props.viewMode === 'center') {
  viewModeCssClass = 'follow-wrap_center'
}
</script>

<template>
  <div :class="`follow-wrap ${viewModeCssClass}`">
    <ArticleAuthor :author="author" :source-date="articleDate" :view-mode="viewMode"></ArticleAuthor>
    <div v-if="!isCurrentUserAuthor" class="buttons">
      <button class="follow">{{ `+ Follow ${author.username}` }}</button>
      <button class="follow follow_green">
        <svg class="follow__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
              d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
        </svg>
        <span class="follow__text">{{`Favorite Article (${favoritesCount})`}}</span>
      </button>
    </div>

  </div>
</template>

<style scoped>
.follow {
  display: flex;
  align-items: center;
}
.follow-wrap {
  display: flex;
  align-items: center;
}

.follow-wrap_center {
  justify-content: center;
}

.follow {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #979797;
  border-radius: 5px;
  margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  height: fit-content;
  color: #979797;
  cursor: pointer;
}

.follow:last-child {
  margin-right: 0;
}
.follow__icon {
  width: 15px;
  margin-right: 10px;
  fill: #44964a;
}

.follow_green {
  border-color: #44964a;
  color: #44964a;
}

.buttons {
  margin-left: 10px;
  display: flex;
}
</style>