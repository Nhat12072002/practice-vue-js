<template>
    <div class="cart-container">
        <h1>Giỏ hàng</h1>
        <div>
            <ul v-for="item in cartItems" :key="item.id">
                <li>{{item.name}} : {{item.quantity}}</li>
                <button @click="removeItem(item.id)">Remove</button>
            </ul>
        </div>
        <p>Tổng số sản phẩm: {{ totalProduct }}</p> 
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props= defineProps({
    cartItems:{
        type: Array,
        required: true
    }
})
const totalProduct= computed(()=>{
    return props.cartItems.reduce((sum, item) => sum + item.quantity,0)
})
const emits= defineEmits(['removeItem'])
const removeItem=(productId)=>{
    emits('removeItem',productId)
}
</script>

<style scoped>

</style>