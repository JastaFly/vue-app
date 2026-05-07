import {defineStore} from 'pinia'
import {ref} from 'vue'
import getUserProfileRequest from '@/api/userProfile'
import {followToAuthor, unfollowFromAuthor} from '@/api/favorites'


export const useUserProfile = defineStore('userProfile', () => {
    let userProfile = ref(null)
    let isLoading = ref(false)
    let userProfileError = ref(null)

    function getUserProfileStart() {
        isLoading.value = false
        userProfile.value = null
    }

    function getUserProfileSuccess(userProfileData) {
        isLoading.value = true
        userProfile.value = userProfileData
    }

    function getUserProfileFailure(error) {
        isLoading.value = false
        userProfileError.value = error
    }

    function getUserProfile(slug) {
        getUserProfileStart()
        getUserProfileRequest(slug).then((result) => {

            if (result.profile) {
                getUserProfileSuccess(result.profile)
            } else {
                getUserProfileFailure(result.error)
            }
        })
    }

    function follow(user) {
        if (userProfile.value.following) {
            unfollowFromAuthor(user).then(() => {
                userProfile.value.following = false
            })
        } else {
            followToAuthor(user).then(() => {
                userProfile.value.following = true
            })
        }
    }

    return {
        getUserProfile,
        userProfile,
        isLoading,
        follow
    }
})