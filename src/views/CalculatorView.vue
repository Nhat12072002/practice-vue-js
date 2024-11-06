<template>
    <div class="container" :class="{ 'dark-mode': isDarkMode }">
    <div class="calculator-container">
        <h1>Máy tính bỏ túi</h1>
        <div class="result">
            <ResultComponent :valueDisplay="valueDisplay"/>
        </div>
        <ListButtonComponent>
            <ButtonComponent label="1" @click="input(1)" ></ButtonComponent>
            <ButtonComponent label="2" @click="input(2)"></ButtonComponent>
            <ButtonComponent label="3" @click="input(3)"></ButtonComponent>
            <ButtonComponent label="4" @click="input(4)"></ButtonComponent>
            <ButtonComponent label="5" @click="input(5)"></ButtonComponent>
            <ButtonComponent label="6" @click="input(6)"></ButtonComponent>
            <ButtonComponent label="7" @click="input(7)"></ButtonComponent>
            <ButtonComponent label="8" @click="input(8)"></ButtonComponent>
            <ButtonComponent label="9" @click="input(9)"></ButtonComponent>
            <ButtonComponent label="+" @click="input('+')"></ButtonComponent>
            <ButtonComponent label="-" @click="input('-')"></ButtonComponent>
            <ButtonComponent label="*" @click="input('*')"></ButtonComponent>
            <ButtonComponent label="/" @click="input('/')"></ButtonComponent>
            <ButtonComponent label="=" @click="equals()"></ButtonComponent>
            <ButtonComponent label="X" @click="clearAll()"></ButtonComponent>
        </ListButtonComponent>
    </div>
</div>
</template>

<script setup>
import useDarkMode from '../composables/userDarkMode.js';
import ResultComponent from "@/components/calculator/ResultComponent.vue"
import ButtonComponent from "@/components/calculator/ButtonComponent.vue"
import ListButtonComponent from "@/components/calculator/ListButtonComponent.vue"
import { ref } from "vue"
const { isDarkMode } = useDarkMode();
const valueDisplay= ref('')
const input = (value)=>{
    valueDisplay.value+=value
}
const equals= ()=>{
    valueDisplay.value= eval(valueDisplay.value).toString()
}
const clearAll= () => {
    valueDisplay.value= ""
}
</script>

<style scoped>
.container {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.calculator-container {
    width: 300px;
    border: 1px solid black;
    padding: 20px;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    border-radius: 10px;
    transition: background-color 0.3s, color 0.3s;
}
.dark-mode .container{
    background-color: #2d2d2d; 
    padding: 50px;
}
.dark-mode .calculator-container {
    background-color: #2d2d2d; 
    color: white; 
    border-color: #444; 
}

h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    transition: color 0.3s;
}

.dark-mode h1 {
    color: #e0e0e0;
}

button {
    padding: 10px;
    margin: 5px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

button:hover {
    background-color: #d0d0d0;
}

.dark-mode button {
    background-color: #444; 
    color: white; 
    border-color: #666; 
}

.dark-mode button:hover {
    background-color: #555; 
}

</style>