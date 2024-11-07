<template>
    <div class="container" :class="{'dark-mode':isDarkMode}">
      <div class="todo-container">
        <div class="header">
          <h1>To-do List</h1>
        </div>
        <div class="content">
          <div class="addTask">
            <input type="text" placeholder="Vui lòng nhập tên task" v-model="taskName" />
            <button @click="addTask">Add Task</button>
            <div class="dropdown">
              <button @click="confirmShowDropdown()" class="btn-dropdown">Filter</button>
              <DropdownComponent :showDropdown="showDropdown">
                <div class="dropdown-items">All</div>
                <div class="dropdown-items">Completed</div>
                <div class="dropdown-items">Incompleted</div>
              </DropdownComponent>
            </div>
          </div>
          <div class="list-task">
            <h2>List to-do</h2>
            <ul v-for="todo in todoList" :key="todo.id">
              <input
                type="checkbox"
                v-model="todo.checkProgress"
                @change="updateTask(todo, 'checkProgress')"
              />
              <li v-if="!todo.isEditing">{{ todo.taskName }}</li>
              <input
                v-else
                type="text"
                v-model="todo.taskName"
                @keyup.enter="updateTask(todo, 'taskName')"
              />
              <button class="btn-items" @click="deleteTask(todo.id)">Delete</button>
              <button class="btn-items" @click="toggleEditTask(todo)">
                {{ todo.isEditing ? 'Save' : 'Update' }}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import DropdownComponent from '@/components/Todo/DropdownComponent.vue';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import useDarkMode from '../composables/userDarkMode.js';
const { isDarkMode } = useDarkMode();
  const showDropdown = ref(false);
  const confirmShowDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  const todoList = ref([]);
  const taskName = ref("");
  const addTask = async () => {
    const AddTodo = {
      taskName: taskName.value,
      checkProgress: false
    };
    await axios.post('http://localhost:3002/todo-list', AddTodo);
    fetchTasks();
    taskName.value = "";
  };
  
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3002/todo-list');
    todoList.value = response.data.map((task) => ({ ...task, isEditing: false }));
  };
  
  onMounted(fetchTasks);
  
  const deleteTask = async (todoId) => {
    await axios.delete(`http://localhost:3002/todo-list/${todoId}`);
    fetchTasks();
  };
  
  const toggleEditTask = (todo) => {
    todo.isEditing = !todo.isEditing;
  };
  
  const updateTask = async (todo, field) => {
    const updatedData = {};
    if (field === 'taskName') {
      updatedData.checkProgress = todo.checkProgress;
      updatedData.taskName = todo.taskName;
    } else if (field === 'checkProgress') {
      updatedData.checkProgress = todo.checkProgress;
      updatedData.taskName = todo.taskName;

    }
  
    await axios.put(`http://localhost:3002/todo-list/${todo.id}`, updatedData);
    todo.isEditing = false;
    fetchTasks();
  };
  </script>
  <style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .todo-container {
    width: 50%;
    border: black solid 1px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    background-color: gray;
  }
  
  .content {
    background-color: white;
    padding: 50px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
  }
  
  .addTask {
    width: 100%;
  }
  
  input[type="text"] {
    height: 35px;
    margin-right: 10px;
    width: 85%;
  }
  
  .dropdown {
    width: 100%;
    margin-top: 10px;
  }
  
  .dropdown-items {
    border: black solid 1px;
    width: 100%;
    text-align: center;
    border-radius: 20px;
  }
  
  .dropdown-items:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }
  
  .btn-dropdown {
    border-radius: 10px;
    width: 20%;
  }
  
  .list-task {
    display: block;
    width: 100%;
  }
  
  ul li {
    list-style: none;
    width: 100%;
    justify-content: flex-start;
  }
  
  li {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  
  ul {
    display: flex;
  }
  
  .btn-items {
    margin-left: 5px;
    border-radius: 5px;
  }
  
  .container.dark-mode .todo-container {
    background-color: #333;
  }
  
  .container.dark-mode .content {
    background-color: white;
  }
  
  .container.dark-mode input[type="text"],
  .container.dark-mode .btn-items,
  .container.dark-mode .btn-dropdown {
    background-color: #555;
    color: white;
  }
  
  .container.dark-mode .dropdown-items {
    background-color: #444;
    border-color: #555;
  }
  
  .container.dark-mode .dropdown-items:hover {
    background-color: #666;
  }
  
  .container.dark-mode li span {
    color: white;
  }
  </style>