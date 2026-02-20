<script setup>
import {useFeedStore} from "@/stores/feedStore";
import {storeToRefs} from "pinia";
import AppLoading from "@/components/AppLoading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import ArticleAuthor from "@/components/ArticleAuthor.vue";
import ArticleTags from "@/components/ArticleTags.vue";

const feedStore = useFeedStore()
const {feeds, isLoading, feedError} = storeToRefs(feedStore)

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

feedStore.getFeed(props.url)



</script>

<template>
<AppLoading v-if="isLoading"></AppLoading>
  <ErrorMessage v-if="feedError" :error="feedError"></ErrorMessage>
  <div class="feeds" v-if="feeds" >
    <div class="feed" v-for="(article, index) in feeds.articles" :key="index">
      <div class="feed__top">
        <ArticleAuthor :author="article.author" :source-date="article.createdAt"></ArticleAuthor>
        <div class="like">
          <svg xmlns="http://www.w3.org/2000/svg" class="like__icon" viewBox="0 0 24 24">
            <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
          </svg>
          <span class="like__count">{{article.favoritesCount}}</span>
        </div>
      </div>
      <p class="feed__title">{{article.title}}</p>
      <p class="feed__description">{{article.description}}</p>
      <div class="feed__footer">
        <router-link :to="`article/${article.slug}/`" class="feed__link">Read more...</router-link>
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

.like {
  border: 1px solid #5CB85C;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  height: fit-content;
}
.like__icon {
  width: 20px;
  padding-right: 10px;
}

.like__icon path {
  fill:  #5CB85C;
}

.like__count {
  color: #5CB85C;
}
</style>