<template>
  <div id="app">
      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/user">User Management</RouterLink>
      </nav>
      <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
nav{
  height: 100%;
  width: auto;
  
}
.nav-link{
  gap: 5px;
  padding: 20px;
  text-decoration: none
}
.nav-link:hover{
  background-color: aqua;
  font-size: 20px;
}
</style>