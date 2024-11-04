<template>
    <div class="weather-container">
        <div class="search-city">
            <input type="text" placeholder="Hãy nhập tên một thành phố"/>
            <button>Search</button>
            <button @click="showDialogGuide()">Guide</button>
        </div>
        <DialogGuideComponent :showDialog="showDialog" :title="title" @close="closeDialog()" class="dialog-container">
            <template v-slot:content>
                <div>
                    <h2>Giới thiệu:</h2>
                    <p>
                        Tính năng "Thời tiết" cho phép bạn theo dõi thời tiết hiện tại và tương lai của các thành phố bạn chọn.
                    </p>
                
                    <h3>Cách thức hoạt động:</h3>
                    <ol>
                        <li>Tìm kiếm thành phố của bạn bằng cách nhập tên vào thanh tìm kiếm.</li>
                        <li>Chọn một thành phố trong kết quả, điều này sẽ đưa bạn đến thông tin thời tiết hiện tại của thành phố đó.</li>
                        <li>Theo dõi thành phố bằng cách nhấp vào biểu tượng "+" ở góc trên bên phải. Điều này sẽ lưu thành phố để bạn có thể xem lại sau trên trang chính.</li>
                    </ol>
                
                    <h3>Xóa một thành phố:</h3>
                    <p>
                        Nếu bạn không còn muốn theo dõi một thành phố, chỉ cần chọn thành phố đó trong trang chính. Ở dưới cùng của trang sẽ có tùy chọn xóa thành phố.
                    </p>
                </div>
            </template>
        </DialogGuideComponent>
        <div class="list-city-container"></div>
    </div>
</template>

<script setup>
import DialogGuideComponent from '@/components/Weather/DialogGuideComponent.vue';
import { ref } from 'vue';
const title= ref("")
const showDialog= ref(false)
const showDialogGuide= () =>{
    if(showDialog.value==false){
    showDialog.value= true
    title.value="Hướng dẫn sử dụng Weather Forecast"
    } else {
        showDialog.value=false
    }
}
const closeDialog=()=>{
    showDialog.value=false
}
</script>

<style scoped>
.weather-container {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.search-city{
    width:90%;
    height: 100px;
    display: flex;
    gap: 15px;
}
input[type="text"]{
    width: 90%;
    height: 40%;
    border-radius: 10px;

}
button{
    height: 44%;
    border-radius: 10px;
}
.dialog-container{
    position: fixed;
    border: black solid 1px;
    z-index: 1;
    border-radius: 20px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 5);
    animation: fadeIn 0.3s ease;
    background-color: white;
}
.list-city-container{
    z-index: 0;
}
</style>