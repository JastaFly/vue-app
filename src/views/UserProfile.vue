<script setup>
import UserFeedMenu from "@/components/UserFeedMenu.vue";
import FeedCommon from "@/components/FeedCommon.vue";
import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import {useUserProfile} from "@/stores/userProfile";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/authStore";

const userProfileStore = useUserProfile()
const {isLoading, userProfile} = storeToRefs(userProfileStore)
const authStore = useAuthStore()
const {currentUser} = storeToRefs(authStore)
const route = useRoute()
const isCurrent = computed(() => {
  if(!currentUser.value || !userProfile.value) {
    return false
  }

  return currentUser.value.username === userProfile.value.username
})
const requestUrl = computed(() => {
  const isFavorites = route.path.includes('favorites')

  let requestUrl = `/articles?author=${route.params.slug}`

  if(isFavorites) {

    requestUrl = `/articles?favorited=${route.params.slug}`
  }

  return requestUrl
})

watch(() => {
  return route.params.slug
}, (newUserSlug) => {
  userProfileStore.getUserProfile(newUserSlug)
})

onMounted(() => {
  console.log(route.path)

  userProfileStore.getUserProfile(route.params.slug)

  setTimeout(() => {
    console.log(userProfile.value)
  }, 3000)
})
</script>

<template>
<div class="user-profile" v-if="isLoading">
  <div class="banner banner_light">
    <div class="user">
      <img :src="userProfile.image" :alt="`Аватар пользователя ${userProfile.username}`" :title="`Аватар пользователя ${userProfile.username}`" class="user__ava">
      <p class="user__name">{{userProfile.username}}</p>
      <p class="user__biography">
        {{userProfile.bio}}
      </p>
    </div>
    <button class="follow follow_right" v-if="isCurrent">

      <svg class="follow__icon follow__icon_gray" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
      <router-link  :to="'/settings'" class="follow__text">Edit Profile Settings</router-link>
    </button>
  </div>
  <UserFeedMenu :user="userProfile.username"></UserFeedMenu>
  <FeedCommon :url="requestUrl"></FeedCommon>
</div>
</template>

<style scoped>
.banner_light {
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

.user {
  margin: 0 auto;
  width: 500px;
  margin-bottom: 20px;
}

.user__name {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.user__ava {
  width: 100px;
  border-radius: 50px;
  margin: 0 auto;
  display: block;
}

.user__biography {
  color: #c0c0c0;
}

.follow_right {
  margin-left: auto;
  margin-right: 0;
}
</style>