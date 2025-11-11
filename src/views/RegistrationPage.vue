<script setup>
function onSubmit() {
  console.log('Форма отправлена!')
}
</script>

<template>
  <h2>Sing up</h2>
  <a href="">Have an account?</a>
  <form action="" @submit.prevent="onSubmit">
    <input name="name" type="text" placeholder="Username">
    <input name="email" type="email" placeholder="Email">
    <input name="pass" type="password" placeholder="Password">
    <input type="submit" value="Sing up">
  </form>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 5px;
}

a {
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

input[type=submit]:hover {
  background-color: #449d44;
}
</style>