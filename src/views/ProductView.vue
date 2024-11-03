<template>
    <div class="product-container">
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
const productData= ref([])
onMounted(async ()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    productData.value= response.data
})
</script>

<style scoped>
.product-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.list-card{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 20px;
    gap: 10px
}
.card{
    border: black solid 1px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 150px;
    height: 150px;
}
</style>