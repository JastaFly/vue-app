<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
body {
  font-family: 'Exo 2';
  margin: 0;
}
</style>
