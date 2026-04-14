<script setup>
import {addToFavorites, removeFromFavorites} from "@/api/favorites";
import { ref } from 'vue';

const props = defineProps({
  favoriteCount: {
    type: Number,
    required: true
  },
  articleSlug: {
    type: String,
    required: true
  },
  isFavorited: {
    type: Boolean,
    required: true
  }
})

let likeCount = ref(props.favoriteCount)
let isFavorite = ref(props.isFavorited)

function like() {
  if(isFavorite.value) {

removeFromFavorites(props.articleSlug)

    isFavorite.value = false

    if(likeCount.value > 0) {
      likeCount.value--
    }
  } else {
addToFavorites(props.articleSlug)

isFavorite.value = true
    likeCount.value++
  }
}
</script>

<template>
  <div class="like" :class="{'like_active': isFavorite}" @click="like">
    <svg xmlns="http://www.w3.org/2000/svg" class="like__icon" viewBox="0 0 24 24">
      <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
    </svg>
    <span class="like__count">{{likeCount}}</span>
  </div>
</template>

<style scoped>
.like {
  border: 1px solid #5CB85C;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  height: fit-content;
}


.like__icon {
  width: 20px;
  padding-right: 10px;
}

.like__icon path {
  fill:  #5CB85C;
}

.like__count {
  color: #5CB85C;
}

.like_active {
  background-color: #5CB85C;
}

.like_active path {
  fill:  white;
}

.like_active .like__count {
  color: white;
}
</style>