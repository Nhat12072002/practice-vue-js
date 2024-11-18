<template>
    <div class="productitem-container">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.price }}</p>
        <slot></slot>
    </div>
</template>

<script setup>

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>