import { defineStore } from 'pinia'
import { ref} from 'vue'
import {registration as registrationApi, login as loginApi, getCurrentUser as getCurrentUserApi, updateCurrentUser as  updateCurrentUserRequest} from '@/api/auth'
import { useRouter } from 'vue-router'
import {setItem, getItem} from "@/helpers/persistenceStorage";
import {useSettingsStore} from "@/stores/settingsStore";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const settingsStore = useSettingsStore()
    let isSubmit = ref(false)
    let currentUser = ref({})
    let isLoggedIn = ref(false)
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
        setItem('accessToken', authUser.token)
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

function loginSuccess(currentUser) {
    auth(currentUser)
    router.push('/')
}
    function loginFail(error) {
        registrationFail(error)
    }

    function getCurrentUserStart() {
        isLoading.value = true
    }

function getCurrentUserSuccess(currentUser) {
    auth(currentUser)

}

    function getCurrentUserFailure() {
        isLoading.value = false
        isLoggedIn.value = false
        currentUser.value = {}
    }

    function updateCurrentUserSuccess(newUser) {
        currentUser.value = newUser
    }

    function logout() {
        currentUser.value = null
        isLoggedIn.value = false
        setItem('accessToken', '')
        router.push('/')
    }

    function login(authData) {
        loginStart()
        loginApi(authData).then((result) => {
            console.log(result)


                if(result.user) {
                    loginSuccess(result.user)
                }


            }).catch(() => {
                getCurrentUserFailure()

            })

    }

    function getCurrentUser() {
        if(getItem('accessToken')) {
            getCurrentUserStart()
            getCurrentUserApi().then((result) => {


                if(result.user) {
                    getCurrentUserSuccess(result.user)



                }

                if(result.errors) {
                    validationErrors.value = result.errors
                }

            }).catch((error) => {
                loginFail(error)

            })
        }


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
    function updateCurrentUser(newUserData) {
        settingsStore.changeSettingsStart()
        updateCurrentUserRequest(newUserData).then((result) => {

            if(result.user) {
settingsStore.changeSettingsSuccess()
                updateCurrentUserSuccess(result.user)
            } else {
                settingsStore.changeSettingsFailure(result.errors)
            }




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
        getCurrentUser,
        updateCurrentUser,
        logout
    }
})