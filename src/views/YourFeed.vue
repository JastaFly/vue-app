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

let url = 'articles/feed'
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
main {
  padding-top: 30px;
}
.tab {
  display: flex;
}

.tab__item {
  color: #b9bab9;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
}

.tab__item_active {
  color: #5CB85C;
  border-bottom: 2px #5CB85C solid;
}


</style>