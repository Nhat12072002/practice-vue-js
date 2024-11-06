<template>
    <div class="home-container" :class="{'dark-mode': isDarkMode}">
        <h1>Trang chủ</h1>
        <div class="btn-route">
            <button class="btn-home" @click="route.push('/product')">Xem sản phẩm</button>
            <button  class="btn-home">Đăng ký</button>
            <button  class="btn-home">Đăng nhập</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useDarkMode from '../composables/userDarkMode.js';
const { isDarkMode } = useDarkMode();
const route=useRouter()
</script>

<style scoped>
.home-container {
  background-color: paleturquoise;
  width: 100%;
  height: 650px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.home-container.dark-mode {
  background-color: #333;
  color: white;
}

.btn-home {
  margin-left: 10px;
}

.toggle-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.toggle-btn:hover {
  background-color: #0056b3;
}

.home-container.dark-mode .toggle-btn {
  background-color: #555;
  color: #ddd;
}

.home-container.dark-mode .toggle-btn:hover {
  background-color: #333;
}
</style>