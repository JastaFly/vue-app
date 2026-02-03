import { defineStore } from 'pinia'
import {ref} from "vue";
import getPopularTags from "@/api/tags";


export const useTagsStore = defineStore('tags', () => {
    let tags = ref(null)
    let isLoading = ref(false)
    let tagsError = ref(null)


    function tagStart() {
        isLoading.value = true
        tags.value = null
    }

    function tagSuccess(feedData) {
        isLoading.value = false
        tags.value = feedData

    }

    function tagFailure(error) {
        isLoading.value = false
        tagsError.value = error

    }

    function getTags() {
        tagStart()
        getPopularTags().then((response) => {
            response.json().then((result) => {

                tagSuccess(result)



            }).catch((error) => {
                tagFailure(error)
            })
        })

    }


    return {
        getTags,
        tags,
        tagsError,
        isLoading,
    }
})