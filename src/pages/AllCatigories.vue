<template>
    
        <div class="title"><h3>All Catigories</h3></div>
    <div class="divider"> </div>
    <div class="container-fluid">
        <div class="row " >
            <div class=" col-lg-4 col-md-6 " v-for="cat in catigories" :key="cat.id">
                <div class="card d-flex">
                    <h3>{{cat.title}}</h3>
                    <router-link :to="`/catigories/${cat.id}`">
                    <img src="../assets/default-image-970x400.png" alt="" class="img">
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { useMyStore } from '../store';
import {computed} from 'vue'
const catigories=computed(()=>{
    const store=useMyStore()
    const catigories=store.categories
    return catigories
})


</script>
<style scoped>
.title{
    width: 100%;
    text-align: left;
    padding: 1rem;
}
section{
    width:100vw ;
    height:auto ;
}
.divider{
    margin: 1rem;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    background-color: rgba(197, 199, 201, 0.904);
}
.img{
    max-width:300px
}
.card{
    display: flex;
    padding-left: 10px;
    padding-right: 1rem;
}
.card h3{
    text-align: left;
    font-size: 18px;
    color: gray;
    font-weight: 600;
}
.card a{
    text-align: right;
    display: flex;
    justify-content: right;
}
.card a img{
width :70%
}

</style>