<script setup>
import {onMounted} from "vue";
import {useArticleStore} from "@/stores/articleStore";
import FollowBlock from "@/components/FollowBlock.vue";
import {useRoute} from 'vue-router'
import {storeToRefs} from "pinia";
import AppLoading from "@/components/AppLoading.vue";
import UserAva from "@/components/UserAva.vue";

const articleStore = useArticleStore()
const {article, isLoading} = storeToRefs(articleStore)

onMounted(() => {
  const route = useRoute()

  articleStore.getArticle(route.params.slug)

})
setTimeout(() => {
  console.log(article.value)
}, 2000)
</script>

<template>
  <AppLoading v-if="isLoading"></AppLoading>
  <article v-if="article">
    <div  class="banner banner_dark">
      <h1>{{ article.title }}</h1>
      <FollowBlock :favorites-count="article.favoritesCount" :source-date="article.createdAt" :author="article.author" :view-mode="'dark-bg'"></FollowBlock>
    </div>
    <p v-if="article" class="article">{{article.body}}</p>
    <hr>
    <FollowBlock :favorites-count="article.favoritesCount" :source-date="article.createdAt" :author="article.author" :view-mode="'center'"></FollowBlock>
    <form action="" name="comment">
      <textarea placeholder="Write a comment.."></textarea>
      <div class="footer-form">
        <UserAva></UserAva>
        <input type="submit" value="Post Comment">
      </div>
    </form>
  </article>

</template>

<style scoped>
h1 {
  color: white;
}

hr {
  margin-bottom: 30px;
}

form {
  width: 70%;
  background-color: #f3f3f3;
  border-radius: 5px;
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

.footer-form {
  display: flex;
  align-items: center;

  padding: 10px;
}


.article {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>