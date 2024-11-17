<template>
    <div class="list-container">
        <div class="number-container">
            <slot name="number"></slot>
            <div class="equal-container">
                <slot name="equal"></slot>
            </div>
        </div>
        <div class="operation-container">
            <slot name="operation"></slot>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style>
.list-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-left: 10px;
    gap: 10px;
    margin-top: 10px;
}
.number-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5px;
}
.operation-container{
    gap: 5px;
    display: flex;
    flex-direction: column;
}
.equal-container{
    grid-column: span 2;
}
</style>