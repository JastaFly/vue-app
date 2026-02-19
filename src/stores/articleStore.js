import { defineStore } from 'pinia'
import {ref} from "vue";
import getArticleRequest from "@/api/article";


export const useArticleStore = defineStore('article', () => {
    let article = ref(null)
    let isLoading = ref(false)
    let articleError = ref(null)


    function articleStart() {
        isLoading.value = true
        article.value = null
    }

    function articleSuccess(articleData) {
        isLoading.value = false
        article.value = articleData

    }

    function articleFailure(error) {
        isLoading.value = false
        articleError.value = error

    }

    function getArticle(slug) {
        articleStart()
        getArticleRequest(slug).then((response) => {
            if(response.article) {
                console.log(response.article)
                articleSuccess(response.article)
            } else {
                console.log(response) 
                articleFailure(response)
            }


        })

    }


    return {
        getArticle,
        article,
        articleError,
        isLoading,
    }
})