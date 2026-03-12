import { defineStore } from 'pinia'
import {ref} from "vue";
import {createArticleRequest} from "@/api/article";
import {useRouter} from "vue-router";


export const useCreateArticleStore = defineStore('createArticle', () => {
    let isSubmit = ref(false)
    let validationErrors = ref({})

    const router = useRouter()

    function createArticleStart() {
        isSubmit.value = true
    }

    function createArticleSuccess(slug) {
        isSubmit.value = false
        console.log(slug)
        console.log(`/articles/${slug}`)
        router.push(`/articles/${slug}`)
    }

    function createArticleFailure(errors) {
        isSubmit.value = false
        validationErrors.value = errors
    }

    function createArticle(articleData) {
        return new Promise((resolve) => {
            createArticleStart()
            createArticleRequest(articleData).then((newArticleData) => {
                createArticleSuccess()

                if(newArticleData.article) {
createArticleSuccess(newArticleData.article.slug)
                } else {
                    createArticleFailure(newArticleData.errors)
                }

                resolve(newArticleData)
            })
        })
    }

    return {
isSubmit,
        validationErrors,
        createArticle
    }
})