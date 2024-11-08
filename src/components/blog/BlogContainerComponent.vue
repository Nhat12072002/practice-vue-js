<template>
    <div class="blog-container">
        <h1>{{ title }}</h1>
        <div>{{ description }}</div>
    </div>
</template>

<script setup>
const props= defineProps({
    title: String,
    description: String
})
const emits= defineEmits(['close'])
const emitClicks = () =>{
    emits('close')
}
</script>

<style scoped>
.blog-container{
    border: black solid 1px;
    padding: 20px;
    width: 400px;
}
button{
    padding: 10px;
    float: inline-end;
    border-radius: 10px;
}
.blog-container:hover{
    border: black solid 1px;
    padding: 20px;
    width: 400px;
    background-color: paleturquoise;
    cursor: pointer;
}
</style>