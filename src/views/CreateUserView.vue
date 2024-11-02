<template>
    <div class="container">
    <div class="form-container">
        <h1>Đăng ký thông tin nhân viên</h1>
        <form @submit.prevent="submit()">
            <div class="fullName">
                <label>Họ và tên:</label>
                <input type="text" v-model="fullName" @input="validateFullName()" />
                <p v-if="fullNameError" class="error">{{fullNameError}}</p>
                <p v-if="fullNameSuccess" class="success">{{ fullNameSuccess }}</p>
            </div>
            <div class="phoneNum">
                <label>Số điện thoại:</label>
                <input type="tel" v-model="phoneNum" @input="validatePhoneNum()"/>
                <p v-if="phoneNumError" class="error">{{phoneNumError}}</p>
                <p v-if="phoneNumSuccess" class="success">{{ phoneNumSuccess }}</p>
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
const fullNameError= ref('')
const fullNameSuccess= ref('')
const phoneNumError= ref('')
const phoneNumSuccess= ref('')
const submit= () =>{
    if(fullName.value!=""&& phoneNum.value!=""){
    alert('Đăng ký thành công')
    }
}
const validateFullName= ()=>{
    if(fullName.value == ""){
        fullNameError.value="Không được bỏ trống"
        fullNameSuccess.value=""
    }else if(fullName.value.length < 8){
        fullNameError.value="Bạn phải nhập tên đủ 8 ký tự"
        fullNameSuccess.value=""
    }else{
        fullNameError.value=""
        fullNameSuccess.value="Hợp lệ"
    }
}
const validatePhoneNum= ()=>{
    const numRegex= /[0-9]/
    if(phoneNum.value == ""){
        phoneNumError.value="Không được bỏ trống"
        phoneNumSuccess.value=""
    }else if(phoneNum.value.length>10){
        phoneNumError.value="Chỉ nhập 10 số"
        phoneNumSuccess.value=""
    }else if(!numRegex.test(phoneNum.value)){
         phoneNumError.value="Chỉ được nhập số"
        phoneNumSuccess.value=""
    }
    else{
        phoneNumError.value=""
        phoneNumSuccess.value="Hợp lệ"
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
.error{
    color: red;
}
.success{
    color: green;
}
</style>