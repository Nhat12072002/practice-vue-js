<template>
    <div class="addtocart-container">
        <ListProduct :listProduct="products" @addProductToCart="addProductToCart"></ListProduct>
        <Cart :cartItems="listProductCart" @removeItem="removeItemtoCart"/>
    </div>
</template>

<script setup>
import ListProduct from '../components/Product/ListProduct.vue'
import Cart from '../components/Product/Cart.vue'
import {ref} from 'vue'
const listProductCart = ref([]);
const products= [
    {id: 1, name: "Áo", price:"20.000 VND"},
    {id: 2, name: "Quần", price:"20.000 VND"},
    {id: 3, name: "Dép", price:"20.000 VND"},
]
const addProductToCart = (product) =>{
    const existingProduct= listProductCart.value.find((item) => item.id === product.id)
    if(existingProduct){
        existingProduct.quantity +=1
    } else {
        listProductCart.value.push({...product, quantity: 1})
    }}

const removeItemtoCart = (productId) =>{
    const productItem = listProductCart.value.find((product) => product.id === productId)
    if(productItem){
        if(productItem.quantity>1){
            productItem.quantity -=1
        } else {
            listProductCart.value=listProductCart.value.filter((product)=> product.id !== productId)
        }
    }
}
</script>

<style scoped>

</style>