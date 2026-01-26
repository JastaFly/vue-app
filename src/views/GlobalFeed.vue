<script setup>
import Feed from "@/components/FeedCommon.vue"
import Pagination from "@/components/AppPagination.vue";
import {useFeedStore} from "@/stores/feedStore";
import {storeToRefs} from "pinia";
import {paginationLimit} from "@/helpers/vars";
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import queryString from 'query-string'


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

  let queryURL = queryString.stringify({
    limit: paginationLimit,
    offset: offset.value,
  })

  console.log(`${url}?${queryURL}`)

  feedStore.getFeed(`${url}?${queryURL}`)
})
</script>

<template>
  <div class="tab">
    <p class="tab__item tab__item_active">Your feed</p>
    <p class="tab__item">Global Feed</p>
  </div>

<Feed :url="url"></Feed>
  <Pagination :limit="paginationLimit" :total="feedsTotal" :current-page="currentPage" :url="baseUrl"></Pagination>
</template>

<style scoped>
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
}

.tab__item_active {
  color: #5CB85C;
  border-bottom: 2px #5CB85C solid;
}

</style>