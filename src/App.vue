<template>
  <div id="app">
      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/user">User Management</RouterLink>
        <RouterLink class="nav-link" to="/calculator">Calculator</RouterLink>
        <RouterLink class="nav-link" to="/product">Product</RouterLink>

      </nav>
      <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
nav{
  height: 50px;
  width: auto;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
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