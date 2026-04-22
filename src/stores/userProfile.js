import { defineStore } from 'pinia'
import {ref} from "vue";
import getUserProfileRequest from "@/api/userProfile";


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

            if(result.profile) {
                getUserProfileSuccess(result.profile)
            } else {
                getUserProfileFailure(result.error)
            }

        })

    }


    return {
        getUserProfile,
userProfile,
        isLoading,
    }
})