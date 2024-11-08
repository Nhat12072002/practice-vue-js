<template>
    <div class="container">
        <h1>{{blogs.title}}</h1>
        <div>{{ blogs.description }}</div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const blogs=ref({})
onMounted(async()=>{
    const id= route.params.id
    const response=await axios.get(`http://localhost:3002/blog-list/${id}`)
    blogs.value= response.data
    console.log(id)
})
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
h1{
    color: red;
}
</style>