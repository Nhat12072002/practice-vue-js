<template>
    <div class="container">
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
import ResultComponent from "@/components/calculator/ResultComponent.vue"
import ButtonComponent from "@/components/calculator/ButtonComponent.vue"
import ListButtonComponent from "@/components/calculator/ListButtonComponent.vue"
import { ref } from "vue"
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

<style>
.container{
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
.calculator-container{
    width: 300px;
    border: black solid 1px;
    padding: 20px;
    display: grid;
    align-items: center;
    justify-content: center;
}
h1{
    text-align: center;
}
</style>