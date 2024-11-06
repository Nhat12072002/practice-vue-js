<template>
    <div class="list-container">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.list-container{
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
</style>