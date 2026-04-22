<script setup>
import {useFeedStore} from "@/stores/feedStore";
import {storeToRefs} from "pinia";
import AppLoading from "@/components/AppLoading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import ArticleAuthor from "@/components/ArticleAuthor.vue";
import ArticleTags from "@/components/ArticleTags.vue";
import AddToFavorite from "@/components/AddToFavorite.vue";
import {watch} from "vue";

const feedStore = useFeedStore()
const {feeds, isLoading, feedError} = storeToRefs(feedStore)

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

feedStore.getFeed(props.url)

watch(() => {
  return props.url
}, (newUrl) => {
  feedStore.getFeed(newUrl)
})

</script>

<template>
<AppLoading v-if="isLoading"></AppLoading>
  <ErrorMessage v-if="feedError" :error="feedError"></ErrorMessage>
  <div class="feeds" v-if="feeds" >
    <div class="feed" v-for="(article, index) in feeds.articles" :key="index">
      <div class="feed__top">
        <ArticleAuthor :author="article.author" :source-date="article.createdAt"></ArticleAuthor>
<AddToFavorite :favorite-count="article.favoritesCount" :is-favorited="article.favorited" :article-slug="article.slug"></AddToFavorite>
      </div>
      <p class="feed__title">{{article.title}}</p>
      <p class="feed__description">{{article.description}}</p>
      <div class="feed__footer">
        <router-link :to="`articles/${article.slug}/`" class="feed__link">Read more...</router-link>
        <ArticleTags :tags="article.tagList"></ArticleTags>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feed {
  border-bottom: 1px solid #b9bab9;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.feed__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feed__title {
  font-size: 24px;
  font-weight: bold;
}

.feed__description {
  color: #b9bab9;
}

.feed__link {
  color: #b9bab9;
  font-size: 14px;
  text-decoration: none;
}

.feed__link:hover {
  text-decoration: underline;
}

.feed__footer {
  display: flex;
  justify-content: space-between;
}


</style>