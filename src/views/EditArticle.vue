<script setup>
import ArticleForm from "@/components/ArticleForm.vue";
import AppLoading from "@/components/AppLoading.vue";
import {useEditArticleStore} from "@/stores/editArticleStore";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import {useRoute} from "vue-router";


const editArticleStore = useEditArticleStore()
const {isLoading, article} = storeToRefs(editArticleStore)
const route = useRoute()
const articleSlug = route.params.slug;

onMounted(() => {
  editArticleStore.getArticle(articleSlug)



})

function updateArticle(articleData) {
  editArticleStore.updateArticle(articleSlug, articleData)
}

</script>

<template>
  <h1>Update Article</h1>
<AppLoading v-if="isLoading"></AppLoading>
  <ArticleForm v-else :article="article" @submit="updateArticle"></ArticleForm>
</template>

<style scoped>

</style>