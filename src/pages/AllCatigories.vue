<template>
    
        <h3>All Catigories</h3>
    <div class="divider"> </div>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center gap-1" >
            <div class="col-10 col-sm-5 col-lg-3 col-md-4 " v-for="cat in catigories" :key="cat.id">
                <div class="card d-flex">
                    <h3>{{cat.title}}</h3>
                    <router-link :to="`/catigories/${cat.id}`">
                    <img src="../assets/img.jpg" alt="" class="img">
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
section{
    width:100vw ;
    height:auto ;
}
.divider{
    width: 100%;
    height: 1px;
    background-color: rgba(197, 199, 201, 0.904);
}
.img{
    max-width:300px
}
.card{
    display: flex;
}
.card h3{
    text-align: left;
    font-size: 24px;
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