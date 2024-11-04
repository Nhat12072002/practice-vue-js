<template>
    <div class="dialog-component" v-if="showDialog">
        <h1>{{ title }}</h1>
        <hr/>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="closeDialog">
            <button @click="emitClick()">Close</button>
        </div>
    </div>
</template>

<script setup>
const props= defineProps({
    title: String,
    showDialog:Boolean
})
const emit= defineEmits(['close'])
const emitClick= () => {
    emit('close')
}
</script>

<style scoped>
.dialog-container{
    border: black solid 1px;
}
h1{
    text-align: center;
}
button{
    float: right;
    border-radius: 10px;
}
</style>