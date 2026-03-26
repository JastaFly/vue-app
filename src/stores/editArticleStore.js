import { defineStore } from 'pinia'
import {ref} from "vue";
import {updateArticleRequest, getArticleRequest} from "@/api/article";
import {useRouter} from "vue-router";



export const useEditArticleStore = defineStore('editArticle', () => {
    let isSubmit = ref(false)
    let validationErrors = ref({})
    let isLoading = ref(false)
    let article = ref({})

    const router = useRouter()

    function updateArticleStart() {
        isSubmit.value = true
    }

    function updateArticleSuccess(slug) {
        isSubmit.value = false

        router.push(`/articles/${slug}`)
    }

    function updateArticleFailure(errors) {
        isSubmit.value = false
        validationErrors.value = errors
    }

    function getArticleStart() {
        isLoading.value = true
    }

    function getArticleSuccess(data) {
        isLoading.value = false
article.value = data
    }

    function getArticleFailure() {
        isLoading.value = false
    }

    function updateArticle(slug, articleData) {
        return new Promise((resolve) => {
            updateArticleStart()
            updateArticleRequest(slug, articleData).then((newArticleData) => {
                console.log(newArticleData)



                if(newArticleData.article) {
                    updateArticleSuccess(newArticleData.article.slug)
                } else {
                    updateArticleFailure(newArticleData.errors)
                }

                resolve(newArticleData)
            })
        })
    }

    function getArticle(slug) {
        return new Promise((resolve) => {
            getArticleStart()
            getArticleRequest(slug).then((result) => {

                if(result.article) {
                    getArticleSuccess(result.article)
                } else {
                    getArticleFailure(result.errors)
                }

                resolve(result)
            })
        })
    }

    return {
        isSubmit,
        validationErrors,
        updateArticle,
        getArticle,
        article,
        isLoading
    }
})