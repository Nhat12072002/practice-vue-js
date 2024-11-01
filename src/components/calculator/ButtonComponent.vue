<template>
    <div>
        <button @click="func()" class="button-calc">   {{ label }} </button>
    </div>
</template>

<script setup>
const props= defineProps({
    label: {
        type: String,
        required: true,
    }
})
const emits = defineEmits(['input'])
const func= () =>{
    emits('input')
}
</script>

<style>
.button-calc{
    width: 50px;
}
.button-calc:hover{
    width: 50px;
}
</style>