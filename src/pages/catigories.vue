<template>
<div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-top">
        <div class=" col-md-3 col-lg-3 col-xl-4 hide">
           <div class="sidebar">
            <ul class="sidelist">
                <li v-for="cat in catigories" :key="cat.id">
                    <span data-v-3b91b666="" class="mdi mdi-view-dashboard-outline mdi-18px"></span> 
                    <router-link :to="`/catigories/${cat.id}`">{{ cat.title }}</router-link>
                </li>
                
            </ul>
           </div>

        </div>
        <div class="col-11 col-md-8 col-sm-12 col-lg-8">
            <div class="row " gaps="2" d-flex justify-content-center align-items-center>
        <div class="col-12"><img src="../assets/img.jpg" alt="">
        </div>
        <div class="col-6 col-md-3 col-lg-3"><img src="../assets/img.jpg" alt=""></div>
        <div class="col-6 col-md-3 col-lg-3"><img src="../assets/img.jpg" alt=""></div>
        <div class="col-6 col-md-3 col-lg-3"><img src="../assets/img.jpg" alt=""></div>
        <div class="col-6 col-md-3 col-lg-3"><img src="../assets/img.jpg" alt=""></div>
    </div>

        </div>
        
        <div class="col-6 two"><img src="../assets/img.jpg" alt=""></div>
        <div class="col-6 two"><img src="../assets/img.jpg" alt=""></div>
    </div>
    
    
</div>
</template>
<script >
import { useMyStore } from '../store';
export default{
    computed:{
       catigories(){
    const store=useMyStore()
    return store.categories
}
    }
  
}
</script>
<style scoped>
ul{
    padding-left: 0;
}
img{
    width: 100%;
    height: 100%;
}
.col-12{
    height: 300px;
    margin-bottom: 1rem;
}
.col-6{
    margin-bottom: 1rem;
  
}
.two{
    height: 200px;
}

.col-6{
    margin-top: 10px;
}
.browser{
    display: flex;
    justify-content: space-between;
}
.sidebar{
    height: 100%;
    width: auto;
    max-width: 400px;
}
.sidelist{
    list-style: none;
    text-align: left;
}
.sidelist li{
    border: .1px solid rgba(128, 128, 128, 0.295);
    padding: .5rem 2rem;
    width: 100%;
    white-space: nowrap;
}
.sidelist li:hover {
    border-left: 1px solid  rgb(255, 196, 0);
    color:  rgb(255, 196, 0);
}
.sidelist li:hover a{

    color:  rgb(255, 196, 0);
}
.sidelist li span{
    margin-right: 1rem;
}
@media screen and (max-width:769px ){
    .hide{
        display: none;
    }
   
    .col-6{
    height: 100px;
}
.col-12{
    height: 200px;
    width: 100vw;
}

}
.sidebar{
    width: auto;
}
</style>