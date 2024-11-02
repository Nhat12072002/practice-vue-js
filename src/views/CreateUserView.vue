<template>
    <div class="container">
    <div class="form-container">
        <h1>Đăng ký thông tin nhân viên</h1>
        <form @submit.prevent="submit()" >
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
                <select v-model="skillSelected">
                    <option value="">Hãy chọn 1 skill</option>
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
    <DialogComponent
        :showDialog="showDialog"
        :title="title"
        :content="content"
        @cancel="cancel()"
        @submit="submitForm()"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';
import DialogComponent from '@/components/Form/DialogComponent.vue';
import { useRouter } from 'vue-router';
const showDialog=ref(false)
const title= ref('')
const content= ref('')
const cancel= () =>{
    showDialog.value= false
}
const submitForm= ()=>{
    if(fullNameSuccess.value=="Hợp lệ" &&  phoneNumSuccess.value=="Hợp lệ" && skillSelected.value!=""){
        router.push('/user')
    } else {
        showDialog.value= false
    }

}
const fullName= ref("")
const phoneNum= ref("")
const fullNameError= ref('')
const fullNameSuccess= ref('')
const phoneNumError= ref('')
const phoneNumSuccess= ref('')
const skillSelected= ref('')
const router= useRouter()
const submit= () =>{
    if(fullNameSuccess.value=="Hợp lệ" &&  phoneNumSuccess.value=="Hợp lệ" && skillSelected.value!=""){
        const userData={
            fullName: fullName.value,
            phoneNum: phoneNum.value,
            skill: skillSelected.value
        }
        axios.post('http://localhost:3000/list-user',userData)
       showDialog.value= true
       title.value="Thành công"
       content.value="Lưu thành công"
    } else {
    showDialog.value= true
       title.value="Thất bại"
       content.value="Lưu thất bại"
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
    }else{
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