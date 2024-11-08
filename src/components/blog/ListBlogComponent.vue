<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
    width: 100%;
}
</style>