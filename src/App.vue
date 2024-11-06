<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <nav>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/user">User Management</RouterLink>
      <RouterLink class="nav-link" to="/calculator">Calculator</RouterLink>
      <RouterLink class="nav-link" to="/product">Product</RouterLink>
      <RouterLink class="nav-link" to="/todo-list">To-do List</RouterLink>
      <RouterLink class="nav-link" to="/weather">Weather Forecast</RouterLink>
      <a class="nav-link" @click="toggleDarkMode">
        Dark Mode
      </a>
    </nav>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import useDarkMode from './composables/userDarkMode';

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<style>
nav {
  height: 50px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
}

.nav-link {
  padding: 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.3s;
}

.nav-link:hover {
  background-color: aqua;
  font-size: 20px;
}

.dark-mode nav {
  background-color: #333;
}

.dark-mode .nav-link {
  color: #ffffff;
}

.dark-mode .nav-link:hover {
  background-color: #555;
}
</style>
