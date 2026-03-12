<script setup>
import ArticleAuthor from "@/components/ArticleAuthor.vue";
import {useAuthStore} from "@/stores/authStore";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import {deleteArticleRequest} from "@/api/article";
import {useRouter} from "vue-router";

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
  },
  slug: {
    type: String,
    required: true
  }
})

const authStore = useAuthStore()
const {currentUser} = storeToRefs(authStore)
const router = useRouter()
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

function deleteArticle() {
 deleteArticleRequest(props.slug).then((result) => {
   if(result.ok) {

     router.push('/')
   }
 })


}
</script>

<template>
  <div :class="`follow-wrap ${viewModeCssClass}`">
    <ArticleAuthor :author="author" :source-date="articleDate" :view-mode="viewMode"></ArticleAuthor>
    <div v-if="isCurrentUserAuthor" class="buttons">
      <button class="follow">
        <svg  class="follow__icon follow__icon_gray" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-12.023-7.083c-1.334 3.916-1.48 4.232-1.48 4.587 0 .527.46.749.749.749.352 0 .668-.137 4.574-1.493zm1.06-1.061 3.846 3.846 8.824-8.814c.195-.195.293-.451.293-.707 0-.255-.098-.511-.293-.706-.692-.691-1.742-1.741-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fill-rule="nonzero"/></svg>
        <span class="follow__text">Edit Article</span>
      </button>
      <button class="follow follow_red">
        <svg class="follow__icon follow__icon_red" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
        <span @click="deleteArticle" class="follow__text follow__text_red">Delete Article</span>
      </button>
    </div>
    <div v-else class="buttons">
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

.follow_red {
  border-color: #854241;
  color: #854241;
}

.follow:last-child {
  margin-right: 0;
}
.follow__icon {
  width: 15px;
  margin-right: 5px;
  fill: #44964a;
}

.follow__icon_gray {
  fill: #979797;
}

.follow__icon_red {
  fill: #854241;
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