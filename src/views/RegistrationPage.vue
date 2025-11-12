<script setup>
import { useStore } from '@/stores/store'

const myStore = useStore()
function onSubmit() {
  console.log('Форма отправлена!')
  myStore.increment()
  console.log(myStore.count)
}
</script>

<template>
  <h2>Sing up</h2>
  <h3>{{myStore.count}}</h3>
  <a class="green-link" href="">Have an account?</a>
  <form action="" @submit.prevent="onSubmit">
    <input name="name" type="text" placeholder="Username">
    <input name="email" type="email" placeholder="Email">
    <input name="pass" type="password" placeholder="Password">
    <input type="submit" value="Sing up">
  </form>
</template>

<style scoped>

</style>