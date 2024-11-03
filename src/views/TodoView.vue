<template>
    <div class="container">
    <div class="todo-container">
        <div class="header">
            <h1>To-do List</h1>
        </div>
        <div class="content">
        
        <div class="addTask">
            <input type="text" placeholder="Vui lòng nhập tên task"/>
            <button>Add Task</button>
            <div class="dropdown">
                <button @click="confirmShowDropdown" class="btn-dropdown">Filter</button>
                <DropdownComponent :showDropdown="showDropdown">
                    <div class="dropdown-items">All</div>
                    <div class="dropdown-items">Completed</div>
                    <div class="dropdown-items">Incompleted</div>
                </DropdownComponent>
            </div>
        </div>
        <div class="list-task">

        </div>
    </div>
    </div>
</div>
</template>

<script setup>
import DropdownComponent from '@/components/Todo/DropdownComponent.vue';
import { ref } from 'vue';

const showDropdown= ref(false)
const confirmShowDropdown= ()=>{
    if(showDropdown.value == false){
    showDropdown.value=true
    } else {
        showDropdown.value= false
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.todo-container{
    width: 50%;
    border: black solid 1px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    background-color: gray;
}
.content{
    background-color: white;
    padding: 50px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
}
.addTask{
    width: 100%;
    height: 100%x;
}
input[type="text"] {
    height: 35px;
    margin-right: 10px;
    width: 85%;
}
.dropdown{
    width: 100%;
    margin-top: 10px;
}
.dropdown-items{
    border: black solid 1px;
    width: 100%;
    text-align: center;
    border-radius: 20px;
}
.dropdown-items:hover{
    border: black solid 1px;
    width: 100%;
    text-align: center;
    background-color: rgb(0,0,0,0.5);
}
.btn-dropdown{
    border-radius: 10px;
    width: 20%;
}
</style>