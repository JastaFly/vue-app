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

h2 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 5px;
}

.green-link {
  color: #5CB85C;
  width: 100%;
  text-align: center;
  display: block;
}

form {
  width: 25%;
  margin: 0 auto;
  margin-top: 20px;
}

input {
  font-family: "Exo 2";
  display: block;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #d9d9d9;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 18px;
}

input[type=submit] {
  background-color: #5CB85C;
  width: fit-content;
  color: white;
  margin-left: auto;
  transition: 0.5s;
  cursor: pointer;
}

input[disabled] {
  background-color: #95D195;
  cursor: not-allowed;
}

input[type=submit]:hover {
  background-color: #449d44;
}
</style>
