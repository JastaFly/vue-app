<script setup>

</script>

<template>
<header>
  <a href="/" class="logo">conduit</a>
  <menu>
    <a class="link" href="">Home</a>
    <router-link  class="link" to="/login" active-class="link__active">Sing in</router-link>
    <router-link class="link" to="/registration" active-class="link__active">Sing up</router-link>
  </menu>
</header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 200px;
  padding-right: 200px;
}

.logo {
  color: #5CB85C;
  font-size: 32px;
  text-decoration: none;
  font-weight: bold;
}

.link {
  color: #b9bab9;
}

.link__active {
  color: #333333;
}

menu {
  width: 15%;
  display: flex;
  justify-content: space-between;
}
</style>