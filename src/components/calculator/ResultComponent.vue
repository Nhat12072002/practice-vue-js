<template>
    <div class="result-container">
        {{ valueDisplay }}
    </div>
</template>

<script setup>
const props= defineProps({
    valueDisplay: {
        type: String,
        required: true,
    }
})
</script>

<style>
.result-container{
    height: 50px;
    width: 280px;
    border: black solid 1px;
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    justify-content: end;
}
</style>

