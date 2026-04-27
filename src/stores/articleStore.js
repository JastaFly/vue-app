import { defineStore } from 'pinia'
import {ref} from "vue";
import {getArticleRequest} from "@/api/article";
import {addToFavorites, removeFromFavorites} from "@/api/favorites";


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

    function like() {
        if(article.value.favorited) {
            removeFromFavorites(article.value.slug)
            article.value.favorited = false

            if(article.value.favoritesCount) {
                article.value.favoritesCount--
            }
        } else {
            addToFavorites(article.value.slug)
            article.value.favorited = true
            article.value.favoritesCount++
        }
    }


    return {
        getArticle,
        article,
        articleError,
        isLoading,
        like
    }
})