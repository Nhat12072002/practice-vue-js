<template>
    <div class="listproduct-container">
        <div class="listproduct" v-for="product in listProduct" :key="product.id">
            <ProductItem :product="product">
                <button @click="addToCart(product)">Add to Cart</button>
            </ProductItem>
        </div>
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';

const props = defineProps({
    listProduct: {
        type: Array,
        required: true
    }
})

// khai bao tin hieu
const emit = defineEmits(['addProductToCart'])

const addToCart = (product) => {
    emit('addProductToCart', product)
    alert('Add to cart thanh cong')
}
</script>

<style lang="scss" scoped>

</style>