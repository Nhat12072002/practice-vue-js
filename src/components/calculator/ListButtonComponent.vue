<template>
    <div class="list-container">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style>
.list-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-left: 10px;
}
</style>