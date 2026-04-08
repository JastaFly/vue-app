<script setup>
import {ref, onMounted } from "vue";
import {useCreateArticleStore} from "@/stores/createArticleStore";
import ValidationErrors from "@/components/ValidationErrors.vue";
import {storeToRefs} from "pinia";

const props = defineProps({
  article: {
    type: Object,

  }
})
let title = ref('')
let about = ref('')
let text = ref('')
let tags = ref('')

onMounted(() => {
  if (props.article) {
    title.value = props.article.title
    about.value = props.article.description
    text.value = props.article.body
    tags.value = props.article.tagList?.join(' ')
  }
})


const createArticleStore = useCreateArticleStore()
const {validationErrors} = storeToRefs(createArticleStore)
const emit = defineEmits(['submit'])

function onSubmit() {



  emit('submit', {

    title: title.value,
    description: about.value,
    body: text.value,
    tagList: tags.value.split(' ')
  });

}
</script>

<template>
  <ValidationErrors :errors="validationErrors"></ValidationErrors>
  <form name="article" action="" class="form-w-100" @submit.prevent="onSubmit">
    <input type="text" name="title" placeholder="Article Title" v-model="title">
    <input type="text" name="about" placeholder="What's this article about?" v-model="about">
    <textarea name="text" placeholder="Write your article (in markdown)" v-model="text"></textarea>
    <input type="text" name="tags" placeholder="Enter tags" v-model="tags">
    <input type="submit" value="Publish Article">
  </form>
</template>

<style scoped>



</style>