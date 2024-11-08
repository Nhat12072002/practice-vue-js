<template>
    <div class="postview-container">
        <div class="list-nav">
            <ul>
                <li>All</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>PHP</li>
            </ul>
        </div>
        <div class="btn-create">
            <button>Create new blog</button>
        </div>
    </div>
    <div class="list-blog">
        <h2>Danh sách bài viết</h2>
        <p> Chia sẻ kiến thức</p>
        <div class="content">
            <ListBlogComponent>
                <template v-for="item in blog" :key="item.id">
                    <BlogContainerComponent 
                        :title="item.title" 
                        :description="item.description" 
                        @click="getBlogById(item.id)"
                    />
                </template>
            </ListBlogComponent>
        </div>
        <div class="footer">Follow me at @NhatChoTym</div>
    </div>
</template>

<script setup>
import BlogContainerComponent from '@/components/blog/BlogContainerComponent.vue';
import ListBlogComponent from '@/components/blog/ListBlogComponent.vue';
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const blog= ref([])
 onMounted( async() =>{
    const response= await axios.get('http://localhost:3002/blog-list')
    blog.value= response.data
    console.log(blog.value)

})
const getBlogById= (id) =>{
    router.push(`/blog/get/${id}`)
}
const deleteBlog=async (id) => {
 await axios.delete(`http://localhost:3002/blog-list/${id}`)
 blog.value = blog.value.filter(item => item.id !== id);
}
</script>

<style scoped>
.postview-container{
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 100px;
}
.list-nav ul li{
    display: inline;
    list-style: none;
    margin-left: 20px;
    border: black solid 1px;
    padding: 10px;
    background-color: aqua;
    cursor: pointer;
}
button{
    border-radius: 10px;
}
.list-blog{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
.footer{
    font-size: larger;
    font-weight: bold;
}
</style>