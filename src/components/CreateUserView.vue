<template>
    <div class="container">
    <div class="form-container">
        <h1>Đăng ký thông tin nhân viên</h1>
        <form @submit.prevent="submit()">
            <div class="fullName">
                <label>Họ và tên:</label>
                <input type="text" v-model="fullName"/>
            </div>
            <div class="phoneNum">
                <label>Số điện thoại:</label>
                <input type="tel" v-model="phoneNum"/>
            </div>
            <div class="skill">
                <label>Kỹ năng:</label>
                <select>
                    <option value="php">PHP</option>
                    <option value="js">Javascript</option>
                    <option value="java">Java</option>
                    <option value="vue">VueJS</option>
                </select>
            </div>
            <div>
               <button class="submit">Đăng ký</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const fullName= ref("")
const phoneNum= ref("")
const submit= () =>{
    if(fullName.value!=""&& phoneNum.value!=""){
    alert('Đăng ký thành công')
    }
}
</script>

<style>
.container{
    display: grid;
    align-items: center;
    justify-content: center;
}
.form-container{
    border: black solid 1px;
    margin-top: 20px;
    padding: 30px;
}
form{
    margin-top: 20px;
}
.fullName,
.phoneNum,
.skill,
button{
    margin-top: 20px;
}
button,
input[type="text"],
input[type="tel"],
select{
    width: 200px;
    border-radius: 5px;
}
.submit,
input[type="text"],
input[type="tel"],
select{
    float: right;
}
</style>