<script setup>
import ArticleForm from "@/components/ArticleForm.vue";
import {useCreateArticleStore} from "@/stores/createArticleStore";

const createArticleStore = useCreateArticleStore()

function createArticle(article) {
  createArticleStore.createArticle(article)
}
</script>

<template>
<h1>Create Article</h1>
  <ArticleForm @submit="createArticle"></ArticleForm>
</template>

<style scoped>

</style>