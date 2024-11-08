<template>
    <div class="blog-container" :class="{ 'dark-mode': isDarkMode }">
        <div class="header">
            <nav>
                    <RouterLink class="nav-link" to="/blog/get-all">Post</RouterLink>
                    <RouterLink class="nav-link" to="/blog/course">Course</RouterLink>
            </nav>
        </div>
        <RouterView></RouterView>
        <div class="content">
            <h1>Hello my blog</h1>
            <p>I put some of my posts in series so you can read it with more context 🥰</p>
            <div class="background-section">
                <img class="background-image" src="../assets/background.jpg" alt="Background Image">
            </div>
            <div class="body-container">
                <h1>Chào mừng đến với Blog của tôi!</h1>
                <div>Nơi chia sẻ những điều thú vị và bổ ích.</div>
            </div>
            <h1>Follow me at @NhatChoTym</h1>
        </div> 
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import useDarkMode from '../composables/userDarkMode';

const { isDarkMode } = useDarkMode();
</script>

<style scoped>
nav {
    height: 50px;
    background-color: #333;
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
  }
  
  .nav-link {
    padding: 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s, font-size 0.3s;
    color: #ffffff;

  }
  .nav-link:hover {
    background-color: aqua;
    font-size: 20px;
    color: black;
  }
  
  .dark-mode nav {
    background-color: aquamarine;
  }
  
  .dark-mode .nav-link {
    color: black;
  }
  
  .dark-mode .nav-link:hover {
    background-color:  #ffffff;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .body-container{
    text-align: center;
    width: 50%;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px 5px #888888;
    border-radius: 10px;
  }
</style>