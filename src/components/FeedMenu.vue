<script setup>

</script>

<template>
  <div class="tab">
    <router-link  class="tab__item" to="/" active-class="tab__item_active">Global Feed</router-link>
    <router-link  class="tab__item" to="/feed/" active-class="tab__item_active">Your feed</router-link>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
}

.tab__item {
  color: #b9bab9;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.tab__item_active {
  color: #5CB85C;
  border-bottom: 2px #5CB85C solid;
}
</style>