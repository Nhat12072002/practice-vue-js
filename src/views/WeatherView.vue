<template>
    <div class="weather-container" :class="{ 'dark-mode': isDarkMode }">
      <div class="search-city">
        <input
          type="text"
          placeholder="Hãy nhập tên một thành phố"
          v-model="key"
          @input="getSearchResults"
        />
        <div class="key-search" v-if="searchResultsByAPI.length">
          <div
            v-for="(result, index) in searchResultsByAPI"
            :key="index"
            @click="selectResult(result)"
            class="result-item"
          >
            {{ result.city }}, {{ result.prov }}, {{ result.countryname }}
          </div>
        </div>
        <button @click="searchCity">Search</button>
        <button @click="showDialogGuide">Guide</button>
      </div>
      <DialogGuideComponent
        :showDialog="showDialog"
        :title="title"
        @close="closeDialog()"
        class="dialog-container"
      >
        <template v-slot:content>
          <!-- Nội dung hướng dẫn -->
        </template>
      </DialogGuideComponent>
      <ListCityComponent class="list-city-container">
        <CardCityComponent v-for="i in 10" :key="i" />
      </ListCityComponent>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useDarkMode from '../composables/userDarkMode.js';
  import CardCityComponent from '@/components/Weather/CardCityComponent.vue';
  import DialogGuideComponent from '@/components/Weather/DialogGuideComponent.vue';
  import ListCityComponent from '@/components/Weather/ListCityComponent.vue';
  import axios from 'axios';
  
  const { isDarkMode } = useDarkMode();
  const title = ref("");
  const key = ref("");
  const api_key = "99482279187979344176x40111";
  const showDialog = ref(false);
  const searchResultsByAPI = ref([]);
  
  // Các hàm xử lý logic tìm kiếm, hiển thị dialog
  const getSearchResults = async () => {
    if (key.value.trim() === '') {
      searchResultsByAPI.value = [];
      return;
    }
    
    try {
      const response = await axios.get(`https://api.example.com/search?query=${key.value}&api_key=${api_key}`);
      searchResultsByAPI.value = response.data.results || [];
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  
  const searchCity = () => {
    // Logic tìm kiếm theo từ khóa và hiển thị kết quả
  };
  
  const showDialogGuide = () => {
    title.value = "Hướng dẫn";
    showDialog.value = true;
  };
  
  const closeDialog = () => {
    showDialog.value = false;
  };
  
  const selectResult = (result) => {
    key.value = result.city;
    searchResultsByAPI.value = [];
  };
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
    background-color: white;
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 20px;
  }
  
  .dark-mode .weather-container {
    background-color: #1e1e1e;
    color: #e0e0e0;
    width: 100%;
    height: 100%;
  }
  
  .search-city {
    width: 90%;
    height: 100px;
    display: flex;
    gap: 15px;
  }
  
  input[type="text"] {
    width: 90%;
    height: 40%;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    height: 44%;
    border-radius: 10px;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .dark-mode button {
    background-color: #444;
    color: #e0e0e0;
  }
  
  .key-search {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px;
    width: 90%;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .dark-mode .key-search {
    background-color: #2c2c2c;
    border-color: #555;
  }
  
  .result-item {
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .result-item:hover {
    background-color: #e0e0e0;
  }
  
  .dark-mode .result-item:hover {
    background-color: #555;
  }
  
  .dialog-container {
    position: fixed;
    border: 1px solid black;
    z-index: 1;
    border-radius: 20px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    background-color: white;
    color: black;
  }
  
  .dark-mode .dialog-container {
    background-color: #333;
    color: #e0e0e0;
  }
  </style>
  