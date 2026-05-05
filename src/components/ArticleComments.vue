<script setup>
import UserAva from "@/components/UserAva.vue";
import {formatDate} from "@/helpers/utils";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useCommentsStore} from "@/stores/commentsStore";
import {useArticleStore} from "@/stores/articleStore";

const commentsStore = useCommentsStore()
const articleStore = useArticleStore()
const {comments} = storeToRefs(commentsStore)
const {article} = storeToRefs(articleStore)
let commentTxt = ref('')
</script>

<template>
  <div class="comments-wrap">
    <form action="" name="comment" @submit.prevent="commentsStore.createComment(article.slug, commentTxt)">
      <textarea v-model="commentTxt" required placeholder="Write a comment.."></textarea>
      <div class="footer-form">
        <UserAva></UserAva>
        <input type="submit" value="Post Comment">
      </div>
    </form>
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <p class="comment__txt">{{comment.body}}</p>
      <div class="comment__footer">
        <div class="comment__author">
          <img :src="comment.author.image" :alt="`Аватарка ${comment.author.username}`" class="comment__ava">
          <span class="comment__name">{{comment.author.username}}</span>
          <div class="comment__date">{{formatDate(comment.createdAt)}}</div>
        </div>
        <svg @click="commentsStore.deleteComment(article.slug, comment.id)" class="comment__delete" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
}
.footer-form {
  display: flex;
  align-items: center;

  padding: 10px;
}

.comments-wrap {
  width: 70%;
  margin: 0 auto;
}


.comment {
  border: 1px #b9bab9 solid;
  border-radius: 5px;
  background-color: #f3f3f3;

  margin-top: 10px;
}


.comment__footer {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.comment__txt {
  background-color: white;
  margin-top: 0;
  margin-bottom: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.comment__author {
  display: flex;
  align-items: center;
}

.comment__ava {
  width: 30px;
  border-radius: 50px;
  margin-right: 10px;
}

.comment__name {
  color: #44964a;
  margin-right: 10px;
}

.comment__date {
  color: #b9bab9;
}

.comment__delete {
  width: 20px;
  cursor: pointer;
}

.comment__delete path {
  fill: #909090;
}
</style>