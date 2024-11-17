<template>
    <div class="container-form" v-if="showDialog">
    <div class="dialog-container">
        <h1>{{ title }}</h1>
        <div>{{ message }}</div>
        <div class="btn-dialog">
            <button @click="cancel()">Cancel</button>
            <button @click="submit()">OK</button>
        </div>
    </div>
</div>
</template>

<script setup>
const props= defineProps({
    showDialog: Boolean,
    title: String,
    message: String,
})
const emits= defineEmits(['cancel','ok'])
const cancel= ()=>{
    emits('cancel')
}
const submit= ()=>{
    emits('ok')
}
</script>

<style scoped>
.container-form{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0,0,0,0.5);
    display: grid;
    align-items: center;
    justify-content: center;
}
.dialog-container{
    border: black solid 1px;
    background-color: white;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: 200px;
    width: 400px;
    padding: 20px;
}
.btn-dialog{
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
button{
    border-radius: 10px;
}

</style>