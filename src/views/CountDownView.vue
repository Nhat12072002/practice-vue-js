<template>
    <div class="animation" v-if="isCounted">
        <h1 style=" text-align: center; margin-top: 50px;">Chào mừng bạn!</h1>
        <marquee>Happy New Year!!!</marquee>
    </div>
    <div class="container" v-else="isCounted">
        <div class="countdown-container">
            <h1>Đếm ngược thời gian</h1>
        <div class="select-time" v-if="isCounting == false">
            <div class="time">
                <label>Giờ</label>
                <input type="number" v-model.number="hours" min="0" max="23"/>
            </div>
            <div class="time">
                <label>Phút</label>
                <input type="number" v-model.number="minutes" min="0" max="59"/>
            </div>
            <div class="time">
                <label>Giây</label>
                <input type="number" v-model.number="seconds" min="0" max="59"/>
            </div>
        </div>
        <div class="display-time" v-if="isCounting == true">
            <span>{{ displayHours }} : </span>
            <span> {{ displayMinutes }} : </span>
            <span> {{ displaySeconds }}</span>
        </div>
        <div class="start-button">
            <button @click="showDialogNotice()">Bắt đầu</button>
        </div>
        <Dialog
        :showDialog="showDialog"
        :title="title"
        :message="message"
        @ok="startTimer()"
        @cancel="cancelDialog()"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Dialog from '@/components/Countdown/Dialog.vue';
const hours= ref(0)
const minutes= ref(0)
const seconds= ref(0)
const displayHours= ref(0)
const displayMinutes= ref(0)
const displaySeconds= ref(0)

const isCounted= ref(false)
const isCounting=ref(false)
let countdownInterval= null
const showDialog= ref(false)
const title= ref('')
const message= ref('')
const cancelDialog= () => {
    showDialog.value=false
}
const showDialogNotice= () => {
    showDialog.value=true
    title.value= "Thông báo đếm ngược"
    message.value= "Bạn đang sử dụng bộ đếm ngược thời gian"
    isCounted.value = false;

}
const startTimer= () => {
    showDialog.value=false
    if(countdownInterval){
        clearInterval(countdownInterval)
    }
    isCounted.value = false;
    hours.value= Math.min(Math.max(0,hours.value),23)
    minutes.value= Math.min(Math.max(0, minutes.value),59)
    seconds.value= Math.min(Math.max(0,seconds.value),59)

    let totalTime= hours.value*3600 + minutes.value*60 + seconds.value
    if(totalTime <= 0) return
    isCounting.value=true
    updateDisplay(totalTime)
    
    countdownInterval = setInterval(()=>{
        totalTime -= 1
        updateDisplay(totalTime)
        if(totalTime <=0 ){
            clearInterval(countdownInterval)
            isCounting.value=false
            isCounted.value=true
            hours.value=0
            minutes.value=0
            seconds.value=0
        }},1000)
}
const updateDisplay= (totalTime) => {
    displayHours.value= Math.floor(totalTime / 3600)
    displayMinutes.value=Math.floor((totalTime % 3600) / 60)
    displaySeconds.value= totalTime % 60
}

onMounted(()=>{
    clearInterval(countdownInterval)
})
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.countdown-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 500px;
    border: black solid 1px;
    margin-top: 20px;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
}
.select-time{
    display: flex;
    gap: 10px;
    }
.time{
    display: flex;
    gap: 5px;
}
button{
    margin-top: 40px;
    width: 200px;
    border-radius: 20px;
}
button:hover{
    width: 200px;
    border-radius: 20px;

}
.animation{
    margin-top: 30px;
}
</style>