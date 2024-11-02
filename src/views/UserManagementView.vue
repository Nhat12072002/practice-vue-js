<template>
    <div class="user-container">
        <h1>Quản lý nhân viên</h1>
        <div>
            <button @click="createForm()">Create New User</button>
        </div>
        <h1>Danh sách tài khoản người dùng</h1>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Kỹ năng đã chọn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.fullName }}</td>
                        <td>{{ user.phoneNum }}</td>
                        <td>{{ skillOption[user.skill] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"
const router= useRouter()
const createForm = () => {
    router.push('/user/createUser')
}
const skillOption= {
    php: "PHP",
    js: "Javascript",
    java: "Java",
    vuejs: "VueJS"
}
const users= ref([])
axios.get('http://localhost:3000/list-user').then(response =>{
    users.value= response.data
})
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
.table{
    display: flex;
    justify-content: center;
    align-items: center;
}
table{
    width: 50%;
    border-collapse: collapse;
    margin-top: 20px;
}
th, td{
    border: black solid 1px;
}
th {
    background-color: rgb(226, 222, 222);
    height: 40px;
}
td{
    text-align: center;
    height: 30px;

}
tr:hover{
    background-color: rgb(192, 201, 201);
}
</style>