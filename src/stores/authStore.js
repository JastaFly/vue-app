import { defineStore } from 'pinia'
import { ref} from 'vue'
import {registration as registrationApi, login as loginApi, getCurrentUser as getCurrentUserApi} from '@/api/auth'
import { useRouter } from 'vue-router'
import {setItem} from "@/helpers/persistenceStorage";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    let isSubmit = ref(false)
    let currentUser = ref({})
    let isLoggedIn = ref(null)
    let validationErrors = ref({})
    let isLoading = ref(false)


    function registrationStart() {
        isSubmit.value = true
        validationErrors.value = null
    }

    function registrationSuccess(newUser) {
        auth(newUser)
        router.push('/')
    }

    function auth(authUser) {
        isSubmit.value = false
        currentUser.value = authUser
        isLoggedIn.value = true
    }
    function registrationFail(error) {
        isSubmit.value = false
        validationErrors.value = error
    }

    function loginStart() {
        registrationStart()
    }

    function loginSuccess(user) {
        auth(user)
    }

    function loginFail(error) {
        registrationFail(error)
    }

    function getCurrentUserStart() {
        isLoading.value = true
    }

    function getCurrentUserSuccess(loadUser) {
        isLoading.value = false
        currentUser.value = loadUser
        isLoggedIn.value = true
    }

    function getCurrentUserFailure() {
        isLoading.value = false
        isLoggedIn.value = false
        currentUser.value = {}
    }

    function login(authData) {
        loginStart()
        loginApi(authData).then((response) => {


            response.json().then((result) => {


                if(result.user) {

                    getCurrentUserSuccess(result.user)
                }


            }).catch(() => {
                getCurrentUserFailure()

            })

        })
    }

    function getCurrentUser() {
        getCurrentUserStart()
        getCurrentUserApi().then((response) => {


            response.json().then((result) => {


                if(result.user) {
                    setItem('accessToken', result.user.token)
                    loginSuccess(result.user)
                }

                if(result.errors) {
                    validationErrors.value = result.errors
                }

            }).catch((error) => {
                loginFail(error)

            })

        })
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
        validationErrors,
        login,
        getCurrentUser
    }
})