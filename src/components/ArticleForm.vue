<script setup>
import {ref} from "vue";
import {useCreateArticleStore} from "@/stores/crateArticleStore";
import ValidationErrors from "@/components/ValidationErrors.vue";
import {storeToRefs} from "pinia";

let title = ref('')
let about = ref('')
let text = ref('')
let tags = ref('')

const createArticleStore = useCreateArticleStore()
const {validationErrors} = storeToRefs(createArticleStore)

function onSubmit() {
  createArticleStore.createArticle({
    id: 1,
    title: title.value,
    description: about.value,
    body: text.value,
    tags: tags.value.split(' ')
  })
}
</script>

<template>
  <ValidationErrors :errors="validationErrors"></ValidationErrors>
  <form name="article" action="" class="article-form" @submit.prevent="onSubmit">
    <input type="text" name="title" placeholder="Article Title" v-model="title">
    <input type="text" name="about" placeholder="What's this article about?" v-model="about">
    <textarea name="text" placeholder="Write your article (in markdown)" v-model="text"></textarea>
    <input type="text" name="tags" placeholder="Enter tags" v-model="tags">
    <input type="submit" value="Publish Article">
  </form>
</template>

<style scoped>
.article-form {
  width: 100%;
}

textarea {
  resize: none;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: 150px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Exo 2";
  font-size: 18px;
}
</style>