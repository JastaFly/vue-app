import { defineStore } from 'pinia'
import {createCommentRequest, deleteCommentRequest, getCommentsRequest} from "@/api/comments";
import {ref} from "vue";




export const useCommentsStore = defineStore('comments', () => {
let comments = ref([])
function createComment(articleSlug, comment) {
    let commentData = {
        comment: {
            body: comment
        }
    }
    createCommentRequest(articleSlug, commentData).then(result => {
        comments.value.push(result.comment)
    })
}

function getComments(article, ) {
    return  getCommentsRequest(article).then(result => {
        console.log(result)
        comments.value = result.comments
    })
}

function deleteComment(article, commentId) {
    deleteCommentRequest(article, commentId).then(() => {
        comments.value = comments.value.filter(comment => comment.id !== commentId)
    })
}


    return {
    createComment,
        getComments,
        comments,
        deleteComment
    }
})