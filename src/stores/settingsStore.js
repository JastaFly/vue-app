import { defineStore } from 'pinia'
import {ref} from "vue";


export const useSettingsStore = defineStore('settingsStore', () => {
    let isSubmit = ref(false)
    let validationErrors = ref(null)

  function changeSettingsStart() {
isSubmit.value = true
        validationErrors.value = null
    }

    function changeSettingsSuccess() {
        isSubmit.value = false
    }

    function changeSettingsFailure(errors) {
        isSubmit.value = false
        validationErrors.value = errors
    }

    return {
validationErrors,
        isSubmit,
        changeSettingsFailure,
        changeSettingsStart,
        changeSettingsSuccess
    }
})