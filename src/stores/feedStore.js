import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import getFeedApi from "@/api/feed";
import { useRoute } from 'vue-router'
import {paginationLimit} from "@/helpers/vars";

export const useFeedStore = defineStore('feed', () => {
    const route = useRoute()

    let feeds = ref(null)
    let isLoading = ref(false)
    let feedError = ref(null)
    let feedsTotal = ref(0)
    let currentPage = computed(() => {
        return Number(route.query.page || '1')
    })
    let baseUrl = computed(() => {
        return route.path
    })
    let offset = computed(() => {
        return currentPage.value * paginationLimit - paginationLimit
    })

    function feedStart() {
        isLoading.value = true
        feeds.value = null
    }

    function feedSuccess(feedData) {
        isLoading.value = false
        feeds.value = feedData
        console.log(2222222)
        console.log(feedData)
        feedsTotal.value = feedData.articlesCount

    }

    function feedFailure(error) {
        isLoading.value = false
        feedError.value = error

    }

    function getFeed(url) {
        feedStart()
        getFeedApi(url).then((response) => {
            response.json().then((result) => {
           
                feedSuccess(result)



            }).catch((error) => {
                feedFailure(error)
            })
        })

    }


    return {
        getFeed,
        feeds,
        feedError,
        isLoading,
        feedsTotal,
        currentPage,
        baseUrl,
        offset
    }
})