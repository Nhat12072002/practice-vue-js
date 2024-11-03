<template>
    <div class="container" v-if="showDropdown">
        <slot></slot>
    </div>
</template>

<script setup>
    const props= defineProps({
        showDropdown:{
            type: Boolean
        }
    })
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: 2px;
}
</style>