<script setup>
import {storeToRefs} from "pinia";
import {useTagsStore} from "@/stores/tagsStore";
import {onMounted} from "vue";
import AppLoading from "@/components/AppLoading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const tagsStore = useTagsStore()
const {tags, tagsError, isLoading} = storeToRefs(tagsStore)

onMounted(() => {
  tagsStore.getTags()
})
setTimeout(() => {
  console.log(tags.value)
  console.log(isLoading)
  console.log(tagsError)
}, 2000)
</script>

<template>
  <AppLoading v-if="isLoading"></AppLoading>
  <ErrorMessage  v-if="tagsError" :error="tagsError"></ErrorMessage>
  <div v-if="tags" class="tags">
    <router-link  class="tag" v-for="(tag, index) in tags.tags" :key="index" :to="{name: 'tag', params: {slug: tag}}">
      {{tag}}
    </router-link>
  </div>
</template>

<style scoped>
.tag {
  background-color: #757f87;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin-right: 10px;
  color: white;
}
</style>