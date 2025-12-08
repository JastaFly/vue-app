import { defineStore } from 'pinia'
import { ref} from 'vue'
import {registration as registrationApi} from '@/api/auth'
import { useRouter } from 'vue-router'
import {setItem} from "@/helpers/persistenceStorage";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    let isSubmit = ref(false)
    let currentUser = ref(null)
    let isLoggedIn = ref(null)
    let validationErrors = ref({})


    function registrationStart() {
        isSubmit.value = true
        validationErrors.value = null
    }

    function registrationSuccess(newUser) {
        isSubmit.value = false
        currentUser.value = newUser
        isLoggedIn.value = true
        router.push('/')
    }
    function registrationFail(error) {
        isSubmit.value = false
        validationErrors.value = error
    }

    function registration(registrationData) {
        registrationStart()
        registrationApi(registrationData).then((response) => {


            response.json().then((result) => {


                if(result.user) {
                    setItem('accessToken', result.user.token)
                    registrationSuccess(result.user)
                }

                if(result.errors) {
                    validationErrors.value = result.errors
                }

            }).catch((error) => {
                registrationFail(error)
                console.log(error)
            })

        })
    }

    return {
        registrationSuccess,
        registrationStart,
        registrationFail,
        isSubmit,
        registration,
        currentUser,
        isLoggedIn,
        validationErrors
    }
})