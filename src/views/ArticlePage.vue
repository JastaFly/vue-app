<script setup>
import {onMounted} from "vue";
import {useArticleStore} from "@/stores/articleStore";
import FollowBlock from "@/components/FollowBlock.vue";
import {useRoute} from 'vue-router'
import {storeToRefs} from "pinia";
import AppLoading from "@/components/AppLoading.vue";
import ArticleComments from "@/components/ArticleComments.vue";
import ArticleTags from "@/components/ArticleTags.vue";



const articleStore = useArticleStore()

const {article, isLoading} = storeToRefs(articleStore)



onMounted(() => {
  const route = useRoute()

  articleStore.getArticle(route.params.slug)

})

</script>

<template>
  <AppLoading v-if="isLoading"></AppLoading>
  <article v-if="article">
    <div  class="banner banner_dark">
      <h1>{{ article.title }}</h1>
      <FollowBlock :favorites-count="article.favoritesCount" :source-date="article.createdAt" :author="article.author" :slug="article.slug" :view-mode="'dark-bg'" :favorited="article.favorited"></FollowBlock>
    </div>
    <p v-if="article" class="article">{{article.body}}</p>
    <ArticleTags :tags="article.tagList"></ArticleTags>
    <hr>
    <FollowBlock :favorites-count="article.favoritesCount" :source-date="article.createdAt" :author="article.author" :view-mode="'center'" :favorited="article.favorited"></FollowBlock>
<ArticleComments></ArticleComments>

  </article>

</template>

<style scoped>
h1 {
  color: white;
}





textarea {
  width: 100%;
  resize: none;
  border-color: #b9bab9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Exo 2";
}

input {
  font-size: 14px;
}
.banner_dark {

  background-color: #2d2d2d;
}




.article {
  margin-top: 50px;
  margin-bottom: 30px;
}


</style>