<template>
    <div class="user-container">
        <h1>Quản lý nhân viên</h1>
        <div>
            <button @click="createForm()">Create New User</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router= useRouter()
const createForm = () => {
    router.push('/user/createUser')
}
</script>

<style>
button{
    width: auto;
    height: 40px;
    background-color: antiquewhite;
    cursor: pointer;
}
button:hover{
    width: auto;
    height: 40px;
    background-color: aqua;
    cursor: pointer;
}
</style>