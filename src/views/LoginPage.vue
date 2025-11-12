<script setup>

</script>

<template>
  <h2>Login</h2>
  <a class="green-link" href="">Have an account?</a>
  <form action="" @submit.prevent="onSubmit">
    <input name="email" type="email" placeholder="Email">
    <input name="pass" type="password" placeholder="Password">
    <input type="submit" value="Login">
  </form>
</template>

<style scoped>

</style>