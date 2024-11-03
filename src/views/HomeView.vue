<template>
    <div class="home-container">
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

const route=useRouter()
</script>

<style scoped>
.home-container{
    background-color: paleturquoise;
    width: 100%;
    height: 650px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
}

.btn-home{
    margin-left: 10px;
}
</style>