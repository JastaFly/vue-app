<script setup>
import Feed from "@/components/FeedCommon.vue"
import Pagination from "@/components/AppPagination.vue";
import {useFeedStore} from "@/stores/feedStore";
import {storeToRefs} from "pinia";
import {paginationLimit} from "@/helpers/vars";
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import PopularTags from "@/components/PopularTags.vue";
import AppBanner from "@/components/AppBanner.vue";
import FeedMenu from "@/components/FeedMenu.vue";


const feedStore = useFeedStore()
const {feedsTotal} = storeToRefs(feedStore)
const route = useRoute()

let url = '/articles'
let currentPage = computed(() => {
  return Number(route.query.page || '1')
})
let baseUrl = computed(() => {
  return route.path
})
let offset = computed(() => {
  return currentPage.value * paginationLimit - paginationLimit
})
watch(currentPage, () => {



  feedStore.getFeed(`${url}?limit=${paginationLimit}&offset=${offset.value}`)
})
</script>

<template>
  <AppBanner></AppBanner>
  <main>
    <div class="feeds-wrap">

<FeedMenu></FeedMenu>
      <Feed :url="url"></Feed>
      <Pagination :limit="paginationLimit" :total="feedsTotal" :current-page="currentPage" :url="baseUrl"></Pagination>
    </div>
    <PopularTags></PopularTags>
  </main>

</template>

<style scoped>





</style>