<template>
    <div class="product-container" :class="{'dark-mode':isDarkMode}">
            <h1>DANH SÁCH SẢN PHẨM</h1>
        
        <button>Thêm sản phẩm mới</button>
        <div class="list-card">
            <div class="card" v-for="data in productData" :key="data.id">
            <div><img :src=data.image alt=""></div>
            <div><h1>{{ data.title }}</h1></div>
            <div><p>{{ data.price }}$</p></div>
        </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import useDarkMode from '../composables/userDarkMode.js';
const { isDarkMode } = useDarkMode();
const productData= ref([])
onMounted(async ()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    productData.value= response.data
})
</script>

<style scoped>
.product-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 20px;
}

.product-container.dark-mode {
    background-color: #2c2c2c;
    color: white;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;
}

button:hover {
    background-color: #0056b3;
}

.list-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    gap: 10px;
}

.card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.product-container.dark-mode .card {
    background-color: #444;
    border-color: #555;
}

img {
    width: 150px;
    height: 150px;
}

.product-container.dark-mode .card h1, .product-container.dark-mode .card p {
    color: white;
}
</style>