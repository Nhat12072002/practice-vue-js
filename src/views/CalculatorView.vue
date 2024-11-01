<template>
    <div class="container">
    <div class="calculator-container">
        <h1>Máy tính bỏ túi</h1>
        <div class="result">
            <ResultComponent/>
        </div>
        <ListButtonComponent>
            <ButtonComponent label="1"></ButtonComponent>
            <ButtonComponent label="2"></ButtonComponent>
            <ButtonComponent label="3"></ButtonComponent>
            <ButtonComponent label="4"></ButtonComponent>
            <ButtonComponent label="5"></ButtonComponent>
            <ButtonComponent label="6"></ButtonComponent>
            <ButtonComponent label="7"></ButtonComponent>
            <ButtonComponent label="8"></ButtonComponent>
            <ButtonComponent label="9"></ButtonComponent>
            <ButtonComponent label="+"></ButtonComponent>
            <ButtonComponent label="-"></ButtonComponent>
            <ButtonComponent label="*"></ButtonComponent>
            <ButtonComponent label="/"></ButtonComponent>
            <ButtonComponent label="="></ButtonComponent>
        </ListButtonComponent>
    </div>
</div>
</template>

<script setup>
import ResultComponent from "@/components/calculator/ResultComponent.vue"
import ButtonComponent from "@/components/calculator/ButtonComponent.vue"
import ListButtonComponent from "@/components/calculator/ListButtonComponent.vue"

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